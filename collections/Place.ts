import type { CollectionConfig } from 'payload/types';

export const Place: CollectionConfig = {
  slug: 'place',
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'position',
      label: 'Position',
      type: 'group',
      fields: [
        {
          name: 'lat',
          label: 'Latitude',
          type: 'number',
          required: true,
        },
        {
          name: 'lng',
          label: 'Longitude',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'schedule',
      label: 'Schedule',
      type: 'array',
      fields: [
        {
          name: 'day',
          label: 'Dia(s)',
          type: 'text',
          required: true,
        },
        {
          name: 'hours',
          label: 'Horas',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      hasMany: false,
      options: [
        {
          label: 'Espaços de Estudo',
          value: 'Espaços de Estudo'
        },
        {
          label: 'Alimentação',
          value: 'Alimentação'
        },
        {
          label: 'Alojamento',
          value: 'Alojamento'
        },
        {
          label: 'Mobilidade',
          value: 'Mobilidade'
        }
      ],
      required: true,
      depth: 0,
    },
  ],
};