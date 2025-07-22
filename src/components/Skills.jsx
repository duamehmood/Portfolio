import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='pb-20 bg-[#150430] text-white text-center'>
      <div className="container max-w-full">

        <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold md:pb-[40px] pb-[30px] '>My <span className='text-[#CBACF9]'>Skills</span></h2>
        <div className='flex justify-center gap-6 sm:gap-10 flex-wrap items-center'>
          <div>
            <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
              <img src="/figma.png" alt="figma-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
            </div>
            <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>Figma</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/html.png" alt="html-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px]' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg '>HTML</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/css.png" alt="css-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>CSS</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/js.png" alt="javascript-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>JS</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded '>
            <img src="/tailwind.png" alt="tailwind-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg '>Tailwind</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/bootstrapp.png" alt="bootstrap-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg '>Bootstrap</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/react.png" alt="react-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>React</h4>
          </div>
          <div>
          <div className='sm:p-5 p-4 bg-[#5d4592] rounded'>
            <img src="/next.png" alt="nextjs-image" className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-4 border-[#150430] object-contain rounded-[20px] ' />
          </div>
          <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>Next.js</h4>
          </div>
        </div>


       


      </div>
    </div>
  )
}

export default Skills

