import { ArrowRight } from "lucide-react";

export const landingInfoData = [
  {
    id: 1,
    title: "Temos Novidades!",
    subtitle: "Já podes comprar a merchandising da AEFEUP online.",
    text: "Não percas tempo com filas de espera e garante já a tua peça merch favorita! Representa a tua faculdade em qualquer lugar.",
    imageSrc: "/images/landing/merch.jpeg",
    link: {
      path: "/www.instagram.com/aefeup/", //link to page
      text: "Ver Novidades!",
      showIcon: true,
      icon: <ArrowRight size={16} className="text-current" />,
    },

  },
];
