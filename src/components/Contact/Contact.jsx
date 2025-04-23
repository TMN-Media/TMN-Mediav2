/** @format */

import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import hasib2 from '../../assets/headshots/hasib2.jpg';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const benefits = [
  'Comprehensive digital strategy assessment',
  'Competitive analysis insights',
  'Actionable growth recommendations',
  'No obligation, completely free',
];

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Element name="Contact" className="element">
      <div className="text-white py-24 px-4 bg-gradient-to-b from-primary-100 to-primary-300 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <p
              className="text-secondary-100 text-lg font-semibold uppercase tracking-wider mb-3"
              data-aos="fade-up"
            >
              Enterprise Solutions
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Schedule Your <span className="text-secondary-100">Strategic Consultation</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-white/50 to-secondary-100"
              data-aos="fade-up"
              data-aos-delay="150"
            ></div>
            <p
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ready to transform your organization&apos;s digital presence? Book a complimentary
              30-minute strategic consultation to discuss your objectives and discover how TMN
              Media&apos;s enterprise solutions can drive measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start max-w-6xl mx-auto">
            <div className="lg:text-left" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                  <img
                    className="w-32 h-32 rounded-xl border-4 border-secondary-100 object-cover shadow-lg mb-6 md:mb-0"
                    src={hasib2}
                    alt="Hasib Zulfić - Founder, TMN Media"
                  />
                  <div className="md:ml-6 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">Speak with Hasib</h3>
                    <p className="text-lg text-gray-300 mb-4">Chief Marketing Officer & Founder</p>
                    <p className="text-gray-200">
                      Get personalized insights and actionable strategies for your enterprise
                      marketing and technology needs during this exclusive consultation.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-secondary-100 mb-4">
                  What You&apos;ll Receive:
                </h4>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-secondary-100 mt-1 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-3 px-4 transition-all duration-300"
                  >
                    <FaPhoneAlt className="mr-2 text-secondary-100" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <a
                    href="mailto:enterprise@tmn-media.com"
                    className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-3 px-4 transition-all duration-300"
                  >
                    <FaEnvelope className="mr-2 text-secondary-100" />
                    <span>enterprise@tmn-media.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900/50 p-8 rounded-2xl text-center border border-primary-100/30 backdrop-blur-md">
                <FaCalendarCheck className="text-4xl text-secondary-100 mx-auto mb-4" />
                <h4 className="text-secondary-100 text-2xl font-bold mb-3">
                  Prefer a Different Time?
                </h4>
                <p className="text-gray-300 mb-6">
                  Our enterprise team is available for custom scheduling to accommodate your busy
                  calendar.
                </p>
                <a
                  href="mailto:enterprise@tmn-media.com?subject=Custom%20Enterprise%20Consultation%20Request"
                  className="inline-block bg-secondary-100 hover:bg-secondary-200 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Request Custom Time
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="bg-gray-900/50 backdrop-blur-md p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-center">
                  Schedule Your Strategic Consultation
                </h3>
              </div>
              <div className="min-h-[650px] lg:min-h-[720px]">
                <InlineWidget
                  styles={{ height: '720px' }}
                  url="https://calendly.com/meetwithelvis/30min?back=1&month=2022-10"
                  className="calendly-inline-widget"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
