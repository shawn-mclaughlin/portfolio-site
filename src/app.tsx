import NavBar from "./layout/nav-bar.tsx";
import Subsection from "./common/subsection.tsx";
import Introduction from "./introduction/introduction.tsx";
import SkillGrid from "./skills/skill-grid.tsx";
import CareerTimeline from "./career/career-timeline.tsx";
import Qualifications from "./qualifications/qualifications.tsx";

export default function App() {
  const sections = [
    {
      title: "Skills",
      id: "skills",
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
      <NavBar sectionDetails={sections} />
      <main className="m-auto max-w-7xl flex-grow">
        <Subsection id={"home"}>
          <Introduction />
        </Subsection>
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
