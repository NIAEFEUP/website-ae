import { cartProduct } from "@/types/cartProduct";
import { requestMBWAY } from "./apiCall";
import { paymentStatus } from ".";

export default async function startPaymentProcess(
  number: string,
  products: cartProduct[],
  setPaymentStatus: (status: paymentStatus) => void,
  setProcessingPayment: (status: boolean) => void
) {
  await requestMBWAY(
    number,
    calculcateCost(products),
    setPaymentStatus,
    setProcessingPayment
  );
}

function calculcateCost(products: cartProduct[]) {
  const totalCost = 0;
  return products.reduce((prev, curr) => prev + curr.product.price, totalCost);
}
