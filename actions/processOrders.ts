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
): Promise<Order> {
  const payload = await getPayload({ config });

  const orderProducts = items.map((item) => {
    return {
      product: item.product.id,
      size: item.size as "XS" | "S" | "M" | "L" | "XL" | "XXL",
      quantity: item.quantity,
    };
  });

  const order = await payload.create({
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
  await payload.update({
    collection: "order",
    id: currentOrder.id,
    data: {
      status: "canceled",
    },
  });
}

export async function confirmOrder(currentOrder: Order) {
  const payload = await getPayload({ config });

  console.log("Order Paid. Updating quantities...");

  await payload.update({
    collection: "order",
    id: currentOrder.id,
    data: {
      status: "paid",
    },
  });

  console.log("The products aree..", currentOrder.products);

  /**
   *   {
    id: '679a2f814fbd844764795f8a',
    product: {
      id: 2,
      name: 'Sweat Vermelha',
      price: 10.4,
      photo: [Object],
      description: 'asdasdasdasd',
      color: 'asdasdasd',
      sizes: [Array],
      updatedAt: '2025-01-29T12:09:36.931Z',
      createdAt: '2025-01-29T11:21:50.487Z'
    },
    size: 'S',
    quantity: 1
  }
   */
  currentOrder.products!.forEach(async (orderProduct) => {
    const product = orderProduct.product as Product;

    await payload.update({
      collection: "product",
      id: product.id!,
      data: {
        sizes: product.sizes!.map((productInstance) => {
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

  console.log(
    "Order",
    currentOrder,
    "sending confirmation email to ",
    currentOrder.email
  );

  const content = await render(OrderConfirmationEmailTemplate(currentOrder));
  sendEmailWithoutFrom(currentOrder.email, "Encomenda AEFEUP", content);
}
