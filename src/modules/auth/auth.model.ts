import { t } from "elysia";

export const LoginRequestSchema = t.Object({
  email: t.String(),
  password: t.String(),
});

export const SignUpRequestSchema = t.Object({
  email: t.String(),
  first_name: t.String(),
  last_name: t.String(),
  phone_number: t.String(),
  birthdate: t.String(),
  gender: t.String(),
  profile_image: t.Optional(t.String()),
  password: t.String(),
  org_name: t.Optional(t.String()),
  role: t.Optional(t.Union([t.Literal("user"), t.Literal("organizer")])),
});
