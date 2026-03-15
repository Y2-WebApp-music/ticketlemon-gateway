import axios from "axios";
import { config } from "./config";

export const baseUrlUser = axios.create({
    baseURL: config.userServiceUrl,
});
