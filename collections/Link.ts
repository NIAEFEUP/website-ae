import { CollectionConfig } from "payload";

export const Link : CollectionConfig = {
    slug: 'link',
    labels : {
        singular: 'Link',
        plural: 'Links'
    },
    fields : [
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