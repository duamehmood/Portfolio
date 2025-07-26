import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div>
            <div className='p-5 md:p-4 bg-[#6971A266] rounded flex justify-center   '>
              <img src={skill.img} alt={skill.img} className='w-[70px] sm:w-[80px] md:w-[100px] border-2 border-secondary object-contain rounded ' />
            </div>
            <h4 className='pt-2 sm:pt-3 text-sm sm:text-base md:text-lg'>{skill.name}</h4>
      
    </div>
  )
}

export default SkillCard
