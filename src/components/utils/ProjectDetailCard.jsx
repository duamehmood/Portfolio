
 import { RiArrowRightUpLine } from "@remixicon/react"
 
 const ProjectDetailCard = ({project}) => {
   return (
      <div className="  bg-gradient-to-t from-[#6971A266] to-[#272A3C80]  px-7 py-10 rounded flex flex-col ">
            <img src={project.image} alt={project.img} className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2" />
            <h3 className="text-xl font-bold pb-2 pt-[10px]">{project.title}</h3>
            <p className="pb-4 text-[#f0e6ff]">
                {project.desc}
            </p>
            <div className="justify-between flex md:gap-0 gap-2">
                <div className="flex items-center md:gap-2 gap-1">
                    {project.icon1 && <span>{project.icon1}</span>}
                    {project.icon2 && <span>{project.icon2}</span>}
                    {project.icon3 && <span>{project.icon3}</span>}
                    {project.icon4 && <span>{project.icon4}</span>}
                </div>
                
                    <a href={project.liveLink} target="_blank" className="flex items-center bg-white text-[#4a2486] md:text-[16px] text-[14px] md:px-4 px-2 md:py-2 py-1 rounded-full font-[600] cursor-pointer shadow-none hover:shadow-[0_0_15px_#CBACF9] hover:bg-secondary transition duration-200">
                        Live Site <RiArrowRightUpLine size="22" />
                    </a>
                
            </div>
        </div>
   )
 }
 
 export default ProjectDetailCard
 