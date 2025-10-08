import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [{ index: true, path: "/", Component: Home }],
  },
]);
