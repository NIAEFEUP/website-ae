import axios from 'axios';
import { paymentStatus } from '.';

export async function requestMBWAY(phoneNumber: string, amount: number, setPaymentStatus: (status: paymentStatus) => void) {
   console.log("Function requestMBWAY called with:", phoneNumber, amount);

   const options = {
      method: 'POST',
      url: 'https://api.ifthenpay.com/spg/payment/mbway',
      headers: { 'Content-Type': 'application/json' },
      data: {
         mbWayKey: 'BYX-186558',
         orderId: 'teste',
         amount: amount.toString(),
         mobileNumber: '351#' + phoneNumber,
      }
   };

   console.log("Options prepared:", options);

   try {
      const { data } = await axios.request(options);
      console.log("Response data:", data);
      pollPaymentStatus(data.RequestId, setPaymentStatus);
      return;
   } catch (error) {
      console.error("Error occurred:", error);
   }
}

export async function checkPayment(requestID: string) {
   const options = {
      method: 'GET',
      url: 'https://api.ifthenpay.com/spg/payment/mbway/status',
      params: { mbWayKey: 'BYX-186558', requestId: requestID }
   };

   try {
      const { data } = await axios.request(options);
      console.log(data);
      return data;
   } catch (error) {
      console.error(error);
   }
}

const pollPaymentStatus = (requestID: string, setPaymentStatus: (status: paymentStatus) => void) => {
   const pollStatus = setInterval(async () => {
      const status = await checkPayment(requestID)

      if (status.Message == "Success") {
         alert("euerka");
         setPaymentStatus(paymentStatus.confirmed)
         clearInterval(pollStatus)
      }
      if (status.Message == "Declined by user") {
         alert("declined by user");
         setPaymentStatus(paymentStatus.declined)
         clearInterval(pollStatus)
      }
   }, 5000)
}