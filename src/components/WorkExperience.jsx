import React from 'react'

const WorkExperience = () => {
    return (
        <div className='pb-[100px] text-white bg-[#150430]'>
            <div className="container max-w-full px-4">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-[#CBACF9]">work experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    <div className="md:col-span-2 md:col-start-2 flex gap-6 p-5 bg-gradient-to-r from-[#6971A266] to-[#272A3C80] rounded hover:from-[#272A3C80] hover:to-[#6971A266] transition duration-200 items-center xl:flex-row md:flex-col">
                        <img src="/experience1.png" alt="experience" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
                        <div className='md:text-center lg:text-left'>
                            <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[26px] pb-3 leading-[100%]">Frontend Engineer Intern</h3>
                            <p className="text-[#BEC1DD] text-[14px] md:text-[16px]">Assisted in developing a web-based platform using React.js, enhancing interactivity.</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-end-6 flex gap-6 p-5 bg-gradient-to-r from-[#6971A266] to-[#272A3C80] rounded hover:from-[#272A3C80] hover:to-[#6971A266] transition duration-200 items-center xl:flex-row md:flex-col">
                        <img src="/experience2.png" alt="experience" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
                        <div className='md:text-center lg:text-left'>
                            <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[26px] pb-3 leading-[100%]">Frontend Engineer Intern</h3>
                            <p className="text-[#BEC1DD] text-[14px] md:text-[16px]">Built reusable components and UI enhancements with a strong focus on performance.</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-start-2 flex gap-6 p-5 bg-gradient-to-r from-[#6971A266] to-[#272A3C80] rounded hover:from-[#272A3C80] hover:to-[#6971A266] transition duration-200 items-center xl:flex-row md:flex-col">
                        <img src="/experience3.png" alt="experience" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
                        <div className='md:text-center lg:text-left'>
                            <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[26px] pb-3 leading-[100%]">Frontend Engineer Intern</h3>
                            <p className="text-[#BEC1DD] text-[14px] md:text-[16px]">Worked on UI responsiveness and optimized components across breakpoints.</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 md:col-end-6 flex gap-6 p-5 bg-gradient-to-r from-[#6971A266] to-[#272A3C80] rounded hover:from-[#272A3C80] hover:to-[#6971A266] transition duration-200 items-center xl:flex-row md:flex-col">
                        <img src="/experience4.png" alt="experience" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]" />
                        <div className='md:text-center lg:text-left'>
                            <h3 className="font-medium text-[20px] md:text-[24px] lg:text-[26px] pb-3 leading-[100%]">Frontend Engineer Intern</h3>
                            <p className="text-[#BEC1DD] text-[14px] md:text-[16px]">Collaborated with designers to translate Figma designs into interactive code.</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default WorkExperience
