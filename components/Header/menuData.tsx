import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    title: "AEFEUP",
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
        title: "Eventos",
        path: "events"
      },
      {
        title: "Núcleos e Associações",
        path: "associations"
      },
      {
        title: "Documentos (wip)",
        path: "documents"
      },
    ],
  },
  {
    title: "Estudante",
    submenu: [
      {
        title: "Bem-vindo à FEUP (wip)",
        path: "student/welcome"
      },
      {
        title: "Guia do Estudante",
        path: "student/guide"
      },
      {
        title: "Espaços (wip)",
        path: "student/spaces"
      },
      {
        title: "Oportunidades (wip)",
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
        title: "História e Troféus (wip)",
        path: "sport/history"
      },
      {
        title: "Seleções",
        path: "sport/teams"
      },
      {
        title: "Motorsport (wip)",
        path: "sport/motorsport"
      },
    ],
  },
  {
    title: "Loja (wip)",
    path: "store",
  },
  {
    title: "Contactos",
    path: "contact",
  },
];

export default menuData;
