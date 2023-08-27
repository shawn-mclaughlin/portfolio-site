import SkillCard from "./skill-card.tsx";
import Skill from "./skill.ts";

export default function SkillGrid() {
  const skills: Skill[] = [
    {
      name: "Go",
      description: "The Go programming language",
      logo: "go-logo-blue.png",
      url: "https://go.dev/",
      skillLevel: 2,
    },
    {
      name: "C#",
      description: "The C# programming language",
      logo: "csharp-logo.svg",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
      skillLevel: 3,
    },
    {
      name: "MongoDB",
      description: "The Go programming language",
      logo: "go-logo-blue.png",
      url: "https://go.dev/",
      skillLevel: 2,
    },
    {
      name: "SQL",
      description: "The Go programming language",
      logo: "go-logo-blue.png",
      url: "https://go.dev/",
      skillLevel: 2,
    },
    {
      name: "React",
      description: "React web framework",
      logo: "go-logo-blue.png",
      url: "https://react.dev/",
      skillLevel: 2,
    },
    {
      name: "HTML",
      description: "The Go programming language",
      logo: "go-logo-blue.png",
      url: "https://go.dev/",
      skillLevel: 2,
    },
    {
      name: "CSS",
      description: "The Go programming language",
      logo: "go-logo-blue.png",
      url: "https://go.dev/",
      skillLevel: 1,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </>
  );
}
