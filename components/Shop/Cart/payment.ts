import { cartProduct } from "@/types/cartProduct";
import { requestMBWAY } from "./apiCall";
import { paymentStatus } from ".";

export default async function startPaymentProcess(products: cartProduct[], setPaymentStatus: (status: paymentStatus) => void) {
   await requestMBWAY("915612870", calculcateCost(products), setPaymentStatus);
}

function calculcateCost(products: cartProduct[]) {
   const totalCost = 0
   return products.reduce((prev, curr) => prev + curr.product.price, totalCost)
}