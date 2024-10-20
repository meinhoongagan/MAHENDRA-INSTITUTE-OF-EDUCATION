import React from 'react'
import UseAOS from './UseAOS'
const Sapeciality = () => {
    UseAOS();

  return (
    <>
    <div className="text-center" id="courses">
          <h2 className="text-3xl font-bold border rounded-xl py-5 bg-blue-200">Our Speciality</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 bg-contain bg-center bg-no-repeat"
     >

  <div  data-aos="fade-right" data-aos-duration="2000" className="flex bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500 mx-4">
    <div className='w-1/2 bg-cover'><img src="/images/pic1.jpg" alt="img" loading='lazy' className="h-60 w-full"/></div>
    <div className="p-6 pl-8">
      <h3 className="text-4xl font-bold mb-6">Smart classes</h3>
      <p className="text-gray-600 mb-4">Classes where student can learn while interacting with pictures and videos.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>

  <div data-aos="fade-left" data-aos-duration="2000" className="flex bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500 ml-4">
    <div className='w-1/2 bg-cover'><img src="/images/pic 2.jpeg" alt="img" loading='lazy' className="h-60 w-full"/></div>
    <div className=" pl-8 p-6">
      <h3 className="text-4xl font-bold mb-6">Personalize Doubt Session </h3>
      <p className="text-gray-600 mb-4">Classes where student can learn while interacting with pictures and videos.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>

  <div  data-aos="fade-right" data-aos-duration="2000" className="flex bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500 ml-4">
    <div><img src="/images/pic 3.jpeg" alt="img" loading='lazy' className="h-60 w-full"/></div>
    <div className="p-6 pl-8">
      <h3 className="text-4xl font-bold mb-6">Regular Tests</h3>
      <p className="text-gray-600 mb-4">Classes where student can learn while interacting with pictures and videos.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>

  <div data-aos="fade-left" data-aos-duration="2000" className="flex bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500 ml-4">
    <div><img src="/images/pic4.jpeg" alt="img" loading='lazy' className="h-60 w-full"/></div>
    <div className="p-6 pl-8">
      <h3 className="text-4xl font-bold mb-6">Carrier coucilling</h3>
      <p className="text-gray-600 mb-4">Classes where student can learn while interacting with pictures and videos.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>
</div>
</>
  )
}

export default Sapeciality