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
          We&apos;re Hiring
        </div>

        <h2 className="von-h1">
          <span className="von-h1-main">Join the Mad Energy</span>
          <span className="von-grad">Build a Career out of Passion</span>
        </h2>

        <p className="von-desc">
          No over-dramatic old-school energy here. Just sharp minds, fast execution, and people who actually get it.
        </p>

        <div className="von-features">
          <div className="von-feature">
            <span className="von-fi">✦</span>
            Common sense is valued. Ownership is expected.
          </div>
          <div className="von-feature">
            <span className="von-fi">✦</span>
            And your ideas? They&apos;re not &ldquo;suggestions.&rdquo;
          </div>
          <div className="von-feature">
            <span className="von-fi">✦</span>
            They&apos;re weapons. Build with them.
          </div>
        </div>

        <div className="von-btns">
          <a href="#" className="von-cta-primary">
            Join the Team
            <span className="von-arr">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
          <a href="#" className="von-cta-ghost">
            See Open Roles
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
