 import { RiSendPlaneFill, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappLine } from '@remixicon/react'

const Contact = () => {
  return (
    <div className=" bg-gradient-to-b from-[#04071D] via-[#150430] to-[#150430] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-10 items-center">

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary pb-2">Let’s Connect</h2>
          <p className="text-sm text-[#f0e6ff] pb-6">
            Have a question or want to work together? Fill out the form below!
          </p>

          <form className="space-y-5">
            <input
              type="text" placeholder="Your Name" className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:border-secondary focus:outline-none placeholder:text-gray-400 transition"
            />
            <input type="email" placeholder="Your Email" className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:border-secondary focus:outline-none placeholder:text-gray-400 transition"
            />
            <textarea rows="5" placeholder="Your Message" className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md focus:border-secondary focus:outline-none placeholder:text-gray-400 transition"
            />

            <button type="submit" className="mt-2 w-full bg-[#a58cd9] hover:bg-[#7b68b8] py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer shadow-md">
              Send Message <RiSendPlaneFill size={20} />
            </button>
          </form>
        </div>

        <div className="space-y-6 md:pl-6">
          <h3 className="text-2xl font-semibold text-[#CBACF9] text-center md:text-start">Get in touch</h3>
          <p className="text-[#f0e6ff] leading-relaxed text-sm sm:text-base">
            Let’s turn bold ideas into brilliant results. I'm all ears and ready to collaborate! Whether it's a project, partnership, or just a chat, Have a vision or a challenge? Let’s bring it to life together. 
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <RiMailLine className="text-secondary" />
              <span className="hover:text-secondary transition">duamehmmood@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <RiPhoneLine className="text-secondary" />
              <span className="hover:text-secondary transition">+92 326 1889693</span>
            </div>
            <div className="flex items-center gap-3">
              <RiMapPinLine className="text-secondary" />
              <span className="hover:text-secondary transition">Bahawalpur, Pakistan</span>
            </div>
             <div className='flex md:gap-5 gap-3 '>
            <a href="https://github.com/duamehmood" target="_blank">
            <RiGithubFill className=' p-1 border-1 rounded-full size-10 hover:text-secondary' />
            </a>
            <a href="https://www.linkedin.com/in/duamehmood/" target="_blank">
            <RiLinkedinBoxFill className=' p-1 border-1 rounded-full size-10 hover:text-secondary' />
            </a>
            
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
