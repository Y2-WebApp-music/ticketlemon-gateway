import axios from "axios";

export function handleError(error: unknown, status: any) {
  console.error(error);
  if (axios.isAxiosError(error) && error.response) {
    return status(error.response.status, error.response.data);
  }
  return status(500, { message: "Internal server error" });
}
