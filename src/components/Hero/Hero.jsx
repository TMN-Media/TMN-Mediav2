/** @format */

import React from 'react';
import heroLogo from '../../assets/logo-vertical.png';
import heroVideo from '../../assets/nyc-bg.mp4';
import { Link as ScrollLink, Element } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="hero" className="element">
      <section className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          type="video/mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center px-4">
          <img
            src={heroLogo}
            alt="TMN Media Logo Vertical"
            className="w-[150px] lg:w-[250px] mb-6"
          />
          <h1 className="mb-8 text-xl lg:text-2xl font-light">Better Brand Building</h1>

          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="uppercase bg-primary-100 hover:bg-primary-200 text-white lg:text-xl lg:w-[250px] cursor-pointer drop-shadow-xl px-8 py-3 text-sm w-[220px] font-bold rounded-full transition-colors duration-200"
          >
            Free Audit Call
          </ScrollLink>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
