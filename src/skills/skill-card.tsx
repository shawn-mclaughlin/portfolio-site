import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Skill from "./skill.ts";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard(props: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { skill } = props;

  const renderSkillMeter = (skillLevel: number) => {
    switch (skillLevel) {
      case 1:
        return (
          <div className={`mx-1 my-auto h-4 w-2/6 rounded-full bg-sky-600`} />
        );
      case 2:
        return (
          <div className={`mx-1 my-auto h-4 w-4/6 rounded-full bg-sky-600`} />
        );
      case 3:
        return (
          <div className={`mx-1 my-auto h-4 w-full rounded-full bg-sky-600`} />
        );
      default:
        return <div />;
    }
  };

  return (
    <div className="h-fit max-w-sm overflow-hidden rounded border p-2 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <img
          className="h-12 w-12 rounded-full bg-white"
          src={`/src/skills/assets/${skill.logo}`}
          alt={`${skill.name}`}
        />
        <p>{skill.name}</p>
        <FaAngleDown onClick={() => setExpanded(!expanded)} />
      </div>
      <div className="mb-2 mt-5 flex h-6 w-full rounded-full bg-sky-200 ">
        {renderSkillMeter(skill.skillLevel)}
      </div>
      <div
        className={`duration-400 overflow-hidden transition-[max-height] ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p>{skill.description}</p>
        <a href={skill.url}>Learn More</a>
      </div>
    </div>
  );
}
