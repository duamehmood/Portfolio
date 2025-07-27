import React from 'react'
import { RiArrowRightUpLine , RiPhoneFill} from "@remixicon/react"
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='bg-primary text-white md:pt-10 pb-20  text-center'>
        <div className="container mx-auto">
            <h2 className='lg:text-[48px] md:text-[38px] text-[30px] font-[700] leading-[100%] tracking-[1px] 2xl:px-[270px] xl:px-[180px] md:px-[80px] '>Ready to take <span className='text-secondary'> your</span> digital presence to the next level?</h2>
            <p className='text-[#C1C2D3] text-[16px] font-[400] pt-[10px] pb-[30px]'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
             <div className='flex justify-center font-[500] lg:text-[18px] text-[14px] sm:text-[16px] '>
                    <Link to="/contact">
                        <button className='cursor-pointer text-white  flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-colors duration-200  '> <RiPhoneFill className="text-secondary"/>  Contact Me Now   <RiArrowRightUpLine /> </button>
                    </Link>
                </div>
        </div>

      
    </div>
  )
}

export default Contact

