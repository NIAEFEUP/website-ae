import { Menu } from "@/types/menu";

// TODO: add path attribute to the respective menu/submenu

const menuData: Menu[] = [
  {
    id: 1,
    title: "AEFEUP",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Quem Somos",
        newTab: false,
      },
      {
        id: 12,
        title: "História da AEFEUP",
        newTab: false,
      },
      {
        id: 13,
        title: "Cedências de Espaço",
        newTab: false,
      },
      {
        id: 14,
        title: "Serviços",
        newTab: false,
      },
      {
        id: 15,
        title: "Eventos",
        newTab: false,
      },
      {
        id: 16,
        title: "Núcleos e Associações",
        newTab: false,
      },
      {
        id: 17,
        title: "Documentos",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Estudante",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Bem-vindo à FEUP",
        newTab: false,
      },
      {
        id: 22,
        title: "Guia do Estudante",
        newTab: false,
      },
      {
        id: 23,
        title: "Espaços",
        newTab: false,
      },
      {
        id: 24,
        title: "Oportunidades",
        newTab: false,
      },
      {
        id: 25,
        title: "Apoio Social e Bem-Estar",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Desporto",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Seleções",
        newTab: false,
      },
      {
        id: 22,
        title: "História e Troféus",
        newTab: false,
      },
      {
        id: 23,
        title: "Motorsport",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Loja",
    newTab: false,
  },
  {
    id: 4,
    title: "Contactos",
    newTab: false,
  },
];

export default menuData;
