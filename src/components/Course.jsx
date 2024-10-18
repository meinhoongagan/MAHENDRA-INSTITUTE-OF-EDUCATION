import React from 'react'

const Course = () => {
  return (
    <>
    <div className="text-center" id="courses">
          <h2 className="text-3xl font-bold border rounded-xl py-5 bg-blue-200">Courses</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10" >
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-500 1">
    <img src="/images/logo.png" alt="Course 1" className="h-40  "/>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Course 1</h3>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <img src="/images/logo.png" alt="Course 2" className="h-40"/>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Course 2</h3>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <img src="/images/logo.png" alt="Course 3" className="h-40"/>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Course 3</h3>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
    <img src="/images/logo.png" alt="Course 4" className="h-40"/>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">Course 4</h3>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</a>
    </div>
  </div>
</div>
</>
  )
}

export default Course