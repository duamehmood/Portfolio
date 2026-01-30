
import { useState } from "react";
import ProjectDetailCard from "../components/utils/ProjectDetailCard";
import { RiBootstrapFill, RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill, RiDatabaseFill, RiServerFill } from "@remixicon/react";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Circle",
      desc: "Modern SaaS landing page highlighting features, testimonials, and call-to-action sections.",
      image: "/circle.png",
      tech: ["html", "css"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiCss3Fill className="text-blue-500" />,
      ],
      liveLink: "https://duamehmood.github.io/Circle/",
    },
    {
      id: 2,
      title: "Logitech",
      desc: "Responsive product landing page clone showcasing Logitech products and features.",
      image: "/logitech.png",
      tech: ["html", "css"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiCss3Fill className="text-blue-500" />,
        <RiBootstrapFill className="text-purple-700" />

      ],
      liveLink: " https://duamehmood.github.io/Logitech/",
    },
    {
      id: 3,
      title: "MovieDB",
      desc: "API-powered movie app displaying detailed information like genres, languages, and ratings.",
      image: "/moviedb.png",
      tech: ["html", "javascript", "bootstrap", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiBootstrapFill className="text-purple-700" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://movie-db-dm-sigma.vercel.app",
    },
    {
      id: 4,
      title: "Fiver",
      desc: "React-based freelance marketplace clone with gigs browsing and modern UI experience.",
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
      title: "Mediconnect",
      desc: "Online doctor appointment system for booking consultations and managing healthcare schedules.",
      image: "/mediconnect.png",
      tech: ["html", "tailwind", "javascript", "django" , "SQLite3"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiTailwindCssFill className="text-teal-400" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiServerFill className="text-green-600" />,
        <RiDatabaseFill className="text-gray-500" />
      ],
      liveLink: "http://duamehmood.pythonanywhere.com/",
    },
     {
      id: 6,
      title: "FitnessTracker",
      desc: "A web application for tracking workouts, monitoring progress, and managing daily fitness goals.",
      image: "/fitnesstracker.png",
      tech: ["html", "tailwind", "javascript", "react"],
      icons: [
        <RiHtml5Fill className="text-orange-600" />,
        <RiTailwindCssFill className="text-teal-400" />,
        <RiJavascriptFill className="text-yellow-400" />,
        <RiReactjsLine className="text-blue-300" />,
      ],
      liveLink: "https://fitness-tracker-dm.vercel.app",
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
            <div key={project.id} className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_15px_#CBACF9]/40">
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
