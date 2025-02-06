import { Feature } from "@/types/feature";
import { BookOpen, Award, Globe, Star, Briefcase } from "lucide-react"; // Example icons from a library

const scholarshipData: Feature[] = [
  {
    id: 1,
    icon: <BookOpen />,
    title: "Bolsas de Ação Social (SASUP)",
    description: "Apoio financeiro para estudantes com dificuldades económicas.",
    href: "https://sigarra.up.pt/sasup/pt/web_base.gera_pagina?P_pagina=277656",
  },
  {
    id: 2,
    icon: <BookOpen />,
    title: "Bolsas Porto de Conhecimento",
    description: "Programa de bolsas para incentivar o conhecimento e a inovação.",
    href: "https://www.cm-porto.pt/files/uploads/cms/Condicoes_de_atribuicao_2024.pdf",
  },
  {
    id: 3,
    icon: <Award />,
    title: "Bolsas Millennium",
    description: "Bolsas de estudo promovidas pelo Millennium bcp.",
    href: "https://ind.millenniumbcp.pt/pt/Institucional/fundacao/Documents/Regulamento-bolsas-estudo.pdf",
  },
  {
    id: 4,
    icon: <Globe />,
    title: "Bolsas Instituto Camões",
    description: "Apoio para estudantes de países em desenvolvimento da comunidade PALOP.",
    href: "https://www.instituto-camoes.pt/activity/o-que-fazemos/bolsas-estudo",
  },
  {
    id: 5,
    icon: <Star />,
    title: "Bolsas Huawei",
    description: "Bolsas de mérito para estudantes destacados.",
    href: "https://programadebolsashuawei.pt/",
  },
  {
    id: 6,
    icon: <Award />,
    title: "Bolsas DGES (Mérito)",
    description: "Bolsas por mérito atribuídas pela DGES.",
    href: "https://www.dges.gov.pt/pt/pagina/bolsas-por-merito",
  },
  {
    id: 7,
    icon: <Briefcase />,
    title: "Bolsas FCT (Doutoramento e Investigação)",
    description: "Apoio financeiro para programas de doutoramento e investigação.",
    href: "https://www.fct.pt/financiamento/programas-de-financiamento/bolsas/",
  },
  {
    id: 8,
    icon: <Globe />,
    title: "Bolsas Carnegie Mellon",
    description: "Bolsas para programas de doutoramento afiliados ao Carnegie Mellon Portugal.",
    href: "https://www.cmuportugal.org/events/info-session-how-to-apply-for-a-cmu-portugal-affiliated-ph-d-programs-scholarship/",
  },
  {
    id: 9,
    icon: <Globe />,
    title: "Bolsas MIT",
    description: "Bolsas de estudo para programas em parceria com o MIT Portugal.",
    href: "https://www.mitportugal.org/",
  },
  {
    id: 10,
    icon: <Briefcase />,
    title: "Bolsas Santander Estudantes",
    description: "Apoio financeiro para estudos, mobilidade académica, investigação e estágios.",
    href: "https://app.becas-santander.com/pt/program/search?category=STUDIES&status=open",
  },
  {
    id: 11,
    icon: <Award />,
    title: "Bolsas Calouste Gulbenkian",
    description: "Diversas bolsas para apoio académico e de investigação.",
    href: "https://gulbenkian.pt/bolsas-lista/",
  },
];

export default scholarshipData;
