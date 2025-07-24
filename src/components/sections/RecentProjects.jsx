
import ProjectCard from "../utils/ProjectCard"


const RecentProjects = () => {

    const projectsData = [
        {
            id: 1,
            title: "3D Solar System Planets to Explore",
            desc: "A modern responsive web app using React and Tailwind CSS to explore planets in 3D.",
            image: "/circle.png",
        },
        {
            id: 2,
            title: "Yoom - Video Conferencing App",
            desc: "A full-featured Zoom-like app made with React, enabling secure online meetings.",
            image: "/logitech.png",
        },
        {
            id: 3,
            title: "AI Image SaaS - Canva Application",
            desc: "A SaaS platform to generate and edit AI images using modern web tools.",
            image: "/moviedb.png",
        },
        {
            id: 4,
            title: "Animated Apple iPhone 3D Website",
            desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
            image: "/fiver.png",
        }
    ];

    return (
        <div className='pb-[100px] bg-[#150430] text-white'>
            <div className="container max-w-full">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-[#CBACF9]">recent projects</span>
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
