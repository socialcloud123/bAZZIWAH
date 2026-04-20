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
          <div className="bbbbb-kicker bbbbb-fiu" style={{ '--fiu-delay': '0.05s' }}>
            <span className="bbbbb-kicker-line" />
            Bengaluru&apos;s Digital Partner
          </div>

          <h1 className="bbbbb-h1 bbbbb-fiu" style={{ '--fiu-delay': '0.2s' }}>
            We&apos;re the people
            <span className="bbbbb-accent">who think sharp</span>
            <span className="bbbbb-dim-word">and move with swag.</span>
          </h1>

          <p className="bbbbb-sub bbbbb-fiu" style={{ '--fiu-delay': '0.38s', textAlign: 'justify' }}>
            This isn&apos;t your usual &ldquo;we post and pray&rdquo; agency. Buzziwah powered by Sripada Studios brings cinema-level storytelling into digital that actually converts.
            <br />
            <strong>Because looking good is easy&hellip; getting results isn&apos;t.</strong>
          </p>

          <div className="bbbbb-cta-row bbbbb-fiu" style={{ '--fiu-delay': '0.52s' }}>
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
              src="/home-digital-marketing-hero-image.png"
              alt="Buzziwah"
            />

          <div className="bbbbb-phone-video-overlay">
            <iframe
              src="https://www.youtube.com/embed/S4QYOZeCPfw?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=S4QYOZeCPfw&playsinline=1"
              title="Buzziwah"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="bbbbb-stats-bar">
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num">100<em>+</em></div>
          <div className="bbbbb-s-label" style={{ color: '#c8f041' }}>Brands</div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num bbbbb-s-num-small">600,000<em>+</em><br /><span>leads. Not by accident.</span></div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num bbbbb-s-num-small">50M<em>+</em><br /><span style={{ whiteSpace: 'nowrap' }}>views. Every year. Consistently.</span></div>
        </div>
        <div className="bbbbb-s-cell">
          <div className="bbbbb-s-num bbbbb-s-num-small">300<em>%</em><br /><span style={{ whiteSpace: 'nowrap' }}>organic growth. Because strategy &gt; luck.</span></div>
        </div>
      </div>

      <div className="bbbbb-stats-tagline">
        Best in the market? We&apos;ll let the results answer that.
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
