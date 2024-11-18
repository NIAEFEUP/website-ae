import { Globe, Instagram } from "lucide-react";

export const motorsportInfoData = [
  {
    id: 1,
    title: "Formula Student",
    subtitle: "IN JULY 2021 THE FS FEUP STORY BEGAN",
    text: "FS FEUP is a team, based at the University of Porto, of around 60 students. The team’s Mission Statement is: “To foster students’ self-development, by providing them with the chance to be part of something bigger together, by developing Formula Student-spec prototypes – resulting in career-ready people.“The team comprises students from various engineering branches such as mechanical, electronic, informatics, and other courses.",
    email: "formulastudentfeup@gmail.com",
    imageSrc: "/images/motorsport/fsfeup_logo.jpeg",
    avatar: <Globe size={48} className="text-primary" />,
    link: {
      url: "https://formulastudent.fe.up.pt/",
      text: "Learn More",
      showIcon: true,
      icon: <Globe size={16} className="text-current" />,
    },
  },
  {
    id: 2,
    title: "Moto Student",
    subtitle: "IN NOVEMBER 2023 THE MS FEUP STORY BEGAN",
    text: "Moto Student is a dedicated group of FEUP students committed to advancing the field of motorsports engineering through precision design and innovation.",
    email: "motostudentfeup@fe.up.pt",
    imageSrc: "/images/motorsport/moto_student_feup_logo.jpeg",
    avatar: <Instagram size={48} className="text-primary" />,
    link: {
      url: "https://www.instagram.com/msfeup/",
      text: "Learn More",
      showIcon: true,
      icon: <Instagram size={16} className="text-current" />,
    },
  },
];
