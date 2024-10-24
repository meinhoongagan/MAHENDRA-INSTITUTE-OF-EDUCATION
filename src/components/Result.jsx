import React from 'react'
import ResultCard from './ResultCard'
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS library
import {useEffect} from 'react'
const Result = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);
  return (
    <div className="mt-30" >
        {/* Results Section */}
        <div className="container bg-[#B1E8FD] mx-auto " id="results">
        <h2 className=" text-3xl font-bold mb-8 flex justify-center border rounded-xl bg-blue-200 py-5">Our Results</h2>
          <h2 className=" text-3xl font-semibold mb-8 flex justify-center rounded-xl pt-5  w-80 mx-auto">Academic Results</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 " data-aos="fade-up">
      <ResultCard head="100% Placement" body="All our students get placed in top companies." img="/images/pic4.jpeg"/>
      <ResultCard head="Average Salary" body="Our students earn an average of $80,000 per year." img="/images/pic 5.jpeg"/>
      <ResultCard head="Satisfied Students" body="98% of our students are highly satisfied with our courses." img="/images/pic 6.jpg"/>
      </div>
    </div>
  </div>
  )
}

export default Result