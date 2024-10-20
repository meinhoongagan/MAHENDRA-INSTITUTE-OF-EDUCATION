import React from 'react'
import TestCard from './TestCard'

const Test = () => {
  return (
    <div className="mt-10">
  <div className="container mx-auto">
  <div className="text-center  bg-blue-200 "><h2 className=" text-3xl font-bold mb-8 flex justify-center py-5 w-80 mx-auto">Unit Test</h2>  </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      
      <TestCard head="100% Pass Rate" img="./images/testpic1.jpg" body="All our students pass the unit tests with flying colors."/>
      <TestCard head="Comprehensive Coverage" img="./images/testpic2.jpg" body="Our unit tests cover all the key concepts and ingredients."/>
      <TestCard head="Immediate Feedback" img="./images/testpic3.jpg" body="Students receive instant feedback on their unit test performance."/>

    </div>
        </div>
      </div>
  )
}

export default Test