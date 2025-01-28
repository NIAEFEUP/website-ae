"use server";

import { cartProduct } from "@/types/cartProduct";
import { getProducts } from "./getShopProducts";
import { checkPaymentStatus, createMBWAYRequest } from "./apiCall";
import { createOrder } from "./processOrders";

export default async function createPayment(
  mobile: string,
  email: string,
  products: cartProduct[]
) {
  const serverProducts = await getProducts();
  console.log("server Products", products);

  products.forEach((product) => {
    const validatedProduct = serverProducts.find(
      (serverProduct) => serverProduct.id === product.product.id
    );
    if (validatedProduct && validatedProduct.sizes) {
      product.product = validatedProduct;
      const validatedQuantity = validatedProduct.sizes.find(
        (size) => size.size == product.size
      )!.quantity;
      product.quantity = Math.min(product.quantity, validatedQuantity); // protection
    } else {
      return; //TODO return error message
    }
  });

  console.log("Validated products: ", products);

  const totalCost = products.reduce(
    (prev, curr) => prev + curr.product.price * curr.quantity,
    0
  );

  console.log("amount: ", totalCost);

  const order = await createOrder(products, mobile, email, totalCost);

  const response = await createMBWAYRequest(mobile, totalCost, order.id);

  return { paymentID: response.RequestId, orderID: order.id };
}
