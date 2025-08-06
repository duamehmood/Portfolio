

import { RiMenu3Line, RiCloseFill, RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const menuBtnRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                menuBtnRef.current &&
                !menuBtnRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="bg-[#04071D] sticky top-0 z-[9999]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-6 md:gap-0 gap-4">
                    <h2 className="font-bold text-[24px] text-secondary">Dua Mehmood</h2>
                    <ul className="hidden md:flex text-md md:gap-8 gap-1 text-white font-semibold">
                        {["/", "/projects", "/services", "/contact"].map((path, index) => {
                            const labels = ["Home", "Projects", "Services", "Contact"];
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                                ? "border-[#CBACF9] text-[#CBACF9]"
                                                : "border-transparent text-white hover:border-[#CBACF9]"
                                            }`}>
                                        {labels[index]}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        ref={menuBtnRef}
                        onClick={() => setIsOpen(true)}
                        className="md:hidden block text-white cursor-pointer">
                        <RiMenu3Line className="text-2xl hover:scale-110 transition-transform duration-200 text-secondary" />
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed w-64 top-0 h-[100vh] bg-[#04071D] z-[9999] p-6 shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
                <div className="flex items-center">
                    <h2 className="font-bold text-[24px] text-secondary">Dua Mehmood</h2>
                    <button onClick={() => setIsOpen(false)} className="ml-auto text-white cursor-pointer">
                        <RiCloseFill className="text-3xl text-[#CBACF9] hover:rotate-90 transition-transform duration-200" />
                    </button>
                </div>

                <h3 className="text-[#CBACF9] text-sm font-semibold mt-8 mb-2">Navigation</h3>
                <hr className="border-[#CBACF9] opacity-20 mb-4" />

                <ul className="space-y-4">
                    {[
                        { path: "/", label: "Home" },
                        { path: "/projects", label: "Projects" },
                        { path: "/services", label: "Services" },
                        { path: "/contact", label: "Contact" },
                    ].map(({ path, label }, index) => (
                        <li key={index}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `block py-2 rounded px-4 font-medium transition-colors ${isActive
                                        ? "text-[#CBACF9] bg-[#ffffff10]"
                                        : "text-[#f0e6ff] hover:text-[#CBACF9]"
                                    }`}
                                onClick={() => setIsOpen(false)} >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
