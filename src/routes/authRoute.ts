import { Elysia } from "elysia";
import { AuthService } from "../modules/auth/auth";
import {
  LoginRequestSchema,
  SignUpRequestSchema,
} from "../modules/auth/auth.model";

const authService = new AuthService();

export const authRoute = new Elysia().group("/api", (app) =>
  app
    .post("/signup", authService.signUp, {
      body: SignUpRequestSchema,
    })
    .post("/login", authService.login, {
      body: LoginRequestSchema,
    })
    .post("/logout", authService.logout)
);
