import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home/Home";
import AppsPage from "../pages/Apps/AppsPage";
import Installation from "../pages/Installation/installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        loader: ()=>fetch('appsData.json'),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: ()=>fetch('appsData.json'),
        Component: AppsPage,
      },
      {
        path: "/installation",
        Component: Installation,
      }
    ],
  },
]);
