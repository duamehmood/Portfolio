import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div>
            <div className='sm:p-5 p-4 bg-[#6971A266] rounded cursor-pointer hover:bg-[#272A3C80] transition duration-200 flex flex-col items-center justify-center shadow-none hover:shadow-[0_0_15px_#CBACF9] '>
              <img src={skill.img} alt={skill.img} className='w-[70px] sm:w-[80px] md:w-[100px] h-[70px] sm:h-[80px] md:h-[100px] border-2 border-[#CBACF9] object-contain rounded ' />
            </div>
            <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>{skill.name}</h4>
      
    </div>
  )
}

export default SkillCard
