import { CollectionConfig } from "payload";

export const BoardSection: CollectionConfig = {
    slug: 'board_section',
    labels: {
        singular: "Secção Direção",
        plural: "Secções Direção"
    },
    fields: [
        {
            name: 'name',
            label: "Nome",
            type: 'text',
            required: true,
        },
        {
            name: 'type',
            label: "Tipo",
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Direção',
                    value: 'direcao',
                },
                {
                    label: 'Departamento',
                    value: 'departament',
                },
                {
                    label: 'Mesa da Assembleia Geral',
                    value: 'mesa_da_assembleia_geral',
                },
                {
                    label: 'Conselho Fiscal',
                    value: 'conselho_fiscal',
                },
            ],
        },
        {
            name: 'members',
            label: 'Membros',
            type: 'array',
            fields: [
                {
                    name: 'person',
                    label: 'Pessoa',
                    type: 'relationship',
                    relationTo: 'person',
                    required: true,
                },
            ],
            required: true
        },
        {
            name: 'description',
            label: "Descrição",
            type: 'text',
        },
        {
            name: 'subgroups',
            label: 'Subgrupos',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: 'Título',
                    type: 'text',
                },
                {
                    name: 'description',
                    label: "Descrição",
                    type: 'text',
                },
            ],
        },
    ],
    admin: {
        useAsTitle: 'name',
    }
}