import { baseUrlAuth, baseUrlUser } from "../../config/axios";
import { handleError } from "../../config/error";

export class UserService {
  async getAllUsers({ status }: any) {
    try {
      const response = await baseUrlUser.get("/user");
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  };

  async getUserById({ params: { id }, status }: any) {
    try {
      const response = await baseUrlUser.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  };

  async updateUser({ params: { id }, body, status }: any) {
    try {
      const response = await baseUrlUser.put(`/user/${id}`, body);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  };

  async deleteUser({ params: { id }, status }: any) {
    try {
      const user = await baseUrlUser.delete(`/user/${id}`);
      const auth = await baseUrlAuth.delete(`/auth/${id}`);
      return {
        message: "User deleted",
        user: user.data,
        auth: auth.data,
      };
    } catch (error) {
      return handleError(error, status);
    }
  }
};