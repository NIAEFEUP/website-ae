import { isStaff } from "@/lib/utils";
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
   access: {
      read: isStaff,
      create: isStaff,
      update: isStaff,
      delete: isStaff
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
               label: 'Assembleia Geral',
               value: 'Assembleia Geral'
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