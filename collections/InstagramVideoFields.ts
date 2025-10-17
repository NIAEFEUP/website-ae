import type { Field } from 'payload'

export const instagramVideoFields: Field[] = [
  {
    name: 'title',
    label: 'Título',
    type: 'text',
    required: true,
  },
  {
    name: 'source',
    label: 'Fonte',
    type: 'select',
    required: true,
    defaultValue: 'Instagram',
    options: [
      {
        label: 'Instagram',
        value: 'Instagram',
      },
    ],
  },
  {
    name: 'url',
    label: 'URL',
    type: 'text',
    required: true,
    validate: (val) => {
      if (!val) return 'URL é obrigatório'
      if (!val.includes('instagram.com'))
        return 'URL deve ser do Instagram'
      return true
    },
  },
]
