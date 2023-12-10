import Skill from "./skill.ts";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard(props: SkillCardProps) {
  const { skill } = props;

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 shadow-lg">
      <div className="text-sky-600">{skill.icon && skill.icon({ size: 64 })}</div>
      <p className="text-lg">{skill.name}</p>
    </div>
  );
}
