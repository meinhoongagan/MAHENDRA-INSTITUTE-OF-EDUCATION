import React from "react";
import Hero from "../components/Hero";
import Course from "../components/Course";
import Result from "../components/Result";
import Test from "../components/Test";
import Testimonial from "../components/Testimonial";
import Testimonials from "../components/Testimonials";
import Payment from "../components/Payment";
import Contact from "../components/Contact";
import Speciality from "../components/Speciality";
import FAQ from "../components/FAQ";

function Body() {
  
  return (

    <>
      <Hero/>
      <Speciality/>
      <Test/>
      <Result/>
      <Testimonials/>
      <FAQ/>
      {/* <Course/> */}
      {/* <Payment/> */}
      {/* <Contact/> */}
     </>
    
  );
}

export default Body;