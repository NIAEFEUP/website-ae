"use server";

import axios from "axios";

export async function createMBWAYRequest(
  phoneNumber: string,
  amount: number,
  orderID: number
) {
  try {
    const { data } = await axios.post(
      "https://api.ifthenpay.com/spg/payment/mbway",
      {
        mbWayKey: process.env.IF_THEN_PAY_API_KEY,
        orderId: orderID.toString(),
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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function pollPaymentStatus(requestID: string) {
  return new Promise((resolve, reject) => {
    const pollStatus = setInterval(async () => {
      const teste = await checkPaymentStatus(requestID);

      if (teste.Message == "Success") {
        clearInterval(pollStatus);
        resolve("confirmed");
      } else if (teste.Message == "Declined by user") {
        clearInterval(pollStatus);
        resolve("declined");
      } else if (teste.Message == "Expired") {
        clearInterval(pollStatus);
        resolve("expired");
      }
    }, 5000);
  });
}
