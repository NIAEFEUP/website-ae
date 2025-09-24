import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const InformativeVideo: CollectionConfig = {
  slug: 'informative-video',
  labels: {
    singular: 'Vídeo Informativo',
    plural: 'Vídeos Informativos',
  },
  admin: {
    useAsTitle: 'title',
    group: "Estudante",
  },
  access: {
    read: () => true,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
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
        if (!val.includes('instagram.com')) return 'URL deve ser do Instagram'
        return true
      },
    },
  ],
}
