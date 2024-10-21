import React from 'react';
import SpecialityCard from './SpecialityCard';

const Speciality = () => {
  const specialties = [
    {
      image: '/images/pic1.jpg',
      title: 'Smart classes',
      description: 'Classes where students can learn while interacting with pictures and videos.',
    },
    {
      image: '/images/pic 2.jpeg',
      title: 'Personalized Doubt Session',
      description: 'Personalized sessions to clear doubts and strengthen understanding.',
    },
    {
      image: '/images/pic 3.jpeg',
      title: 'Regular Tests',
      description: 'Regular tests to monitor progress and assess understanding.',
    },
    {
      image: '/images/pic4.jpeg',
      title: 'Career Counseling',
      description: 'Guidance and counseling to help students with career choices.',
    },
  ];

  return (
    <>
      <div className="text-center" id="courses">
        <h2 className="text-3xl font-bold border rounded-xl py-5 bg-blue-200">Our Speciality</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 bg-contain bg-center bg-no-repeat px-4">
        {specialties.map((specialty, index) => (
          <div key={index} className="mx-auto w-full max-w-[500px]">
            <SpecialityCard
              image={specialty.image}
              title={specialty.title}
              description={specialty.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Speciality;
