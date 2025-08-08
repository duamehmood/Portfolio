
import { RiArrowRightLongFill } from "@remixicon/react";
import { Link } from 'react-router-dom';

const ServiceDetailCard = ({service}) => {
  return (
    <div className='bg-gradient-to-t from-[#6971A266] to-[#272A3C80]  px-7 py-10 rounded flex flex-col'>
            <h4 className='text-center font-[600] text-[20px] tracking-[.1rem] pb-[30px]'>{service.title}</h4>
            <div className='flex items-center gap-4 sm:gap-5 justify-center '>
                <img src={service.icon1} alt={service.icon1} className='w-[60px] md:w-[80px] border-1 border-secondary shadow-[0_0_12px_#CBACF9]/40 rounded-full p-2.5' />
                <RiArrowRightLongFill />
                <img src={service.icon2} alt={service.icon2} className='w-[60px] md:w-[80px] border-1 border-secondary shadow-[0_0_12px_#CBACF9]/40 rounded-full p-2.5' />
            </div>
            <p className='text-[16px] text-center text-[#f0e6ff] sm:px-0 py-[20px] leading-[1.6]'>{service.desc}</p>
            <div className=' flex justify-center'>
                <Link className='md:px-4 px-3 py-2 md:text-[16px] bg-[#7b68b8] text-white rounded font-[600] text-[14px]  transition-colors duration-300 hover:bg-[#e6e0fa] hover:text-[#4a2486] ' to="/contact" >Book Service Now</Link>
            </div>
        </div>
  )
}

export default ServiceDetailCard
