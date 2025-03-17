import { InfoSection } from "@/types/infoSection";
import { Globe, Instagram } from "lucide-react";

export const motorsportInfoData: InfoSection[] = [
  {
    id: 1,
    title: "Formula Student",
    subtitle: "Em 2021 começou a história da FS FEUP",
    text: (
      <>
        A Formula Student FEUP é uma equipa sediada na Universidade do Porto, composta por cerca de 60 estudantes de diversas áreas da engenharia, como mecânica, eletrónica e informática, entre outras. O projeto teve início em julho de 2021, quando um grupo de pouco mais de 10 estudantes altamente motivados decidiu transformar um sonho comum em realidade: conceber, projetar, fabricar e montar, em apenas dois anos, o primeiro protótipo Formula Student da Universidade do Porto. 
        <br />
        <br />
        Desde 2022, a equipa tem alcançado sucessivas vitórias em competições internacionais, consolidando-se como uma referência na área. 
      </>
    ),
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
    text: (
      <>
        A Moto Student FEUP é uma equipa de competição universitária da Universidade do Porto, fundada em 2023, com o objetivo de participar na competição internacional MotoStudent. Esta competição desafia equipas universitárias a projetar, desenvolver e construir uma moto de competição, promovendo a inovação e o avanço tecnológico na engenharia de desportos motorizados.
        <br />
        <br />
        A equipa reúne estudantes de diversas áreas, como engenharia mecânica, eletrotécnica, informática e gestão industrial, entre outras, proporcionando um ambiente multidisciplinar que fomenta a aprendizagem e o desenvolvimento de competências técnicas e de gestão.
        <br />
        <br />
        Comprometida com o design de precisão, a inovação e a sustentabilidade, a Moto Student FEUP aposta na engenharia aplicada para criar soluções avançadas e contribuir para a evolução do setor dos desportos motorizados.
      </>
    ),
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
