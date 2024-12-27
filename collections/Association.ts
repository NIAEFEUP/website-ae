import type { CollectionConfig } from 'payload'


export const Association: CollectionConfig = {
    slug: 'association',
    labels: {
        singular: 'Associação',
        plural: 'Associações',
    },
    admin: {
        useAsTitle: 'association',
        group: "AEFEUP"
    },
    fields: [
        {
            name: 'name',
            label: 'Nome',
            type: 'text',
            required: true,
        },
        // aefeup association?
        {
            name: 'in_aefeup',
            label: 'Núcleo da AEFEUP?',
            type: 'checkbox',
            required: true,
        },

        // Do we want this?
        {
            name: 'description',
            label: 'Descrição',
            type: 'textarea',
        },
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'address',
            label: 'Morada',
            type: 'textarea',
        },

        // TODO: This is repeated in Person.ts. Find some way to share this field
        {
            name: 'socials',
            label: 'Redes sociais',
            type: 'array',
            fields: [
                {
                    name: 'type',
                    label: 'Plataforma',
                    type: 'select',
                    hasMany: false,
                    options: [
                        {
                            label: 'Website',
                            value: 'website'
                        },
                        {
                            label: 'Linkedin',
                            value: 'linkedin',
                        },
                        {
                            label: 'Facebook',
                            value: 'facebook',
                        },
                        {
                            label: 'Instagram',
                            value: 'instagram',
                        },
                    ],
                    required: true,
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                    required: true,
                    admin: {
                        placeholder: 'https://niaefeup.pt',
                    }
                },
            ],
        },
    ],
};

export default Association
