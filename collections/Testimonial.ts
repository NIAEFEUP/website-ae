import type { CollectionConfig } from "payload";

export const Testimonal: CollectionConfig = {
  slug: 'testimonial',
  labels: {
    singular: 'Testemunho',
    plural: 'Testemunhos'
  },
  admin: {
    useAsTitle: 'name',
    group: 'Recursos Humanos'
  },
  fields: [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name:'photo',
      label:'Foto',
      type:'relationship',
      relationTo:'media'
    },
    {
      name: 'position',
      label: 'Cargo',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Conteúdo',
      type: 'text',
      required: true,
    },

  ]
}