import Skill from "./skill.ts";
import {
  SiGo,
  SiCsharp,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";
import SkillCard from "./skill-card.tsx";

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Go",
      icon: SiGo,
    },
    {
      name: "C#",
      icon: SiCsharp,
    },
    {
      name: "Javascript",
      icon: SiJavascript,
    },
    {
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      name: "C++",
      icon: SiCplusplus,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "SQL Server",
      icon: SiMicrosoftsqlserver,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
  ];

  return (
    <section id="skills" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-4 2xl:w-4/5">
      <h1 className="mb-4 text-4xl">Skill Set</h1>
      <div className="grid grid-cols-3 place-items-center gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
