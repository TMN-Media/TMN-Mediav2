/** @format */
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import logoDark from '../../assets/logo-horizontal-b-text.png';

const menuItems = [
  { name: 'About', to: 'About' },
  { name: 'Services', to: 'OfferedServices' },
  { name: 'Work', to: 'Work' },
  { name: 'How we work', to: 'Consulting' },
  { name: 'Contact', to: 'Contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => {
    closeMenu();
    scroll.scrollToTop();
  };

  const navClass = hasScrolled
    ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-xl'
    : 'bg-slate-950/70 backdrop-blur-md';

  const navLink = (item, mobile = false) => {
    const classes = mobile
      ? 'block py-3 text-lg font-medium text-white hover:text-secondary-100 cursor-pointer'
      : 'font-medium text-slate-200 hover:text-secondary-100 cursor-pointer transition-colors';

    return isHomePage ? (
      <ScrollLink
        to={item.to}
        spy
        smooth
        offset={-88}
        duration={450}
        className={classes}
        activeClass="text-secondary-100"
        onClick={mobile ? closeMenu : undefined}
      >
        {item.name}
      </ScrollLink>
    ) : (
      <RouterLink to={`/#${item.to}`} className={classes} onClick={mobile ? closeMenu : undefined}>
        {item.name}
      </RouterLink>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-5 md:px-8 h-24 flex justify-between items-center max-w-7xl">
        {isHomePage ? (
          <ScrollLink to="hero" smooth duration={450} onClick={scrollToTop} className="cursor-pointer">
            <img src={logoDark} alt="TMN Media" className="h-10 lg:h-11 w-auto" />
          </ScrollLink>
        ) : (
          <RouterLink to="/">
            <img src={logoDark} alt="TMN Media" className="h-10 lg:h-11 w-auto" />
          </RouterLink>
        )}

        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map(item => <div key={item.name}>{navLink(item)}</div>)}
          {isHomePage ? (
            <ScrollLink to="Contact" smooth offset={-88} duration={450} className="inline-flex items-center bg-secondary-100 hover:bg-secondary-200 text-slate-950 py-3 px-5 rounded-lg font-bold cursor-pointer">
              Start a project <FaArrowRight className="ml-2" />
            </ScrollLink>
          ) : (
            <RouterLink to="/#Contact" className="inline-flex items-center bg-secondary-100 text-slate-950 py-3 px-5 rounded-lg font-bold">
              Start a project <FaArrowRight className="ml-2" />
            </RouterLink>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 text-white" aria-label="Toggle menu">
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <div className={`lg:hidden bg-slate-950 border-t border-white/10 overflow-hidden transition-all ${isOpen ? 'max-h-[500px] py-5' : 'max-h-0'}`}>
        <div className="px-6 space-y-2">
          {menuItems.map(item => <div key={item.name}>{navLink(item, true)}</div>)}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
