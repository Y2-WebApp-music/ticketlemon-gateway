import { t } from "elysia";

export enum EventStatus {
  Scheduled = "Scheduled",
  OnSale = "OnSale",
  SoldOut = "SoldOut",
  Draft = "Draft",
  Show = "Show",
  EventEnd = "EventEnd",
  Cancel = "Cancel",
}

export const EventSchema = t.Object({
  name: t.String(),
  org_name: t.String(),
  description: t.Optional(t.Any()),
  category: t.String(),
  location: t.String(),
  event_start: t.Any(),
  event_end: t.Any(),
  sale_start: t.Any(),
  sale_end: t.Any(),
  ticket_type: t.Optional(t.Array(t.Any())),
  status: t.Enum(EventStatus),
  poster_url: t.Optional(t.Any()),
  thumbnail_url: t.Optional(t.Any()),
  age_restriction: t.Numeric(),
  staff_code: t.Optional(t.String()),
});

export const EventUpdateSchema = t.Partial(EventSchema);
export const EventIdParamSchema = t.Object({
  id: t.String(),
});
export const StaffSignInSchema = t.Object({
  staff_code: t.String(),
});
export const EventSearchQuerySchema = t.Object({
  keyword: t.String(),
});
