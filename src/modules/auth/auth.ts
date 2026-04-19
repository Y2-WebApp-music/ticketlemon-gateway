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
  };

  async login({ body, status }: any) {
    try {
      const auth = await baseUrlAuth.post("/auth/login", body);
      return auth.data;
    } catch (error) {
      return handleError(error, status);
    }
  };
};