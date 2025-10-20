import { GlobalConfig } from "payload";
import { isStaff } from "@/lib/utils";

export const Photobank: GlobalConfig = {
  slug: "photobank",
  label: "Banco de Fotografias",
  admin: {
    group: "AEFEUP",
  },
  access: {
    read: isStaff,
    update: isStaff,
  },
  fields: [
    {
      name: "description",
      label: "Descrição",
      type: "textarea",
      required: true,
    },
    {
      name: "active",
      label: "Ativo",
      type: "checkbox",
      defaultValue: true,
      required: true,
      admin: {
        description: "Marca se o banco de fotografias está ativo/visível",
      },
    },
    {
      name: "images",
      label: "Imagens",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      required: true,
    },
    {
      name: "links",
      label: "Links",
      type: "array",
      fields: [
        {
          name: "description",
          label: "Descrição",
          type: "text",
        },
        {
          name: "url",
          label: "URL",
          type: "text",
        },
      ],
    },
  ],
};
