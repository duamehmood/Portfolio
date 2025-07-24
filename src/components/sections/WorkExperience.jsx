import React from 'react';
import ExpCard from '../utils/ExpCard';

const WorkExperience = () => {
    const cardData = [
        {
            id: 1,
            title: "Frontend Engineer Intern",
            desc: "Assisted in developing a web-based platform using React.js, enhancing interactivity.",
            img: "/experience1.png",
        },
        {
            id: 2,
            title: "Frontend Engineer Intern",
            desc: "Built reusable components and UI enhancements with a strong focus on performance.",
            img: "/experience2.png",
        },
        {
            id: 3,
            title: "Frontend Engineer Intern",
            desc: "Worked on UI responsiveness and optimized components across breakpoints.",
            img: "/experience3.png",
        },
        {
            id: 4,
            title: "Frontend Engineer Intern",
            desc: "Collaborated with designers to translate Figma designs into interactive code.",
            img: "/experience4.png",
        },
    ];

    return (
        <div className='pb-[100px] text-white bg-[#150430]'>
            <div className="container mx-auto">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-[#CBACF9]">work experience</span>
                </h2>

                <div className="grid grid-cols-6 md:grid-cols-6 gap-6">
                    {cardData.map((card) => (
                        <div key={card.id} className="col-span-6 md:col-span-3">
                            <ExpCard card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
