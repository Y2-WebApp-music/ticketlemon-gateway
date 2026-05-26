import { baseUrlUser, baseUrlAuth } from "../../config/axios";
import { handleError } from "../../config/error";

export class AuthService {
  async signUp({ body, status }: any) {
    try {
      const user = await baseUrlUser.post("/user", body);
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

      let role = "customer";

      if (userId) {
        try {
          const user = await baseUrlUser.get(`/user/${userId}`);
          const userRole = user?.data?.role;
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
      };
    } catch (error) {
      return handleError(error, status);
    }
  }
}
