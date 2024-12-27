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
      name: 'image',
      label: 'Imagem',
      type: 'relationship',
      relationTo: 'media',
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