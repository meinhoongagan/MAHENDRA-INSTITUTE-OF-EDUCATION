// Nav.jsx
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-blue-300 shadow-xl shadow-blue-400 py-5">
      <ul className="flex justify-center space-x-6 font-bold">
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#courses">Courses</a>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#results">Results</a>
        </li>
        <li className="hover:text-blue-400 hover:shadow-lg hover:shadow-gray-50">
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;