import type { CollectionConfig } from "payload";

export const ProductInstance: CollectionConfig = {
   slug: "productInstance",
   fields: [
      {
         name: "product",
         type: "relationship",
         required: true,
         relationTo: "product",
      },
      {
         name: "quantity",
         type: "number",
         required: true,
      },

      {
         name: "size",
         type: "select",
         required: true,
         options: ["XS", "S", "M", "L", "XL", "XXL"]
      },
   ]
}