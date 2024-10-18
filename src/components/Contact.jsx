import React from 'react'

const Contact = () => {
  return (
     <div className="mt-40 mb-20 bg-gradient-to-r from-cyan-200 to-blue-200 py-10 px-20 rounded-xl" id="contact">
     <h2 className="text-3xl font-bold mb-8 flex justify-center">Contact Us</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div className="bg-white rounded-lg shadow-md overflow-hidden  p-6">
         <h3 className="text-xl font-bold mb-2">Address</h3>
         <p className="text-gray-600 mb-4">
           123 Main Street
           <br />
           Anytown, USA 12345
         </p>
       </div>
       <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
         <h3 className="text-xl font-bold mb-2">Email</h3>
         <p className="text-gray-600 mb-4">
           info@example.com
         </p>
       </div>
     </div>
   </div>
  )
}

export default Contact