import { baseUrlCore } from "../../config/axios";
import { handleError } from "../../config/error";
import { toFormData } from "axios";

export class EventService {
  async getAllEvents({ status }: any) {
    try {
      const response = await baseUrlCore.get("/event");
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async getEventById({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.get(`/event/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async createEvent({ body, status }: any) {
    try {
      const data = toFormData(body);
      const response = await baseUrlCore.post("/event", data);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async updateEvent({ params: { id }, body, status }: any) {
    try {
      const data = toFormData(body);
      const response = await baseUrlCore.patch(`/event/${id}`, data);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async deleteEvent({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.delete(`/event/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async generateStaffCode({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.patch(`/event/${id}/generate-staff-code`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async staffSignIn({ body, status }: any) {
    try {
      const response = await baseUrlCore.post(`/event/staff-signin`, body);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }
}
