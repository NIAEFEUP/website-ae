"use server";

import axios from "axios";

export async function createMBWAYRequest(phoneNumber: string, amount: number) {
  try {
    const { data } = await axios.post(
      "https://api.ifthenpay.com/spg/payment/mbway",
      {
        mbWayKey: process.env.IF_THEN_PAY_API_KEY,
        orderId: "teste",
        amount: amount.toString(),
        mobileNumber: "351#" + phoneNumber,
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export async function checkPaymentStatus(requestID: string) {
  try {
    const { data } = await axios.get(
      "https://api.ifthenpay.com/spg/payment/mbway/status",
      {
        params: {
          mbWayKey: process.env.IF_THEN_PAY_API_KEY,
          requestId: requestID,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
