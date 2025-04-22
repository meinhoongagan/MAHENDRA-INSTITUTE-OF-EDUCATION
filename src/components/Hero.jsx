import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
  const navigate = useNavigate();

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
  }, []);

  const handleExplore = (path) => {
    navigate(path);
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
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                onClick={() => handleExplore('/courses')}
              >
                Explore Courses
              </button>
              <button 
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
                onClick={() => handleExplore('/contact')}
              >
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
    </div>
  );
};

export default Hero;