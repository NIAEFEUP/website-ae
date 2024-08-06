import { Righteous } from "next/font/google";
import { CollectionConfig } from "payload";

export const Material: CollectionConfig = {
  slug: 'material',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'quantity',
      type: 'number',
      required: true,
    },
  ]
}