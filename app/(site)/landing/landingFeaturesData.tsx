import { Feature } from "@/types/feature";
import { HandPlatter, Map, HeartPulse, Building } from "lucide-react";

const landingFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <Building />,
    title: "Cedências de Espaço",
    description: "",
    href: "requests"
  },
  {
    id: 2,
    icon: <HandPlatter />,
    title: "Serviços",
    description: "",
    href: "services"
  },
  {
    id: 3,
    icon: <Map />,
    title: "Espaços",
    description: "",
    href: "student/spaces"
  },
  {
    id: 4,
    icon: <HeartPulse />,
    title: "Apoio Social e Bem-Estar",
    description: "",
    href: "student/support"
  },
];

export default landingFeaturesData;
