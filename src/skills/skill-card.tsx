import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon?: IconType;
}

export default function SkillCard(props: SkillCardProps) {
  const { name, icon } = props;

  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-lg p-4">
      <div className="text-sky-600">{icon && icon({ size: 64 })}</div>
      <p className="text-lg">{name}</p>
    </div>
  );
}
