import { Feature } from "@/types/feature";
import { BookOpenText, HandHeart, HeartHandshake } from "lucide-react";

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
  {
    id: 3,
    icon: <HeartHandshake />,
    title: "Voluntariado AEFEUP",
    description:
      "O voluntariado promovido pela AEFEUP é uma iniciativa que visa envolver a comunidade académica da FEUP em ações solidárias, proporcionando oportunidades para que os estudantes participem ativamente na construção de um ambiente social mais solidário. Através de diversas atividades, como a confeção e distribuição de refeições quentes aos mais necessitados, limpeza de zonas ao ar livre, recolha e posterior doação de bens, promoção do bem-estar animal, entre outros. A AEFEUP incentiva os alunos a contribuírem para a sociedade organizando ações de voluntariado que ocorrem a cada duas semanas ao longo do ano letivo, exceto nos períodos de interrupção letiva, em conjunto com diferentes associações!",
  },

];

export default volunteeringData;
