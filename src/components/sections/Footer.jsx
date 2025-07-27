
import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary text-secondary'>
      <div className="container mx-auto">
        <hr className='text-secondary' />
        <div className='lg:py-5 py-6 text-[14px] flex justify-around items-center lg:flex-row flex-col-reverse gap-4'>
          <p> DuaMehmood &copy; 2025. All rights reserved!</p>
          <div className='flex md:gap-5 gap-3'>
            <a href="https://github.com/duamehmood" target="_blank">
            <RiGithubFill className=' p-1 border-1 rounded-full size-8 hover:text-white' />
            </a>
            <a href="https://www.linkedin.com/in/duamehmood/" target="_blank">
            <RiLinkedinBoxFill className=' p-1 border-1 rounded-full size-8 hover:text-blue-500' />
            </a>
            <a href="https://wa.me/03261889693" target="_blank">
            <RiWhatsappLine className=' p-1 border-1 rounded-full size-8 hover:text-green-500' />
            </a>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Footer
