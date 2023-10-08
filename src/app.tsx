import NavBar from "./nav-bar.tsx";
import Subsection from "./common/subsection.tsx";
import SkillGrid from "./skills/skill-grid.tsx";
import CareerTimeline from "./career/career-timeline.tsx";
import Qualifications from "./qualifications/qualifications.tsx";
import AboutMe from "./about/about.tsx";

export default function App() {
  const sections = [
    {
      title: "Skills",
      id: "skillset",
      element: <SkillGrid />,
    },
    {
      title: "Career",
      id: "career",
      element: <CareerTimeline />,
    },
    {
      title: "Qualifications",
      id: "qualifications",
      element: <Qualifications />,
    },
  ];

  return (
    <div className="min-h-screen antialiased">
      <NavBar />
      <AboutMe />
      <main className="m-auto max-w-7xl flex-grow">
        {sections.map((section) => {
          return (
            <Subsection id={section.id} key={section.id} heading={section.title}>
              {section.element}
            </Subsection>
          );
        })}
      </main>
    </div>
  );
}