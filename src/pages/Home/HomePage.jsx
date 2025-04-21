/** @format */
import React from 'react';

// Import the sections that make up the home page
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import OfferedServices from '../../components/OfferedServices/OfferedServices';
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import ConsultingSection from '../../components/ConsultingSection/ConsultingSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <OfferedServices />

      <ConsultingSection />

      <Team />
      <Contact />
    </>
  );
};

export default HomePage;
