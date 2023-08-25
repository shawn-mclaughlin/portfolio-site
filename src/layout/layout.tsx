import React from "react";
import {Link} from "react-router-dom";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col h-screen">
            <nav className={"flex justify-between px-6 py-1 bg-sky-700 text-white h-10 items-center"}>
                <Link to={"/"}>Shawn McLaughlin</Link>
                <Link to={"/skills"}>Skills</Link>
                <Link to={"/career"}>Career</Link>
                <Link to={"/qualifications"}>Qualifications</Link>
                <Link to={"/personal"}>Personal</Link>
            </nav>
            <div className="w-4/5 m-auto h-auto shadow-2xl flex-grow">
                {props.children}
            </div>
        </div>
    )
}