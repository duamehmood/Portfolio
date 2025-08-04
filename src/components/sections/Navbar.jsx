 import { RiMenu3Line, RiCloseFill } from "@remixicon/react"
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-[#04071D] sticky top-0 z-[9999]">
            <div className="container mx-auto">
                <div className='flex items-center justify-between py-6 md:gap-0 gap-4'>
                    <h2 className="font-bold text-[24px] text-secondary">Dua Mehmood</h2>
                    <ul className='hidden md:flex text-md md:gap-8 gap-1 text-white font-semibold'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                ? "border-[#CBACF9] text-[#CBACF9]"
                                : "border-transparent text-white hover:border-[#CBACF9] "}`}>
                                Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/projects" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                ? "border-[#CBACF9] text-[#CBACF9]"
                                : "border-transparent text-white hover:border-[#CBACF9] "}`}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                ? "border-[#CBACF9] text-[#CBACF9]"
                                : "border-transparent text-white hover:border-[#CBACF9]"}`}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                ? "border-[#CBACF9] text-[#CBACF9]"
                                : "border-transparent text-white hover:border-[#CBACF9] "}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <button onClick={() => setIsOpen(true)} className="md:hidden block text-white cursor-pointer">
                        <RiMenu3Line className="text-2xl" />
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed w-64 top-0 h-[100vh] bg-[#04071D] z-[9999] p-4 transition-all duration-300 ${isOpen ? "left-0" : "-left-64"}`}
            >
                <div className="flex">
                    <h2 className="font-bold text-[24px] text-secondary">Dua Mehmood</h2>
                    <button onClick={() => setIsOpen(false)} className="ml-auto text-black cursor-pointer">
                        <RiCloseFill className="text-2xl text-[#f0e6ff]" />
                    </button>
                </div>
                <ul className="mt-8 space-y-4">
                    <li>
                        <NavLink
                            to="/"
                            className="block py-2 text-[#f0e6ff] hover:text-[#CBACF9]"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className="block py-2 text-[#f0e6ff] hover:text-[#CBACF9]"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className="block py-2 text-[#f0e6ff] hover:text-[#CBACF9]"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="block py-2 text-[#f0e6ff] hover:text-[#CBACF9]"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
