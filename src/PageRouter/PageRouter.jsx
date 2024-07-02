import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import route from "./route.json";
import ErrorPage from "../components/ErrorPage";

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: `${route.HOME}`,
      element: <MainComponent />,
    },
    {
      path: `${route.ERROR}`,
      element: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default PageRouter;
