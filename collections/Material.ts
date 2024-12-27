import { CollectionConfig } from "payload";

export const Material: CollectionConfig = {
  slug: 'material',
  labels: {
    singular: 'Material',
    plural: 'Materiais',
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
  ],
  admin: {
    useAsTitle: 'name',
    group: "Reservas de Espaço e Material"
  }
}