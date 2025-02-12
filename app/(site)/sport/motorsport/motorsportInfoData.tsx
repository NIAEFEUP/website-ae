import { InfoSection } from "@/types/infoSection";
import { Globe, Instagram } from "lucide-react";

export const motorsportInfoData : InfoSection[] = [
  {
    id: 1,
    title: "Formula Student",
    subtitle: "Em 2021 começou a história da FS FEUP",
    text: "A FS FEUP é uma equipa sediada na Universidade do Porto, composta por cerca de 60 estudantes, que desde 2022 soma consecutivas vitórias em competições internacionais. A missão da equipa é promover o desenvolvimento pessoal dos estudantes, dando-lhes a oportunidade de fazerem parte de algo maior, através do desenvolvimento de protótipos ao estilo Formula Student – formando pessoas preparadas para o mercado de trabalho. A equipa inclui estudantes de várias áreas de engenharia, como mecânica, eletrónica, informática, entre outros cursos.",
    email: "formulastudentfeup@gmail.com",
    imageSrc: "/images/motorsport/Formula Student Team.jpg",
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
    subtitle: "Em 2023 começou a história da MS FEUP",
    text: "A Moto Student é um grupo dedicado de estudantes da FEUP, comprometido em impulsionar a área da engenharia de desportos motorizados através de design de precisão e inovação, com foco na sustentabilidade. A sua missão é aplicar conhecimentos técnicos e no desenvolvimento de uma moto de competição elétrica, promovendo o trabalho em equipa e a ligação entre o meio académico e o setor industrial. Contam com uma equipa multidisciplinar, que reúne estudantes de engenharia mecânica, eletrotécnica, informática, gestão industrial, entre outras áreas.",
    email: "motostudentfeup@fe.up.pt",
    imageSrc: "/images/motorsport/Moto Student Team.jpg",
    avatar: <Instagram size={48} className="text-primary" />,
    link: {
      path: "/www.instagram.com/msfeup/",
      text: "Learn More",
      showIcon: true,
      icon: <Instagram size={16} className="text-current" />,
    },
  },
];
