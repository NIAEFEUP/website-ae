import { isStaff } from '@/lib/utils';
import type { CollectionConfig } from 'payload';

export const Opportunities: CollectionConfig = {
  slug: 'opportunities',
  labels: {
    singular: 'Oportunidade',
    plural: 'Oportunidades',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Estudante',
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  fields: [
    {
      name: 'types',
      label: 'Tipos de Oportunidade',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Título do Tipo',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Descrição do Tipo',
          type: 'textarea',
        },
        {
          name: 'opportunities',
          label: 'Oportunidades',
          type: 'array',
          fields: [
            {
              name: 'icon',
              label: 'Ícone',
              type: 'select',
              options: [
                { label: 'HandHeart', value: 'HandHeart' },
                { label: 'BookOpenText', value: 'BookOpenText' },
                { label: 'HeartHandshake', value: 'HeartHandshake' },
                { label: 'Heart', value: 'Heart' },
                { label: 'Users', value: 'Users' },
                { label: 'GraduationCap', value: 'GraduationCap' },
                { label: 'Globe', value: 'Globe' },
                { label: 'Sheet', value: 'Sheet' },
                { label: 'Star', value: 'Star' },
                { label: 'Briefcase', value: 'Briefcase' },
                { label: 'HelpingHand', value: 'HelpingHand' },
              ],
              required: true,
            },
            {
              name: 'title',
              label: 'Título',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descrição',
              type: 'textarea',
              required: true,
            },
            {
              name: 'href',
              label: 'URL',
              type: 'text',
            },
            {
              name: 'details',
              label: 'Detalhes',
              type: 'array',
              fields: [
                {
                  name: 'detail',
                  label: 'Detalhe',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Opportunities;
