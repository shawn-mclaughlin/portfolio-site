import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="m-auto flex h-screen w-4/5 flex-col shadow-2xl">
      <nav
        className={
          "flex h-10 items-center justify-evenly bg-sky-700 px-6 py-1 text-white"
        }
      >
        <Link to={"/"}>Shawn McLaughlin</Link>
        <Link to={"/skills"}>Skills</Link>
        <Link to={"/career"}>Career</Link>
        <Link to={"/qualifications"}>Qualifications</Link>
        <Link to={"/personal"}>Personal</Link>
      </nav>
      <div className="flex-grow">{props.children}</div>
    </div>
  );
}
