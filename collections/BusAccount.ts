import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const BusAccount: CollectionConfig = {
    slug: 'busAccount',
    labels: {
        singular: 'Conta de Autocarro',
        plural: 'Contas de Autocarros'
    },
    auth: {
        loginWithUsername: true,
        maxLoginAttempts: 5,
        lockTime: 5 * 60 * 1000,
        tokenExpiration: 60 * 60,
    },
    admin: {
        group: 'Arraial',
    },
    access: {
        read: () => true,
        create: isStaff,
        update: isStaff,
        delete: isStaff
    },
    fields: [
        {
            name: "busId",
            label: "ID Autocarro",
            type: "number",
            required: true,
            unique: true,
        },
        {
            name: "name",
            label: "Nome do Autocarro",
            type: "text",
            required: false,
        },
        {
            name: "username",
            label: "Username",
            type: "text",
            required: true,
            unique: true,
        },
        {
            name: "line",
            label: "Linha do Autocarro",
            type: "radio",
            options: [
                { label: "Baixa do Porto", value: "BXP" },
                { label: "Hospital São João", value: "HSJ" },
            ],
            required: true,
        }
    ]
}
