
import ProjectCard from "../utils/ProjectCard"
import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from "@remixicon/react"

const RecentProjects = () => {

    const projectsData = [
        {
            id: 1,
            title: "Circle",
            desc: "A modern responsive web app using React and Tailwind CSS to explore planets in 3D.",
            image: "/circle.png",
            icon1: <RiHtml5Fill className="text-orange-600 " />,
            icon2: <RiCss3Fill  className="text-blue-500"  />,
        },
        {
            id: 2,
            title: "Logitech",
            desc: "A full-featured Zoom-like app made with React, enabling secure online meetings.",
            image: "/logitech.png",
            icon1: <RiHtml5Fill className="text-orange-600" />,
            icon2: <RiCss3Fill className="text-blue-500"  />,

        },
        {
            id: 3,
            title: "MovieDB",
            desc: "A SaaS platform to generate and edit AI images using modern web tools.",
            image: "/moviedb.png",
            icon1: <RiHtml5Fill className="text-orange-600" />,
            icon2: <RiJavascriptFill className="text-yellow-400" />,
            icon3: <RiBootstrapFill className="text-purple-700" />,
            icon4: <RiReactjsLine className="text-blue-300" />,
        },
        {
            id: 4,
            title: "Fiver",
            desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
            image: "/fiver.png",
            icon1: <RiHtml5Fill className="text-orange-600"  />,
            icon2: <RiJavascriptFill className="text-yellow-400" />,
            icon3: <RiTailwindCssFill className="text-blue-400" />,
            icon4: <RiReactjsLine className="text-blue-300" />,
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




            </div>


        </div>
    )
}

export default RecentProjects
