import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const Video: CollectionConfig = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  admin: {
    useAsTitle: 'título',
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
      name: 'título',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  upload: {
    mimeTypes: ['video/mp4'],
  }
}
