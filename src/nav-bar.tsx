import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = () => {
    setExpanded(false);
  };

  const navLinks = (
    <>
      <a href="#about" onClick={handleItemClick}>
        About
      </a>
      <a href="#skills" onClick={handleItemClick}>
        Skills
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-sky-700 text-white">
      <div className="mx-auto w-11/12 max-w-7xl 2xl:w-4/5">
        <div className="grid grid-cols-3 items-center py-2">
          <button className="text-2xl md:hidden" onClick={() => setExpanded(!expanded)}>
            <FaBars />
          </button>
          <nav className="hidden gap-6 md:flex">{navLinks}</nav>
          <div className="text-center text-2xl">
            <a href="#">Shawn McLaughlin</a>
          </div>
        </div>
        <nav
          className={`flex flex-col gap-4 overflow-hidden transition-[max-height] duration-300 ease-in md:hidden ${
            expanded ? "max-h-96 pb-2" : "max-h-0"
          }`}
        >
          {navLinks}
        </nav>
      </div>
    </header>
  );
}
