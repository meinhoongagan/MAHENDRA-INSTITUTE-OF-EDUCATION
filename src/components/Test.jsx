import React from 'react'

const Test = () => {
  return (
    <div className="mt-40">
  <div className="container mx-auto">
  <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5 w-80 mx-auto">Unit Test</h2>    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
          <h3 className="text-xl font-bold mb-2">100% Pass Rate</h3>
          <p className="text-gray-600 mb-4">
            All our students pass the unit tests with flying colors.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
          <h3 className="text-xl font-bold mb-2">Comprehensive Coverage</h3>
          <p className="text-gray-600 mb-4">
            Our unit tests cover all the key concepts and skills.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
          <h3 className="text-xl font-bold mb-2">Immediate Feedback</h3>
          <p className="text-gray-600 mb-4">
            Students receive instant feedback on their unit test performance.
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
  )
}

export default Test