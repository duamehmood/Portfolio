
// import { RiArrowRightUpLine } from "@remixicon/react"

// const ProjectCard = ({ project }) => {
//     return (
//         <div className="  bg-gradient-to-t from-[#6971A266] to-[#272A3C80]  px-7 py-10 rounded flex flex-col ">
//             <img src={project.image} alt={project.img} className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2" />
//             <h3 className="text-xl font-bold pb-2 pt-[10px]">{project.title}</h3>
//             <p className="pb-4 text-[#f0e6ff]">
//                 {project.desc}
//             </p>
//             <div className="justify-between flex gap-2 md:gap-0">
//                 <div className="flex items-center md:gap-2 gap-1  ">
//                      {project.icons && project.icons.map((icon, index) => (
//                         <span key={index}>{icon}</span>
//                     ))}
//                 </div>
//                 <a
//                     href={project.liveLink}
//                     target="_blank"
//                     className="flex items-center gap-1 bg-[#7b68b8] text-white md:text-[16px] text-[14px] md:px-4 px-3 sm:py-2 py-1 rounded font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#e6e0fa] hover:text-[#4a2486]"
//                 >
//                     Live Site <RiArrowRightUpLine size="20" />
//                 </a>

//             </div>
//         </div>
//     )
// }

// export default ProjectCard
import { RiArrowRightUpLine } from "@remixicon/react"

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gradient-to-t from-[#6971A266] to-[#272A3C80] px-7 py-10 rounded flex flex-col h-full justify-between">
            <div>
                <img src={project.image} alt={project.title} className="w-full h-[220px] object-cover rounded-xl pb-6 rotate-1" />
                <h3 className="text-xl font-bold pb-2 pt-[10px]">{project.title}</h3>
                <p className="pb-6 text-[#f0e6ff] text-sm leading-relaxed">
                    {project.desc}
                </p>
            </div>
            <div className="justify-between flex items-center gap-2 md:gap-0 pt-4 border-t border-[#ffffff10]">
                <div className="flex items-center md:gap-2 gap-1">
                     {project.icons && project.icons.map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}
                </div>
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 bg-[#7b68b8] text-white md:text-[16px] text-[14px] md:px-4 px-3 sm:py-2 py-1 rounded font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#e6e0fa] hover:text-[#4a2486]"
                >
                    Live Site <RiArrowRightUpLine size="20" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;
