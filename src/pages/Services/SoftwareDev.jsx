/** @format */

import React from 'react';
import { FaCode, FaServer, FaMobile, FaCloud, FaShieldAlt, FaTools } from 'react-icons/fa';

const features = [
  {
    icon: FaServer,
    title: 'Business Applications',
    description:
      'Custom solutions that streamline operations, improve efficiency, and scale with your business',
  },
  {
    icon: FaMobile,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications that provide seamless user experiences',
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure that enhances accessibility and reliability',
  },
  {
    icon: FaShieldAlt,
    title: 'Security Integration',
    description:
      'Robust security measures to protect sensitive data and ensure compliance with regulations',
  },
  {
    icon: FaTools,
    title: 'DevOps & Maintenance',
    description:
      'Continuous integration, deployment, and long-term maintenance to ensure optimal performance',
  },
];

const SoftwareDev = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br pt-44 from-primary-100 to-primary-300 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Development</h1>
              <p className="text-xl opacity-90 mb-8">
                Create powerful digital experiences with custom web applications, mobile solutions,
                and scalable software systems.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Services</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Requirements',
                    description:
                      'We work closely with your team to understand business goals, user needs, and technical requirements, creating a comprehensive project blueprint.',
                  },
                  {
                    step: '02',
                    title: 'Architecture & Design',
                    description:
                      'Our architects design scalable, secure systems while our UX/UI team creates intuitive interfaces that enhance user experience.',
                  },
                  {
                    step: '03',
                    title: 'Development & Testing',
                    description:
                      'Using agile methodologies, we develop your solution with regular iterations, rigorous testing, and continuous quality assurance.',
                  },
                  {
                    step: '04',
                    title: 'Deployment & Integration',
                    description:
                      'We ensure smooth deployment and seamless integration with existing systems, minimizing disruption to your operations.',
                  },
                  {
                    step: '05',
                    title: 'Support & Evolution',
                    description:
                      'Our relationship continues with ongoing maintenance, support, and evolution of your software to meet changing business needs.',
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Digital Infrastructure?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Partner with TMN Media for professional software development solutions that drive
              innovation and operational excellence.
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

export default SoftwareDev;
