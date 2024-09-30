import type { CollectionConfig } from 'payload'

export const aeDocument:CollectionConfig = {
    slug: 'document',
    labels: {
        singular: 'Documento',
        plural: 'Documentos'
    },
    upload: {
        staticDir: 'media',
        mimeTypes: ['application/pdf'],
    },
    fields: [
        {
            name:"title",
            type:"text",
            required:true,
        }
    ]
}
