import { baseUrlUser, baseUrlAuth } from "../../config/axios";

export class AuthService {
  async signUp({ body }: any) {
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
      console.error(error);
      return error;
    }
  };

  async login({ body }: any) {
    try {
      const auth = await baseUrlAuth.post("/auth/login", body);
      return auth.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
};