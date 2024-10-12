import type { CollectionConfig } from 'payload'

export const Sponsor: CollectionConfig = {
    slug: 'sponsor',
    labels: {
        singular: 'Patrocinador',
        plural: 'Patrocinadores',
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