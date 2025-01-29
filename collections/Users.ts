import { isAdmin } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilizador',
    plural: 'Utilizadores',
  },
  admin: {
    group: "Administração Website",
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'role',
      label: 'Função',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Vendedor', value: 'merchant' },
        { label: 'STAFF', value: 'staff' },
      ],
      required: true,
      defaultValue: 'admin',
    },
  ],
}
