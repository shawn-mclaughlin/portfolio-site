import React from "react";
import {Link} from "react-router-dom";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col h-screen w-4/5 m-auto shadow-2xl">
            <nav className={"flex justify-evenly px-6 py-1 bg-sky-700 text-white h-10 items-center"}>
                <Link to={"/"}>Shawn McLaughlin</Link>
                <Link to={"/skills"}>Skills</Link>
                <Link to={"/career"}>Career</Link>
                <Link to={"/qualifications"}>Qualifications</Link>
                <Link to={"/personal"}>Personal</Link>
            </nav>
            <div className="flex-grow">
                {props.children}
            </div>
        </div>
    )
}