import { t } from "elysia";

export enum TicketStatus {
  Pending = "Pending",
  Purchased = "Purchased",
  Cancelled = "Cancelled",
}

export const TicketRequestSchema = t.Object({
  event_id: t.String(),
  user_id: t.String(),
  ticket_type_id: t.String(),
  qr_code: t.Optional(t.String()),
  status: t.Optional(t.Enum(TicketStatus)),
  is_used: t.Optional(t.Boolean()),
});

export const TicketUpdateSchema = t.Partial(TicketRequestSchema);
export const TicketIdParamSchema = t.Object({
  id: t.String(),
});
export const TicketUserIdParamSchema = t.Object({
  user_id: t.String(),
});
export const TicketUserEventParamSchema = t.Object({
  user_id: t.String(),
  event_id: t.String(),
});
