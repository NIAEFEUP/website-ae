import { CollectionConfig } from "payload";

export const Space: CollectionConfig = {
    slug: "space",
    labels: {
        singular: "Espaço",
        plural: "Espaços",
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
    ]
}