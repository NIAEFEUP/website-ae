import { isStaff } from "@/lib/utils";
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
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'quantity',
      label: 'Quantidade',
      type: 'number',
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'name',
    group: "Reservas de Espaço e Material"
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  }
}