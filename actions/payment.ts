"use server";

import { cartProduct } from "@/types/cartProduct";
import { getProducts } from "./getShopProducts";
import { createMBWAYRequest } from "./apiCall";

export default async function createPayment(
  number: string,
  products: cartProduct[]
) {
  const serverProducts = await getProducts();
  console.log("server Products", products);

  // decrement products from pending orders

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

  const totalCost = products.reduce(
    (prev, curr) => prev + curr.product.price * curr.quantity,
    0
  );

  // create order status = pending
  // create_at = new Date()
  // 5minutes

  const response = await createMBWAYRequest(
    number,
    totalCost
    //orderId
  );

  return response.RequestId;
}
