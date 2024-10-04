import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    title: "AEFEUP",
    submenu: [
      {
        title: "Quem Somos",
        path: "aefeup/about",
      },
      {
        title: "História da AEFEUP",
        path: "aefeup/history",
      },
      {
        title: "Cedências de Espaço",
        path: "aefeup/requests"
      },
      {
        title: "Serviços",
        path: "aefeup/services"
      },
      {
        title: "Eventos",
        path: "aefeup/events"
      },
      {
        title: "Núcleos e Associações",
        path: "aefeup/associations"
      },
      {
        title: "Documentos",
        path: "aefeup/documents"
      },
    ],
  },
  {
    title: "Estudante",
    submenu: [
      {
        title: "Bem-vindo à FEUP",
        path: "student/welcome"
      },
      {
        title: "Guia do Estudante",
        path: "student/guide"
      },
      {
        title: "Espaços",
        path: "student/spaces"
      },
      {
        title: "Oportunidades",
        path: "student/opportunities"
      },
      {
        title: "Apoio Social e Bem-Estar",
        path: "student/support"
      },
    ],
  },
  {
    title: "Desporto",
    submenu: [
      {
        title: "História e Troféus",
        path: "sports/history"
      },
      {
        title: "Seleções",
        path: "sports/teams"
      },
      {
        title: "Motorsport",
        path: "sports/motorsport"
      },
    ],
  },
  {
    title: "Loja",
    path: "store",
  },
  {
    title: "Contactos",
    path: "contacts",
  },
];

export default menuData;
