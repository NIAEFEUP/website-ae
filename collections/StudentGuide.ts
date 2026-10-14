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
        read: () => true,
        create: isStaff,
        update: isStaff,
        delete: isStaff
    },
    upload: true, 
    fields: [
        {
            name: "language",
            label: "Idioma",
            type: "select",
            hasMany: false,
            options: [
                {
                    label: "Português",
                    value: "Português",
                },
                {
                    label: "English",
                    value: "Inglês",
                }
            ],
            required: true,
        }
    ]
}