import axios from 'axios';
import { Database } from 'lucide-react';

export async function requestMBWAY(phoneNumber: string) {
   const options = {
      method: 'POST',
      url: 'https://api.ifthenpay.com/spg/payment/mbway',
      headers: { 'Content-Type': 'application/json' },
      data: {
         mbWayKey: 'BYX-186558',
         orderId: 'teste',
         amount: '499.99',
         mobileNumber: '351#' + phoneNumber,
      }
   };

   try {
      const { data } = await axios.request(options);
      console.log(data);
      pollPaymentStatus(data.requestId);
   } catch (error) {
      console.error(error);
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

const pollPaymentStatus = (requestID: string) => {
   setInterval(async () => {
      const status = await checkPayment(requestID)

      if (status.Message == "Success") alert("euerka")
      else alert(status.Message)
   }, 5000)
}