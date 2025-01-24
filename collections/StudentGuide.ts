import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const StudentGuide: CollectionConfig = {
    slug: 'studentGuide',
    labels: {
        singular: 'Guia de Estudante',
        plural: 'Guias de Estudante'
    },
    admin: {
        group: 'Estudante',
    },
    access: {
        read: isStaff,
        create: isStaff,
        update: isStaff,
        delete: isStaff
    },
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