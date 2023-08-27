import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

interface ExpandingCardProps {
  header: React.ReactNode;
  collapsed: React.ReactNode;
}

export default function ExpandingCard(props: ExpandingCardProps) {
  const [expanded, setExpanded] = useState(false);

  const { header, collapsed } = props;

  return (
    <div className="h-fit rounded-md border bg-white p-4 shadow-lg">
      <div className="flex items-center">
        <div className={"flex-grow"}>{header}</div>
        <div
          className="ml-4 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
          onClick={() => setExpanded(!expanded)}
        >
          <FaAngleDown
            className={`duration-600 transition-transform ease-in ${expanded && "rotate-180"}`}
          />
        </div>
      </div>
      <div
        className={`duration-600 overflow-hidden transition-all ease-in ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        {collapsed}
      </div>
    </div>
  );
}
