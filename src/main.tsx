import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { uiRoutes } from "@components/header/ui-routes.ts";
import { Home } from "@views/home/index.tsx";
import { Projects } from "@views/projects/index.tsx";
import { Resume } from "@views/resume/index.tsx";
import { Seo } from "@components/seo/index.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: uiRoutes.home,
        element: (
          <Fragment>
            <Seo
              indexPage={true}
              title="Home"
              description="Learn about me, Jahnuel Dorelus and my adventures through the forest of web development."
              canonicalPathname={uiRoutes.home}
            />
            <Home />
          </Fragment>
        ),
      },
      {
        path: uiRoutes.projects,
        element: (
          <Fragment>
            <Seo
              indexPage={true}
              title="Projects"
              description="Check out the projects I've created for personal use and the benefit of others."
              canonicalPathname={uiRoutes.projects}
            />
            <Projects />
          </Fragment>
        ),
      },
      {
        path: uiRoutes.resume,
        element: (
          <Fragment>
            <Seo
              indexPage={true}
              title="Resume"
              description="Review my talents, education, and experiences as a web developer."
              canonicalPathname={uiRoutes.resume}
            />
            <Resume />
          </Fragment>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
