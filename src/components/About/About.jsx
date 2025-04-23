/** @format */

import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video2 from '../../assets/BETTER BRAND BUILDING.mp4';

// Import icons for features
import {
  FaRoute,
  FaCalculator,
  FaThumbsUp,
  FaChartLine,
  FaUsers,
  FaLightbulb,
} from 'react-icons/fa';

const features = [
  {
    title: 'Strategic Direction',
    text: "Our tailored approach ensures your enterprise gets exactly what it needs - whether that's rebranding, digital transformation, or targeted advertising campaigns.",
    icon: FaRoute,
  },
  {
    title: 'Data-Driven ROI',
    text: 'We provide comprehensive analytics and transparent reporting on campaign performance, expenditure, and revenue generation for maximum accountability.',
    icon: FaCalculator,
  },
  {
    title: 'Client Success Focus',
    text: 'Our commitment to your success drives everything we do. We set ambitious yet achievable targets and work tirelessly to exceed your expectations.',
    icon: FaThumbsUp,
  },
  {
    title: 'Continuous Growth',
    text: 'We implement scalable solutions that grow with your business, constantly optimizing and refining strategies based on performance data.',
    icon: FaChartLine,
  },
  {
    title: 'Expert Team',
    text: 'Our cross-functional team of industry specialists brings diverse expertise to every project, ensuring comprehensive and innovative solutions.',
    icon: FaUsers,
  },
  {
    title: 'Innovation Focus',
    text: 'We stay ahead of market trends and technological advancements to provide cutting-edge solutions that give your enterprise a competitive advantage.',
    icon: FaLightbulb,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Element name="About" className="element">
      {/* Top Intro Section */}
      <div className="py-24 px-4 bg-white text-center relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/5 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto relative z-10">
          <p
            className="text-primary-100 text-lg font-semibold uppercase tracking-wider mb-3"
            data-aos="fade-up"
          >
            Our Mission
          </p>
          <h2
            className="text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <span className="text-primary-100">TMN Media</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-primary-100 to-secondary-100"
            data-aos="fade-up"
            data-aos-delay="150"
          ></div>

          <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              TMN Media is a premier enterprise-focused marketing and technology agency. In
              today&apos;s competitive business landscape, we empower organizations to establish
              distinctive market positions, build brand confidence, and achieve measurable growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our integrated approach combines strategic marketing expertise with technological
              innovation, delivering comprehensive solutions that address complex business
              challenges and create sustainable competitive advantages for our clients.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div
              className="px-6 py-10 rounded-xl bg-gradient-to-br from-primary-100/10 to-primary-100/5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-5xl font-bold text-primary-100 mb-2">94%</h3>
              <p className="text-gray-700 font-medium">Client Retention Rate</p>
            </div>
            <div
              className="px-6 py-10 rounded-xl bg-gradient-to-br from-secondary-100/10 to-secondary-100/5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-5xl font-bold text-secondary-100 mb-2">200+</h3>
              <p className="text-gray-700 font-medium">Enterprise Clients</p>
            </div>
            <div
              className="px-6 py-10 rounded-xl bg-gradient-to-br from-primary-300/10 to-primary-300/5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3 className="text-5xl font-bold text-primary-300 mb-2">35%</h3>
              <p className="text-gray-700 font-medium">Average ROI Increase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Enterprise-level presentation */}
      <div className="bg-gray-900 py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 to-primary-100/20 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10" data-aos="fade-up">
          <h3 className="text-center text-3xl font-bold text-white mb-10">
            Our Approach to <span className="text-secondary-100">Better Brand Building</span>
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <video
              src={video2}
              muted
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
              type="video/mp4"
              poster="/path-to-optional-poster-image.jpg" // Optional: Add a poster image
            />
          </div>
        </div>
      </div>

      {/* Features Section - Now with 6 features in a 2x3 grid */}
      <div className="py-24 px-4 bg-gradient-to-b from-primary-100 to-primary-300 text-white relative overflow-hidden">
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIxIj48cGF0aCBkPSJNMCAwaDEwdjEwSDB6Ii8+PHBhdGggZD0iTTIwIDBoMTB2MTBIMjB6Ii8+PHBhdGggZD0iTTQwIDBoMTB2MTBINDB6Ii8+PHBhdGggZD0iTTEwIDEwaDEwdjEwSDEweiIvPjxwYXRoIGQ9Ik0zMCAxMGgxMHYxMEgzMHoiLz48cGF0aCBkPSJNNTAgMTBoMTB2MTBINTN6Ii8+PHBhdGggZD0iTTAgMjBoMTB2MTBIMHoiLz48cGF0aCBkPSJNMjAgMjBoMTB2MTBIMjB6Ii8+PHBhdGggZD0iTTQwIDIwaDEwdjEwSDQweiIvPjxwYXRoIGQ9Ik0xMCAzMGgxMHYxMEgxMHoiLz48cGF0aCBkPSJNMzAgMzBoMTB2MTBIMzB6Ii8+PHBhdGggZD0iTTUwIDMwaDEwdjEwSDUweiIvPjxwYXRoIGQ9Ik0wIDQwaDEwdjEwSDB6Ii8+PHBhdGggZD0iTTIwIDQwaDEwdjEwSDIweiIvPjxwYXRoIGQ9Ik00MCA0MGgxMHYxMEg0MHoiLz48cGF0aCBkPSJNMTAgNTBoMTB2MTBIMTB6Ii8+PHBhdGggZD0iTTMwIDUwaDEwdjEwSDMweiIvPjxwYXRoIGQ9Ik01MCA1MGgxMHYxMEg1MHoiLz48L2c+PC9zdmc+')]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p
              className="text-secondary-100 text-lg font-semibold uppercase tracking-wider mb-3"
              data-aos="fade-up"
            >
              Our Advantages
            </p>
            <h3
              className="text-4xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Why Enterprise Leaders Choose <span className="text-secondary-100">TMN Media</span>
            </h3>
            <div
              className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-white/50 to-secondary-100"
              data-aos="fade-up"
              data-aos-delay="150"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center transition-all duration-300 transform hover:scale-102 hover:bg-white/15 border border-white/20 flex flex-col items-center shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-4 rounded-full bg-secondary-100/20 mb-6">
                    <IconComponent className="text-4xl text-secondary-100" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-200 leading-relaxed">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
