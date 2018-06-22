import React from 'react';

const LinksRoutes = {};

const setLinks = () => {
   LinksRoutes.mainLinksRoutes = [
    {
      path: "/",
      component: React.components.Home,
      name: "",
      exact: true,
      show: false
    },
    {
      path: "/main",
      component: React.components.CardsGrid,
      name: "Todos"
    },
    {
      path: "/sale",
      component: React.components.CardsGrid,
      name: "Ventas"
    },
    {
      path: "/rent",
      component: React.components.CardsGrid,
      name: "Alquileres"
    },
    ,
    {
      path: "/new",
      component: React.components.CardDetails,
      name: "Nuevo"
    },
    {
      path: "/view",
      component: React.components.CardDetails,
      name: "",
      show: false
    },
    {
      path: "/users",
      component: React.components.UserSection,
      name: "Usuarios"
    }
  ];

  return LinksRoutes;
}

export default setLinks;

