import React from 'react';
import SkillCard from '../utils/SkillCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSlider = ({ children }) => {
  const skills = [
    {
      id: 1,
      name: "Figma",
      img: "/figma.png",
    },
    {
      id: 2,
      name: "HTML",
      img: "/html.png"
    },
    {
      id: 3,
      name: "CSS",
      img: "/css.png"
    },
    {
      id: 4,
      name: "JS",
      img: "/js.png"
    },
    {
      id: 5,
      name: "Tailwind",
      img: "/tailwind.png"
    },
    {
      id: 6,
      name: "Bootstrap",
      img: "/bootstrapp.png"
    },
    {
      id: 7,
      name: "React",
      img: "/react.png"
    },
    {
      id: 8,
      name: "Next.js",
      img: "/next.png"
    },
    {
      id: 9,
      name: "git",
      img: "/git.png"
    },
    {
      id: 10,
      name: "vite",
      img: "/vite.png"
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 2,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,     
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
       {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }

    ]

  };


  return (
    <div className='pb-20 bg-primary text-white text-center'>
      <div className="container mx-auto">
        <h2 className='text-3xl sm:text-4xl md:text-[48px] font-semibold md:pb-[40px] pb-[30px]'>
          My <span className='text-secondary'>Skills</span>
        </h2>

        <Slider {...settings}>
          {skills.map((skill) => (
            <div key={skill.id} className="px-4"> 
              <SkillCard skill={skill} />
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default SkillsSlider;
