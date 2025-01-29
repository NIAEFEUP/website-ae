import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const Video: CollectionConfig = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  admin: {
    useAsTitle: 'title',
    group: "Estudante",
    hidden: ({ user }) => user && user.role === 'merchant',
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
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  upload: true
}
