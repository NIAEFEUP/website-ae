"use server";

import { OrderConfirmationEmailTemplate } from "@/emails";
import { sendEmailWithoutFrom } from "@/lib/sendEmail";
import { Order, Product } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";
import { render } from "@react-email/render";
import { getPayload } from "payload";
import config from "payload.config";

export async function createOrder(
  items: cartProduct[],
  mobile: string,
  email: string,
  totalCost: number
) {
  const payload = await getPayload({ config });

  const orderProducts = items.map((item) => {
    return {
      product: item.product.id,
      size: item.size as "XS" | "S" | "M" | "L" | "XL" | "XXL",
      quantity: item.quantity,
    };
  });

  const order = payload.create({
    collection: "order",
    data: {
      email: email,
      mobile: mobile,
      products: orderProducts,
      totalPrice: totalCost,
      status: "pending",
    },
  });

  return order;
}

export async function cancelOrder(currentOrder: Order) {
  const payload = await getPayload({ config });
  payload.update({
    collection: "order",
    id: currentOrder.id,
    data: {
      status: "canceled",
    },
  });
}

export async function confirmOrder(currentOrder: Order, email: string) {
  console.log("Current Order: " + currentOrder);
  const payload = await getPayload({ config });

  console.log("Sending confirmation email to ", email);

  const content = await render(OrderConfirmationEmailTemplate(currentOrder));
  sendEmailWithoutFrom(email, "Encomenda AEFEUP", content);

  console.log("Confirmation email sent");

  payload.update({
    collection: "order",
    id: currentOrder.id,
    data: {
      status: "paid",
    },
  });

  console.log("Order Paid. Updating quantities...");

  currentOrder.products!.forEach((orderProduct) => {
    payload.update({
      collection: "product",
      id: orderProduct.id!,
      data: {
        sizes: (orderProduct.product as Product).sizes!.map(
          (productInstance) => {
            if (productInstance.size === orderProduct.size) {
              return {
                size: productInstance.size,
                quantity: productInstance.quantity - orderProduct.quantity,
              };
            }
            return productInstance;
          }
        ),
      },
    });
  });
}
