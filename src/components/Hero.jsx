import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/apiConfig';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
  const [academicResults, setAcademicResults] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const handleTyping = () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          if (displayedText.length < fullText.length) {
            setDisplayedText(fullText.substring(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(fullText.substring(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      };

      const timer = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );

      return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
      <span className='text-blue-400 text-2xl sm:text-3xl md:text-4xl font-bold relative'>
        {displayedText}
        <span className="absolute -right-3 top-0 h-full w-[3px] bg-blue-400 animate-blink"></span>
      </span>
    );
  };

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });

    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const token = localStorage.getItem('token');
      const [academicResponse, testResponse] = await Promise.all([
        fetch(API_ENDPOINTS.academicResults.getAll, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
        fetch(API_ENDPOINTS.testResults.getAll, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      ]);

      if (!academicResponse.ok || !testResponse.ok) {
        throw new Error('Failed to fetch results');
      }

      const academicData = await academicResponse.json();
      const testData = await testResponse.json();

      setAcademicResults(academicData.slice(0, 3));
      setTestResults(testData.slice(0, 3));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 21, 107, 0.7)), url('/images/homeImage.jpg')`
        }}
      >
        <div className='container mx-auto px-4 text-center lg:text-left'>
          <motion.div 
            className='flex flex-col gap-6 sm:gap-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins leading-tight'>
                Mahendra <br /> Institute Of <br /> Education
              </p>
            </motion.div>
            <div className='h-12 w-full'>
              <motion.h1 
                className='text-white text-2xl sm:text-3xl md:text-4xl font-bold inline-block mr-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                We provide personalized{' '}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Typewriter 
                  texts={["learning experience!", "career guidance.", "doubt solving.", "success strategies!", "competitive edge."]} 
                  typingSpeed={80} 
                  deletingSpeed={50} 
                  pauseTime={1500} 
                />
              </motion.div>
            </div>
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                Explore Courses
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </motion.div>
            <motion.div 
              className="mt-10 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p className="text-lg">Join our next batch starting <span className="font-bold">June 12, 2025</span></p>
              <p className="text-lg mt-2">Limited seats available. <span className="underline">Register now!</span></p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-white text-sm mt-2 text-center">Scroll Down</p>
        </motion.div>
      </div>

      {/* Results Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Results */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Academic Results</h3>
              <div className="space-y-3">
                {loading ? (
                  <p className="text-gray-600">Loading results...</p>
                ) : error ? (
                  <p className="text-red-600">Error loading results</p>
                ) : (
                  academicResults.map((result, index) => (
                    <div key={result._id} className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{result.user}</p>
                          <p className="text-sm text-gray-600">Class: {result.class}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{result.percentage}%</p>
                          <p className="text-sm text-gray-600">
                            {result.marksObtained}/{result.totalMarks}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/academic-results"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Show More Academic Results →
                </Link>
              </div>
            </div>

            {/* Test Results */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Test Results</h3>
              <div className="space-y-3">
                {loading ? (
                  <p className="text-gray-600">Loading results...</p>
                ) : error ? (
                  <p className="text-red-600">Error loading results</p>
                ) : (
                  testResults.map((result, index) => (
                    <div key={result._id} className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{result.user}</p>
                          <p className="text-sm text-gray-600">{result.testTitle}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{result.percentage}%</p>
                          <p className="text-sm text-gray-600">
                            {result.score}/{result.totalMarks}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/test-results"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Show More Test Results →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;