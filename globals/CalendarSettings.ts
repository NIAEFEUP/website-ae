import { GlobalConfig } from "payload";
import { isStaff } from "@/lib/utils";

export const CalendarSettings: GlobalConfig = {
  slug: "calendar-settings",
  label: "Configurações do Calendário",
  admin: {
    group: "Reservas de Espaço e Material",
  },
  access: {
    read: () => true,
    update: isStaff,
  },
  fields: [
    {
      name: "calendarLink",
      label: "Link Público ou ID do Google Calendar",
      type: "text",
      admin: {
        description:
          "Insira o ID do Google Calendar (ex: exemplo@group.calendar.google.com), o link público/incorporado (embed) ou o código iframe. Se não for preenchido, será utilizado o valor da variável de ambiente GOOGLE_CALENDAR_ID.",
      },
    },
    {
      name: "calendarApiKey",
      label: "Chave da API do Google Calendar",
      type: "text",
      admin: {
        description:
          "Opcional. Chave de API da Google Cloud com acesso à Google Calendar API. Se não for preenchido, será utilizado o valor da variável de ambiente GOOGLE_CALENDAR_API_KEY.",
      },
    },
    {
      name: "displayMode",
      label: "Modo de Visualização",
      type: "select",
      defaultValue: "fullcalendar",
      options: [
        {
          label: "FullCalendar (estilizado e anónimo com 'Ocupado')",
          value: "fullcalendar",
        },
        {
          label: "Embed Direto (iframe do Google Calendar)",
          value: "iframe",
        },
      ],
      admin: {
        description:
          "FullCalendar requer chave de API válida para carregar os eventos. Se preferir não usar chave de API, use o Embed Direto.",
      },
    },
  ],
};
