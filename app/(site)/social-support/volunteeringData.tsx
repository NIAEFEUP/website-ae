import { Feature } from "@/types/feature";
import { BookOpenText, HandHeart } from "lucide-react";

const volunteeringData: Feature[] = [
  {
    id: 1,
    icon: <HandHeart />,
    title: "Voluntariado UP",
    description:
      "O objetivo é estimular a comunidade académica, em especial os estudantes, a envolverem-se em atividades de responsabilidade social com vista à promoção do bem comum e de uma maior justiça social, em regime livre, generoso e totalmente voluntário. Ser voluntário na U.Porto implica, quer para as entidades de acolhimento, quer para o voluntário, o assumir de um compromisso, de acordo com os princípios prosseguidos pela U.Porto.",
    href: "https://www.up.pt/portal/pt/voluntariado/"
  },
  {
    id: 2,
    icon: <BookOpenText />,
    title: "G.A.S.Porto",
    description:
      "O G.A.S.Porto é uma ONGD criada em Abril de 2002 que desenvolve projetos de voluntariado na cidade do Porto em parceria com 18 instituições sociais, trabalhando com crianças de bairros sociais, jovens institucionalizados, idosos isolados, pessoas com deficiência mental, pessoas em situação sem-abrigo e mães adolescentes. Internacionalmente o seu trabalho realiza-se em Moçambique e Timor-Leste, onde desenvolve projetos principalmente nas áreas de Educação e Saúde.",
    href: "https://gasporto.org/"
  },
];

export default volunteeringData;
