import React from "react";
import Hero from "../components/Hero";
// import Course from "../components/Course";
import Result from "../components/Result";
import Test from "../pages/Test";
// import Testimonial from "../components/Testimonial";
import Testimonials from "../pages/Testimonials";
// import Payment from "../components/Payment";
import Contact from "../components/Contact";
import Speciality from "../pages/Speciality";
import FAQ from "../pages/FAQ";

function Body() {
  
  return (

    <>
      <Hero/>
      <Speciality/>
      <Test/>
      <Result/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      {/* <Course/> */}
      {/* <Payment/> */}
      {/* <Contact/> */}
     </>
    
  );
}

export default Body;