
import { useState } from "react";
import ProjectDetailCard from "../components/utils/ProjectDetailCard";
import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from "@remixicon/react";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Circle",
      desc: "A modern responsive web app using React and Tailwind CSS to explore planets in 3D.",
      image: "/circle.png",
      tech: ["html", "css"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiCss3Fill className="text-blue-500" />,
      ],
      liveLink: "https://github.com/duamehmood/circle",
    },
    {
      id: 2,
      title: "Logitech",
      desc: "A full-featured Zoom-like app made with React, enabling secure online meetings.",
      image: "/logitech.png",
      tech: ["html", "css"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiCss3Fill className="text-blue-500" />,
      ],
      liveLink: "https://github.com/duamehmood/logitech",
    },
    {
      id: 3,
      title: "MovieDB",
      desc: "A SaaS platform to generate and edit AI images using modern web tools.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "bootstrap", "react"],
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
      tech: ["html", "javascript", "bootstrap", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiBootstrapFill className="text-purple-700" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://reactfiverclone.vercel.app",
    },
    {
      id: 5,
      title: "Fiver",
      desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "tailwind", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiTailwindCssFill className="text-blue-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-gxt6.vercel.app",
    },
    {
      id: 6,
      title: "Fiver",
      desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "tailwind", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiTailwindCssFill className="text-blue-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-gxt6.vercel.app",
    },
    {
      id: 7,
      title: "Fiver",
      desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "tailwind", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiTailwindCssFill className="text-blue-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-gxt6.vercel.app",
    },
    {
      id: 8,
      title: "Fiver",
      desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "tailwind", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiTailwindCssFill className="text-blue-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-gxt6.vercel.app",
    },
    {
      id: 9,
      title: "Fiver",
      desc: "A stunning 3D animated iPhone model site made with Three.js and React.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "tailwind", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiTailwindCssFill className="text-blue-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-gxt6.vercel.app",
    },
  ];

  const techOptions = ["All", "html", "javascript", "tailwind", "bootstrap", "react"];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedTech === "All") return true;

    if (selectedTech === "html") {
      return (
        project.tech.length === 2 &&
        project.tech.includes("html") &&
        project.tech.includes("css")
      );
    }

    return project.tech.includes(selectedTech);
  });

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#04071D] via-primary to-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
          My <span className="text-secondary">projects</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techOptions.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300
              ${selectedTech === tech
                  ? "bg-primary text-[#CBACF9] border border-[#CBACF9]"
                  : " border border-transparent bg-[#9389b5] text-white"
                }`}>
              {tech.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#CBACF9]/40">
              <ProjectDetailCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-300 mt-10">
            No projects found with {selectedTech.toUpperCase()}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
