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
import SkillCard from "./skill-card.tsx";

export default function Skills() {
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
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "SQL",
      icon: SiMysql,
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
    <section id="skillset" className="mx-auto w-11/12 max-w-7xl scroll-mt-24 py-24 2xl:w-4/5">
      <h1 className="mb-4 text-4xl">Skillset</h1>
      <div className="md: grid grid-cols-2 place-items-center gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <div className="w-full">
            <SkillCard key={index} skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
