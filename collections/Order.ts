import { CollectionConfig } from "payload";

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
         name: "products",
         label: "Produtos",
         type: "array",
         fields: [
            {
               name: "product",
               label: "Product",
               type: "relationship",
               relationTo: "product",
               required: true,
            },
         ],
         required: true
      },
      {
         name: "price",
         type: "number",
         required: true,
      },
   ]
}