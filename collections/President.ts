import type { CollectionConfig } from 'payload'

export const President: CollectionConfig = {
  slug: 'president',
  labels: {
    singular: 'Presidente',
    plural: 'Presidentes',
  },
  fields: [
    {
      name: 'name',
      label: "Nome",
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'start_year',
      label: 'Início do Mandato',
      type: 'number',
      min: 1986,
      required: true,
    },
    {
      name: 'end_year',
      label: 'Fim do Mandato',
      type: 'number',
      min: 1987,
      required: true,
    },

  ],
  admin: {
    useAsTitle: 'name',
  }
}