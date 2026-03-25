import { request } from "./request";

export default class PaymentService {
  async pay(amount: number) {
    request<{ status: string }>({
      method: "POST",
      url: "/payments",
      data: { amount },
    });
  }
}
