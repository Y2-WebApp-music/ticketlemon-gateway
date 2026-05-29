import { t } from "elysia";

export const UserSchema = t.Object({
  email: t.String(),
  first_name: t.String(),
  last_name: t.String(),
  phone_number: t.String(),
  birthdate: t.String(),
  gender: t.String(),
  profile_image: t.Optional(t.Any()),
  org_name: t.Optional(t.String()),
  role: t.Optional(t.Union([t.Literal("user"), t.Literal("organizer")])),
});

export const UserUpdateSchema = t.Partial(UserSchema);
export const UserIdParamSchema = t.Object({
  id: t.String(),
});
