import React from 'react'

const About = () => {
  return (
    <div id="about" className='pb-[100px] bg-[#150430] text-white'>
      <div className="container max-w-full">
        <h2 className="text-2xl md:text-4xl lg:text-[48px] font-medium tracking-[.35em] text-center">
          ABOUT ME
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-20 py-10 px-4">
          <div className="flex justify-center lg:justify-start col-span-1 lg:col-start-2">
            <figure >
              <img
                src="/question.jpg"
                alt="Profile"
                className="rounded md:border-4 border-3 border-[#CBACF9]  w-full h-full object-center"
              />
            </figure>
          </div>

          <div className="col-span-1 lg:col-span-3 lg:col-end-6 text-center lg:text-left">
            <div>
              <h4 className="flex flex-col font-semibold text-[18px] md:text-[20px]">
                <span>
                  Hello, I&apos;m <span className="text-[#CBACF9]">Dua Mehmood</span>,
                </span>
                <span>User Experience Developer based in Pakistan.</span>
              </h4>
              <p className="py-5 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit velit iure illum, modi temporibus repellat expedita! Rem fugit illo impedit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                accusamus totam optio deleniti vero inventore eius quasi eos itaque ex corrupti minus sint nesciunt laboriosam rem fugit iusto, sed iste,
                consequatur assumenda maxime! Magni consequatur tempora blanditiis illum, veniam non quaerat accusantium reiciendis aperiam. Itaque, laudantium?
                Laudantium nobis eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo.
              </p>
            </div>
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
