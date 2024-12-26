import { CollectionConfig } from "payload";

export const Position: CollectionConfig = {
  slug: 'position',
  labels: {
    singular: 'Cargo',
    plural: 'Cargos',
  },
  fields: [
    {
      name: 'name',
      label: "Nome",
      type: 'text',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'name',
    group: "Recursos Humanos"
  }
}