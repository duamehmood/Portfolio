
import { RiArrowRightLongLine } from "@remixicon/react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-[#04071D] ">
            <div className="container max-w-full">
                <div className='flex items-center md:justify-around justify-center py-8 text-white font-semibold'>
                    <ul className='flex text-md md:gap-8 gap-2'>
                        <li>
                            <Link to="/" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] ">Home</Link>
                        </li>
                        <li>
                           <a href="#about" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >About</a> 
                        </li>
                        <li>
                            <Link to="/projects" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >Projects</Link>
                        </li>
                        <li>
                           <a href="#skills" className="px-4 py-2 rounded-full border-2 border-transparent transition-colors duration-100 hover:border-[#CBACF9] hover:text-[#CBACF9] " >Skills</a> 
                        </li>
                    </ul>
                    <div className="md:flex hidden ">
                        <Link to="/contact">
                            <button className="flex items-center gap-4 px-4 py-2 rounded-full border-0 bg-[#CBACF9] text-[#04071D] cursor-pointer">Contact me
                                <RiArrowRightLongLine className='size-5' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
