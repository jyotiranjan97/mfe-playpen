import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import RootPage from "../pages";
import DashboardPage from "../pages/dashboard";
import { remoteOneRoutingPrefix, remoteTwoRoutingPrefix } from "./constants";

const RemoteOneLazy = lazy(() => import("../pages/remoteOne"));
const RemoteTwoLazy = lazy(() => import("../pages/remoteTwo"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: `/${remoteOneRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading RemoteOne...">
        <RemoteOneLazy />
      </Suspense>
    ),
  },
  {
    path: `/${remoteTwoRoutingPrefix}/*`,
    element: (
      <Suspense fallback="Loading RemoteOne...">
        <RemoteTwoLazy />
      </Suspense>
    ),
  },
];
