import React from 'react';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS library
import {useEffect} from 'react'
const SpecialityCard = ({ image, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);
  return (
    <div
  className="flex flex-col lg:flex-row bg-zinc-50 text-center lg:text-left dark:bg-gradient-to-r from-cyan-400 to-blue-400 dark:text-black/75 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-500"
  data-aos="fade-up"
  style={{ minHeight: '250px' }}
>
  <div className="w-full lg:w-1/2 bg-cover h-48 lg:h-auto">
    <img
      src={image}
      alt={title}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6 pl-8 flex flex-col justify-center flex-grow">
    <h3 className="text-4xl font-bold mb-4 ">{title}</h3> 
    <p className="text-white mb-4 line-clamp-3">{description}</p>
    <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-auto">
      Learn More
    </a>
  </div>
</div>

  
  );
};

export default SpecialityCard;
