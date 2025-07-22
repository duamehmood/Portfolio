
import { RiArrowRightUpLine } from "@remixicon/react"
import { Link } from "react-router-dom"


const RecentProjects = () => {
    return (
        <div className='pb-[100px] bg-[#150430] text-white'>
            <div className="container max-w-full">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-[#CBACF9]">recent projects</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 px-4 md:px-10 lg:px-20">

                    <div className="col-span-full sm:col-span-3 md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-2 bg-gradient-to-t from-[#6971A266] to-[#272A3C80]  px-7 py-10 rounded flex flex-col ">
                        <img src="/circle.png" alt="project-1" className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2 " />
                        <h3 className="text-xl font-bold pb-2">3D Solar System Planets to Explore</h3>
                        <p className="pb-4 text-[#f0e6ff]">
                            A modern responsive web app using React and Tailwind CSS to explore planets in 3D.
                        </p>
                        <div className="justify-end flex">
                            <Link to="/projects">
                                <button className="flex items-center bg-white text-[#4a2486] text-md px-4 py-2 rounded-full font-[600] cursor-pointer">
                                    Live Site <RiArrowRightUpLine size="22" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-full sm:col-span-3 md:col-span-3 md:col-start-4 lg:col-span-2 lg:col-start-4 bg-gradient-to-t from-[#6971A266] to-[#272A3C80] px-7 py-10 rounded flex flex-col">
                        <img src="/logitech.png" alt="project-2" className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2" />
                        <h3 className="text-xl font-bold pb-2">Yoom - Video Conferencing App</h3>
                        <p className="pb-4 text-[#f0e6ff]">
                            A full-featured Zoom-like app made with React, enabling secure online meetings.
                        </p>
                        <div className="justify-end flex">
                            <Link to="/projects">
                                <button className="flex items-center bg-white text-[#4a2486] text-md px-4 py-2 rounded-full font-[600] cursor-pointer">
                                    Live Site <RiArrowRightUpLine size="22" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-full sm:col-span-3 md:col-span-3 md:col-start-1 lg:col-span-2 lg:col-start-2 bg-gradient-to-t from-[#6971A266] to-[#272A3C80] px-7 py-10 rounded flex flex-col">
                        <img src="/moviedb.png" alt="project-3" className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2" />
                        <h3 className="text-xl font-bold pb-2">AI Image SaaS - Canva Application</h3>
                        <p className="pb-4 text-[#f0e6ff]">
                            A SaaS platform to generate and edit AI images using modern web tools.
                        </p>
                        <div className="justify-end flex">
                            <Link to="/projects">
                                <button className="flex items-center bg-white text-[#4a2486] text-md px-4 py-2 rounded-full font-[600] cursor-pointer">
                                    Live Site <RiArrowRightUpLine size="22" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-full sm:col-span-3 md:col-span-3 md:col-start-4 lg:col-span-2 lg:col-start-4 bg-gradient-to-t from-[#6971A266] to-[#272A3C80] px-7 py-10 rounded flex flex-col">
                        <img src="/fiver.png" alt="project-4" className="w-full h-[60%] object-cover rounded-xl pb-8 rotate-2" />
                        <h3 className="text-xl font-bold pb-2">Animated Apple iPhone 3D Website</h3>
                        <p className="pb-4 text-[#f0e6ff]">
                            A stunning 3D animated iPhone model site made with Three.js and React.
                        </p>
                        <div className="justify-end flex">
                            <Link to="/projects">
                                <button className="flex items-center bg-white text-[#4a2486] text-md px-4 py-2 rounded-full font-[600] cursor-pointer">
                                    Live Site <RiArrowRightUpLine size="22" />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>




            </div>


        </div>
    )
}

export default RecentProjects
