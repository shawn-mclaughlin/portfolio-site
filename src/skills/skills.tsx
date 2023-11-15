import SkillCard from "./skill-card.tsx";
import Skill from "./skill.ts";
import {
  SiGo,
  SiCsharp,
  SiMongodb,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills: Skill[] = [
    {
      name: "Go",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 3,
      icon: SiGo,
      iconColor: "#00ADD8",
    },
    {
      name: "C#",
      description: "The C# programming language",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
      skillLevel: 3,
      icon: SiCsharp,
      iconColor: "#239120",
    },
    {
      name: "MongoDB",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 2,
      icon: SiMongodb,
      iconColor: "#47A248",
    },
    {
      name: "SQL",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 2,
      icon: SiMysql,
      iconColor: "#4479A1",
    },
    {
      name: "React",
      description: "React web framework",
      url: "https://react.dev/",
      skillLevel: 2,
      icon: SiReact,
      iconColor: "#61DAFB",
    },
    {
      name: "HTML",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 2,
      icon: SiHtml5,
      iconColor: "#E34F26",
    },
    {
      name: "CSS",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 1,
      icon: SiCss3,
      iconColor: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      description: "The Go programming language",
      url: "https://go.dev/",
      skillLevel: 2,
      icon: SiTailwindcss,
      iconColor: "#06B6D4",
    },
  ];

  return (
    <section id="skillset" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-24 2xl:w-4/5">
      <h1 className="mb-4 text-4xl">Skillset</h1>
      <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill, index) => (
          <div className="w-full">
            <SkillCard key={index} skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
