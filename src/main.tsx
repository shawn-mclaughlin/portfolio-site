import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TechnicalSkillsPage from "./skills/skills-page.tsx";
import Layout from "./layout/layout.tsx";
import IntroPage from "./intro/intro-page.tsx";
import PersonalPage from "./personal/personal-page.tsx";
import CareerPage from "./career/career-page.tsx";
import QualificationsPage from "./qualifications/qualifications-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <IntroPage />
      </Layout>
    ),
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <TechnicalSkillsPage />
      </Layout>
    ),
  },
  {
    path: "/career",
    element: (
      <Layout>
        <CareerPage />
      </Layout>
    ),
  },
  {
    path: "/qualifications",
    element: (
      <Layout>
        <QualificationsPage />
      </Layout>
    ),
  },
  {
    path: "/personal",
    element: (
      <Layout>
        <PersonalPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
