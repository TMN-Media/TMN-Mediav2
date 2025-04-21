/** @format */

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icons
// import logo from "../../assets/logo-horizontal-w-text.png"; // Remove white logo import
import logoDark from '../../assets/logo-horizontal-b-text.png'; // Original logo for light backgrounds

const menuItems = [
  { name: 'About', to: 'About' },
  { name: 'Services', to: 'OfferedServices' },
  { name: 'Consulting', to: 'Consulting' },
  { name: 'Team', to: 'Team' },
  { name: 'Contact', to: 'Contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change background after scrolling 50px
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const scrollToTop = () => {
    closeMenu();
    scroll.scrollToTop();
  };

  const navBgClass = hasScrolled
    ? 'bg-primary-200 bg-opacity-50 backdrop-blur-xl shadow-md'
    : 'bg-transparent backdrop-blur-xl ';
  const textColorClass = hasScrolled ? 'text-secondary-100' : 'text-white';
  // const logoToShow = hasScrolled ? logoDark : logo; // Remove logo switching logic
  const linkHoverClass = hasScrolled ? 'hover:text-primary-100' : 'hover:text-secondary-100';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${navBgClass}`}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <ScrollLink
            to="hero" // Assuming you have a Hero section with name='hero'
            smooth={true}
            duration={500}
            onClick={scrollToTop}
            className="cursor-pointer"
          >
            <img
              src={logoDark} // Always use logoDark
              alt="TMN Media Logo"
              className="h-10 lg:h-12 w-auto transition-all duration-300"
            />
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex items-center space-x-8 ${textColorClass}`}>
          {menuItems.map(item => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset based on navbar height
                duration={500}
                className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${linkHoverClass}`}
                activeClass={hasScrolled ? 'text-primary-100' : 'text-secondary-100'} // Active link style
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${textColorClass}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-primary-200  shadow-xl transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <ul className="flex flex-col items-center justify-center p-8 space-y-6">
          {menuItems.map(item => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xl font-semibold text-white hover:text-secondary-100 cursor-pointer transition-colors duration-200"
                onClick={closeMenu} // Close menu when link is clicked
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
