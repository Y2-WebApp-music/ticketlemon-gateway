import { Elysia } from "elysia";
import { UserService } from "../modules/user/user";
import {
  UserIdParamSchema,
  UserUpdateSchema,
} from "../modules/user/user.model";

const userService = new UserService();

export const userRoute = new Elysia().group("/api", (app) =>
  app
    .get("/user", userService.getAllUsers)
    .get("/user/:id", userService.getUserById, {
      params: UserIdParamSchema,
    })
    .patch("/user/:id", userService.updateUser, {
      params: UserIdParamSchema,
      body: UserUpdateSchema,
    })
    .delete("/user/:id", userService.deleteUser, {
      params: UserIdParamSchema,
    }) // id in User table
);
