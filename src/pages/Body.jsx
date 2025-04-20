import React from "react";
import Hero from "../components/Hero";
import Speciality from "../components/Speciality";
import Result from "../components/Result";
import Test from "../pages/Test";
import Testimonials from "../pages/Testimonials";
import Contact from "../components/Contact";
import FAQSection from "../pages/FAQ";

function Body() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Speciality />
        <Test />
        <Result />
      <Testimonials />
      <FAQSection />
      <Contact />
    </div>
  );
}

export default Body;