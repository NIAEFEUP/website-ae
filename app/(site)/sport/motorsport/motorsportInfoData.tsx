import { InfoSection } from "@/types/infoSection";
import { Globe, Instagram } from "lucide-react";

export const motorsportInfoData : InfoSection[] = [
  {
    id: 1,
    title: "Formula Student",
    subtitle: "Em 2021 a história da FSFEUP começou",
    text: "A FS FEUP é uma equipa sediada na Universidade do Porto, composta por cerca de 60 estudantes. A missão da equipa é: Promover o desenvolvimento pessoal dos estudantes, dando-lhes a oportunidade de fazerem parte de algo maior, através do desenvolvimento de protótipos ao estilo Formula Student – formando pessoas preparadas para o mercado de trabalho. A equipa inclui estudantes de várias áreas de engenharia, como mecânica, eletrónica, informática, entre outros cursos.",
    email: "formulastudentfeup@gmail.com",
    imageSrc: "/images/motorsport/fsfeup_logo.jpeg",
    avatar: <Globe size={48} className="text-primary" />,
    link: {
      path: "/formulastudent.fe.up.pt",
      text: "Learn More",
      showIcon: true,
      icon: <Globe size={16} className="text-current" />,
    },
  },
  {
    id: 2,
    title: "Moto Student",
    subtitle: "Em novembro de 2023 a história da MSFEUP começou",
    text: "A Moto Student é um grupo dedicado de estudantes da FEUP, comprometido em impulsionar a área da engenharia de desportos motorizados através de design de precisão e inovação.",
    email: "motostudentfeup@fe.up.pt",
    imageSrc: "/images/motorsport/moto_student_feup_logo.jpeg",
    avatar: <Instagram size={48} className="text-primary" />,
    link: {
      path: "/www.instagram.com/msfeup/",
      text: "Learn More",
      showIcon: true,
      icon: <Instagram size={16} className="text-current" />,
    },
  },
];
