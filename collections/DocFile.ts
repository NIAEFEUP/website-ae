import { CollectionConfig } from "payload";

export const DocFile: CollectionConfig = {
   slug: 'docfile',
   labels: {
      singular: 'Ficheiro',
      plural: 'Ficheiros'
   },
   upload: {
      staticDir: 'media',
      mimeTypes: ['application/pdf'],
   },
   fields: [
      {
         name: 'name',
         label: 'Nome do ficheiro',
         type: 'text',
         required: true,
      }
   ]
}