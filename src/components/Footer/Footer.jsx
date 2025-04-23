/** @format */

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/logo-horizontal-b-text.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';

// Define navigation and quick links for cleaner code
const navLinks = [
  { name: 'About', to: 'About' },
  { name: 'Services', to: 'OfferedServices' },
  { name: 'Consulting', to: 'Consulting' },
  { name: 'Team', to: 'Team' },
  { name: 'Contact', to: 'Contact' },
];

const serviceLinks = [
  { name: 'Marketing', to: '/services/enterprise-marketing' },
  { name: 'Software Development', to: '/services/software-development' },
  { name: 'AI & Machine Learning', to: '/services/ai-ml' },
  { name: 'Branding', to: '/services/branding' },
];

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentYear = new Date().getFullYear();

  // Common classes
  const headingClasses = 'text-xl font-bold mb-6 text-white';
  const linkClasses =
    'text-gray-300 hover:text-secondary-100 transition-all duration-300 flex items-center';

  return (
    <footer className="bg-gray-900 text-white overflow-hidden relative">
      {/* Top pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-100"></div>

      {/* Background gradient - matches site style */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-95"></div>

      {/* Pre-footer call to action */}
      <div className="relative z-10 bg-gradient-to-r from-primary-300 to-primary-100 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-bold text-white mb-2">Ready to elevate your brand?</h3>
              <p className="text-white/80 text-lg max-w-2xl">
                Partner with TMN Media for professional solutions that drive measurable growth and
                transformation.
              </p>
            </div>
            <ScrollLink
              to="Contact"
              smooth={true}
              duration={500}
              offset={-96}
              className="bg-secondary-100 hover:bg-secondary-200 text-gray-900 py-4 px-8 rounded-lg font-bold text-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <FaArrowRight className="ml-2" />
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="pt-20 pb-8 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
            {/* Column 1: About */}
            <div>
              <div className="mb-6">
                <img
                  className="h-12 w-auto mb-6 brightness-0 invert"
                  src={logo}
                  alt="TMN Media Logo"
                />
                <p className="text-gray-400 leading-relaxed mb-6">
                  TMN Media delivers high-quality marketing and technology solutions that transform
                  organizations and drive measurable business outcomes.
                </p>
              </div>

              <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100086717028798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-100 hover:text-gray-900 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/thetmn_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-100 hover:text-gray-900 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/tmn__media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-100 hover:text-gray-900 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-100 hover:text-gray-900 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className={headingClasses}>Quick Links</h3>
              <ul className="space-y-3">
                {isHomePage ? (
                  <>
                    {navLinks.map(link => (
                      <li key={link.name}>
                        <ScrollLink
                          to={link.to}
                          smooth={true}
                          duration={500}
                          offset={-96}
                          className={linkClasses}
                        >
                          <FaArrowRight className="mr-2 text-xs text-secondary-100" />
                          {link.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {navLinks.map(link => (
                      <li key={link.name}>
                        <RouterLink to={`/#${link.to}`} className={linkClasses}>
                          <FaArrowRight className="mr-2 text-xs text-secondary-100" />
                          {link.name}
                        </RouterLink>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className={headingClasses}>Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.to} className={linkClasses}>
                      <FaArrowRight className="mr-2 text-xs text-secondary-100" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className={`${headingClasses} mt-8`}>Legal</h3>
              <ul className="space-y-3">
                <li>
                  <RouterLink to="/privacy-policy" className={linkClasses}>
                    <FaArrowRight className="mr-2 text-xs text-secondary-100" />
                    Privacy Policy
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/terms-and-conditions" className={linkClasses}>
                    <FaArrowRight className="mr-2 text-xs text-secondary-100" />
                    Terms & Conditions
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div>
              <h3 className={headingClasses}>Contact Us</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href="mailto:info@tmn-media.com" className="flex items-start">
                    <FaEnvelope className="text-secondary-100 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">info@tmn-media.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="flex items-start">
                    <FaPhoneAlt className="text-secondary-100 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">+1 (234) 567-890</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-secondary-100 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    TMN Media Headquarters
                    <br />
                    New York, NY
                  </span>
                </li>
              </ul>

              <h3 className={headingClasses}>Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest insights and news</p>
              <form className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="px-4 py-3 w-full rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-100"
                    aria-label="Email Address"
                  />
                  <button
                    type="submit"
                    className="bg-secondary-100 text-gray-900 font-semibold px-4 py-3 rounded-r-md hover:bg-secondary-200 transition-all duration-200"
                    aria-label="Subscribe"
                  >
                    <FaArrowRight />
                  </button>
                </div>
                <p className="text-gray-500 text-xs">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </form>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {currentYear} TMN Media LLC. All Rights Reserved.
              </p>
              <div className="flex space-x-4 text-gray-500 text-sm">
                <RouterLink
                  to="/privacy-policy"
                  className="hover:text-secondary-100 transition-colors duration-200"
                >
                  Privacy
                </RouterLink>
                <span>|</span>
                <RouterLink
                  to="/terms-and-conditions"
                  className="hover:text-secondary-100 transition-colors duration-200"
                >
                  Terms
                </RouterLink>
                <span>|</span>
                <RouterLink
                  to="/privacy-policy#cookies"
                  className="hover:text-secondary-100 transition-colors duration-200"
                >
                  Cookies
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
