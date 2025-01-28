"use server";

import { OrderConfirmationEmailTemplate } from "@/emails";
import { cartProduct } from "@/types/cartProduct";
import { Order } from "@/types/order";
import { render } from "@react-email/render";
import { getPayload } from "payload";
import config from "payload.config";
import { Resend } from "resend";

const sendConfirmationEmail = async (order: Order, email: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_EMAIL
      ? `AEFEUP <${process.env.RESEND_EMAIL}>`
      : "Acme <onboarding@resend.dev>",
    to: [email],
    subject: "Confirmação de Encomenda",
    html: await render(OrderConfirmationEmailTemplate(order)),
  });
};

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
      // createdAt: Date.now().toString(),
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

  sendConfirmationEmail(currentOrder, email);

  console.log("Confirmation email sent");

  payload.update({
    collection: "order",
    id: currentOrder.id,
    data: {
      status: "paid",
    },
  });

  console.log("Order Paid. Updating quantities...");

  currentOrder.orderProducts.forEach((orderProduct) => {
    payload.update({
      collection: "product",
      id: orderProduct.product.id,
      data: {
        sizes: orderProduct.product.sizes?.map((productInstance) => {
          if (productInstance.size === orderProduct.size) {
            return {
              size: productInstance.size,
              quantity: productInstance.quantity - orderProduct.quantity,
            };
          }
          return productInstance;
        }),
      },
    });
  });
}
