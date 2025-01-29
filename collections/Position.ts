import { isStaff } from "@/lib/utils";
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
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
}