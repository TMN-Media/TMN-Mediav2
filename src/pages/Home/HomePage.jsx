/** @format */
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import SEO components
import StructuredData from '../../components/SEO/StructuredData';

// Import the sections that make up the home page
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import OfferedServices from '../../components/OfferedServices/OfferedServices';
import Team from '../../components/Team/Team';
import Contact from '../../components/Contact/Contact';
import ConsultingSection from '../../components/ConsultingSection/ConsultingSection';

const HomePage = () => {
  // Structured data for organization
  const organizationData = {
    name: 'TMN Media',
    url: 'https://www.tmn-media.com',
    logo: 'https://www.tmn-media.com/logo.png',
    sameAs: [
      'https://www.facebook.com/TMNMedia',
      'https://www.linkedin.com/company/tmn-media',
      'https://twitter.com/TMNMedia',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Ave',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-415-555-1234',
      contactType: 'customer service',
    },
    description: 'TMN Media specializes in enterprise marketing, software development, AI/ML solutions, and strategic consulting to drive digital transformation and business growth.',
  };

  return (
    <>
      <Helmet>
        <title>TMN Media | Enterprise Marketing, Software & AI Services</title>
        <meta 
          name="description" 
          content="TMN Media specializes in enterprise marketing, software development, AI/ML solutions, and strategic consulting to drive digital transformation and business growth."
        />
        <meta name="keywords" content="enterprise marketing, software development, AI solutions, ML solutions, branding, consulting" />
        <link rel="canonical" href="https://www.tmn-media.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmn-media.com/" />
        <meta property="og:title" content="TMN Media | Enterprise Marketing, Software & AI Services" />
        <meta property="og:description" content="Specialized marketing, software, and AI solutions driving business growth and digital transformation." />
        <meta property="og:image" content="https://www.tmn-media.com/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tmn-media.com/" />
        <meta property="twitter:title" content="TMN Media | Enterprise Marketing, Software & AI Services" />
        <meta property="twitter:description" content="Specialized marketing, software, and AI solutions driving business growth and digital transformation." />
        <meta property="twitter:image" content="https://www.tmn-media.com/og-image.jpg" />
      </Helmet>

      {/* Add structured data for better SEO */}
      <StructuredData type="Organization" data={organizationData} />

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
