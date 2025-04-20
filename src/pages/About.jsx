import React from 'react';
import { FaGraduationCap, FaUsers, FaBook, FaAward } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap className="text-4xl text-blue-500" />, number: "1000+", label: "Students" },
    { icon: <FaUsers className="text-4xl text-blue-500" />, number: "50+", label: "Teachers" },
    { icon: <FaBook className="text-4xl text-blue-500" />, number: "20+", label: "Courses" },
    { icon: <FaAward className="text-4xl text-blue-500" />, number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Mahendra Institute</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing quality education and helping students achieve their academic goals.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide accessible, high-quality education that empowers students to achieve their full potential and contribute positively to society.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading educational institution recognized for excellence in teaching, innovation, and student success.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaGraduationCap className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Our experienced teachers are dedicated to your success.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaBook className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Education</h3>
              <p className="text-gray-600">We provide top-notch education with modern teaching methods.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaAward className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">Our students consistently achieve excellent results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 