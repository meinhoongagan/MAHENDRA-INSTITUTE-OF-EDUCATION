import React from "react";

function Body() {
  
  return (

    <div className="grid grid-rows-2 justify-center w-screen">
    <div className="relative flex-col grid grid-rows-1 max-md:flex-col">
      <div className="flex justify-center align-center" id="home">
        {/* <h1 className="flex justify-center  border border-blue-700 bg-blue-100  rounded-full py-4 w-screen top-10 font-bold text-3xl absolute">Home   </h1> */}
        <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5 w-full absolute top-10">Home</h2>

        </div>
     { /* Home section Starting */}
     <div className="flex-col absolute top-40 left-40 bg-gradient-to-r from-cyan-200 to-blue-200 py-10 px-20 rounded-xl w-1/2 hover:shadow-xl hover:shadow-gray-300 max-md:w-full max-md:left-0 max-md:px-5 lg:absolute lg:left-20" >
          <h1 className="font-bold text-2xl">lorem ipsum jsdbva ajbn</h1>
          <p className="">
          lorem ipsum qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum
          qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf
          x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
          lorem ipsum qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum
          qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf
          x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
         uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
     
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
         uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
         uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
         uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
         iulkjc jhkjb lorem ipsum qlnf x;oiainc na;
          uuhc kjhflkjb ciulkjc jhkjb
     
 
          
          </p>
        </div>
        <div className="flex h-80 max-md:w-full absolute max-md:top-2/3  top-60 w-80 right-40 max-md:right-0">
          <img
            src="/images/logo.png"
            alt=""
            className="max-md:hidden shadow-xl shadow-gray-400 absolute top-0 right-40 lg:absolute lg:right-0"
          />
          <img
            src="/images/pexels-max-fischer-5212329.jpg"
            alt=""
            className="md:hidden shadow-xl shadow-gray-400"
          />
        </div>
        <h2 className="flex justify-center text-3xl font-bold w-full border rounded-xl py-5 bg-blue-200 " id="courses">Courses</h2>
    </div>
      {/*Home section ending*/}


      {/* Course Section starting */}
      {/* <h1 className="flex justify-center  border border-blue-700 bg-blue-100  rounded-full py-4 w-screen bottom-0 font-bold text-3xl absolute">Home   </h1> */}
      {/* <h2 className="grid grid-row-1 text-3xl font-bold mb-8  justify-center border rounded-xl bg-blue-200 py-5 w-full">Courses</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10" >
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-slate-500">
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

{/* Unit Test Section */}
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
      
    </div>
    
  );
}

export default Body;