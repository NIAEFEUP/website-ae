import type { CollectionConfig } from 'payload'

const emojies = [
    '⚽️', '🏀', '🏈', '🎾', '🏐', '🏉', '🥏', '🏓', '🏸', '🏒', '🏑', '🏏', '🥍', '🥅', '🎱', '🏹', '🎿', '🛷', '🚴‍♂️', '🏄‍♂️', '🏇', '🏊‍♂️', '🏋️‍♂️', '🤼‍♂️', '🤸‍♂️', '🤺', '🤾‍♂️', '🏌️‍♂️', '🧗‍♂️', '🚣‍♂️', '🚵‍♂️', '🏎️', '🏍️',
];

export const SportsTeam: CollectionConfig = {
    slug: 'sports-team',
    labels: {
        singular: 'Seleção',
        plural: 'Seleções',
    },
    admin: {
        useAsTitle: 'sport_name',
    },
    fields: [
        {
            name: 'sport_name',
            label: 'Nome da modalidade',
            type: 'text',
            required: true,
        },
        {
            name: 'fap_id',
            label: 'Id da modalidade em desporto.fap',
            type: 'number',
        },
        {
            name: 'coach',
            label: "Treinador",
            type: 'relationship',
            relationTo: 'person',
        },
        {
            name: 'workouts',
            label: 'Treinos',
            labels: {
                singular: 'Treino',
                plural: 'Treinos',
            },
            type: 'array',
            fields: [
                {
                    name: 'weekDay',
                    label: 'Dia da semana',
                    type: 'select',
                    options: [
                        { label: 'Segunda', value: 'monday' },
                        { label: 'Terça', value: 'tuesday' },
                        { label: 'Quarta', value: 'wednesday' },
                        { label: 'Quinta', value: 'thursday' },
                        { label: 'Sexta', value: 'friday' },
                        { label: 'Sabado', value: 'saturday' },
                        { label: 'Domingo', value: 'sunday' },
                    ],
                    required: true,
                },
                {
                    name: 'hour',
                    label: 'Hora',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'emoji',
            label: 'Icon',
            type: 'select',
            options: emojies.map((emoji) => ({ label: emoji, value: emoji })),
        },
        {
            name: 'lineup',
            label: 'Plantel',
            labels: {
                singular: 'Linha',
                plural: 'Linhas',
            },
            type: 'array',
            fields: [
                {
                    // TODO: Should we storage a description? Like "guarda-redes", "defesa", "medio", "avançado"?
                    name: 'lineupRow',
                    label: 'Linha',
                    labels: {
                        singular: 'Jogador',
                        plural: 'Jogadores',
                    },
                    type: 'array',
                    fields: [
                        {
                            name: 'person',
                            label: 'Jogador',
                            type: 'relationship',
                            relationTo: 'person',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'backgroundImage',
            label: 'Imagem de fundo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
};

export default SportsTeam
