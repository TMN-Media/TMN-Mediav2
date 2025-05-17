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
  FaLongArrowAltRight,
} from 'react-icons/fa';

const services = [
  {
    name: 'Social Media Marketing',
    icon: FaBullhorn,
    description:
      'Build your brand presence across platforms with strategic content, community management, and targeted advertising that fits your budget.',
    cta: 'View Strategy',
    link: '#',
  },
  {
    name: 'Local SEO & Search Marketing',
    icon: FaSearchDollar,
    description:
      'Improve your visibility in local searches with targeted optimization strategies that help nearby customers find your business.',
    cta: 'Explore SEO',
    link: '#',
  },
  {
    name: 'Affordable Media Planning',
    icon: FaRegNewspaper,
    description:
      'Maximize your advertising impact with smart media planning that delivers results without the big agency price tag.',
    cta: 'Learn More',
    link: '#',
  },
  {
    name: 'Performance Analytics',
    icon: FaChartLine,
    description:
      "Understand what's working with easy-to-understand reports and actionable insights that help grow your small business.",
    cta: 'See Analytics',
    link: '#',
  },
  {
    name: 'Website Development',
    icon: FaCode,
    description:
      'Create a professional online presence with responsive, fast-loading websites and e-commerce solutions built for small businesses.',
    cta: 'View Projects',
    link: '#',
  },
  {
    name: 'Identity & Branding',
    icon: FaPaintBrush,
    description:
      'Stand out from competitors with professional logos, visual identity systems, and consistent branding that customers remember.',
    cta: 'View Portfolio',
    link: '#',
  },
];

const OfferedServices = () => {
  useEffect(() => {
    // AOS is now globally initialized with minimal settings in App.js
  }, []);

  return (
    <Element name="OfferedServices" className="element">
      <div className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-100"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p
              className="text-primary-100 text-lg font-semibold uppercase tracking-wider mb-3"
              data-aos="fade-up"
            >
              Affordable Solutions
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              Our Professional <span className="text-primary-100">Services</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-100 to-secondary-100"
              data-aos="fade-up"
            ></div>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
            >
              We provide tailored services designed for small and medium-sized businesses that want
              to grow their brand and compete effectively. Our solutions deliver real results
              without breaking your budget.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-xl text-left transition-all duration-300 ease-in-out border border-gray-100 hover:border-primary-100/20 group hover:-translate-y-1 hover:shadow-2xl"
                  data-aos="fade-up"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-md bg-primary-100/10 text-primary-100 mr-4 group-hover:bg-primary-100 group-hover:text-white transition-all duration-300">
                      <IconComponent className="text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 leading-tight">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <a
                    href={
                      index === 0
                        ? '/services/social-media-marketing'
                        : index === 1
                          ? '/services/local-seo'
                          : index === 2
                            ? '/services/media-planning'
                            : index === 3
                              ? '/services/analytics'
                              : service.link
                    }
                    className="inline-flex items-center text-primary-100 font-medium hover:text-primary-200 transition-colors duration-300"
                  >
                    {service.cta}
                    <FaLongArrowAltRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center" data-aos="fade-up">
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Need a custom solution for your small business? Our team is ready to develop an
              affordable approach that fits your specific needs and budget.
            </p>
            <a
              href="#Contact"
              className="inline-block bg-primary-100 hover:bg-primary-200 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request Custom Solution
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default OfferedServices;
