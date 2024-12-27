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
    ],
    admin: {
        useAsTitle: 'name',
        group: "Reservas de Espaço e Material"
    }
}