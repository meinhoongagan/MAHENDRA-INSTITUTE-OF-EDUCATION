import React, { useState } from 'react';

export default function TestimonialCard({ image, name, role, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col relative overflow-hidden min-h-[340px] max-h-[340px] w-full transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Quote icon as background */}
      <div className="absolute -right-6 -top-6 text-blue-100">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Top colored bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
      
      {/* Content area */}
      <div className="flex flex-col justify-between h-full z-10">
        {/* Testimonial text */}
        <div>
          <p className="text-gray-700 italic mb-6 text-lg leading-relaxed relative z-10">
            "{text}"
          </p>
        </div>
        
        {/* Profile area */}
        <div className="flex items-center mt-4">
          {/* Image container with animated border */}
          <div className={`relative rounded-full transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-spin-slow" style={{ animationDuration: '3s' }}></div>
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full border-2 border-white object-cover relative z-10"
            />
          </div>
          
          {/* Name and role */}
          <div className="ml-4">
            <h4 className="text-xl font-bold text-gray-800">{name}</h4>
            <div className="flex items-center">
              <div className="h-0.5 w-6 bg-gradient-to-r from-blue-500 to-cyan-400 mr-2"></div>
              <p className="text-blue-500 font-medium">{role}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rating stars */}
      <div className="absolute bottom-6 right-6 flex">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Corner decoration */}
      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500 to-transparent rounded-tr-full opacity-10 transition-all duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
    </div>
  );
}