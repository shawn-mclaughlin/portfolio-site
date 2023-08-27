import Skill from "./skill.ts";
import ExpandingCard from "../common/expanding-card.tsx";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard(props: SkillCardProps) {
  const { skill } = props;

  const renderSkillMeter = (skillLevel: number) => {
    let barFillWidth = "w-0";
    if (skillLevel === 1) {
      barFillWidth = "w-1/3";
    } else if (skillLevel === 2) {
      barFillWidth = "w-2/3";
    } else if (skillLevel === 3) {
      barFillWidth = "w-full";
    }
    return (
      <div className="flex h-6 rounded-full bg-sky-200">
        <div className={`mx-1 my-auto h-4 rounded-full bg-sky-600 ${barFillWidth}`} />
      </div>
    );
  };

  // TODO Check into alternatives for getting icons, URLs, downloading the colored SVG manually?
  const SkillCardHeader = () => {
    return (
      <>
        <div className="mb-2 flex items-center">
          {skill.icon && skill.icon({ size: 48, color: skill.iconColor })}
          <p className={"flex-grow text-center"}>{skill.name}</p>
        </div>
        <div className="flex-grow">{renderSkillMeter(skill.skillLevel)}</div>
      </>
    );
  };

  const SkillCardDetails = () => {
    return (
      <>
        <p>{skill.description}</p>
        <a href={skill.url} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </>
    );
  };

  return <ExpandingCard header={<SkillCardHeader />} collapsed={<SkillCardDetails />} />;
}
