import React from "react";
import RootPage from "../pages";
import ProfilePage from "../pages/profile";
import { NavigationManager } from "../components/NavigationManager";
import { Outlet, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
];
