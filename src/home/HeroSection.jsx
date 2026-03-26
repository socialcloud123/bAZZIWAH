import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full" style={{ height: '90vh' }}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Showreel_SSD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
