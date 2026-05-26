import { t } from "elysia";

const EventDateEntrySchema = t.Object({
  id: t.String(),
  start_date: t.String(),
  end_date: t.Nullable(t.String()),
});

const SaleDateEntrySchema = t.Object({
  id: t.String(),
  start_date: t.String(),
  end_date: t.Nullable(t.String()),
});

const TicketTypeSchema = t.Object({
  id: t.String(),
  name: t.String(),
  price: t.String(),
  quantity: t.String(),
  detail: t.Nullable(t.String()),
  use_for_event_date_time: t.String(),
  sale_ticket_on: t.String(),
  is_collapsed: t.Boolean(),
});

export const EventSchema = t.Object({
  event_name: t.String(),
  category: t.String(),
  venue: t.String(),
  impact_genre: t.String(),
  age_restriction: t.Numeric(),
  description: t.Nullable(t.String()),
  poster_url: t.Optional(t.Any()),
  thumbnail_url: t.Optional(t.Any()),
  create_by_id: t.Optional(t.String()),
  create_by: t.Optional(t.String()),
  event_date_entries: t.Array(EventDateEntrySchema),
  sale_date_entries: t.Array(SaleDateEntrySchema),
  ticket_types: t.Array(TicketTypeSchema),
  ticket_min_per_order: t.Optional(t.String()),
  ticket_max_per_order: t.Optional(t.String()),
  staff_code: t.String(),
});

export const EventUpdateSchema = t.Partial(EventSchema);
export const EventIdParamSchema = t.Object({
  id: t.String(),
});
export const EventCreateByIdParamSchema = t.Object({
  create_by_id: t.String(),
});
export const StaffSignInSchema = t.Object({
  staff_code: t.String(),
});
export const EventSearchQuerySchema = t.Object({
  keyword: t.String(),
});
