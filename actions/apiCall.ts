"use server";

import axios from "axios";
import { cancelOrder, confirmOrder } from "./processOrders";
import { Order } from "@/payload-types";
import { PaymentStatus } from "@/types/paymentStatus";

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

// CHANGE HERE TO TEST
export async function pollPaymentStatus(
  requestID: string,
  order: Order
): Promise<PaymentStatus> {
  const pollStatus = setInterval(async () => {
    const newStatus = await checkPaymentStatus(requestID);

    if (newStatus.Message == "Success") {
      clearInterval(pollStatus);
      confirmOrder(order);
      return PaymentStatus.confirmed;
    } else if (newStatus.Message == "Declined by user") {
      clearInterval(pollStatus);
      confirmOrder(order);
      //cancelOrder(order);
      return PaymentStatus.declined;
    } else if (newStatus.Message == "Expired") {
      clearInterval(pollStatus);
      cancelOrder(order);
      return PaymentStatus.expired;
    }

    return PaymentStatus.waiting;
  }, 5000);

  return PaymentStatus.idle;
}
