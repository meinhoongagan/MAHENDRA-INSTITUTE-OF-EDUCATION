import React from 'react';
import { motion } from 'framer-motion';

const SpecialityCard = ({ image, title, description }) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-xl bg-white shadow-xl h-full flex flex-col"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-white p-6">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="self-start mt-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const Speciality = () => {
  const specialties = [
    {
      image: '/images/pic1.jpg',
      title: 'Smart Classes',
      description: 'State-of-the-art digital classrooms equipped with interactive whiteboards, projectors, and multimedia tools to enhance learning through visual and interactive content.',
    },
    {
      image: '/images/pic 2.jpeg',
      title: 'Personalized Doubt Sessions',
      description: 'One-on-one sessions with subject experts to address individual learning challenges and ensure thorough understanding of complex topics.',
    },
    {
      image: '/images/pic 3.jpeg',
      title: 'Regular Assessment Tests',
      description: 'Weekly and monthly tests structured to match competitive exam patterns, with detailed performance analysis and improvement strategies.',
    },
    {
      image: '/images/pic10.jpg',
      title: 'Career Counseling',
      description: 'Expert guidance from industry professionals to help students make informed decisions about their academic and career paths based on aptitude and interests.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16" id="courses">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4 inline-block relative"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Specialities
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique features that make our teaching methodology stand out from the crowd
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index} 
              className="mx-auto w-full max-w-[500px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpecialityCard
                image={specialty.image}
                title={specialty.title}
                description={specialty.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-600 mt-2">Students Currently Enrolled</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-600">92%</h3>
              <p className="text-gray-600 mt-2">Success Rate in JEE/NEET</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-600">45+</h3>
              <p className="text-gray-600 mt-2">Students in Top 1000 Ranks</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl font-bold text-blue-600">15+</h3>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Speciality;