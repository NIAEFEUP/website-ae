import type { CollectionConfig } from "payload";

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
  ],
};
