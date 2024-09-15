import type { CollectionConfig } from 'payload'

export const StudentGuide:CollectionConfig = {
    slug: 'studentGuide',
    upload: {
        staticDir: 'media',
        mimeTypes: ['application/pdf'],
    },
    fields: [
        {
            name: "language",
            type: "select",
            hasMany: false,
            options: [
                {
                    label: "Português",
                    value: "Português",
                },
                {
                    label: "Inglês",
                    value: "Inglês",
                }
            ],
            required: true,
        }
    ]
}