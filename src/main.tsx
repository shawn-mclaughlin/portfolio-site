import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import SkillGrid from "./skills/skill-grid.tsx";
import Introduction from "./introduction/introduction.tsx";
import PersonalPage from "./personal/personal-page.tsx";
import CareerTimeline from "./career/career-timeline.tsx";
import QualificationsPage from "./qualifications/qualifications-page.tsx";
import Subsection from "./common/subsection.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen antialiased">
      <header className="sticky top-0 z-50 bg-sky-700 text-white">
        <nav className={"m-auto flex w-11/12 items-center justify-end"}>
          <a href={"#home"} className="m-4 text-2xl">
            Home
          </a>
          <a href={"#skills"} className="m-4 text-2xl">
            Skills
          </a>
          <a href={"#career"} className="m-4 text-2xl">
            Career
          </a>
          <a href={"#qualifications"} className="m-4 text-2xl">
            Qualifications
          </a>
          <a href={"#personal"} className="m-4 text-2xl">
            Personal
          </a>
        </nav>
      </header>
      <main className="m-auto max-w-7xl flex-grow">
        <Subsection id={"home"}>
          <Introduction />
        </Subsection>
        <Subsection id={"skills"} heading="Skills">
          <SkillGrid />
        </Subsection>
        <Subsection id={"career"} heading="Career Timeline">
          <CareerTimeline />
        </Subsection>
        <Subsection id={"qualifications"} heading="Qualifications">
          <QualificationsPage />
        </Subsection>
        <Subsection id={"personal"} heading="Personal Life">
          <PersonalPage />
        </Subsection>
      </main>
    </div>
  </React.StrictMode>,
);
