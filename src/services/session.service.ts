import { request } from "./request";

export default class SessionService {
  async create(mentorId: string) {
    return request<{ status: string }>({
      method: "POST",
      url: "/sessions",
      data: { mentorId },
    });
  }


}
