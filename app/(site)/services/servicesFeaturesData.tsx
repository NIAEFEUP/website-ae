import { Feature } from "@/types/feature";
import { Utensils } from 'lucide-react';
import { Printer } from 'lucide-react';
import { ScrollText } from 'lucide-react';



const servicesFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <ScrollText />,
    title: "Secretaria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 2,
    icon: <Printer />,
    title: "Reprografia Efeitos Gráficos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 3,
    icon: <Utensils />,
    title: "Cafetaria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
];

export default servicesFeaturesData;
