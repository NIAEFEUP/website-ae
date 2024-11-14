import { Feature } from "@/types/feature";
import { Home, Globe, Users } from "lucide-react";

const landingFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <Home />,
    title: "Bem-Vindo",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
},
  {
    id: 2,
    icon: <Globe />,
    title: "Objetivo",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
},
  {
    id: 3,
    icon: <Users />,
    title: "Comunidade",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
},
];

export default landingFeaturesData;
