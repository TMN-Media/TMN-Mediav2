/** @format */

import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import specific icons
import {
  FaBullhorn, // Marketing
  FaSearchDollar, // SEO
  FaRegNewspaper, // Media Planning
  FaChartLine, // Analytics
  FaCode, // Web/App Dev
  FaPaintBrush, // Graphic Design
} from 'react-icons/fa';

const services = [
  { name: 'Social Media Marketing', icon: FaBullhorn },
  { name: 'SEO/Search Engine Optimization', icon: FaSearchDollar }, // Expanded name
  { name: 'Media Planning & Buying', icon: FaRegNewspaper }, // Expanded name
  { name: 'Data Analytics & Reporting', icon: FaChartLine }, // Expanded name
  { name: 'Web/App Development', icon: FaCode },
  { name: 'Graphic Design & Branding', icon: FaPaintBrush }, // Expanded name
];

const OfferedServices = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true, // Animate cards once
    });
  }, []); // Add empty dependency array to run only once

  return (
    <Element name="Services" className="element">
      <div className="py-16 px-4 bg-gray-100">
        {' '}
        {/* Light background for contrast */}
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-primary-100 mb-4">WHAT WE OFFER</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of services designed to elevate your brand and drive
            results. Explore how we can help you succeed.
          </p>
          <div className="w-24 h-1 mx-auto mb-16 bg-primary-100"></div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon; // Get the icon component
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 duration-300 ease-in-out border border-gray-200 flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100} // Stagger animation delay
                >
                  <IconComponent className="text-5xl text-primary-100 mb-5" />
                  <h4 className="text-xl font-semibold text-gray-800">{service.name}</h4>
                  {/* Optional: Add a short description here if needed */}
                  {/* <p className="text-gray-600 mt-2">Short description...</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OfferedServices;
