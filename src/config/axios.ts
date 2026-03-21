import axios from "axios";
import { config } from "./config";

export const baseUrlAuth = axios.create({
  baseURL: config.authServiceUrl,
});

export const baseUrlUser = axios.create({
  baseURL: config.userServiceUrl,
});
