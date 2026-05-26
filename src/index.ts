import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { config } from "./config/config";
import { userRoute } from "./routes/userRoute";
import { authRoute } from "./routes/authRoute";
import { eventRoute } from "./routes/eventRoute";
import { ticketRoute } from "./routes/ticketRoute";

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      path: "/swagger",
      documentation: {
        info: {
          title: "TicketLemon Gateway API",
          version: "1.0.0",
        },
      },
    }),
  )
  .get("/", () => "Hello Elysia")
  .use(authRoute)
  .use(userRoute)
  .use(eventRoute)
  .use(ticketRoute)
  .listen({
    port: config.port,
    hostname: "0.0.0.0",
  });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
