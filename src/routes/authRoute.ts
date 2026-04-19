import { Elysia } from "elysia";
import { AuthService } from "../modules/auth/auth";

const authService = new AuthService();

export const authRoute = new Elysia().group("/api", (app) =>
  app
    .post("/signup", authService.signUp)
    .post("/login", authService.login)
);
