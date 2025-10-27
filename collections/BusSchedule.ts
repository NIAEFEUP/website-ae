import { isStaff } from '@/lib/utils'
import type { CollectionConfig } from 'payload'

export const BusSchedule: CollectionConfig = {
    slug: 'busSchedule',
    labels: {
        singular: 'Horário de Autocarro',
        plural: 'Horários de Autocarros'
    },
    admin: {
        group: 'Arraial',
        useAsTitle: 'routeDisplay',
    },
    access: {
        read: () => true,
        create: isStaff,
        update: isStaff,
        delete: isStaff
    },
    fields: [
        {
            name: 'bus',
            label: 'Autocarro',
            type: 'relationship',
            relationTo: 'busAccount',
            required: false,
        },
        {
            name: 'route',
            label: 'Rota',
            type: 'radio',
            options: [
                { label: 'Hospital São João → Exponor', value: 'HSJ-EX' },
                { label: 'Baixa do Porto → Exponor', value: 'BXP-EX' },
                { label: 'Exponor → Hospital São João', value: 'EX-HSJ' },
                { label: 'Exponor → Baixa do Porto', value: 'EX-BXP' },
            ],
            required: true,
        },
        {
            name: 'departureTime',
            label: 'Hora de Partida',
            type: 'text',
            required: true,
            admin: {
                placeholder: 'Ex: 22:15',
                description: 'Formato 24h (HH:MM)',
            },
            validate: (val) => {
                if (!/^\d{2}:\d{2}$/.test(val)) {
                    return 'Formato inválido. Use HH:MM';
                }
                return true;
            },
        },
        {
            name: 'arrivalTime',
            label: 'Hora de Chegada',
            type: 'text',
            required: false,
            admin: {
                placeholder: 'Ex: 22:45 (opcional, padrão +30 min)',
                description: 'Se não preencher, será +30 min da partida',
            },
            validate: (val) => {
                if (val && !/^\d{2}:\d{2}$/.test(val)) {
                    return 'Formato inválido. Use HH:MM';
                }
                return true;
            },
        },
        {
            name: 'routeDisplay',
            type: 'text',
            admin: {
                hidden: true,
            },
            hooks: {
                beforeValidate: [
                    ({ data }) => {
                        if (!data) return;
                        if (data.route && data.departureTime) {
                            data.routeDisplay = `${data.route} - ${data.departureTime}`;
                        }
                        // calculate arrivalTime if empty
                        if (data.departureTime && !data.arrivalTime) {
                            const [hours, minutes] = data.departureTime.split(':').map(Number);
                            const departureDate = new Date();
                            departureDate.setHours(hours, minutes);

                            const arrivalDate = new Date(departureDate.getTime() + 30 * 60000);
                            const arrivalHours = arrivalDate.getHours().toString().padStart(2, '0');
                            const arrivalMinutes = arrivalDate.getMinutes().toString().padStart(2, '0');

                            data.arrivalTime = `${arrivalHours}:${arrivalMinutes}`;
                        }
                    },
                ],
            },
        },
    ],
}
