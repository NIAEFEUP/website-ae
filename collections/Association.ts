import { isStaff } from '@/lib/utils';
import type { CollectionConfig } from 'payload'
import { Socials } from './SocialsField';


export const Association: CollectionConfig = {
    slug: 'association',
    labels: {
        singular: 'Associação',
        plural: 'Associações',
    },
    admin: {
        group: "AEFEUP"
    },
    access: {
        read: isStaff,
        create: isStaff,
        update: isStaff,
        delete: isStaff
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
        Socials
    ],
};

export default Association
