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
  FaArrowRight,
} from 'react-icons/fa';

const consultingServices = [
  {
    title: 'Marketing Strategy',
    description:
      'Develop affordable, data-driven marketing plans to reach your target audience and grow your brand presence through focused multi-channel campaigns.',
    icon: FaChartLine,
    link: '#',
  },
  {
    title: 'Website & App Development',
    description:
      'Create modern, responsive websites and user-friendly applications that help small businesses establish a professional online presence.',
    icon: FaCode,
    link: '#',
  },
  {
    title: 'Social Media Management',
    description:
      'Build your online community with consistent, engaging content and targeted campaigns that connect your business with potential customers.',
    icon: FaBrain,
    link: '#',
  },
  {
    title: 'Local SEO & Online Visibility',
    description:
      'Improve your local search rankings to help nearby customers find your business when they need your products or services.',
    icon: FaCubes,
    link: '#',
  },
  {
    title: 'Design & Branding',
    description:
      'Create compelling visual identities, user experiences, and marketing materials that help your small business stand out from competitors.',
    icon: FaPaintBrush,
    link: '#',
  },
  {
    title: 'Digital Advertising',
    description:
      'Maximize your advertising budget with targeted campaigns that reach the right audience at the right time to drive measurable results.',
    icon: FaNetworkWired,
    link: '#',
  },
];

const ConsultingSection = () => {
  return (
    <Element name="Consulting">
      <section id="Consulting" className="py-24 relative overflow-hidden">
        {/* Background with professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-300 opacity-95 z-0"></div>

        {/* Optional: Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMzYgMjFsLTIgMWgtMmwtMi0xaC0ydjJsLTEgMnYyaC0yVjEwbC0xLTItMi0xaC0ydi0yaC0ydi0yaC0ydjJoLTJ2MmgtMnYyaC0ydjJoLTJ2MmgtMnYyaC0ydjJoLTJsMSAyaDJsLTEgMWgtMnYyaC0ydjJoMnYyaDJ2LTJoMnYtMmgtMmwtMi0xaC0ydjJoLTJ2MmgydjJoMnYtMmgydjJoMnYyaDJ2MmgydjJoMnYyaC0ydjJoLTJ2MmgydjJoMnYyaDJ2MmgydjJoMnYyaC0ydjJoLTJ2MmgydjJoMnYyaDJ2MmgydjJoMnYyaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ2MmgydjJoMnYtMmgtMlY0MmgyVjI4bC0xLTJ2LTJsLTItMXYtMmgtMnYtMnYtMmwtMiAxaC0yaC0yek01MCA1MGgtMmwyLTF2LTJoMnYyeiIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48L2c+PC9zdmc+')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-secondary-100 text-lg font-semibold uppercase tracking-wider mb-3">
              Strategic Advisory
            </p>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Business Consulting <span className="text-secondary-100">Services</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-secondary-100 to-primary-100"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock your small business&apos;s potential with our expert consulting services. We
              provide affordable strategic guidance and hands-on support to help you compete with
              larger companies and achieve sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {consultingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 transition-all duration-300 ease-in-out hover:bg-white/15 group"
                  data-aos="fade-up"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 shadow-lg">
                    <IconComponent className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-secondary-100 font-medium group-hover:text-white transition-colors duration-300"
                  >
                    Learn more
                    <FaArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <a
              href="#Contact"
              className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ConsultingSection;
