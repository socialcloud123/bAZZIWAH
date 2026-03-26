import React from 'react';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import MobileServicesGrid from './MobileServicesGrid';
import CoverflowSection from './CoverflowSection';

const Home = () => {
  return (
    <div className="bg-black">
      <HeroSection />

      <section className="ssd-wrap" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <h2 className="text-white text-3xl font-bold mb-2">WELCOME TO THE WORLD OF UPSCALE</h2>
          <h3 className="text-white text-xl font-semibold mb-6">PICK YOUR SERVICES</h3>
        </div>
      </section>

      <div className="desktop-only">
        <ServicesGrid />
      </div>

      <div className="mobile-only">
        <MobileServicesGrid />
      </div>

      <CoverflowSection />
    </div>
  );
};

export default Home;