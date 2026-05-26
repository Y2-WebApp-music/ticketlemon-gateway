import { baseUrlCore } from "../../config/axios";
import { handleError } from "../../config/error";

export class TicketService {
  async getAllTickets({ status }: any) {
    try {
      const response = await baseUrlCore.get("/ticket");
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async getTicketById({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.get(`/ticket/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async getUserTicketList({ params: { user_id }, status }: any) {
    try {
      const response = await baseUrlCore.get(`/ticket/user/${user_id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async getUserTicketByEvent({ params: { user_id, event_id }, status }: any) {
    try {
      const response = await baseUrlCore.get(
        `/ticket/user/${encodeURIComponent(user_id)}/${encodeURIComponent(event_id)}`,
      );
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async createTicket({ body, status }: any) {
    try {
      const response = await baseUrlCore.post("/ticket", body);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async updateTicket({ params: { id }, body, status }: any) {
    try {
      const response = await baseUrlCore.patch(`/ticket/${id}`, body);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async deleteTicket({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.delete(`/ticket/${id}`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }

  async checkInTicket({ params: { id }, status }: any) {
    try {
      const response = await baseUrlCore.post(`/ticket/${id}/check-in`);
      return response.data;
    } catch (error) {
      return handleError(error, status);
    }
  }
}
