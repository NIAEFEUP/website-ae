import { CollectionConfig } from "payload";

export const Material: CollectionConfig = {
  slug: 'material',
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