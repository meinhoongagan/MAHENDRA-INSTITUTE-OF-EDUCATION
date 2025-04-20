import React from 'react'

const Contact = () => {
  return (
    <div className=" mb-20 bg-gradient-to-r from-blue-400 to-cyan-300 py-16 px-8 md:px-20 rounded-2xl shadow-lg" id="contact">
      <h2 className="text-4xl font-bold mb-10 text-center text-white drop-shadow-md">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 p-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Our Location</h3>
          </div>
          <p className="text-gray-600 text-lg ml-16">
            123 Main Street
            <br />
            Anytown, USA 12345
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 p-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
          </div>
          <p className="text-gray-600 text-lg ml-16">
            info@example.com
          </p>
        </div>
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Send Us a Message</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Your Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-md">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact