/** @format */

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/logo-horizontal-b-text.png';
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Common classes for nav items
  const navItemClasses =
    'mb-2 hover:text-secondary-100 transition-colors duration-200 cursor-pointer';
  const headingClasses = 'text-lg font-semibold mb-4 uppercase tracking-wider text-secondary-100';

  return (
    <footer className="pt-16 pb-8 px-4 bg-gradient-to-b from-primary-100 to-primary-300 text-white">
      <div className="container mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="mb-6 lg:mb-0">
            <img className="w-48 mb-4" src={logo} alt="TMN Media Logo" />
            <p className="text-gray-300 text-sm">Better Brand Building</p>
          </div>

          {/* Column 2: Navigation */}
          <div className="mb-6 lg:mb-0">
            <h3 className={headingClasses}>Navigation</h3>
            <ul className="text-gray-300 text-sm">
              {isHomePage ? (
                <>
                  <li className={navItemClasses}>
                    <ScrollLink to="About" smooth={true} duration={500} offset={-70}>
                      About
                    </ScrollLink>
                  </li>
                  <li className={navItemClasses}>
                    <ScrollLink to="Services" smooth={true} duration={500} offset={-70}>
                      Services
                    </ScrollLink>
                  </li>
                  <li className={navItemClasses}>
                    <ScrollLink to="Contact" smooth={true} duration={500} offset={-70}>
                      Contact
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <>
                  <li className={navItemClasses}>
                    <RouterLink to="/#About">About</RouterLink>
                  </li>
                  <li className={navItemClasses}>
                    <RouterLink to="/#Services">Services</RouterLink>
                  </li>
                  <li className={navItemClasses}>
                    <RouterLink to="/#Contact">Contact</RouterLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="mb-6 lg:mb-0">
            <h3 className={headingClasses}>Legal</h3>
            <ul className="text-gray-300 text-sm">
              <li className={navItemClasses}>
                <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
              </li>
              <li className={navItemClasses}>
                <RouterLink to="/terms-and-conditions">Terms & Conditions</RouterLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Subscribe */}
          <div className="mb-6 lg:mb-0">
            <h3 className={headingClasses}>Connect</h3>
            <div className="flex space-x-4 mb-6 text-secondary-100">
              <a
                href="https://www.facebook.com/profile.php?id=100086717028798"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <CiFacebook size={28} />
              </a>
              <a
                href="https://twitter.com/thetmn_media"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <CiTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/tmn__media/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <CiInstagram size={28} />
              </a>
              {/* Removed placeholder LinkedIn link */}
              {/* 
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
								<CiLinkedin size={28} />
							</a> 
              */}
            </div>

            <h3 className={headingClasses}>Subscribe</h3>
            <form>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 w-full sm:flex-grow rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-100 mb-2 sm:mb-0 sm:mr-[-1px]"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="bg-secondary-100 text-primary-300 font-semibold px-4 py-2 rounded-r-md hover:bg-secondary-200 transition-colors duration-200 whitespace-nowrap"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="text-center text-gray-400 text-sm border-t border-white/20 pt-6 mt-8">
          &copy; {new Date().getFullYear()} TMN Media LLC | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
