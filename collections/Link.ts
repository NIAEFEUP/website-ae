import { CollectionConfig } from "payload";

export const Link: CollectionConfig = {
    slug: 'link',
    labels: {
        singular: 'Link util',
        plural: 'Links úteis',
    },
    admin: {
        useAsTitle: 'label',
        group: 'Estudante',
    },
    fields: [
        {
            name: "label",
            label: "Label",
            type: "text",
            required: true,
        },
        {
            name: "url",
            label: "URL",
            type: "text",
            required: true,
        },
        {
            name: "description",
            label: "Descrição",
            type: "textarea",
        }
    ]
}