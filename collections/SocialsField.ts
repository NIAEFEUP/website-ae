import type { Field } from 'payload'

export const Socials: Field = {
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
                    label: 'Linkedin',
                    value: 'linkedin',
                },
                {
                    label: 'Facebook',
                    value: 'facebook',
                },
                {
                    label: 'Website',
                    value: 'website',
                },
                {
                    label: 'Instagram',
                    value: 'instagram',
                },
                {
                    label: 'Email',
                    value: 'email',
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
}

