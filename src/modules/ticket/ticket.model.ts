import { t } from "elysia";

export enum TicketStatus {
  Pending = "Pending",
  Purchased = "Purchased",
  Cancelled = "Cancelled",
}

export const TicketRequestSchema = t.Object({
  event_id: t.String(),
  user_id: t.String(),
  type: t.String(),
  price: t.Numeric(),
  qr_code: t.Optional(t.String()),
  status: t.Optional(t.Enum(TicketStatus)),
});

export const TicketUpdateSchema = t.Partial(TicketRequestSchema);
export const TicketIdParamSchema = t.Object({
  id: t.String(),
});
