import React from 'react'

const Testimonial = () => {
  return (
    <div className="mt-40">
    {/* Testimonials Section */}
    <div className="container mx-auto" id="testimonials">
      <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <div className="p-6">
      <img src="images/logo.png" alt="" className="h-40"/>
      <p className="text-gray-600 mb-4">
        "This course has been a game-changer for me. The instructors are
        knowledgeable and the curriculum is top-notch."
      </p>
      <h3 className="text-xl font-bold mb-2">John Doe</h3>
      <p className="text-gray-600">Software Engineer</p>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <div className="p-6">
    <img src="images/logo.png" alt="" className="h-40"/>
      <p className="text-gray-600 mb-4">
        "I highly recommend this course to anyone looking to advance their
        career. The hands-on projects were invaluable."
      </p>
      <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
      <p className="text-gray-600">Data Analyst</p>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <div className="p-6">
    <img src="images/logo.png" alt="" className="h-40"/>
      <p className="text-gray-600 mb-4">
        "The instructors are passionate and the course material is
        comprehensive. I've gained so much knowledge and confidence."
      </p>
      <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
      <p className="text-gray-600">Product Manager</p>
    </div>
  </div>
</div>
    </div>
  </div>
  )
}

export default Testimonial