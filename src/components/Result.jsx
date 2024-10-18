import React from 'react'

const Result = () => {
  return (
    <div className="mt-40">
        {/* Results Section */}
        <div className="container mx-auto"id="results">
        <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5 ">Our Results</h2>
          <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5 w-80 mx-auto">Academic Results</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
   
          <h3 className="text-xl font-bold mb-2">100% Placement</h3>
          <p className="text-gray-600 mb-4">
            All our students get placed in top companies.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
          <h3 className="text-xl font-bold mb-2">Average Salary</h3>
          <p className="text-gray-600 mb-4">
            Our students earn an average of $80,000 per year.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src="/images/logo.png" alt="Course 3" className="h-40"/>
          <h3 className="text-xl font-bold mb-2">Satisfied Students</h3>
          <p className="text-gray-600 mb-4">
            98% of our students are highly satisfied with our courses.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Result