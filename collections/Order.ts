import { CollectionConfig } from "payload";
import { ProductSize } from "./ProductSizeField";

export const Order: CollectionConfig = {
   slug: 'order',
   labels: {
      singular: 'Encomenda',
      plural: 'Encomendas'
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
         label: "Telemóvel",  
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
               label: "Produto",
               type: "relationship",
               relationTo: "product",
               required: true,
            },
            ProductSize,
            {
               name: "quantity",
               label: "Quantidade",
               type: "number",
               required: true,
            },
         ]
      },
      {
         name: "totalPrice",
         label: "Preço total",
         type: "number",
         required: true,
      },
      {
         name: "status",
         label: "Estado",
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