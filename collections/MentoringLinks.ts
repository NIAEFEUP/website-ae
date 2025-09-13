import { isStaff } from '@/lib/utils';
import type { CollectionConfig } from 'payload';

export const MentoringLinks: CollectionConfig = {
  slug: 'mentoringLinks',
  labels: {
    singular: 'Link Mentoria',
    plural: 'Links Mentoria',
  },
  defaultSort: 'order',
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
      name: 'title',
      label: 'Título',
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
      name: 'order',
      label: 'Order',
      type: 'number',
      required: false,
      admin: {
        position: 'sidebar',
      },
    }
  ],
};
