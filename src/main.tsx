import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { uiRoutes } from "@components/header/ui-routes.ts";
import { Home } from "@views/home/index.tsx";
import { Projects } from "@views/projects/index.tsx";
import { Resume } from "@views/resume/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: uiRoutes.home,
        element: <Home />,
      },
      {
        path: uiRoutes.projects,
        element: <Projects />,
      },
      {
        path: uiRoutes.resume,
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
