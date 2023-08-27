import { IconType } from "react-icons";

export default interface Skill {
  name: string;
  description: string;
  url: string;
  skillLevel: number;
  icon?: IconType;
  iconColor?: string;
}
