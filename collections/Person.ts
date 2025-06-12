import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'
import { Socials } from './SocialsField'

export const Person: CollectionConfig = {
  slug: 'person',
  labels: {
    singular: 'Pessoa',
    plural: 'Pessoas',
  },

  fields: [
    {
      name: 'name',
      label: "Nome",
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      label: "Cargo",
      type: 'relationship',
      relationTo: 'position',
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'birthday',
      label: 'Data de nascimento',
      type: 'date',
    },
    Socials
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
