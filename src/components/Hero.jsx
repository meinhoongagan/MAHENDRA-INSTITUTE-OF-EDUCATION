import React from 'react'
import { useState, useEffect } from 'react';

const Hero = () => {

  const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const handleTyping = () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          // Typing phase
          if (displayedText.length < fullText.length) {
            setDisplayedText(fullText.substring(0, displayedText.length + 1));
          } else {
            // Pause before starting to delete
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Deleting phase
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
      <>
        <h1 className='text-white text-2xl sm:text-3xl font-bold'>
          We provide personalised{' '}
        </h1>
        <span className='text-blue-400 text-2xl sm:text-3xl font-bold'>
          {displayedText}
        </span>
      </>
    );
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `linear-gradient(rgba(3, 3, 3, 0.8), rgba(22, 204, 207, 0.3)), url('/images/homeImage.jpg')`
      }}
    >
      <div className='container mx-auto px-4 text-center lg:text-left'>
        <div className='flex flex-col gap-6 sm:gap-8'>
          <div>
            <p className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium font-lilita leading-tight'>
              Mahendra <br /> Institute Of <br /> Education
            </p>
          </div>
          <div className='h-10 w-full'>
            <Typewriter 
              texts={["learning!", "career guidance.", "doubt solving."]} 
              typingSpeed={100} 
              deletingSpeed={50} 
              pauseTime={1000} 
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
