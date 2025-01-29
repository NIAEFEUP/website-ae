"use server";

import { Product } from "@/payload-types";
import { getPayload } from "payload";
import config from "payload.config";

export async function getProducts() {
  const payload = await getPayload({ config });

  const products = await payload.find({
    collection: "product",
  });

  const orders = await payload.find({
    collection: "order",
  });

  const pending_orders = orders.docs.filter(
    (order) => order.status === "pending"
  );
  const all_pending_products =
    pending_orders.map((order) => order.products).flat() ?? [];
  const all_products = products.docs;

  const pending_orders_products_quantities = {};

  all_pending_products.forEach((product) => {
    //TODO: If exist add, if not create

    if (product) {
      const productInstance = product.product as Product;
      if (product.size && productInstance.id && product.quantity) {
        pending_orders_products_quantities[
          `${product.size}_${productInstance.id}`
        ] = product.quantity;
      }
    }
  });

  const all_products_after = all_products.map((product) => {
    return {
      ...product,
      sizes: product.sizes
        ? product.sizes.map((size) => {
            const pendingQuantity =
              pending_orders_products_quantities[
                `${size.size}_${product.id}`
              ] || 0;

            return {
              ...size,
              quantity: Math.max(size.quantity - pendingQuantity, 0),
            };
          })
        : [],
    };
  });

  return all_products_after;
}
