
import ProjectCard from "../utils/ProjectCard"
import { RiBootstrapFill, RiCss3Fill, RiEyeLine, RiHtml5Fill, RiJavascriptFill, RiReactjsLine } from "@remixicon/react"
import { Link } from 'react-router-dom';

const RecentProjects = () => {

   const projectsData = [
        {
            id: 1,
            title: "Circle",
            desc: "A modern responsive web app using React and Tailwind CSS to explore planets in 3D.",
            image: "/circle.png",
            icons: [
                 <RiHtml5Fill className="text-orange-600" />,
                 <RiCss3Fill className="text-blue-500" />,
            ],
            liveLink: " https://duamehmood.github.io/Circle/",
        },
        {
            id: 2,
            title: "Logitech",
            desc: "A full-featured Zoom-like app made with React, enabling secure online meetings.",
            image: "/logitech.png",
            icons: [
                    <RiHtml5Fill className="text-orange-600" />,
                    <RiCss3Fill className="text-blue-500" />,
            ],
            liveLink: " https://duamehmood.github.io/Logitech/",
        },
        {
            id: 3,
            title: "MovieDB",
            desc: "A SaaS platform to generate and edit AI images using modern web tools.",
            image: "/moviedb.png",
            icons: [
                <RiHtml5Fill className="text-orange-600" />,
                <RiJavascriptFill className="text-yellow-400" />,
                <RiBootstrapFill className="text-purple-700" />,
                <RiReactjsLine className="text-blue-300" />,
            ],
            liveLink: "https://movie-db-gxt6.vercel.app",
        },
        {
            id: 4,
            title: "Fiver",
            desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
            image: "/fiver.png",
            icons: [
                <RiHtml5Fill className="text-orange-600" />,
                <RiJavascriptFill className="text-yellow-400" />,
                <RiBootstrapFill className="text-purple-700" />,
                <RiReactjsLine className="text-blue-300" />,
            ],
            liveLink: "https://reactfiverclone.vercel.app",
        }
    ];

    return (
        <div className='pb-[100px] bg-primary text-white'>
            <div className="container mx-auto">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-secondary">recent projects</span>
                </h2>

                <div className="grid grid-cols-6 md:grid-cols-6 gap-6">
                    {projectsData.map((project) => (
                        <div key={project.id} className="col-span-6 md:col-span-3">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <div className='flex justify-center lg:pt-[50px] md:pt-[30px] pt-[20px] font-[500] lg:text-[18px] text-[16px]'>
                        <Link to="/projects">
                            <button className='cursor-pointer text-white flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-all duration-200'>
                             <RiEyeLine size="20" className="text-secondary"/>  View All Projects 
                            </button>
                        </Link>
                </div>

            </div>
        </div>
    )
}

export default RecentProjects
