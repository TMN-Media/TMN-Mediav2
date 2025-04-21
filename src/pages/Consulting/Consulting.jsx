/** @format */

import React from 'react';
import {
  FaBullhorn,
  FaBrain,
  FaBitcoin,
  FaLaptopCode,
  FaNetworkWired,
  FaPalette,
} from 'react-icons/fa'; // Import icons

const services = [
  {
    name: 'Marketing Strategy',
    icon: FaBullhorn,
    description:
      'Leverage data-driven insights and creative campaigns to boost brand visibility and customer engagement. We cover SEO, SEM, content, social media, and more.',
  },
  {
    name: 'AI & Machine Learning',
    icon: FaBrain,
    description:
      'Integrate artificial intelligence to automate processes, gain deeper insights from your data, and create smarter products and services.',
  },
  {
    name: 'Blockchain & Crypto',
    icon: FaBitcoin,
    description:
      'Navigate the complexities of blockchain technology and cryptocurrency. From strategy and development to implementation and security.',
  },
  {
    name: 'IT Solutions',
    icon: FaLaptopCode,
    description:
      'Modernize your infrastructure with robust IT solutions, including cloud computing, cybersecurity, network management, and software development.',
  },
  {
    name: 'IoT Implementation',
    icon: FaNetworkWired,
    description:
      'Connect your devices and unlock the power of the Internet of Things. We help design, develop, and deploy scalable IoT solutions.',
  },
  {
    name: 'Design & UX/UI',
    icon: FaPalette,
    description:
      'Create compelling user experiences and visually stunning designs. Our services include web design, app design, branding, and user research.',
  },
];

const Consulting = () => {
  return (
    <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
      {' '}
      {/* Added padding-top to clear navbar, padding-bottom, and bg */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-300 mb-6 text-center">
          Our Consulting Expertise
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          We partner with businesses to navigate the digital landscape, offering strategic guidance
          and technical expertise across a range of critical areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {' '}
          {/* Grid layout for services */}
          {services.map(service => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <service.icon className="text-4xl text-secondary-200 mb-4" />
              <h3 className="text-xl font-semibold text-primary-300 mb-3">{service.name}</h3>
              <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
