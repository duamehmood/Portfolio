import React from 'react'
import { RiPhoneFill } from "@remixicon/react"
import { Link } from "react-router-dom";



const Hero = () => {
    return (
        <div className='w-full md:py-32 py-[50px] text-center bg-gradient-to-b from-[#04071D] via-[#0C0E23] to-primary'>
            <div className="container mx-auto">
                <p className='font-[400] text-[16px] sm:tracking-[25%] tracking-[15%] text-[#E4ECFF] uppercase'>Dynamic Web Magic with Next.js</p>
                <h1 className='pt-[20px] pb-[30px] font-[700] lg:text-[72px] md:text-[56px] text-[44px] tracking-[-3.6%] leading-[100%] text-white xl:px-[100px] px-0'>Transforming Concepts into Seamless  <span className='text-secondary'>User Experiences</span> </h1>
                <p className='text-[#E4ECFF] font-[400] md:text-[22px] text-[18px] tracking-[0%] leading-[120%]'>Hi! I’m Dua Mehmood, a Next.js Developer based in Bahawalpur</p>
                    <div className='flex justify-center pt-[30px] font-[500] lg:text-[18px] text-[16px]  mb-10'>
                        <Link to="/contact">
                            <button className='cursor-pointer text-white flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary transition-colors duration-200'>
                                <RiPhoneFill className="text-secondary" /> Contact Me Now
                            </button>
                        </Link>
                </div>

            </div>
        </div>
    )
}

export default Hero
