import { baseUrlUser, baseUrlAuth } from "../../config/axios";
import { handleError } from "../../config/error";
import { createFormData } from "../../utils/formData";

export class AuthService {
  async signUp({ body, status }: any) {
    try {
      const data = createFormData(body);
      const user = await baseUrlUser.post("/user", data);
      const auth = await baseUrlAuth.post("/auth/signup", {
        user_id: user?.data?.id,
        email: body.email,
        password: body.password,
      });

      return {
        user: user.data,
        auth: auth.data,
      };
    } catch (error) {
      return handleError(error, status);
    }
  }

  async login({ body, status }: any) {
    try {
      const auth = await baseUrlAuth.post("/auth/login", body);
      const token = auth?.data?.token;
      const authUser = auth?.data?.user;
      const userId = authUser?.user_id;
      const email = authUser?.email ?? body?.email ?? "";

      let role = "customer";
      let firstName = "";
      let lastName = "";

      if (userId) {
        try {
          const user = await baseUrlUser.get(`/user/${userId}`);
          const userData = user?.data;
          const userRole = userData?.role;
          firstName = userData?.first_name ?? "";
          lastName = userData?.last_name ?? "";
          if (userRole === "organizer") {
            role = "organizer";
          } else if (userRole === "staff" || userRole === "admin") {
            role = userRole;
          }
        } catch {
          // keep default role when user-service lookup fails
        }
      }

      return {
        access_token: token,
        role,
        user_id: userId ?? "",
        email,
        first_name: firstName,
        last_name: lastName,
      };
    } catch (error) {
      return handleError(error, status);
    }
  }

  async logout({ status }: any) {
    try {
      const response = await baseUrlAuth.post("/auth/logout");
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }
}
