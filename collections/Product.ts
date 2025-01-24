 import type { CollectionConfig } from "payload";
import { ProductSize } from "./ProductSizeField";

export const Product: CollectionConfig = {
  slug: "product",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "color",
      type: "text", //TODO: Change to a fancy color picker
      required: true,
    },
    {
      name: "sizes",
      type: "array",
      fields: [
        ProductSize,
        {
          name: "quantity",
          type: "number",
          required: true,
        }
      ]
    }
  ],
};
