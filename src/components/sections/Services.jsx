import React from 'react'

import ServiceCard from "../utils/ServiceCard"

const Services = () => {

    const servicesData = [
        {
            id: 1,
            title: "Figma to HTML",
            desc: "Transforming your Figma designs into pixel-perfect HTML/CSS code.",
            icon1: "/figma.png",
            icon2: "/html.png",
        },
        {
            id: 2,
            title: "Figma to React",
            desc: " Converting your Figma designs into dynamic React components.",
            icon1: "/figma.png",
            icon2: "/react.png",
        },
        {
            id: 3,
            title: "Figma to Next.js",
            desc: " Building SEO-friendly Next.js applications from your Figma designs.",
            icon1: "/figma.png",
            icon2: "/next.png",
        },
        {
            id: 4,
            title: "PSD to HTML",
            desc: " Transforming your PSD designs into responsive HTML/CSS code.",
            icon1: "/psd.png",
            icon2: "/html.png",
        },
        {
            id: 5,
            title: "PSD to React ",
            desc: " Converting your PSD designs into dynamic React components.",
            icon1: "/psd.png",
            icon2: "/react.png",
        },
        {
            id: 6,
            title: "PSD to Next.js",
            desc: " Building SEO-friendly Next.js applications from your PSD designs.",
            icon1: "/psd.png",
            icon2: "/next.png",
        }


    ]
    return (
        <div className='pb-[100px] text-white bg-primary'>
            <div className="container mx-auto">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-secondary">Services</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <div key={service.id} className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_#CBACF9]/40">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services
