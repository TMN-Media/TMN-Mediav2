/** @format */

import React from 'react';
import { FaBrain, FaRobot, FaChartPie, FaCogs, FaDatabase, FaMagic } from 'react-icons/fa';

const features = [
  {
    icon: FaRobot,
    title: 'Machine Learning Solutions',
    description:
      'Custom ML models that automate processes, predict outcomes, and drive intelligent decision-making',
  },
  {
    icon: FaChartPie,
    title: 'Predictive Analytics',
    description:
      'Advanced analytics that forecast trends, identify patterns, and deliver actionable business insights',
  },
  {
    icon: FaCogs,
    title: 'Process Automation',
    description:
      'Intelligent automation solutions that streamline operations and reduce manual intervention',
  },
  {
    icon: FaDatabase,
    title: 'Data Engineering',
    description:
      'Robust data pipelines and infrastructure to support AI/ML initiatives and ensure data quality',
  },
  {
    icon: FaMagic,
    title: 'Natural Language Processing',
    description:
      'NLP solutions that enhance customer interactions, content analysis, and information extraction',
  },
];

const AiMl = () => {
  return (
    <div className="min-h-screen flex  flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br pt-44 from-primary-100 to-primary-300 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI & Machine Learning Solutions
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Leverage artificial intelligence and machine learning to automate processes, gain
                actionable insights, and create intelligent products that transform operations.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our AI & ML Capabilities</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our AI Implementation Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Problem Definition & Data Assessment',
                    description:
                      'We begin by clearly defining the business problem and evaluating the available data sources, quality, and completeness.',
                  },
                  {
                    step: '02',
                    title: 'Data Preparation & Model Selection',
                    description:
                      'Our data scientists prepare and transform your data, then select the most appropriate algorithms and model architectures.',
                  },
                  {
                    step: '03',
                    title: 'Model Development & Training',
                    description:
                      'We develop and train machine learning models using best practices, continuously refining for optimal performance.',
                  },
                  {
                    step: '04',
                    title: 'Validation & Deployment',
                    description:
                      'Rigorous validation ensures accuracy and reliability before deploying your AI solution into production environments.',
                  },
                  {
                    step: '05',
                    title: 'Monitoring & Refinement',
                    description:
                      'We continuously monitor model performance, retraining as needed and implementing enhancements to maintain accuracy over time.',
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
            <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Partner with TMN Media for advanced AI & ML solutions that drive innovation,
              efficiency, and competitive advantage.
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

export default AiMl;
