import { CollectionConfig } from "payload";

export const Faq: CollectionConfig = {
  slug:'faq',
  labels: {
    singular: 'Faq',
    plural: 'Faqs'
  },
  fields: [
    {
      name: 'quest',
      label: 'Question',
      type: 'text',
      required: true,
    },
    {
      name: 'ans',
      label: 'Answer',
      type: 'text',
      required: true,
    },
  ]
}