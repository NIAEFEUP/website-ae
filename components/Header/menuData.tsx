import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
      {
        id: 37,
        title: "Features",
        newTab: false,
        path: "/#features",
      },
      {
        id: 38,
        title: "Support",
        newTab: false,
        path: "/support",
      },
    ],
  },
  {
    id: 5,
    title: "Desporto",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "História e Troféus",
        newTab: false,
        path: "/sport/teams",
      },
      {
        id: 52,
        title: "Seleções",
        newTab: false,
        path: "/sport/teams",
      },
      {
        id: 53,
        title: "Velocidade",
        newTab: false,
        path: "/sport/teams",
      },
    ],
  },
  {
    id: 7,
    title: "AEFEUP",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Núcleos e Associações",
        newTab: false,
        path: "/aefeup/associations",
      }
    ]
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    path: "/services"

  },
  {
    id: 6,
    title: "Contact us",
    newTab: false,
    path: "/contacts"
  },
];

export default menuData;
