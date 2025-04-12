import React from "react";
import { createBrowserRouter } from "react-router-dom";

import CustomErrorPage from "./components/errorContext/ErrorRoute.tsx";

const LazyHomepage = React.lazy(
  () => import("./components/Homepage/Homepage.tsx")
);
const LazyUniverse3D = React.lazy(
  () => import("./components/Universe3D/Universe3D.tsx")
);
const LazyLaunchSpaceship = React.lazy(
  () => import("./components/LaunchSpaceship/LaunchSpaceship.tsx")
);

export const useAppRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <LazyHomepage />,
      errorElement: <CustomErrorPage />,
    },
    {
      path: "/Universe3D",
      element: <LazyUniverse3D />,
      errorElement: <CustomErrorPage />,
    },
    {
      path: "/LaunchSpaceship",
      element: <LazyLaunchSpaceship />,
      errorElement: <CustomErrorPage />,
    },
  ]);
};
