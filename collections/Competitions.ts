import type { CollectionConfig } from 'payload'

export const Competitions: CollectionConfig = {
  slug: 'competitions',
  labels: {
    singular: 'Competição',
    plural: 'Competições',
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
        placeholder: 'Ex: Supertaça, Taça CAP, ...'
      },
    },
  ],
};

export default Competitions