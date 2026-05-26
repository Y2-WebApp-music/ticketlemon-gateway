import { Elysia } from "elysia";
import { TicketService } from "../modules/ticket/ticket";
import {
  TicketIdParamSchema,
  TicketRequestSchema,
  TicketUserEventParamSchema,
  TicketUserIdParamSchema,
  TicketUpdateSchema,
} from "../modules/ticket/ticket.model";

const ticketService = new TicketService();

export const ticketRoute = new Elysia().group("/api", (app) =>
  app
    .get("/ticket", ticketService.getAllTickets)
    .get("/ticket/user/:user_id", ticketService.getUserTicketList, {
      params: TicketUserIdParamSchema,
    })
    .get("/ticket/user/:user_id/:event_id", ticketService.getUserTicketByEvent, {
      params: TicketUserEventParamSchema,
    })
    .get("/ticket/:id", ticketService.getTicketById, {
      params: TicketIdParamSchema,
    })
    .post("/ticket", ticketService.createTicket, {
      body: TicketRequestSchema,
    })
    .patch("/ticket/:id", ticketService.updateTicket, {
      params: TicketIdParamSchema,
      body: TicketUpdateSchema,
    })
    .delete("/ticket/:id", ticketService.deleteTicket, {
      params: TicketIdParamSchema,
    })
    .post("/ticket/:id/check-in", ticketService.checkInTicket, {
      params: TicketIdParamSchema,
    }),
);
