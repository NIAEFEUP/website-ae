import { Feature } from "@/types/feature";
import { BookOpen, Award, Globe, Star, Briefcase } from "lucide-react";

const scholarshipData: Feature[] = [
  {
    id: 1,
    icon: <BookOpen />,
    title: "Bolsas de Ação Social (SASUP)",
    href: "https://sigarra.up.pt/sasup/pt/web_base.gera_pagina?P_pagina=277656",
    category: "acao-social",
  },
  {
    id: 2,
    icon: <BookOpen />,
    title: "Bolsas Porto de Conhecimento",
    href: "https://www.cm-porto.pt/files/uploads/cms/Condicoes_de_atribuicao_2024.pdf",
    category: "acao-social",
  },
  {
    id: 3,
    icon: <Award />,
    title: "Bolsas Millennium",
    href: "https://ind.millenniumbcp.pt/pt/Institucional/fundacao/Documents/Regulamento-bolsas-estudo.pdf",
    category: "acao-social",
  },
  {
    id: 4,
    icon: <Globe />,
    title: "Bolsas Instituto Camões",
    href: "https://www.instituto-camoes.pt/activity/o-que-fazemos/bolsas-estudo",
    category: "palop",
  },
  {
    id: 5,
    icon: <Star />,
    title: "Bolsas Huawei",
    href: "https://programadebolsashuawei.pt/",
    category: "merito",
  },
  {
    id: 6,
    icon: <Award />,
    title: "Bolsas DGES (Mérito)",
    href: "https://www.dges.gov.pt/pt/pagina/bolsas-por-merito",
    category: "merito",
  },
  {
    id: 7,
    icon: <Briefcase />,
    title: "Bolsas FCT (Doutoramento e Investigação)",
    href: "https://www.fct.pt/financiamento/programas-de-financiamento/bolsas/",
    category: "doutoramento",
  },
  {
    id: 8,
    icon: <Globe />,
    title: "Bolsas Carnegie Mellon",
    href: "https://www.cmuportugal.org/events/info-session-how-to-apply-for-a-cmu-portugal-affiliated-ph-d-programs-scholarship/",
    category: "doutoramento",
  },
  {
    id: 9,
    icon: <Globe />,
    title: "Bolsas MIT",
    href: "https://www.mitportugal.org/",
    category: "doutoramento",
  },
  {
    id: 10,
    icon: <Briefcase />,
    title: "Bolsas Santander Estudantes",
    href: "https://app.becas-santander.com/pt/program/search?category=STUDIES&status=open",
    category: "outras",
  },
  {
    id: 11,
    icon: <Award />,
    title: "Bolsas Calouste Gulbenkian",
    href: "https://gulbenkian.pt/bolsas-lista/",
    category: "outras",
  },
  {
    id: 12,
    icon: <Briefcase />,
    title: "DGES",
    href: "https://www.dges.gov.pt/pt/pagina/informacoes?plid=373",
    category: "acao-social",
  },
];

export default scholarshipData;
