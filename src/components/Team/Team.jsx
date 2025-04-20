/** @format */

import React, { useEffect } from 'react';
// import elvis from '../../assets/headshots/elvis.jpg'; // Removed unused import
import kenan from '../../assets/headshots/kenan.jpg';
import hasib2 from '../../assets/headshots/hasib2.jpg';
// import amar from '../../assets/headshots/amar.jpg'; // Removed unused import
// import ibro from '../../assets/headshots/ibro.jpg'; // Removed unused import
// import izo from '../../assets/headshots/izo.jpg'; // Removed unused import
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

const Team = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  });

  return (
    <div
      id="team"
      className="py-16 bg-gray-50"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary-100 text-4xl font-bold mb-4">MEET THE FOUNDERS</h2>
        <div className="w-24 h-1 mx-auto mb-12 bg-primary-100"></div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-3xl text-gray-800 font-semibold mb-4">
            The Driving Force Behind TMN Media
          </h3>
          <p className="text-lg text-gray-600">
            Founded by Hasib Zulfić and Kenan Serhatlić, TMN Media combines marketing expertise and
            software engineering prowess. Their shared vision and collaborative spirit are the
            foundation of our commitment to delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center"
            >
              <img
                className="w-36 h-36 rounded-full border-4 border-primary-100 object-cover mb-5 shadow-md"
                src={member.img}
                alt={`${member.name} - ${member.title}`}
              />
              <h4 className="text-xl text-gray-900 font-bold mb-1">{member.name}</h4>
              <p className="text-md text-primary-200">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const teamMembers = [
  { name: 'Hasib Zulfić', title: 'Chief Marketing Officer/Founder', img: hasib2 },
  { name: 'Kenan Serhatlić', title: 'Senior Software Engineer/Founder', img: kenan },
];
