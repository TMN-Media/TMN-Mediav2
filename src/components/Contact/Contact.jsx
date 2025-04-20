/** @format */

import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import hasib2 from '../../assets/headshots/hasib2.jpg';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <Element name="Contact" className="element">
      <div className="text-white py-16 px-4 bg-gradient-to-b from-primary-100 to-primary-300">
        <div className="container mx-auto">
          <h2 className="text-secondary-100 text-center text-4xl font-bold mb-4">
            SCHEDULE YOUR CALL
          </h2>
          <p className="text-center text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Ready to elevate your brand? Book a free 30-minute audit call directly below to discuss
            your goals and how TMN Media can help you achieve them.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="text-center lg:text-left" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-3xl font-semibold mb-4">Speak with Hasib</h3>
              <p className="text-xl text-gray-300 mb-8">
                Get personalized insights and actionable steps for your online advertising strategy
                during this free consultation.
              </p>
              <div className="flex justify-center lg:justify-start items-center mb-12">
                <img
                  className="w-32 h-32 rounded-full border-4 border-secondary-100 object-cover shadow-lg"
                  src={hasib2}
                  alt="Hasib Zulfić - Founder, TMN Media"
                />
                <div className="ml-6 text-left">
                  <p className="text-xl font-bold">Hasib Zulfić</p>
                  <p className="text-md text-secondary-100">Founder & CMO</p>
                </div>
              </div>

              <div className="bg-primary-200/30 p-6 rounded-lg text-center border border-primary-100/50">
                <h4 className="text-secondary-100 text-xl font-semibold mb-3">
                  Have other questions?
                </h4>
                <p className="text-md text-gray-300">
                  For general inquiries, reach out to our team via email:
                  <a
                    href="mailto:contact@tmn-media.com"
                    className="font-semibold text-secondary-100 hover:underline block mt-1"
                  >
                    contact@tmn-media.com
                  </a>
                </p>
              </div>
            </div>

            <div
              className="min-h-[650px] lg:min-h-[720px] rounded-lg overflow-hidden shadow-xl"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <InlineWidget
                styles={{ height: '720px' }}
                url="https://calendly.com/meetwithelvis/30min?back=1&month=2022-10"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
