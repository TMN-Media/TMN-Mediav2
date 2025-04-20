/** @format */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import NavBar from './components/NavBar/NavBar';

import './index.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import OfferedServices from './components/OfferedServices/OfferedServices';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

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
  return (
    <Router>
      <ScrollHandler />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <OfferedServices />
                  <Team />
                  <Contact />
                </>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
