import { Elysia } from "elysia";
import { EventService } from "../modules/event/event";
import {
  EventByUserParamSchema,
  EventByUserQuerySchema,
  EventIdParamSchema,
  EventSchema,
  EventSearchQuerySchema,
  EventSellingQuerySchema,
  EventCheckInQuerySchema,
  EventUpdateSchema,
  StaffSignInSchema,
} from "../modules/event/event.model";

const eventService = new EventService();

export const eventRoute = new Elysia().group("/api", (app) =>
  app
    .get("/event", eventService.getAllEvents)
    .get("/event/create-by/:user_id", eventService.getEventsByUserId, {
      params: EventByUserParamSchema,
      query: EventByUserQuerySchema,
    })
    .get("/event/:id", eventService.getEventById, {
      params: EventIdParamSchema,
    })
    .get("/event/:id/selling", eventService.getEventSelling, {
      params: EventIdParamSchema,
      query: EventSellingQuerySchema,
    })
    .get("/event/:id/check-in", eventService.getEventCheckIn, {
      params: EventIdParamSchema,
      query: EventCheckInQuerySchema,
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
    })
    .get("/event/:id/count-ticket", eventService.countSoldTickets, {
      params: EventIdParamSchema,
    }),
);
