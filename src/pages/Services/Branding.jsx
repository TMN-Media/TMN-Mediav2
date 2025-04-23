/** @format */

import React from 'react';
import { FaPaintBrush, FaPalette, FaImage, FaBookOpen, FaGlobe, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: FaPalette,
    title: 'Brand Identity',
    description:
      'Comprehensive visual identity systems including logos, color palettes, typography, and design guidelines',
  },
  {
    icon: FaImage,
    title: 'Visual Communication',
    description:
      'Compelling graphics, photography, and illustrations that convey your brand message',
  },
  {
    icon: FaBookOpen,
    title: 'Brand Storytelling',
    description:
      'Cohesive narrative development that connects with your audience and articulates your unique value',
  },
  {
    icon: FaGlobe,
    title: 'Brand Experience',
    description:
      'Consistent brand implementation across all customer touchpoints and marketing channels',
  },
  {
    icon: FaRocket,
    title: 'Brand Strategy',
    description:
      'Strategic positioning and messaging frameworks that differentiate your company in the marketplace',
  },
];

const Branding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br pt-44 from-primary-100 to-primary-300 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Identity & Branding</h1>
              <p className="text-xl opacity-90 mb-8">
                Establish a powerful brand presence with comprehensive identity systems, guidelines,
                and design elements that resonate with your audience.
              </p>
              <a
                href="/#Contact"
                className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Branding Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-md bg-primary-100/10 text-primary-100 mr-4">
                      <feature.icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Branding Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Research',
                    description:
                      'We immerse ourselves in your business, conducting thorough research on your industry, competitors, target audience, and current brand perception.',
                  },
                  {
                    step: '02',
                    title: 'Strategy & Positioning',
                    description:
                      'Based on our findings, we develop a strategic foundation for your brand, including positioning, messaging architecture, and value proposition.',
                  },
                  {
                    step: '03',
                    title: 'Identity Development',
                    description:
                      'Our creative team designs visual identity elements that embody your brand strategy, creating a distinctive and memorable presence.',
                  },
                  {
                    step: '04',
                    title: 'Implementation & Collateral',
                    description:
                      'We apply your new brand identity across all touchpoints, creating comprehensive guidelines and essential marketing materials.',
                  },
                  {
                    step: '05',
                    title: 'Launch & Evolution',
                    description:
                      'We support your brand launch and provide ongoing guidance to ensure consistent application and evolution as your business grows.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 bg-primary-100 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-300 to-primary-100 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Partner with TMN Media for professional branding solutions that create meaningful
              connections with your audience and drive business growth.
            </p>
            <a
              href="/#Contact"
              className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Branding;
