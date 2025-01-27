import { isStaff } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const DocFile: CollectionConfig = {
   slug: 'docfile',
   labels: {
      singular: 'Ficheiro',
      plural: 'Ficheiros'
   },
   admin: {
      useAsTitle: 'name',
      group: 'Documentos',
   },
   access: {
      read: isStaff,
      create: isStaff,
      update: isStaff,
      delete: isStaff
   },
   upload: {
      mimeTypes: ['application/pdf'],
   },
   fields: [
      {
         name: 'name',
         label: 'Nome do ficheiro',
         type: 'text',
         required: true,
      },
      {
         name: 'type',
         label: 'Tipo de ficheiro',
         type: 'select',
         options: [
            { label: 'Regulamento', value: 'regulation' },
            { label: 'Outro', value: 'other' },
         ],
         required: true,
      }
   ]
}