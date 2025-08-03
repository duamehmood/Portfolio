//  import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const About = () => {
//   return (
//     <section className="pb-[100px] bg-primary">
//       <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
//         <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
//           Crafting <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">Dynamic Web Experiences</span>
//         </h2>

//         <p className="text-xl text-gray-300 mb-6 max-w-3xl">
//           I'm <span className="font-semibold text-white">Dua Mehmood</span>, a <span className="text-purple-400">Next.js Developer</span> from Bahawalpur, Pakistan.
//           I turn creative ideas into high-performing, interactive websites with clean code and design precision.
//         </p>

//         <p className="text-lg text-gray-400 mb-10 max-w-2xl">
//           From transforming Figma prototypes to crafting seamless user interfaces, I focus on delivering digital products that feel intuitive, responsive, and visually compelling.
//         </p>

//         <a href="/path-to-cv.pdf" className=" cursor-pointer text-white flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-colors duration-200 font-[500] lg:text-[18px] text-[16px]">
//           Download CV
//         </a>
//       </div>
//     </section>
//   )
// }
// export default About


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDownloadFill } from "@remixicon/react";

const About = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-[100px] bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

         <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold text-center text-white'>About <span className='text-secondary'>Me</span></h2>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug sm:leading-tight pt-7 pb-6">
          Crafting <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">Dynamic Web Experiences</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
          I'm <span className="font-semibold text-white">Dua Mehmood</span>, a <span className="text-purple-400">Next.js Developer</span> from Bahawalpur, Pakistan.
          I turn creative ideas into high-performing, interactive websites with clean code and design precision.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 max-w-2xl">
          From transforming Figma prototypes to crafting seamless user interfaces, I focus on delivering digital products that feel intuitive, responsive, and visually compelling.
        </p>

        <a
          href="/path-to-cv.pdf"
          className="cursor-pointer text-white flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 md:px-[30px] md:py-[15px] gap-2 border border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-colors duration-200 font-medium text-sm sm:text-base lg:text-[18px]"
        >
         <RiDownloadFill size="20"  className="text-secondary" /> Download CV 
        </a>
      </div>
    </section>
  );
};

export default About;
