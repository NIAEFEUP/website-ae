import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    title: "AEFEUP",
    path: "",
    submenu: [
      {
        title: "Quem Somos",
        path: "about",
      },
      {
        title: "História da AEFEUP",
        path: "history",
      },
      {
        title: "Cedências de Espaço",
        path: "requests"
      },
      {
        title: "Serviços",
        path: "services"
      },
      {
        title: "Ementa Bar",
        path: "menu"
      },
      {
        title: "Eventos",
        path: "events"
      },
      {
        title: "Núcleos e Associações",
        path: "associations"
      },
      {
        title: "Documentos",
        path: "documents"
      },
    ],
  },
  {
    title: "Estudante",
    path: "student",
    submenu: [
      {
        title: "Bem-vindo à FEUP",
        path: "welcome"
      },
      {
        title: "Guia do Estudante",
        path: "guide"
      },
      {
        title: "Espaços",
        path: "spaces"
      },
      {
        title: "Oportunidades",
        path: "opportunities"
      },
      {
        title: "Apoio Social e Bem-Estar",
        path: "support"
      },
    ],
  },
  {
    title: "Desporto",
    path: "sport",
    submenu: [
      {
        title: "História e Troféus",
        path: "history"
      },
      {
        title: "Seleções",
        path: "teams"
      },
      {
        title: "Motorsport",
        path: "motorsport"
      },
    ],
  },
/*   {
    title: "Loja",
    path: "/shop",
  }, */
  {
    title: "Contactos",
    path: "/contact",
  },
];

export default menuData;
