import { isStaff } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const Space: CollectionConfig = {
    slug: "space",
    labels: {
        singular: "Espaço",
        plural: "Espaços",
    },
    access: {
        read: isStaff,
        create: isStaff,
        update: isStaff,
        delete: isStaff,
    },
    fields: [
        {
            name: 'name',
            label: 'Nome',
            type: 'text',
            required: true
        },
    ],
    admin: {
        useAsTitle: 'name',
        group: "Reservas de Espaço e Material"
    }
}