import { Elysia } from "elysia";
import { EventService } from "../modules/event/event";

const eventService = new EventService();

export const eventRoute = new Elysia().group("/api", (app) =>
  app
    .get("/event", eventService.getAllEvents)
    .get("/event/:id", eventService.getEventById)
    .post("/event", eventService.createEvent)
    .patch("/event/:id", eventService.updateEvent)
    .delete("/event/:id", eventService.deleteEvent)
);
