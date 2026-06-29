
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDownloadFill } from "@remixicon/react";

const About = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-[100px] bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold text-center text-white'>About <span className='text-secondary'>Me</span></h2>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug sm:leading-tight lg:pt-7 md:pt-6 pt-5 md:pb-6 pb-4">
          Architecting <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">End-to-End Web Applications</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 md:pb-6 pb-4 max-w-3xl">
          I'm <span className="font-semibold text-white">Dua Mehmood</span>, a <span className="text-purple-400">Full-Stack Developer</span> from Bahawalpur, Pakistan.
          I bridge the gap between secure, robust backend logic and highly optimized, dynamic frontend interfaces.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 md:pb-10 pb-6 max-w-2xl">
          Whether designing relational databases and RESTful APIs with Python/Django or building performance-driven client-side views with Next.js and Tailwind CSS, I focus on delivering seamless, role-based workflows and fast page performance.
        </p>

        <a
          href="/DuaMehmood_Resume.pdf"
          download="DuaMehmood_Resume.pdf"
          className="cursor-pointer text-white flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 md:px-[30px] md:py-[15px] gap-2 border border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-colors duration-200 font-medium text-sm sm:text-base lg:text-[18px]"
        >
          <RiDownloadFill size={20} className="text-secondary" />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
