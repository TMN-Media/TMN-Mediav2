/** @format */

import React from 'react';
import {
  FaBullhorn,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaComments,
  FaRegChartBar,
} from 'react-icons/fa';

const features = [
  {
    icon: FaUsers,
    title: 'Audience Targeting',
    description:
      'Precision targeting to reach your ideal enterprise customers across multiple platforms',
  },
  {
    icon: FaChartLine,
    title: 'Performance Tracking',
    description: 'Comprehensive analytics and reporting to measure ROI and campaign effectiveness',
  },
  {
    icon: FaLightbulb,
    title: 'Strategic Content',
    description:
      'Tailored content creation that reflects your brand voice and resonates with your audience',
  },
  {
    icon: FaComments,
    title: 'Community Management',
    description: 'Proactive engagement and relationship building with your target audience',
  },
  {
    icon: FaRegChartBar,
    title: 'Competitor Analysis',
    description: 'In-depth analysis of industry competitors to identify opportunities and threats',
  },
];

const EnterpriseMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br pt-44 from-primary-100 to-primary-300 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Marketing</h1>
              <p className="text-xl opacity-90 mb-8">
                Build your brand presence across platforms with strategic content, community
                management, and targeted advertising campaigns.
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Approach</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Analysis',
                    description:
                      'We begin by understanding your business goals, target audience, and current digital presence. Our team conducts thorough market research and competitor analysis to identify opportunities.',
                  },
                  {
                    step: '02',
                    title: 'Strategy Development',
                    description:
                      'Based on our findings, we create a comprehensive marketing strategy tailored to your business objectives, including platform selection, content themes, and performance metrics.',
                  },
                  {
                    step: '03',
                    title: 'Content Creation & Execution',
                    description:
                      'Our creative team develops engaging content aligned with your brand voice. We implement the strategy across selected platforms with meticulous attention to detail.',
                  },
                  {
                    step: '04',
                    title: 'Monitoring & Optimization',
                    description:
                      'We continuously monitor campaign performance, making data-driven adjustments to optimize results and maximize your return on investment.',
                  },
                  {
                    step: '05',
                    title: 'Reporting & Analysis',
                    description:
                      'Regular comprehensive reports provide full transparency into campaign performance, with actionable insights for ongoing improvement.',
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
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Partner with TMN Media for professional social media marketing solutions that drive
              measurable growth and brand engagement.
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

export default EnterpriseMarketing;
