import { CollectionConfig } from "payload";
import { ProductSize } from "./ProductSizeField";

export const Order: CollectionConfig = {
   slug: 'order',
   labels: {
      singular: 'Order',
      plural: 'Orders'
   },
   fields: [
      {
         name: "email",
         label: "Email",
         type: "text",
         required: true,
      },
      {
         name: "mobile",
         label: "Mobile",  
         type: "text",
         required: true,
      },
      {
         name: "products",
         label: "Produtos",
         type: "array",
         fields: [
            {
               name: "product",
               type: "relationship",
               relationTo: "product",
               required: true,
            },
            ProductSize,
            {
               name: "quantity",
               type: "number",
               required: true,
            },
         ]
      },
      {
         name: "totalPrice",
         type: "number",
         required: true,
      },
      {
         name: "status",
         type: "select",
         options: [
            { label: "Pendente", value: "pending" },
            { label: "Pago", value: "paid" },
            { label: "Cancelado", value: "canceled" },
         ],
         defaultValue: "pending",
         required: true,
      },
      {
         name: "withdrawal",
         label: "Levantado",
         type: "checkbox",
         defaultValue: false,
      },
   ]
}