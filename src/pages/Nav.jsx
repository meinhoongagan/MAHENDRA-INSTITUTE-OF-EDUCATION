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
          <Link to="/Course">Courses</Link>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#results">Results</a>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50 ">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;