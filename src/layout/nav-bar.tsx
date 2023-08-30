import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NavBarLink from "./nav-bar-link.tsx";

interface NavBarProps {
  sectionDetails: SectionDetail[];
}

export default function NavBar(props: NavBarProps) {
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = () => {
    setExpanded(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-sky-700">
      <nav className={"ml-2 items-baseline py-2 lg:mx-auto lg:max-w-7xl"}>
        <button className="m-2 lg:hidden" onClick={() => setExpanded(!expanded)}>
          <FaBars className={"fill-white align-middle text-2xl"} />
        </button>
        <div
          className={`flex flex-col items-baseline overflow-hidden lg:max-h-fit lg:flex-grow lg:flex-row ${
            expanded ? "max-h-96" : "max-h-0"
          }`}
        >
          <NavBarLink text="Home" anchor="#" onClick={handleItemClick} />
          {props.sectionDetails.map((section) => {
            return (
              <NavBarLink
                text={section.title}
                anchor={`#${section.id}`}
                key={section.id}
                onClick={handleItemClick}
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
}
