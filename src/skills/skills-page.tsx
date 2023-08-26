import SkillCard from "./skill-card.tsx";
import Skill from "./skill.ts";

export default function TechnicalSkillsPage() {
    const skills: Skill[] = [
        {
            name: "Go",
            description:"The Go programming language",
            logo: "go-logo-blue.png",
            url:"https://go.dev/",
            skillLevel: 2,
        },
        {
            name: "C#",
            description: "The C# programming language",
            logo: "csharp-logo.svg",
            url:"https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
            skillLevel: 3
        },
        {
            name: "MongoDB",
            description:"The Go programming language",
            logo: "go-logo-blue.png",
            url:"https://go.dev/",
            skillLevel: 2
        },
        {
            name: "SQL",
            description:"The Go programming language",
            logo: "go-logo-blue.png",
            url:"https://go.dev/",
            skillLevel: 2
        },
        {
            name: "React",
            description:"React web framework",
            logo: "go-logo-blue.png",
            url:"https://react.dev/",
            skillLevel: 2
        },
        {
            name: "HTML",
            description:"The Go programming language",
            logo: "go-logo-blue.png",
            url:"https://go.dev/",
            skillLevel: 2
        },
        {
            name: "CSS",
            description:"The Go programming language",
            logo: "go-logo-blue.png",
            url:"https://go.dev/",
            skillLevel: 1
        }
    ]

    return (
        <div className="p-4">
            <h1 className="text-3xl">Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-auto ">
                {skills.map((skill) => <SkillCard skill={skill}/>)}
            </div>
        </div>
    )
}