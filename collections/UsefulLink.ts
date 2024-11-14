import { CollectionConfig } from "payload";

export const UsefulLink: CollectionConfig = {
    slug: 'usefulLink',
    labels : {
        singular: 'Useful Link',
        plural: 'Useful Links'
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