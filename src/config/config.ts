const port = Number(process.env.PORT);
const authServiceUrl = process.env.AUTH_SERVICE_URL;
const userServiceUrl = process.env.USER_SERVICE_URL;
const coreServiceUrl = process.env.CORE_SERVICE_URL;

if (!port) {
  throw new Error("PORT is not defined");
}
if (!authServiceUrl) {
  throw new Error("AUTH_SERVICE_URL is not defined");
}
if (!userServiceUrl) {
  throw new Error("USER_SERVICE_URL is not defined");
}
if (!coreServiceUrl) {
  throw new Error("CORE_SERVICE_URL is not defined");
}

export const config = {
  port,
  authServiceUrl,
  userServiceUrl,
  coreServiceUrl,
};
