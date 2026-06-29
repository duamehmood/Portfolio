
// import ProjectCard from "../utils/ProjectCard"
// import { RiBootstrapFill, RiCss3Fill, RiEyeLine, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill, RiDatabaseFill, RiServerFill } from "@remixicon/react"
// import { Link } from 'react-router-dom';

// const RecentProjects = () => {

//   const projectsData = [

//     {
//       id: 1,
//       title: "Mediconnect",
//       desc: "Online doctor appointment system for booking consultations and managing healthcare schedules.",
//       image: "/mediconnect.png",
//       tech: ["html", "tailwind", "javascript", "django", "SQLite3"],
//       icons: [
//         <RiHtml5Fill className="text-orange-600" />,
//         <RiTailwindCssFill className="text-teal-400" />,
//         <RiJavascriptFill className="text-yellow-400" />,
//         <RiServerFill className="text-green-600" />,
//         <RiDatabaseFill className="text-gray-500" />
//       ],
//       liveLink: "http://duamehmood.pythonanywhere.com/",
//     },
//     {
//       id: 2,
//       title: "CityFix",
//       desc: "Civic tech platform supporting real-time crowd-sourced issue tracking and a community upvote prioritization system",
//       image: "/cityfix.png",
//       tech: ["html", "tailwind", "javascript", "django", "SQLite3"],

//       icons: [
//         <RiHtml5Fill className="text-orange-600" />,
//         <RiTailwindCssFill className="text-teal-400" />,
//         <RiJavascriptFill className="text-yellow-400" />,
//         <RiServerFill className="text-green-600" />,
//         <RiDatabaseFill className="text-gray-500" />
//       ],
//       liveLink: "http://cityfix.pythonanywhere.com/",

//     },
//     {
//       id: 3,
//       title: "Finect",
//       desc: " Financial platform with a modular React architecture that accelerated feature iteration and reduced UI development time by 25%",
//       image: "/finect.png",
//       tech: ["html", "tailwind", "javascript", "react"],
//       icons: [
//         <RiHtml5Fill className="text-orange-600" />,
//         <RiTailwindCssFill className="text-teal-400" />,
//         <RiJavascriptFill className="text-yellow-400" />,
//         <RiReactjsLine className="text-blue-300" />,

//       ],
//       liveLink: "https://finect.vercel.app/",
//     },
//     {
//       id: 4,
//       title: "MovieDB",
//       desc: "API-powered movie app displaying detailed information like genres, languages, and ratings.",
//       image: "/moviedb.png",
//       tech: ["html", "javascript", "bootstrap", "react"],
//       icons: [
//         <RiHtml5Fill className="text-orange-600" />,
//         <RiJavascriptFill className="text-yellow-400" />,
//         <RiBootstrapFill className="text-purple-700" />,
//         <RiReactjsLine className="text-blue-300" />,
//       ],
//       liveLink: "https://movie-db-dm-sigma.vercel.app",

//     }
//   ];

//   return (
//     <div className='pb-[100px] bg-primary text-white'>
//       <div className="container mx-auto">
//         <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
//           My <span className="text-secondary">recent projects</span>
//         </h2>

//         <div className="grid grid-cols-6 md:grid-cols-6 gap-6">
//           {projectsData.map((project) => (
//             <div key={project.id} className="col-span-6 md:col-span-3">
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>

//         <div className='flex justify-center lg:pt-[50px] md:pt-[30px] pt-[20px] font-[500] lg:text-[18px] text-[16px]'>
//           <Link to="/projects">
//             <button className='cursor-pointer text-white flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-all duration-200'>
//               <RiEyeLine size="20" className="text-secondary" />  View All Projects
//             </button>
//           </Link>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default RecentProjects


import ProjectCard from "../utils/ProjectCard"
import { RiBootstrapFill, RiCss3Fill, RiEyeLine, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill, RiDatabaseFill, RiServerFill } from "@remixicon/react"
import { Link } from 'react-router-dom';

const RecentProjects = () => {

  const projectsData = [
    {
      id: 1,
      title: "MediConnect",
      desc: "Architected a full-stack healthcare platform supporting secure appointment workflows and role-based access, improving simulated end-to-end booking efficiency by 50%. Integrated Django Auth and Google OAuth for secure session management.",
      image: "/mediconnect.png",
      tech: ["django", "tailwind", "javascript", "OAuth", "SQLite3"],
      icons: [
        <RiServerFill className="text-green-600" />,
        <RiDatabaseFill className="text-gray-500" />,
        <RiTailwindCssFill className="text-teal-400" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiHtml5Fill className="text-orange-600" />,
      ],
      liveLink: "http://duamehmood.pythonanywhere.com/",
    },
    {
      id: 2,
      title: "CityFix",
      desc: "Civic tech platform supporting real-time crowd-sourced issue tracking and a community upvote system. Implemented secure role-based dashboards and admin panels, streamlining user session management and municipal task workflows.",
      image: "/cityfix.png",
      tech: ["django", "tailwind", "javascript", "SQLite3"],
      icons: [
        <RiServerFill className="text-green-600" />,
        <RiDatabaseFill className="text-gray-500" />,
        <RiTailwindCssFill className="text-teal-400" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiHtml5Fill className="text-orange-600" />,
      ],
      liveLink: "http://cityfix.pythonanywhere.com/",
    },
    {
      id: 3,
      title: "Finect",
      desc: "Financial dashboard built with a modular React architecture that accelerated feature iteration and reduced UI development time by 25%, delivering clean client-side data rendering.",
      image: "/finect.png",
      tech: ["html", "tailwind", "javascript", "react"],
      icons: [
        <RiReactjsLine className="text-blue-300" />,
        <RiTailwindCssFill className="text-teal-400" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiHtml5Fill className="text-orange-600" />,
      ],
      liveLink: "https://finect.vercel.app/",
    },
    {
      id: 4,
      title: "MovieDB",
      desc: "API-driven movie encyclopedia consuming third-party RESTful services to map, filter, and display detailed real-time genres, language metrics, and user ratings.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "bootstrap", "react"],
      icons: [
        <RiReactjsLine className="text-blue-300" />,
        <RiBootstrapFill className="text-purple-700" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiHtml5Fill className="text-orange-600" />,
      ],
      liveLink: "https://movie-db-dm-sigma.vercel.app",
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
              <RiEyeLine size="20" className="text-secondary" />  View All Projects
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default RecentProjects;