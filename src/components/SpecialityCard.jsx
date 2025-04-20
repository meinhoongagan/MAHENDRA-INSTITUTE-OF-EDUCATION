import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SpecialityCard = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
      data-aos="fade-up"
      style={{ minHeight: '350px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card content with relative positioning for overlay effects */}
      <div className="relative h-full flex flex-col">
        {/* Image container with overlay */}
        <div className="relative w-full h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-40'}`}></div>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
              Featured
            </span>
          </div>
          
          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-md">{title}</h3>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-br from-white to-blue-50">
          <div>
            <div className="mb-4 flex items-center">
              <div className="mr-2 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">4.9 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <a 
              href="#" 
              className="group flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
            >
              Learn More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <button 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;