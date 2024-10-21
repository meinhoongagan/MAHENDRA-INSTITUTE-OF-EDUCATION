import React from 'react';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS library
import {useEffect} from 'react'
const SpecialityCard = ({ image, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);
  return (
    <div className="flex bg-zinc-50 text-center text-surface/75 dark:bg-gradient-to-r from-cyan-400 to-blue-400 dark:text-black/75 lg:text-left rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-500" data-aos="fade-up">
      <div className="w-1/2 bg-cover">
        <img src={image} alt={title} loading="lazy"  className="h-full w-auto" />
      </div>
      <div className="p-6 pl-8">
        <h3 className="text-4xl font-bold mb-6">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
      </div>
    </div>
  );
};

export default SpecialityCard;
