import React from 'react';
import './VisibleOnlineSection.css';

const VisibleOnlineSection = () => {
  return (
    <section className="von-hero">
      <div className="von-orb von-orb-1" />
      <div className="von-orb von-orb-2" />
      <div className="von-orb von-orb-3" />
      <div className="von-mesh" />

      <div className="von-inner">
      {/* LEFT */}
      <div className="von-left">
        <div className="von-badge">
          <span className="von-badge-dot" />
          Digital Growth Starts Here
        </div>

        <h2 className="von-h1">
          <span className="von-h1-main">Make Your Business</span>
          <span className="von-grad">Visible Online</span>
        </h2>

        <p className="von-desc">
          Buzzivah combines cinematic storytelling with data-driven marketing to help
          brands and films grow, engage, and dominate online.
        </p>

        <div className="von-features">
          <div className="von-feature">
            <span className="von-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Creative Filmmaking
          </div>
          <div className="von-feature">
            <span className="von-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1 1 0 001.832.545l4-5.33a1 1 0 000-1.09l-4-5.33A1 1 0 0011 8.76M3 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Film Promotion Campaigns
          </div>
          <div className="von-feature">
            <span className="von-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" strokeLinecap="round"/></svg>
            </span>
            Brand Identity &amp; Websites
          </div>
          <div className="von-feature">
            <span className="von-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Performance Marketing
          </div>
          <div className="von-feature">
            <span className="von-fi">
              <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3" strokeLinecap="round"/></svg>
            </span>
            All-in-One Growth Partner
          </div>
        </div>

        <div className="von-btns">
          <a href="#" className="von-cta-primary">
            Start a Project
            <span className="von-arr">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
          <a href="#" className="von-cta-ghost">
            View Our Work
            <svg className="von-ga" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>


      </div>

      {/* RIGHT */}
      <div className="von-right">
        <div className="von-img-wrap">
          <img src="/home-buzziwah-hero-visual.png" alt="Buzzivah" />
        </div>

        <div className="von-card von-card1">
          <div className="von-ci">🎬</div>
          <div>
            <div className="von-cl">Latest Campaign</div>
            <div className="von-cv">Film Promo Live</div>
          </div>
        </div>

        <div className="von-card von-card2">
          <div className="von-ci">🚀</div>
          <div>
            <div className="von-cl">Ad Performance</div>
            <div className="von-cv">+340% ROI</div>
          </div>
        </div>

        <div className="von-card von-card3">
          <div className="von-ci">📈</div>
          <div>
            <div className="von-cl">Growth Tracker</div>
            <div className="von-cv">72% Target</div>
            <div className="von-bar-track"><div className="von-bar-fill" /></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default VisibleOnlineSection;
