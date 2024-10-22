import React from 'react';

export default function TestimonialCard({ image, name, role, text }) {
  return (
    <div className="bg-zinc-50 text-surface/75 dark:bg-gradient-to-r from-cyan-400 to-blue-400 dark:text-black/75 lg:text-left rounded-lg shadow-lg p-6 flex flex-col items-center justify-between text-center hover:shadow-slate-500 min-h-[320px] max-h-[320px] w-full">
      <p className="text-white mb-4">{text}</p>
      <img 
        src={image} 
        alt={name} 
        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
      />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-white text-sm">{role}</p>
      </div>
    </div>
  );
}
