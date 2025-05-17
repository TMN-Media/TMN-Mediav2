/** @format */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar/NavBar';

import './index.css';
// Remove direct component imports for sections, they are now in HomePage
// import About from './components/About/About';
// import Hero from './components/Hero/Hero';
// import Team from './components/Team/Team';
// import Contact from './components/Contact/Contact';
// import OfferedServices from './components/OfferedServices/OfferedServices';
// import ConsultingSection from './components/ConsultingSection/ConsultingSection';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

// Import HomePage
import HomePage from './pages/Home/HomePage';

// Service Pages
import EnterpriseMarketing from './pages/Services/EnterpriseMarketing';
import SoftwareDev from './pages/Services/SoftwareDev';
import AiMl from './pages/Services/AiMl';
import Branding from './pages/Services/Branding';

// Component to handle scrolling based on hash
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetName = location.hash.substring(1); // Remove #
      // Use timeout to allow page elements to render before scrolling
      setTimeout(() => {
        scroller.scrollTo(targetName, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70, // Adjust offset based on your NavBar height
        });
      }, 100); // Adjust delay if needed
    }
  }, [location]); // Re-run effect when location changes

  return null; // This component doesn't render anything
};

function App() {
  useEffect(() => {
    // Initialize AOS with minimal configuration - mostly disabling animations
    AOS.init({
      duration: 400, // Very short duration for subtle fade-in only
      once: true, // Animation only happens once
      mirror: false, // No animations when scrolling back up
      easing: 'ease-out', // Simple easing
      delay: 0, // No delay
      offset: 50, // Smaller offset for more immediate visibility
      disable: 'mobile', // Disable on mobile for better performance
      anchorPlacement: 'top-bottom', // When element enters viewport
    });
  }, []);
  return (
    <HelmetProvider>
      <Router>
        <ScrollHandler />
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

              {/* Service Pages */}
              <Route path="/services/enterprise-marketing" element={<EnterpriseMarketing />} />
              <Route path="/services/software-development" element={<SoftwareDev />} />
              <Route path="/services/ai-ml" element={<AiMl />} />
              <Route path="/services/branding" element={<Branding />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
