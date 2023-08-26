import {useState} from "react";
import {FaAngleDown} from "react-icons/fa6";
import Skill from "./skill.ts";

interface SkillCardProps {
    skill:Skill
}

export default function SkillCard(props:SkillCardProps) {
    const [expanded, setExpanded] = useState(false)
    const {skill} = props

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

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-md p-2 border h-fit">
            <div className="flex justify-between mb-2 items-center">
                <img className="w-12 h-12 rounded-full bg-white"
                     src={`/src/skills/assets/${skill.logo}`}
                     alt={`${skill.name}`}/>
                <p>{skill.name}</p>
                <FaAngleDown onClick={()=>setExpanded(!expanded)}/>
            </div>
            <div className="flex w-full bg-sky-200 rounded-full h-6 mb-2">
                {renderSkillMeter(skill.skillLevel)}
            </div>
            <div className={`transition-[max-height] duration-400 ease-in overflow-hidden ${expanded ? "max-h-40" : "max-h-0"}`}>
                <p>{skill.description}</p>
                <a href={skill.url}>Learn More</a>
            </div>
        </div>
    )
}