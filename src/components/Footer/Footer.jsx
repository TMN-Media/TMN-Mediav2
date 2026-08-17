/** @format */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/logo-horizontal-b-text.png';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <img className="h-11 w-auto mb-6" src={logo} alt="TMN Media" />
            <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
              Websites, software, automation and practical growth systems built around the real problems inside a business.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Capabilities</h3>
            <div className="space-y-3 text-slate-400">
              <p>Websites & web apps</p>
              <p>Business software</p>
              <p>Automation & AI</p>
              <p>Local marketing</p>
              <p>Digital operations</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-5">Contact</h3>
            <div className="space-y-4 text-slate-400">
              <a href="mailto:contact@tmn-media.com" className="flex items-center hover:text-secondary-100">
                <FaEnvelope className="mr-3 text-secondary-100" /> contact@tmn-media.com
              </a>
              <a href="tel:+14082902660" className="flex items-center hover:text-secondary-100">
                <FaPhoneAlt className="mr-3 text-secondary-100" /> (408) 290-2660
              </a>
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-secondary-100" /> San Francisco Bay Area, California
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 justify-between text-sm text-slate-500">
          <p>&copy; {currentYear} TMN Media LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <RouterLink to="/privacy-policy" className="hover:text-white">Privacy</RouterLink>
            <RouterLink to="/terms-and-conditions" className="hover:text-white">Terms</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
