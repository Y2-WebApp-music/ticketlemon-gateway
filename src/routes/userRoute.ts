import { Elysia } from "elysia";
import { AuthService } from "../modules/auth/auth";
import { UserService } from "../modules/user/user";

const authService = new AuthService();
const userService = new UserService();

export const userRoute = new Elysia().group("/api", (app) =>
  app
    .get("/users", userService.getAllUsers)

    .post("/signup", authService.signUp)

    .post("/login", authService.login)

    .delete("/:id", userService.deleteUser) // id in User table
);
