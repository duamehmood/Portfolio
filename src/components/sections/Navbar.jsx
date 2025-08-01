
import { RiArrowRightLongLine } from "@remixicon/react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-[#04071D] ">
            <div className="container mx-auto">
                <div className='flex items-center md:justify-around py-6 md:flex-row flex-col md:gap-0 gap-4'>

                    <h2 className="font-bold text-[24px] text-secondary">Dua Mehmood</h2>
                    <ul className='flex text-md md:gap-8 gap-1 text-white font-semibold'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                        ? "border-[#CBACF9] text-[#CBACF9]"
                                        : "border-transparent text-white hover:border-[#CBACF9] hover:text-[#CBACF9]"}`}>
                                Home
                            </NavLink>

                        </li>
                        <li>
                             <NavLink to="/projects" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                        ? "border-[#CBACF9] text-[#CBACF9]"
                                        : "border-transparent text-white hover:border-[#CBACF9] hover:text-[#CBACF9]"}`}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                             <NavLink to="/skills" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                        ? "border-[#CBACF9] text-[#CBACF9]"
                                        : "border-transparent text-white hover:border-[#CBACF9] hover:text-[#CBACF9]"}`}>
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `px-4 py-2 rounded-full border-2 transition-colors duration-100 ${isActive
                                        ? "border-[#CBACF9] text-[#CBACF9]"
                                        : "border-transparent text-white hover:border-[#CBACF9] hover:text-[#CBACF9]"}`}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
