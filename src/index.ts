import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "./config/config";
import { userRoute } from "./routes/userRoute";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .use(userRoute)
  .listen(config.port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
