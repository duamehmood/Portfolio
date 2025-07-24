
import { RiArrowRightLongLine } from "@remixicon/react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-[#04071D] ">
            <div className="container mx-auto">
                <div className='flex items-center md:justify-around py-6 md:flex-row flex-col md:gap-0 gap-4'>

                    <h2 className="font-bold text-[24px] text-[#CBACF9]">Dua Mehmood</h2>
                    <ul className='flex text-md md:gap-8 gap-1 text-white font-semibold'>
                        <li>
                            <Link to="/" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] ">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >Projects</Link>
                        </li>
                        <li>
                           <a href="#skills" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >Skills</a> 
                        </li>
                        <li>
                            <Link to="/contact" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >Contact</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>

    )
}

export default Navbar
