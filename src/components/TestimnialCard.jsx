import React from 'react';

export default function TestimonialCard({ image, name, role, text }) {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-slate-500">
      <p className="text-gray-600 mb-4">{text}</p>
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  );
}
