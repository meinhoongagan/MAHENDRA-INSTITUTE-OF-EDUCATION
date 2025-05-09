import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, BookOpen, Star, MessageSquare, Phone, Settings, FileText } from 'lucide-react';
import NotificationBell from '../components/NotificationBell';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Add navigation to login page after successful logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: '/courses' },
    { name: 'Results', link: '/results' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaGraduationCap className={`text-3xl ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>Mahendra Institute</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className={`font-medium text-lg hover:text-blue-500 transition duration-300 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                {item.name}
              </Link>
            ))}
            {user?.role === 'admin' && (
              <div className="relative group">
                <button className="flex items-center text-gray-800 font-medium hover:text-blue-600">
                  Admin
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <Link to="/admin/users" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Users
                  </Link>
                  <Link to="/admin/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Courses
                  </Link>
                  <Link to="/admin/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Testimonials
                  </Link>
                  <Link to="/admin/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Test Results
                  </Link>
                  <Link to="/admin/academic-results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Academic Results
                  </Link>
                  <Link to="/admin/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Manage Notifications
                  </Link>
                </div>
              </div>
            )}

            {user && (
              <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <NotificationBell />
                
                <span className="text-gray-800">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-full font-semibold transition duration-300 bg-red-600 text-white hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            )}

            {!user && (
              <Link 
                to="/login"
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            {user && <NotificationBell />}
            <button 
              className="ml-2 text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? 
                <FaTimes className={isScrolled ? 'text-gray-800' : 'text-white'} /> : 
                <FaBars className={isScrolled ? 'text-gray-800' : 'text-white'} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <Link 
                  to={item.link}
                  className={`block py-3 px-2 font-medium hover:text-blue-600 transition duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            {user?.role === 'admin' && (
              <div className="border-b border-gray-200">
                <div className="py-3 px-2">
                  <p className={`font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Admin</p>
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      to="/admin/users" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Users
                    </Link>
                    <Link 
                      to="/admin/courses" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Courses
                    </Link>
                    <Link 
                      to="/admin/testimonials" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Testimonials
                    </Link>
                    <Link 
                      to="/admin/results" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Test Results
                    </Link>
                    <Link 
                      to="/admin/academic-results" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Academic Results
                    </Link>
                    <Link 
                      to="/admin/notifications" 
                      className="block text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Manage Notifications
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 px-2">
              {user ? (
                <div className="space-y-2">
                  <p className="text-gray-800 py-2">{user.name}</p>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full py-3 text-center bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="block w-full py-3 text-center bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;