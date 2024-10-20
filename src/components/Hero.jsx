import React from 'react'
import { useState,useEffect } from 'react';
// import { useTypewriter,Cursor } from 'react-simple-typewriter'
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
  
    return <h1 className='text-white text-3xl font-bold'>We provide personalise <span className='text-blue-400'>{displayedText}</span></h1>;
  };
  
  

  return (
    <div className="container mx-auto">
    <div className='homebg'>
    <div className='flex flex-col mt-28 ml-8 mb-8 gap-8'>
    <div>
      <p className='text-white text-8xl font-semibold font-lilita'>
      Mahendra <br/>Institute Of <br/>Technology
      </p>
    </div>
    <Typewriter 
        texts={["learning !", "carrier guildence.", "doubt solving."]} 
        typingSpeed={100} 
        deletingSpeed={50} 
        pauseTime={1000} 
      />
    </div></div>
    </div>
  )
}

export default Hero