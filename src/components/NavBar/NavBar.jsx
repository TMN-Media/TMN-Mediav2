/** @format */

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import logoDark from '../../assets/logo-horizontal-b-text.png';

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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    closeMenu();
    scroll.scrollToTop();
  };

  // Enhanced styling for enterprise look
  const navBgClass = hasScrolled
    ? 'bg-black/90 backdrop-blur-lg shadow-lg border-b border-gray-200/20'
    : 'bg-black/30 backdrop-blur-md';

  const textColorClass = hasScrolled ? 'text-white' : 'text-white';
  const linkHoverClass = hasScrolled ? 'hover:text-primary-100' : 'hover:text-secondary-100';
  const activeLinkClass = hasScrolled
    ? 'font-bold text-primary-100'
    : 'font-bold text-secondary-100';
  const ctaButtonClass = hasScrolled
    ? 'bg-primary-100 hover:bg-primary-200 text-white'
    : 'bg-secondary-100 hover:bg-secondary-200 text-gray-900';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${navBgClass}`}
    >
      <div className="container mx-auto px-4 md:px-8 h-24 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
              className="cursor-pointer flex items-center"
            >
              <img
                src={logoDark}
                alt="TMN Media Logo"
                className={`h-10 lg:h-12 w-auto transition-all duration-300`}
              />
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="cursor-pointer flex items-center">
              <img
                src={logoDark}
                alt="TMN Media Logo"
                className={`h-10 lg:h-12 w-auto transition-all duration-300`}
              />
            </RouterLink>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className={`flex items-center space-x-8 ${textColorClass} mr-8`}>
            {menuItems.map((item, index) => (
              <li key={item.name}>
                {isHomePage ? (
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-96} // Adjusted for taller navbar
                    duration={500}
                    className={`font-medium cursor-pointer transition-all duration-200 hover:opacity-80 ${linkHoverClass} py-2`}
                    activeClass={activeLinkClass}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.to}`}
                    className={`font-medium cursor-pointer transition-all duration-200 hover:opacity-80 ${linkHoverClass} py-2`}
                  >
                    {item.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {isHomePage ? (
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-96}
              duration={500}
              className={`flex items-center ${ctaButtonClass} py-2.5 px-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md`}
            >
              <FaPhoneAlt className="mr-2" />
              <span>Schedule Call</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#Contact"
              className={`flex items-center ${ctaButtonClass} py-2.5 px-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md`}
            >
              <FaPhoneAlt className="mr-2" />
              <span>Schedule Call</span>
            </RouterLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {isHomePage ? (
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-96}
              duration={500}
              className={`mr-4 ${ctaButtonClass} py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md`}
            >
              <FaPhoneAlt className="inline mr-1 text-xs" />
              <span>Call</span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/#Contact"
              className={`mr-4 ${ctaButtonClass} py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md`}
            >
              <FaPhoneAlt className="inline mr-1 text-xs" />
              <span>Call</span>
            </RouterLink>
          )}

          <button
            onClick={toggleMenu}
            className={`p-2 focus:outline-none rounded-md ${hasScrolled ? 'bg-gray-800' : 'bg-white/10'} ${textColorClass}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full ${hasScrolled ? 'bg-black/95' : 'bg-gray-900/95'} backdrop-blur-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden border-t border-gray-200/20 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col items-center justify-center py-6 space-y-4">
          {menuItems.map(item => (
            <li key={item.name} className="w-full text-center">
              {isHomePage ? (
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  className={`block py-3 text-lg font-medium ${hasScrolled ? 'text-white hover:text-primary-100' : 'text-white hover:text-secondary-100'} cursor-pointer transition-colors duration-200`}
                  activeClass={activeLinkClass}
                  onClick={closeMenu}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/#${item.to}`}
                  className={`block py-3 text-lg font-medium ${hasScrolled ? 'text-white hover:text-primary-100' : 'text-white hover:text-secondary-100'} cursor-pointer transition-colors duration-200`}
                  onClick={closeMenu}
                >
                  {item.name}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
