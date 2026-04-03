import { baseUrlAuth, baseUrlUser } from "../../config/axios";

export class UserService {
  async getAllUsers() {
    try {
      const response = await baseUrlUser.get("/user");
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  async deleteUser({ params: { id } }: any) {
    try {
      const user = await baseUrlUser.delete(`/user/${id}`);
      const auth = await baseUrlAuth.delete(`/auth/${id}`);
      return {
        message: "User deleted",
        user: user.data,
        auth: auth.data,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
};