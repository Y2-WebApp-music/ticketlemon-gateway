import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { config } from "./config/config";
import { userRoute } from "./routes/userRoute";
import { authRoute } from "./routes/authRoute";
import { eventRoute } from "./routes/eventRoute";
import { ticketRoute } from "./routes/ticketRoute";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .use(authRoute)
  .use(userRoute)
  .use(eventRoute)
  .use(ticketRoute)
  .listen(config.port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
