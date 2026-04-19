import { Elysia } from "elysia";
import { UserService } from "../modules/user/user";

const userService = new UserService();

export const userRoute = new Elysia().group("/api", (app) =>
  app
    .get("/user", userService.getAllUsers)
    .get("/user/:id", userService.getUserById)
    .put("/user/:id", userService.updateUser)
    .delete("/user/:id", userService.deleteUser) // id in User table
);
