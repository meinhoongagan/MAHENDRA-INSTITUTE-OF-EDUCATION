import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';      // Import AOS library

const SpecialityCard = ({ image, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);

  return (
    <div
      className="bg-zinc-50 text-center lg:text-left dark:bg-gradient-to-r from-cyan-400 to-blue-400 dark:text-black/75 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-500"
      data-aos="fade-up"
      style={{ minHeight: '250px' }}
    >
      {/* Stack image and content vertically */}
      <div className="flex flex-col">
        {/* Image taking full width */}
        <div className="w-full bg-cover h-48 lg:h-64">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content section taking full width */}
        <div className="p-6 pl-8 flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-4">{title}</h3>
          <p className="text-white mb-4 line-clamp-3">{description}</p>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-auto">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
