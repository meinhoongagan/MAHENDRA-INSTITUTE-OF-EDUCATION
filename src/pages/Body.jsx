import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Speciality from "../components/Speciality";
import Testimonials from "../pages/Testimonials";
import Contact from "../components/Contact";
import FAQSection from "../pages/FAQ";
import NotificationPopup from "../components/NotificationPopup";

function Body() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    // If not logged in, redirect to login page
    if (!token) {
      navigate('/login', { state: { from: window.location.pathname } });
    }
  }, [navigate]);

  // If not logged in, don't render anything or show a loading state
  if (!isLoggedIn) {
    return null; // Or return a loading spinner component
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Popup will show automatically when there are unread notifications */}
      <NotificationPopup />
      
      {/* Main content */}
      <Hero />
      <Speciality />
      <Testimonials />
      <Contact />
      <FAQSection />
    </div>
  );
}

export default Body;