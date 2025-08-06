
import { RiEyeLine } from "@remixicon/react";
import { Link } from 'react-router-dom';
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
            title: "Figma to Next.js",
            desc: " Building SEO-friendly Next.js applications from your Figma designs.",
            icon1: "/figma.png",
            icon2: "/next.png",
        },

        {
            id: 3,
            title: "PSD to React ",
            desc: " Converting your PSD designs into dynamic React components.",
            icon1: "/psd.png",
            icon2: "/react.png",
        },



    ]
    return (
        <div className='lg:pb-[100px] md:pb-[70px] pb-[50px] text-white bg-primary'>
            <div className="container mx-auto">
                <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-[600] pb-[30px] md:pb-[50px]">
                    My <span className="text-secondary">Services</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service) => (
                        <div key={service.id} className="transition-transform duration-300 hover:-translate-y-2">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>

                <div className='flex justify-center lg:pt-[50px] md:pt-[30px] pt-[20px] font-[500] lg:text-[18px] text-[16px]'>
                    <Link to="/services">
                        <button className='cursor-pointer text-white flex items-center md:px-[30px] px-[20px] md:py-[15px] py-[10px] gap-2 border-[1px] border-transparent rounded bg-gradient-to-r from-[#6971A266] to-[#272A3C80] hover:from-[#272A3C80] hover:to-[#6971A266] hover:border-secondary  transition-all duration-200'>
                            <RiEyeLine size="20" className="text-secondary" />  View All Services
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Services
