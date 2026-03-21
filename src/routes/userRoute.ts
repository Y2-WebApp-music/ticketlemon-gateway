import { Elysia, t } from "elysia";
import { baseUrlUser, baseUrlAuth } from "../config/axios";

export const userRoute = new Elysia().group("/user", (app) =>
  app
    .get("/", async () => {
      try {
        const response = await baseUrlUser.get("/user");
        return response.data;
      } catch (error) {
        console.error(error);
      }
    })

    .post("/signup", async ({ body }: any) => {
      try {
        const user = await baseUrlUser.post("/user", body);
        const auth = await baseUrlAuth.post("/auth/signup", {
          user_id: user?.data?.id,
          email: body.email,
          password: body.password,
        });

        return {
          user: user.data,
          auth: auth.data,
        };
      } catch (error) {
        console.error(error);
      }
    })

    .delete("/:id", async ({ params }) => {
      try {
        const user = await baseUrlUser.delete(`/user/${params.id}`);
        const auth = await baseUrlAuth.delete(`/auth/${params.id}`);
        return {
          message: "User deleted",
          user: user.data,
          auth: auth.data,
        };
      } catch (error) {
        console.error(error);
      }
    }),
);
