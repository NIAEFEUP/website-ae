import { Feature } from "@/types/feature";
import { HandPlatter, Map, HeartPulse, Building } from "lucide-react";

const landingFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <Building />,
    title: "Cedências de Espaço",
    description: "Dispomos de um programa de apoio às estruturas estudantis que permite o aluguer dos espaços da Associação, bem como de materiais que sejam pretendidos. Efetua aqui a tua pré-reserva, verificando o calendário de disponibilidades do edifício e do material.",
    href: "requests"
  },
/*   {
    id: 2,
    icon: <HandPlatter />,
    title: "Serviços",
    description: "",
    href: "services"
  }, */
  {
    id: 2,
    icon: <HandPlatter />,
    title: "Ementas",
    description: "Oferecemos uma seleção variada de snacks, refeições e bebidas no nosso bar. Consulta aqui nossa ementa fixa e semanal para aproveitares os melhores momentos de pausa entre as aulas.",
    href: "menu"
  },
  {
    id: 3,
    icon: <Map />,
    title: "Espaços",
    description: "Apresentamos-te informações detalhadas sobre os locais de alojamento, alimentação, estudo e mobilidade, com horários de funcionamento atualizados e um mapa interativo que te ajuda a localizar rapidamente cada um desses espaços. Explora aqui o mapa e planifica o teu tempo!",
    href: "student/spaces"
  },
/*   {
    id: 4,
    icon: <HeartPulse />,
    title: "Apoio Social e Bem-Estar",
    description: "",
    href: "student/support"
  }, */
];

export default landingFeaturesData;
