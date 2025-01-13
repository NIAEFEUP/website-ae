import { CollectionConfig } from "payload";

export const DocumentFolder: CollectionConfig = {
   slug: 'documentFolder',
   labels: {
      singular: 'Pasta',
      plural: 'Pastas',
   },
   admin: {
      useAsTitle: 'folder_name',
      group: 'Documentos',
  },
   fields: [
      {
         name: 'folder_name',
         label: 'Nome da pasta',
         type: 'text',
         required: true,
      },
      {
         name: 'section_name',
         label: 'Secção da pasta',
         type: 'select',
         hasMany: false,
         options: [
            {
               label: 'Direção',
               value: 'Direção'
            },
            {
               label: 'Mesa da Assembleia Geral',
               value: 'Mesa da Assembleia Geral'
            }
         ]
      },
      {
         name: 'files',
         label: 'Ficheiros',
         type: 'array',
         required: true,
         fields: [
            {
               name: 'file',
               label: 'Ficheiro',
               type: 'relationship',
               relationTo: 'docfile',
            }
         ]
      }

   ]
}