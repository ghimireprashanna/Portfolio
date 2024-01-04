import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            <Link to="top" smooth={true} duration={500}>
              My Navbar
            </Link>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link to="home" smooth={true} duration={500} className="text-white hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchisia-600 cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="text-white hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchisia-600 cursor-pointer">
              About
            </Link>
            <Link to="services" smooth={true} duration={500} className="text-white hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchisia-600 cursor-pointer">
              Services
            </Link>
            <Link to="projects" smooth={true} duration={500} className="text-white hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchisia-600 cursor-pointer">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="text-white hover:text-fuchsia-600 transition hover:border-b-2 border-slate-900 hover:border-fuchisia-600 cursor-pointer">
              Contact
            </Link>
          </div>
          {/* Responsive menu button for smaller screens */}
          <div className="sm:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive dropdown menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 text-center">
            <Link to="home" smooth={true} className="block text-white py-2 hover:bg-slate-700 hover:rounded cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} className="block text-white py-2 hover:bg-slate-700 hover:rounded cursor-pointer">
              About
            </Link>
            <Link to="services" smooth={true} className="block text-white py-2 hover:bg-slate-700 hover:rounded cursor-pointer">
              Services
            </Link>
            <Link to="projects" smooth={true} className="block text-white py-2 hover:bg-slate-700 hover:rounded cursor-pointer">
              Projects
            </Link>
            <Link to="contact" smooth={true} className="block text-white py-2 hover:bg-slate-700 hover:rounded cursor-pointer">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
