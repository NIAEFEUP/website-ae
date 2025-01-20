import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const Sponsor: CollectionConfig = {
    slug: 'sponsor',
    labels: {
        singular: 'Patrocinador',
        plural: 'Patrocinadores',
    },
    admin: {
        group: "AEFEUP",
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
            name: 'url',
            label: 'URL',
            type: 'text',
            required: true,
        },
        {
            name: 'logo',
            label: 'Logo',
            type: 'relationship',
            relationTo: 'media',
            required: true,
        },
    ]
}