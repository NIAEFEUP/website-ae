import { link } from "fs";
import { CollectionConfig } from "payload";

export const Slide: CollectionConfig = {
    slug: 'slide',
    labels: {
        singular: 'Slide',
        plural: 'Slides',
    },
    fields: [
        {
            name: "name",
            label: "Nome",
            type: 'text',
            required: true,
        },
        {
            name: "description",
            label: "Descrição",
            type: 'textarea',
            required:true
        },
        {
            name: "image",
            label: "Imagem",
            type:"relationship",
            relationTo: "media",
            required: true,
        },
        {
            name: "link",
            label: "Link",
            type: "text",
        }

    ]
}