import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const President: CollectionConfig = {
  slug: 'president',
  labels: {
    singular: 'Presidente',
    plural: 'Presidentes',
  },
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

  ]
}
