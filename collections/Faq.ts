import { isStaff } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const Faq: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: 'Faq',
    plural: 'Faqs'
  },
  admin: {
    useAsTitle: 'quest',
    group: 'AEFEUP'
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff
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