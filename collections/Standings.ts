import type { CollectionConfig } from 'payload'

export const Standings: CollectionConfig = {
  slug: 'standings',
  labels: {
    singular: 'Classificação',
    plural: 'Classificações',
  },
  admin: {
    useAsTitle: 'name',
    group: "Desporto",
  },
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
      admin: {
        placeholder: 'Ex: Vencedor, 2º Lugar, 3º Lugar, ...'
      },
    },
  ],
};

export default Standings