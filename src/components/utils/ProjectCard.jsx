import { Link } from "react-router-dom"
import { RiArrowRightUpLine } from "@remixicon/react"


const ProjectCard = ({project}) => {
    return (
        <div className="  bg-gradient-to-t from-[#6971A266] to-[#272A3C80]  px-7 py-10 rounded flex flex-col ">
            <img src={project.image} alt={project.img} className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2 " />
            <h3 className="text-xl font-bold pb-2">{project.title}</h3>
            <p className="pb-4 text-[#f0e6ff]">
                {project.desc}
            </p>
            <div className="justify-end flex">
                <Link to="/projects">
                    <button className="flex items-center bg-white text-[#4a2486] text-md px-4 py-2 rounded-full font-[600] cursor-pointer shadow-none hover:shadow-[0_0_15px_#CBACF9] hover:bg-[#CBACF9] transition duration-200">
                        Live Site <RiArrowRightUpLine size="22" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
