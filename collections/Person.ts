import type { CollectionConfig } from 'payload'

export const Person: CollectionConfig = {
  slug: 'person',
  labels: {
    singular: 'Pessoa',
    plural: 'Pessoas',
  },
  fields: [
    {
      name: 'name',
      label: "Nome",
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      label: "Cargo",
      type: 'relationship',
      relationTo: 'position',
    },
    {
      name: 'photo',
      label: 'Foto',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'birthday',
      label: 'Data de nascimento',
      type: 'date',
    },
    {
      name: 'socials',
      label: 'Redes sociais',
      type: 'array',
      fields: [
        {
          name: 'type',
          label: 'Plataforma',
          type: 'select',
          hasMany: false,
          options: [
            {
              label: 'Linkedin',
              value: 'linkedin',
            },
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Website',
              value: 'website',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
          ],
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://niaefeup.pt',
          }
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
    group: "Recursos Humanos"
  }
}
