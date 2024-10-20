import React from 'react';
import { useRef } from 'react';
import TestimonialCard from './TestimnialCard';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       image: '/images/pic9.jpeg',
//       name: 'Balbir Kaur',
//       role: 'Student',
//       text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
//     },
//     {
//       image: '/images/pic8.jpeg',
//       name: 'Balbir Kaur',
//       role: 'Student',
//       text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
//     },
//     {
//       image: '/images/pic7.jpg',
//       name: 'Balbir Kaur',
//       role: 'Student',
//       text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
//     },
//   ];

//   return (
//     <div className="bg-[#B7E3FD] py-8">
//       <div className="text-center text-black">
//         <h2 className="text-3xl font-bold mb-2 py-5 bg-blue-200 text-black">TESTIMONIALS</h2>
//         <h3 className="text-3xl font-semibold">Explore the students experience</h3>
//       </div>
//       <div className="max-w-8xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard 
//             key={index}
//             image={testimonial.image}
//             name={testimonial.name}
//             role={testimonial.role}
//             text={testimonial.text}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Function to handle drag scrolling
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
      const walk = (x - startX) * 2; // Adjust the scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  const testimonials = [
        {
          image: '/images/pic9.jpeg',
          name: 'Balbir Kaur',
          role: 'Student',
          text: '“ healthy social and emotional development.”',
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
          text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
        },
        {
          image: '/images/pic7.jpg',
          name: 'Balbir Kaur',
          role: 'Student',
          text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
        },
        {
          image: '/images/pic7.jpg',
          name: 'Balbir Kaur',
          role: 'Student',
          text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
        },
        {
          image: '/images/pic7.jpg',
          name: 'Balbir Kaur',
          role: 'Student',
          text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
        },
        {
          image: '/images/pic7.jpg',
          name: 'Balbir Kaur',
          role: 'Student',
          text: '“At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.”',
        },
      ];
    // Add more testimonials as needed

  return (
    <div className="bg-[#B1E8FD] py-8" id='testimonials'>
      <div className="text-center text-black">
        <h2 className="text-3xl font-bold mb-8 py-5 bg-blue-200 text-black">TESTIMONIALS</h2>
        <h3 className="text-3xl font-semibold mb-8">Explore the students experience</h3>
      </div>
      <div 
        ref={scrollRef}
        className="max-w-8xl mx-auto p-6 flex space-x-6 overflow-x-scroll scrollbar-hide cursor-grab select-none"
        onMouseDown={handleDragScroll}
      >
        {testimonials.map((testimonial, index) => (
          <div className="min-w-[31vw]">
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
    </div>
  );
}
