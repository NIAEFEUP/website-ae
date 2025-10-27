import { isStaff } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const Event: CollectionConfig = {
  slug: 'event',
  labels: {
    singular: 'Evento',
    plural: 'Eventos'
  },
  admin: {
    useAsTitle: 'title',
    group: 'AEFEUP'
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true
    },
    {
      name: 'type',
      label: 'Tipo',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true
    },
    {
      name: 'images',
      label: 'Imagens',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      required: true
    },
    {
      name: 'link',
      label: 'Links',
      type: 'array',
      fields: [
        {
          name: 'description',
          label: 'Descrição',
          type: 'text'
        },
        {
          name: 'url',
          label: 'Url',
          type: 'text'
        }
      ]
    },
  ]
}