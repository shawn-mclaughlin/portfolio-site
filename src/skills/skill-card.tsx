import Skill from "./skill.ts";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard(props: SkillCardProps) {
  const { skill } = props;

  const renderSkillMeter = (skillLevel: number) => {
    return (
      <div className="flex h-6 gap-1 rounded-full border border-sky-600 bg-sky-100">
        <div
          className={`my-auto ml-1 h-4 w-1/3 rounded-l-full ${skillLevel > 0 ? "bg-sky-600" : ""}`}
        />
        <div className={`my-auto h-4 w-1/3 ${skillLevel > 1 ? "bg-sky-600" : ""}`} />
        <div
          className={`my-auto mr-1 h-4 w-1/3 rounded-r-full ${skillLevel > 2 ? "bg-sky-600" : ""}`}
        />
      </div>
    );
  };

  // TODO Check into alternatives for getting icons, URLs, downloading the colored SVG manually?
  return (
    <div className="overflow-hidden rounded-lg border bg-white px-4 py-4 shadow-lg">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-8 px-2">
          <div className="text-start text-sky-600">{skill.icon && skill.icon({ size: 40 })}</div>
          <div className="flex-grow text-center">{skill.name}</div>
        </div>
        <div className="w-full">{renderSkillMeter(skill.skillLevel)}</div>
      </div>
    </div>
  );
}
