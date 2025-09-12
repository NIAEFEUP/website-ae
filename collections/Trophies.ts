import { isStaff } from '@/lib/utils';
import type { CollectionConfig } from 'payload'

export const Trophies: CollectionConfig = {
  slug: 'trophies',
  labels: {
    singular: 'Troféu',
    plural: 'Troféus',
  },
  admin: {
    useAsTitle: 'year',
    group: "Desporto",
  },
  access: {
          read: isStaff,
          create: isStaff,
          update: isStaff,
          delete: isStaff,
  },
  fields: [
    {
      name: 'year',
      label: 'Ano',
      type: 'text',
      required: true,
      admin: {
        placeholder: '2023/2024'
      },
    },
    {
      name: 'trophies',
      label: 'Troféus do Ano',
      type: 'array',
      fields: [
        {
          name: 'competition',
          label: 'Competição',
          type: 'relationship',
          relationTo: 'competitions',
          required: true,
        },
        {
          name: 'sportsTeam',
          label: 'Seleção',
          type: 'relationship',
          relationTo: 'sportsTeam',
          required: true,
        },
        {
          name: 'standing',
          label: 'Classificação',
          type: 'relationship',
          relationTo: 'standings',
          required: true,
        },
      ],
    },
  ],
};

export default Trophies;