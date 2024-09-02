import { Feature } from "@/types/feature";
import { Heart, Users } from "lucide-react";

const mentalHealthData: Feature[] = [
  {
    id: 1,
    icon: <Heart />,
    title: "Gabinete de Apoio ao Estudante",
    description:
      "O Gabinete de Apoio ao Estudante exerce a sua atividade no âmbito do apoio aos estudantes da FEUP e da promoção do seu bem-estar e sucesso académico.",
    details: [
      "Email: goi@fe.up.pt",
      "Telefone: 220 413 578",
      "Horário: 2ª a 6ª feira das 9:30 às 15:30 ",
    ],
    href: "https://sigarra.up.pt/feup/pt/uni_geral.unidade_view?pv_unidade=892",
  },
  {
    id: 2,
    icon: <Users />,
    title: "Parceria Consultas de Psicologia",
    description:
      "Apoio especializado para ajudar o estudante a desenvolver estratégias para a resolução de problemas em domínios de natureza psicossocial, vocacional e/ou de desenvolvimento pessoal.",
    details: [
      "Email: psigoi@fe.up.pt",
      "Telefone: 220 413 578",
      "Horário: 2ª a 6ª feira das 9:30 às 15:30 ",
    ],
    href: "https://sigarra.up.pt/feup/pt/web_base.gera_pagina?p_pagina=FORMULARIO%20GOI",
  },
];

export default mentalHealthData;
