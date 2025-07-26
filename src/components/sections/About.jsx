import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  return (
    <div id="about" className='pb-[100px] bg-primary text-white'>
      <div className="container mx-auto">
        <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold pb-[20px] text-center'>About <span className='text-secondary'>Me</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center ">
          <div className="">
            <figure className='w-full'>
              <img
                src="/question.jpg"
                alt="Profile"
                className="rounded md:border-4 border-3 border-secondary w-full object-cover "
              />
            </figure>
          </div>

          <div className="lg:col-span-2">
            <h4 className="flex flex-col font-semibold text-[18px] md:text-[20px]">
              <span>
                Hello, I&apos;m <span className="text-secondary">Dua Mehmood</span>,
              </span>
              <span>Next.js Developer based in Pakistan.</span>
            </h4>
            <p className="py-5 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti in at ipsum vitae ad soluta architecto dolor. Ipsam eveniet dolor neque pariatur expedita assumenda est excepturi explicabo, molestiae, odit consequuntur! Ex impedit sunt repellat debitis nam, cum maxime tenetur quod tempora mollitia molestias ratione autem veritatis minus ipsam dicta! Dolorum nam aliquid ipsam delectus culpa odit error.    
              
            </p>
            <button className="py-3 px-6 rounded border cursor-pointer text-secondary font-semibold text-[16px] md:text-[18px] hover:bg-secondary hover:text-primary">
              Download CV
            </button>
          </div>

        </div>





      </div>


    </div>
  )
}

export default About
