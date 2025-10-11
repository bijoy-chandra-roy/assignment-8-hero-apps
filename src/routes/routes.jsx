import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home/Home";
import AppsPage from "../pages/Apps/AppsPage";
import Installation from "../pages/Installation/installation";
import AppNotFound from "./../pages/Apps/AppNotFound";
import AppDetails from "./../pages/Apps/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json").then(res => res.json()),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json").then(res => res.json()),
        Component: AppsPage,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json").then(res => res.json()),
        Component: Installation,
      },
      {
        path: "/appdetails/:id",
        loader: () => fetch("/appsData.json").then(res => res.json()),
        Component: AppDetails,
      },
    ],
  },
]);
