import { isStaff } from '@/lib/utils';
import type { CollectionConfig } from 'payload';

export const Place: CollectionConfig = {
  slug: 'place',
  labels: {
    singular: "Lugar do Mapa",
    plural: "Lugares do Mapa",
  },
  admin: {
    useAsTitle: 'name',
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
      label: 'Posição',
      type: 'group',
      fields: [
        {
          name: 'lat',
          label: 'Latitude',
          type: 'number',
          required: true,
          validate: (value: number) => {
            if (value < -90 || value > 90) return 'Latitude tem de estar entre -90 e 90';
            return true;
          }
        },
        {
          name: 'lng',
          label: 'Longitude',
          type: 'number',
          required: true,
          validate: (value: number) => {
            if (value < -180 || value > 180) return 'Longitude tem de estar entre -180 e 180';
            return true;
          }
        },
      ],
    },
    {
      name: 'schedule',
      label: 'Horário',
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
    },
  ],
};