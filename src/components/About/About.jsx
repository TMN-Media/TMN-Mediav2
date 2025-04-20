/** @format */

import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video2 from '../../assets/BETTER BRAND BUILDING.mp4';

// Import new icons for features
import { FaRoute, FaCalculator, FaThumbsUp } from 'react-icons/fa';

const features = [
  {
    title: 'The Right Path',
    text: 'Need re-branding? A new website? Or advertisement? We do it all with a devotional focus superior to anyone else.',
    icon: FaRoute,
  },
  {
    title: 'Efficiency & Accuracy',
    text: 'We provide a clear breakdown of how much was spent, how much was made, and what your net profit was.',
    icon: FaCalculator,
  },
  {
    title: 'No Regrets',
    text: "You won't regret working with us. TMN Media will do all it can for you to succeed by reaching higher client and revenue goals.",
    icon: FaThumbsUp,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animate elements once
    });
  });

  return (
    <Element name="About" className="element">
      {/* Top Intro Section */}
      <div className="py-16 px-4 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary-100 mb-4" data-aos="fade-up">
            ABOUT US
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 bg-primary-100"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TMN Media is a dynamic innovative agency. In an overcrowded marketplace, we assist
            brands, businesses, and content creators in standing out, building confidence, and
            increasing results.
          </p>
        </div>
      </div>

      {/* Video Section - Integrated more cleanly */}
      <div className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-5xl" data-aos="zoom-in">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <video
              src={video2}
              muted
              loop
              controls
              playsInline // Important for mobile inline playback
              className="w-full h-full object-cover"
              type="video/mp4"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-primary-100 to-primary-300 text-white">
        <div className="container mx-auto">
          <h3
            className="text-center text-3xl font-bold text-secondary-100 mb-12"
            data-aos="fade-up"
          >
            Why Choose TMN Media?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out border border-white/20 flex flex-col items-center shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <IconComponent className="text-5xl text-secondary-100 mb-5" />
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-200 text-md">{feature.text}</p>
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
