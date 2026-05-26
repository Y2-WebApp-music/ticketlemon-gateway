import axios from "axios";
import { config } from "./config";

export const baseUrlAuth = axios.create({
  baseURL: config.authServiceUrl,
  proxy: false,
});

export const baseUrlUser = axios.create({
  baseURL: config.userServiceUrl,
  proxy: false,
});

export const baseUrlCore = axios.create({
  baseURL: config.coreServiceUrl,
  proxy: false,
});
