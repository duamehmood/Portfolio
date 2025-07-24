import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  return (
    <div id="about" className='pb-[100px] bg-[#150430] text-white'>
      <div className="container mx-auto">
        <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold md:pb-[30px] pb-[50px] text-center'>About <span className='text-[#CBACF9]'>Me</span></h2>

        <div className="flex gap-10 justify-center items-center">
          <div>
            <figure className='w-full h-full'>
              <img
                src="/question.jpg"
                alt="Profile"
                className="rounded md:border-4 border-3 border-[#CBACF9]  w-full h-full object-cover "
              />
            </figure>
          </div>

          <div>
            <h4 className="flex flex-col font-semibold text-[18px] md:text-[20px]">
              <span>
                Hello, I&apos;m <span className="text-[#CBACF9]">Dua Mehmood</span>,
              </span>
              <span>Next.js Developer based in Pakistan.</span>
            </h4>
            <p className="py-5 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.   
              
            </p>
            <button className="py-3 px-6 rounded border cursor-pointer text-[#CBACF9] font-semibold text-[16px] md:text-[18px] hover:bg-[#CBACF9] hover:text-[#150430]">
              Download CV
            </button>
          </div>

        </div>





      </div>


    </div>
  )
}

export default About
