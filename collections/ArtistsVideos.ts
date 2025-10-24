import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'
import { instagramVideoFields } from './InstagramVideoFields'

export const ArtistsVideo: CollectionConfig = {
  slug: 'artist-video',
  labels: {
    singular: 'Vídeo de Artista',
    plural: 'Vídeos de Artistas',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Arraial',
  },
  access: {
    read: () => true,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    ...instagramVideoFields,
  ],
}
