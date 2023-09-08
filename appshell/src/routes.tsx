import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages";
import DashboardPage from "./pages/dashboard";
import RemoteOnePage from "./pages/remoteOne";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/remoteOne",
    element: <RemoteOnePage />,
  },
]);
