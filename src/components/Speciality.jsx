import React from 'react';
import { FaChalkboardTeacher, FaBookReader, FaLaptop, FaUsers, FaChartBar, FaHeadset, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Speciality = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-5xl text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from industry experts with over 15+ years of teaching experience in various academic fields"
    },
    {
      icon: <FaBookReader className="text-5xl text-blue-600" />,
      title: "Comprehensive Study Material",
      description: "Access our meticulously developed study materials updated with the latest curriculum changes"
    },
    {
      icon: <FaLaptop className="text-5xl text-blue-600" />,
      title: "Advanced Learning Platform",
      description: "Utilize our interactive digital platform with recorded lectures and practice exercises"
    },
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "Personalized Attention",
      description: "Benefit from our 1:15 teacher-student ratio ensuring individual growth and monitoring"
    },
    {
      icon: <FaChartBar className="text-5xl text-blue-600" />,
      title: "Regular Performance Analysis",
      description: "Track progress with AI-powered analytics and bi-weekly performance reports"
    },
    {
      icon: <FaHeadset className="text-5xl text-blue-600" />,
      title: "24/7 Doubt Support",
      description: "Get immediate assistance through our dedicated support team available round the clock"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            Why Choose Us?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-50"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 500+ success stories and a decade of educational excellence, we've perfected our approach to help students achieve their dreams
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
              variants={itemVariants}
            >
              <div className="mb-6 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 bg-blue-600 text-white p-10 rounded-2xl shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-around text-center gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">35+</h3>
              <p className="text-blue-100">Top Rankers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">12+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speciality;