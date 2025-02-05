import { isStaff } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const FeedbackLinks: CollectionConfig = {
  slug: 'feedbacklinks',
  labels: {
    singular: 'FeedbackLink',
    plural: 'FeedbackLinks'
  },
  admin: {
    useAsTitle: 'name',
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
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      label: 'Link',
      type: 'text',
      required: true,
    },
  ]
}