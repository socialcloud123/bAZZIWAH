import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hz-video-hero">
      <video
        className="hz-video-hero-media"
        src="/Showreel_SSD.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default HeroSection;
