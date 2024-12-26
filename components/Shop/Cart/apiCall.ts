import axios from "axios";
import { paymentStatus } from ".";

export async function requestMBWAY(
  phoneNumber: string,
  amount: number,
  setPaymentStatus: (status: paymentStatus) => void,
  setProcessingPayment: (status: boolean) => void
) {
  console.log("Function requestMBWAY called with:", phoneNumber, amount);

  const options = {
    method: "POST",
    url: "https://api.ifthenpay.com/spg/payment/mbway",
    headers: { "Content-Type": "application/json" },
    data: {
      mbWayKey: "BYX-186558",
      orderId: "teste",
      amount: amount.toString(),
      mobileNumber: "351#" + phoneNumber,
    },
  };

  console.log("Options prepared:", options);

  try {
    const { data } = await axios.request(options);
    console.log("Response data:", data);
    pollPaymentStatus(data.RequestId, setPaymentStatus, setProcessingPayment);
    return;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export async function checkPayment(requestID: string) {
  const options = {
    method: "GET",
    url: "https://api.ifthenpay.com/spg/payment/mbway/status",
    params: { mbWayKey: "BYX-186558", requestId: requestID },
  };

  try {
    const { data } = await axios.request(options);
    console.log("Second response data: ");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

const pollPaymentStatus = (
  requestID: string,
  setPaymentStatus: (status: paymentStatus) => void,
  setProcessingPayment: (status: boolean) => void
) => {
  const pollStatus = setInterval(async () => {
    const teste = await checkPayment(requestID);

    if (teste.Message == "Success") {
      alert("euerka");
      setPaymentStatus(paymentStatus.confirmed);
      clearInterval(pollStatus);

      setTimeout(() => {
        setProcessingPayment(false);
      }, 3000);
    }
    if (teste.Message == "Declined by user") {
      alert("declined by user");
      setPaymentStatus(paymentStatus.declined);
      clearInterval(pollStatus);

      setTimeout(() => {
        setProcessingPayment(false);
      }, 3000);
    }
  }, 5000);
};
