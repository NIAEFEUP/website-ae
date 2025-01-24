import type { Field } from 'payload'

export const ProductSize: Field = {
    name: 'size',
    type: 'select',
    hasMany: false,
    options: [
        {
            label: 'XS',
            value: 'XS'
        },
        {
        label: "S",
        value: "S"
        },
        {
        label: "M",
        value: "M"
        },
        {
        label: "L",
        value: "L"
        },
        {
        label: "XL",
        value: "XL"
        },
        {
        label: "XXL",
        value: "XXL"
        },
    ],
    required: true,
}

