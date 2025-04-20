import React from 'react'

const ResultCard = ({ head, body, img, icon }) => {
  return (
    <div className="bg-white text-center rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="relative">
        <img 
          src={img} 
          alt={head} 
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6 relative">
        <div className="absolute -top-10 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-2xl font-bold py-2 px-6 rounded-lg shadow-md">
            {head}
          </div>
        </div>
        
        <div className="mt-8">
          <p className="mb-4 text-gray-700 text-lg">
            {body}
          </p>
          <button className="mt-2 text-blue-500 font-medium flex items-center justify-center mx-auto group-hover:underline">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard