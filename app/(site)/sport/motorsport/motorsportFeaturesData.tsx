import { Feature } from "@/types/feature";
import { Car, Earth, Users } from "lucide-react";

const motorsportFeaturesData: Feature[] = [
  {
    id: 1,
    icon: <Car />,
    title: "Sobre",
    description:"Ambas as equipas oferecem aos estudantes da Universidade do Porto uma oportunidade única de aplicar os seus conhecimentos académicos em desafios tecnológicos no setor automóvel com a Moto Student FEUP centrada no desenvolvimento de uma moto elétrica de competição, e a Formula Student FEUP dedicando-se à construção de protótipos de carros de corrida.",

  },
  {
    id: 2,
    icon: <Users />,
    title: "Equipas",
    description:"Nestas associações encontramos uma equipa multidisciplinar, onde a forte união e dedicação são motores para a criação de um ambiente colaborativo que promove o desenvolvimento de conhecimentos técnicos do meio académico e que são aplicáveis ao setor tecnológico e industrial.",
  },
  {
    id: 3,
    icon: <Earth />,
    title: "Missão",
    description:"A Moto Student FEUP visa projetar e desenvolver uma moto elétrica de competição, focada na sustentabilidade e inovação. E a Formula Student procura projetar e desenvolver protótipos de carros de corrida, abrangendo tanto veículos de combustão como elétricos.À parte dos objetivos de cada projeto, as duas equipas têm como missão preparar os estudantes para os desafios do mercado industrial e tecnológico, formando engenheiros altamente capacitados.",
  }
];

export default motorsportFeaturesData;
