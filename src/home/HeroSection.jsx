import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hz-hero">
      <div className="hz-orb hz-orb-1" />
      <div className="hz-orb hz-orb-2" />
      <div className="hz-orb hz-orb-3" />
      <div className="hz-mesh" />

      {/* LEFT */}
      <div className="hz-hero-left">
        <div className="hz-badge">
          <span className="hz-badge-dot" />
          Digital Growth Starts Here
        </div>

        <h1 className="hz-h1">
          Make Your Business<br />
          <span className="hz-grad">Visible Online</span>
        </h1>

        <p className="hz-desc">
          Buzzivah combines cinematic storytelling with data-driven marketing to help
          brands and films grow, engage, and dominate online.
        </p>

        <div className="hz-features">
          <div className="hz-feature">
            <span className="hz-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            Creative Filmmaking
          </div>
          <div className="hz-feature">
            <span className="hz-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1 1 0 001.832.545l4-5.33a1 1 0 000-1.09l-4-5.33A1 1 0 0011 8.76M3 12h8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            Film Promotion Campaigns
          </div>
          <div className="hz-feature">
            <span className="hz-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" strokeLinecap="round" /></svg>
            </span>
            Brand Identity & Websites
          </div>
          <div className="hz-feature">
            <span className="hz-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            Performance Marketing
          </div>
          <div className="hz-feature">
            <span className="hz-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" strokeLinecap="round" /></svg>
            </span>
            All-in-One Growth Partner
          </div>
        </div>

        <div className="hz-btns">
          <a href="#" className="hz-cta-primary">
            Start a Project
            <span className="hz-arr">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </a>
          <a href="#" className="hz-cta-ghost">
            View Our Work
            <svg className="hz-ga" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        
      </div>

      {/* RIGHT */}
      <div className="hz-hero-right">
        <div className="hz-img-wrap">
          <img src="/home-buzziwah-hero-visual.png" alt="Buzzivah" />
        </div>

        <div className="hz-card hz-card1">
          <div className="hz-ci">🎬</div>
          <div>
            <div className="hz-cl">Latest Campaign</div>
            <div className="hz-cv">Film Promo Live</div>
          </div>
        </div>

        <div className="hz-card hz-card2">
          <div className="hz-ci">🚀</div>
          <div>
            <div className="hz-cl">Ad Performance</div>
            <div className="hz-cv">+340% ROI</div>
          </div>
        </div>

        <div className="hz-card hz-card3">
          <div className="hz-ci">📈</div>
          <div>
            <div className="hz-cl">Growth Tracker</div>
            <div className="hz-cv">72% Target</div>
            <div className="hz-bar-track"><div className="hz-bar-fill" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
