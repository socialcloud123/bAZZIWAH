import React from 'react';

const DigitalMarketingSection = () => {
  const marqueeItems = [
    'Branding & Identity',
    'Performance Marketing',
    'Social Media Management',
    'Cinema to Digital',
    'SEO & Content Strategy',
    'Web Design & Development',
    'OTT Campaigns',
  ];

  return (
    <section className="bbbbb-hero-section">
      <div className="bbbbb-hero-main">
        <div className="bbbbb-headline-wrap">
          <div className="bbbbb-kicker">
            <span className="bbbbb-kicker-line" />
            Bengaluru&apos;s Digital Partner
          </div>

          <h1 className="bbbbb-h1">
            Step Into
            <span className="bbbbb-accent">Digital</span>
            <span className="bbbbb-dim-word">Marketing</span>
          </h1>

          <p className="bbbbb-sub">
            SS Digital — the creative and performance marketing arm of Sripada Studios. Bold
            branding, sharp campaigns, and cinema-to-digital expertise. All in one place.
          </p>

          <div className="bbbbb-cta-row">
            <a className="bbbbb-cta-primary" href="#">
              Start a Project →
            </a>
            <a className="bbbbb-cta-secondary" href="#">
              See Our Work
              <span className="bbbbb-cta-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="bbbbb-hero-left">
          <img
            className="bbbbb-hero-person-img"
            src="/SSD_Website 10.png"
            alt="SS Digital — Buzziwah"
          />

          <div className="bbbbb-phone-video-overlay">
            <iframe
              src="https://www.youtube.com/embed/S4QYOZeCPfw?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=S4QYOZeCPfw&playsinline=1"
              title="Buzziwah — SS Digital"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="bbbbb-stats-bar">
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num">
            200<em>+</em>
          </div>
          <div className="bbbbb-s-label">Happy Clients</div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num bbbbb-s-num-small">
            Happening
            <br />
            <span>Conglomerate</span>
          </div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num bbbbb-s-num-small">
            Cinema
            <br />
            <span>to Digital</span>
          </div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num">
            BLR<em>.</em>
          </div>
          <div className="bbbbb-s-label">Bengaluru Based</div>
        </div>
      </div>

      <div className="bbbbb-marquee-wrap">
        <div className="bbbbb-marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span className="bbbbb-m-item" key={`${item}-${idx}`}>
              <span className="bbbbb-m-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
