import { Elysia } from "elysia";
import { TicketService } from "../modules/ticket/ticket";

const ticketService = new TicketService();

export const ticketRoute = new Elysia().group("/api", (app) =>
  app
    .get("/ticket", ticketService.getAllTickets)
    .get("/ticket/:id", ticketService.getTicketById)
    .post("/ticket", ticketService.createTicket)
    .put("/ticket/:id", ticketService.updateTicket)
    .delete("/ticket/:id", ticketService.deleteTicket)
);
