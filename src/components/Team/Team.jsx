/** @format */

import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import kenan from '../../assets/headshots/kenoheadshot.png';
import hasib2 from '../../assets/headshots/hasib2.jpg';
import 'aos/dist/aos.css';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Hasib Zulfić',
    title: 'Chief Marketing Officer',
    role: 'Founder',
    img: hasib2,
    bio: 'Digital marketing strategist with expertise in growth marketing and brand development.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Kenan Serhatlić',
    title: 'Senior Software Engineer',
    role: 'Founder',
    img: kenan,
    bio: 'Full-stack developer with a focus on creating scalable web applications and digital experiences.',
    linkedin: '#',
    twitter: '#',
  },
];

const Team = () => {
  useEffect(() => {
    // AOS is now globally initialized with minimal settings in App.js
  }, []);

  return (
    <Element name="Team">
      <div id="Team" className="py-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-primary-100 text-4xl font-bold mb-4">
            MEET THE FOUNDERS
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-primary-100 to-primary-200"></div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-3xl text-gray-800 font-semibold mb-4">
              The Driving Force Behind TMN Media
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At The Media Network, our leadership team combines creative vision and software
              engineering prowess. Their shared vision and collaborative spirit are the foundation
              of our commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl group"
                data-aos="fade-up"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden">
                    <img
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      src={member.img}
                      alt={`${member.name} - ${member.title}`}
                    />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-primary-100 font-semibold mb-1">{member.role}</p>
                      <h4 className="text-2xl text-gray-900 font-bold mb-2">{member.name}</h4>
                      <p className="text-md text-primary-200 mb-4">{member.title}</p>
                      <p className="text-gray-600 mb-6">{member.bio}</p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={member.linkedin}
                        className="text-gray-500 hover:text-primary-100 transition-colors duration-300"
                        aria-label="LinkedIn Profile"
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a
                        href={member.twitter}
                        className="text-gray-500 hover:text-primary-100 transition-colors duration-300"
                        aria-label="Twitter Profile"
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Team;
