import { Elysia } from "elysia";
import { EventService } from "../modules/event/event";
import {
  EventCreateByIdParamSchema,
  EventIdParamSchema,
  EventSchema,
  EventSearchQuerySchema,
  EventUpdateSchema,
  StaffSignInSchema,
} from "../modules/event/event.model";

const eventService = new EventService();

export const eventRoute = new Elysia().group("/api", (app) =>
  app
    .get("/event", eventService.getAllEvents)
    .get("/event/create-by/:create_by_id", eventService.getEventsByCreateById, {
      params: EventCreateByIdParamSchema,
    })
    .get("/event/:id", eventService.getEventById, {
      params: EventIdParamSchema,
    })
    .post("/event", eventService.createEvent, {
      body: EventSchema,
    })
    .patch("/event/:id", eventService.updateEvent, {
      params: EventIdParamSchema,
      body: EventUpdateSchema,
    })
    .delete("/event/:id", eventService.deleteEvent, {
      params: EventIdParamSchema,
    })
    .patch("/event/:id/generate-staff-code", eventService.generateStaffCode, {
      params: EventIdParamSchema,
    })
    .post("/event/staff-signin", eventService.staffSignIn, {
      body: StaffSignInSchema,
    })
    .get("/event/search", eventService.searchEvents, {
      query: EventSearchQuerySchema,
    }),
);
