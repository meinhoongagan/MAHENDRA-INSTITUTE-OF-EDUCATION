import React from 'react';
import { useRef } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';  // Import AOS library
import {useEffect} from 'react'

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with optional settings
  }, []);
  const scrollRef = useRef(null);

  const handleDragScroll = (e) => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  const testimonials = [
    {
      image: '/images/pic9.jpeg',
      name: 'Balbir Kaur',
      role: 'Student',
      text: '"This course has been a game-changer for me. The instructors are  knowledgeable and the curriculum is top-notch."',
    },
    {
      image: '/images/pic8.jpeg',
      name: 'Balbir Kaur',
      role: 'Student',
      text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
    },
    {
      image: '/images/pic7.jpg',
      name: 'Balbir Kaur',
      role: 'Student',
      text: ' "I highly recommend this course to anyone looking to advance their career. The hands-on projects were invaluable."',
    },
  ];

  return (
    <div className="bg-[#B1E8FD] " id="testimonials">
      <div className="text-center text-black">
        <h2 className="text-3xl font-bold mb-8 py-5 bg-blue-200 text-black">TESTIMONIALS</h2>
        <h3 className="text-3xl font-semibold mb-8">Explore the students' experience</h3>
      </div>

      {/* Horizontal scroll on small screens */}
      <div 
        ref={scrollRef}
        className="max-w-8xl mx-auto p-6 flex space-x-6 overflow-x-scroll scrollbar-hide cursor-grab select-none lg:hidden"
        onMouseDown={handleDragScroll}
        data-aos="zoom-in"
      >
        {testimonials.map((testimonial, index) => (
          <div className="min-w-[80vw] sm:min-w-[60vw] md:min-w-[40vw] max-w-[400px]">
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          </div>
        ))}
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mx-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full max-w-[400px] mx-auto">
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
