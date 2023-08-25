import {FaAngleDown} from "react-icons/fa6";


interface SkillArea {
    name: string
    logo: string
    level: number
}

export default function TechnicalSkillsPage() {
    const skills: SkillArea[] = [
        {
            name: "Go",
            logo: "go-logo-blue.png",
            level: 2
        },
        {
            name: "C#",
            logo: "csharp-logo.svg",
            level: 3
        },
        {
            name: "MongoDB",
            logo: "mongo.png",
            level: 2
        },
        {
            name: "SQL",
            logo: "sql.png",
            level: 2
        },
        {
            name: "React",
            logo: "react.png",
            level: 2
        },
        {
            name: "HTML",
            logo: "html.png",
            level: 2
        },
        {
            name: "CSS",
            logo: "css.png",
            level: 1
        }
    ]

    const renderSkillMeter = (skillLevel:number) => {
        switch(skillLevel) {
            case 1:
                return <div className={`bg-sky-600 h-4 w-2/6 rounded-full my-auto mx-1`}/>
            case 2:
                return <div className={`bg-sky-600 h-4 w-4/6 rounded-full my-auto mx-1`}/>
            case 3:
                return <div className={`bg-sky-600 h-4 w-full rounded-full my-auto mx-1`}/>
            default:
                return <div/>;
        }
    }

    const renderSkillCard = (skill:SkillArea) => {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-2xl p-3">
                <div className="flex justify-between mb-2 items-center">
                    <img className="w-12 h-12 rounded-full bg-white"
                            src={`/src/skills/assets/${skill.logo}`}
                            alt={`${skill.name}`}/>
                    <p>{skill.name}</p>
                    <FaAngleDown/>
                </div>
                <div className="flex w-full bg-sky-200 rounded-full h-6">
                    {renderSkillMeter(skill.level)}
                </div>
            </div>
        )
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl">Technical Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 m-auto ">
                {skills.map((skill) => renderSkillCard(skill))}
            </div>
        </div>
    )
}