import type { CollectionConfig } from 'payload'

export const Video: CollectionConfig = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  access: {
    read: () => true,
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
    staticDir: 'media',
    mimeTypes: ['video/mp4'],
  }
}
