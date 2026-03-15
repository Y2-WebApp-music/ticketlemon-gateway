import { Elysia } from "elysia";
import { baseUrlUser } from "../config/axios";

export const userRoute = new Elysia().group('/user', (app) =>
    app
        .get("/", async () => {
            try {
                const response = await baseUrlUser.get("/user");
                return response.data;
            } catch (error) {
                console.error(error);
            }
        })
)