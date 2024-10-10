import { cartProduct } from "@/types/cartProduct";
import { requestMBWAY } from "./apiCall";

export default async function startPaymentProcess(products: cartProduct[]) {
   await requestMBWAY("915612870", calculcateCost(products));
}

function calculcateCost(products: cartProduct[]) {
   const totalCost = 0
   return products.reduce((prev, curr) => prev + curr.product.price, totalCost)
}