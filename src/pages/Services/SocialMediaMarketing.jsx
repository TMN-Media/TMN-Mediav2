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
    title: 'Local Audience Targeting',
    description: 'Affordable, precise targeting to reach potential customers in your local market',
  },
  {
    icon: FaChartLine,
    title: 'Performance Tracking',
    description: "Easy-to-understand analytics that show what's working for your small business",
  },
  {
    icon: FaLightbulb,
    title: 'Authentic Content',
    description:
      "Engaging content that reflects your brand's personality and connects with your community",
  },
  {
    icon: FaComments,
    title: 'Community Management',
    description:
      'Build relationships with customers and create a loyal following for your business',
  },
  {
    icon: FaRegChartBar,
    title: 'Competitor Insights',
    description: 'Learn what works for similar businesses in your area and how to stand out',
  },
];

const SocialMediaMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br pt-44 from-primary-100 to-primary-300 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Marketing</h1>
              <p className="text-xl opacity-90 mb-8">
                Build your small business presence across platforms with strategic content,
                community management, and targeted advertising that fits your budget.
              </p>
              <a
                href="/#Contact"
                className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Small Business Approach</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Simplified Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Getting to Know You',
                    description:
                      'We start by understanding your small business, your customers, and your goals. No complex jargon - just a friendly conversation about what you want to achieve.',
                  },
                  {
                    step: '02',
                    title: 'Creating Your Plan',
                    description:
                      'Based on your budget and needs, we develop a practical social media strategy that focuses on the platforms where your customers spend their time.',
                  },
                  {
                    step: '03',
                    title: 'Crafting Your Content',
                    description:
                      'Our team creates engaging posts, graphics, and videos that showcase your business personality and appeal to your local customers.',
                  },
                  {
                    step: '04',
                    title: 'Managing Your Campaigns',
                    description:
                      'We handle posting, community management, and targeted advertising to help you reach more potential customers without breaking your budget.',
                  },
                  {
                    step: '05',
                    title: 'Showing You Results',
                    description:
                      "You'll receive regular, easy-to-understand reports that show how your social media is growing your business and attracting new customers.",
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
              Ready to Grow Your Business with Social Media?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Partner with TMN Media for affordable social media marketing solutions designed
              specifically for small and medium-sized businesses like yours.
            </p>
            <a
              href="/#Contact"
              className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SocialMediaMarketing;
