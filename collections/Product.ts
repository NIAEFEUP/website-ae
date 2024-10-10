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
    {
      name: "color",
      type: "text",
      required: true,
    },
    {
      name: "instances",
      type: "array",
      fields: [
        {
          name: "Size",
          type: "select",
          hasMany: false,
          options: [
            {
              label: "XS",
              value: "XS"
            },
            {
              label: "S",
              value: "S"
            },
            {
              label: "M",
              value: "M"
            },
            {
              label: "L",
              value: "L"
            },
            {
              label: "XL",
              value: "XL"
            },
          ],
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        }
      ]
    }
  ],
};
