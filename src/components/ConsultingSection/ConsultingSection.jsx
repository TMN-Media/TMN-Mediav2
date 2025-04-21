/** @format */

import React from 'react';
import { Element } from 'react-scroll';
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaCubes,
  FaPaintBrush,
  FaNetworkWired,
} from 'react-icons/fa'; // Example icons

const consultingServices = [
  {
    title: 'Marketing Strategy',
    description:
      'Develop data-driven marketing plans to reach your target audience and grow your brand presence.',
    icon: <FaChartLine className="text-4xl text-primary-100 mb-4" />,
  },
  {
    title: 'Tech & IT Solutions',
    description:
      'Implement robust and scalable IT infrastructure, cloud solutions, and custom software development.',
    icon: <FaCode className="text-4xl text-primary-100 mb-4" />,
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent products.',
    icon: <FaBrain className="text-4xl text-primary-100 mb-4" />,
  },
  {
    title: 'Crypto & Blockchain',
    description:
      'Navigate the complexities of blockchain technology, tokenization, and decentralized applications.',
    icon: <FaCubes className="text-4xl text-primary-100 mb-4" />,
  },
  {
    title: 'Design & Branding',
    description:
      'Create compelling visual identities, user experiences, and marketing materials that resonate with your audience.',
    icon: <FaPaintBrush className="text-4xl text-primary-100 mb-4" />,
  },
  {
    title: 'IoT Integration',
    description:
      'Connect your devices and systems with Internet of Things solutions for enhanced efficiency and data collection.',
    icon: <FaNetworkWired className="text-4xl text-primary-100 mb-4" />,
  },
];

const ConsultingSection = () => {
  return (
    <Element name="Consulting">
      <section id="Consulting" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-300 mb-4">
            Consulting Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Unlock your potential with our expert consulting services. We provide strategic guidance
            and hands-on support across key business and technology domains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-primary-200 mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ConsultingSection;
