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

    return <><h1 className='text-white text-3xl font-bold'>We provide personalise </h1><span className='text-blue-400 text-3xl font-bold'>{displayedText}</span></>;
  };

  return (
    <div className="container mx-auto">
    <div className='homebg'>
    <div className='flex flex-col mt-28 ml-8 mb-8 gap-8'>
    
      <p className='text-white text-8xl font-semibold font-lilita'>
      Mahendra <br/>Institute Of <br/>Technology
      </p>
    
    <Typewriter 
        texts={["learning environment !", "carrier guildence.", "doubt solving."]} 
        typingSpeed={100} 
        deletingSpeed={50} 
        pauseTime={1000} 
      />
    </div>
    {/* <div className='flex justify-center items-center'>
      <img src="images/logo.png" alt="hero" className="w-full h-[80%]"/>
       div added and background is removed and using logo instead
    </div> */}
    </div>
    </div>
  )
}

export default Hero;
