// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-300 shadow-xl shadow-blue-400 py-5">
      <ul className="flex justify-center space-x-6 font-bold max-md:space-x-2">
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <Link to="/">Home</Link> 
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <Link to="/results">Results</Link>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50 ">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;