import { Elysia } from "elysia";
import { TicketService } from "../modules/ticket/ticket";
import {
  TicketIdParamSchema,
  TicketRequestSchema,
  TicketUpdateSchema,
} from "../modules/ticket/ticket.model";

const ticketService = new TicketService();

export const ticketRoute = new Elysia().group("/api", (app) =>
  app
    .get("/ticket", ticketService.getAllTickets)
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
