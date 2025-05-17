/** @format */

import React, { useEffect, useState } from 'react';
import heroLogo from '../../assets/logo-vertical.png';
import heroVideo from '../../assets/nyc-bg.mp4';
import { Link as ScrollLink, Element } from 'react-scroll';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animate hero content on load only
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Short delay for better transition effect
    
    // Optional: Add preloading for video
    const videoElement = document.getElementById('hero-video');
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsLoaded(true);
      });
    }
    
    // Cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Element name="hero" className="element">
      <section className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden">
        {/* Video background without scale effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            id="hero-video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            type="video/mp4"
          />
        </div>
        
        {/* Simple gradient overlay without animations */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

        {/* Content with simplified animations - only fade in on load */}
        <div
          className={`relative z-20 flex flex-col items-center px-4 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={heroLogo}
            alt="TMN Media Logo Vertical"
            className="w-[180px] lg:w-[280px] mb-8 filter drop-shadow-lg"
          />
          <h1 className="mb-8 text-2xl lg:text-3xl font-light tracking-wider">
            <span className="font-bold text-secondary-100">Better</span> Brand Building
          </h1>
          <p className="max-w-lg mx-auto mb-10 text-sm lg:text-base text-gray-200">
            Elevate your small business with our strategic marketing approach and affordable digital
            solutions designed for businesses like yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <ScrollLink
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="uppercase bg-primary-100 hover:bg-primary-200 text-white lg:text-xl cursor-pointer drop-shadow-xl px-8 py-3 text-sm min-w-[220px] font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Free Audit Call
            </ScrollLink>
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="uppercase border-2 border-white hover:border-secondary-100 hover:text-secondary-100 text-white lg:text-xl cursor-pointer drop-shadow-xl px-8 py-3 text-sm min-w-[220px] font-bold rounded-full transition-all duration-300"
            >
              Learn More
            </ScrollLink>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
