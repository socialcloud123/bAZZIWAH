import { useState, useEffect, useRef } from 'react';
import './WebsiteDevelopment.css';
import '../home/Home.css';

const sssSlideImages = [
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-5.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-3.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-4.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-1.png',
];

const SssCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % sssSlideImages.length);
    }, 1500);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="sss-mobile-frame">
      <div className="sss-story-progress">
        {sssSlideImages.map((_, i) => (
          <span key={i} className={i === current ? 'active' : ''} />
        ))}
      </div>
      <div className="sss-carousel-container">
        <div className="sss-carousel" style={{ transform: `translateX(-${current * 100}%)` }}>
          {sssSlideImages.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const uiuiImages = [
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-6.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-7.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-9.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-10.png',
  'https://buzziwah.com/wp-content/uploads/2025/09/SSD-Website-Services-11.png',
];

const UiuiCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % uiuiImages.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="uiuioouuo-wrapper">
      <div className="uiuioouuo-frame">
        <div className="uiuioouuo-screen">
          <div className="uiuioouuo-carousel-container">
            <div className="uiuioouuo-carousel" style={{ transform: `translateX(-${current * 100}%)` }}>
              {uiuiImages.map((src, i) => <img key={i} src={src} alt={`Slide ${i + 1}`} />)}
            </div>
            <div className="uiuioouuo-dots">
              {uiuiImages.map((_, i) => (
                <span key={i} className={`uiuioouuo-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="uiuioouuo-connector" />
      <div className="uiuioouuo-stand" />
      <button className="uiuioouuo-cta">Explore More</button>
    </div>
  );
};

const zzzzImages = [
  'https://buzziwah.com/wp-content/uploads/2025/05/1-5.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/21.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/3-5.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/6-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/7-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/8-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/10-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/11.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/13.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/14.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/12.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/22.png',
];

const ZzzzCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = zzzzImages.length;
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);
  return (
    <div className="zzzz-carousel">
      <div className="zzzz-arrow zzzz-arrow-left" onClick={prev}>&#x276E;</div>
      <img className="zzzz-img-left" src={zzzzImages[(current - 1 + total) % total]} alt="Left" />
      <img className="zzzz-img-center" src={zzzzImages[current]} alt="Center" />
      <img className="zzzz-img-right" src={zzzzImages[(current + 1) % total]} alt="Right" />
      <div className="zzzz-arrow zzzz-arrow-right" onClick={next}>&#x276F;</div>
    </div>
  );
};

const wdFaqs = [
  { q: 'Can you redesign or develop a website for my brand?', a: 'Absolutely. We handle everything from scratch — concept, design, development, and launch — tailored to your brand identity and goals.' },
  { q: 'Do you offer SEO services?', a: 'Yes. Every website we build is SEO-optimized with proper structure, meta tags, performance tuning, and mobile responsiveness baked in.' },
  { q: 'What kind of support do you offer after launch?', a: 'We provide post-launch support including bug fixes, content updates, performance monitoring, and ongoing maintenance packages.' },
  { q: 'Why should I choose SSD Digital for my digital marketing needs?', a: 'We combine creative design, technical expertise, and data-driven strategy to deliver websites that not only look great but also convert visitors into customers.' },
];

const WDFaqCard = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${faq.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{faq.a}</div>
    </div>
  );
};

const WebsiteDevelopment = () => (
  <div className="wd-page">
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img
        src="/banners/SSD_Banners (1).png"
        alt="Website Development"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </section>

    <section className="wd-services">
      <h2 className="wd-services-title">We Provide Best Services</h2>
      <div className="wd-services-container">
        <div className="wd-service-card">
          <div className="wd-icon-box">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 className="wd-service-title">DEVELOPMENT</h3>
          <p className="wd-service-desc">Your brand can be you or your company. We research deeply and develop the perfect website solution—static or dynamic.</p>
        </div>
        <div className="wd-service-card">
          <div className="wd-icon-box">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
          </div>
          <h3 className="wd-service-title">DESIGNING</h3>
          <p className="wd-service-desc">We craft digital experiences that leave lasting impressions. Whether startup or brand, we make your website stand out.</p>
        </div>
        <div className="wd-service-card">
          <div className="wd-icon-box">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
          <h3 className="wd-service-title">DELIVERY</h3>
          <p className="wd-service-desc">With creativity and affordability, we deliver high-quality websites along with hosting and complete support.</p>
        </div>
      </div>
    </section>

    <section className="mmmm-diagonal-wrapper">
      <div className="mmmm-video-section">
        <iframe
          src="https://www.youtube.com/embed/Pc3DYmCTsfU?rel=0&modestbranding=1"
          allowFullScreen
          title="Website can reach everywhere"
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="mmmm-content-section">
        <div className="mmmm-point-list">
          <div className="mmmm-point-item">
            <h3>Website is an Essential Tool</h3>
            <p>With your brand essence, we create winning websites filled with creative writing, new ideas, and feel-good marketing.</p>
          </div>
          <div className="mmmm-point-item">
            <h3>Creative + Strategic Design</h3>
            <p>Designing websites isn't just about good looks. We focus on concepts and placements that tell your story effectively.</p>
          </div>
          <div className="mmmm-point-item">
            <h3>Multimedia Powered</h3>
            <p>We use eye-catching photography, stunning videos, and curated WordPress content to bring your brand to life.</p>
          </div>
          <div className="mmmm-point-item">
            <h3>Tailored for You</h3>
            <p>Whether it's static, dynamic, e-commerce, or portfolio—we research your needs and create solutions within your budget.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="wd-showcase">
      <h3 className="wd-subheading">Work From Our Den.</h3>
      <ZzzzCarousel />
    </section>

    <section className="wd-projects">
      <div className="wd-project-split">
        <div className="wd-project-left">
          <SssCarousel />
        </div>
        <div className="wd-project-right">
          <section className="cs-banner">
            <span>CASE STUDIES</span>
            <h1>NIRGUNA ACTING SCHOOL</h1>
            <p>Crafting digital presence for performance-driven minds.</p>
          </section>
          <section className="cs-intro">
            <p>Our website development for Nirguna Acting School focuses on a user-centric design, seamlessly showcasing their diverse acting programs, talented faculty, and the vibrant spirit of the institution.</p>
          </section>
          <section className="cs-highlights">
            <div>
              <h2>Project Highlights</h2>
              <ul>
                <li>User-focused website structure</li>
                <li>Showcases acting courses &amp; faculty</li>
                <li>Clean visual storytelling</li>
                <li>Responsive design for mobile users</li>
                <li>Minimalistic UI that reflects artistic values</li>
              </ul>
            </div>
            <div>
              <h2>Outcome</h2>
              <ul>
                <li>Boosted visibility among aspiring actors</li>
                <li>Stronger digital brand presence</li>
                <li>Lasting impression in performing arts education</li>
                <li>Easy navigation &amp; CTA engagement</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section className="wd-projects wd-projects-reverse">
      <div className="wd-project-split">
        <div className="wd-project-right">
          <section className="cs-banner">
            <span>CASE STUDY 02</span>
            <h1>WMN Doctors</h1>
            <p>Improving accessibility and digital trust in modern healthcare.</p>
          </section>
          <section className="cs-intro">
            <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: '1.3rem', marginBottom: '15px', color: '#000' }}>About Us</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#000' }}>Best Clinic for Women Healthcare Services in Bangalore</p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', margin: '10px 0 20px 0' }}>The Expertise you need, the care you deserve!</p>
            <p>WMN Doctors is a group of highly qualified doctors and super-specialists driven by a common vision — 'Deliver best quality healthcare for all life stages of a woman'.</p>
            <p style={{ marginTop: '20px' }}>Our commitment extends beyond treatment — we're dedicated to training the next generation of doctors to carry forward ethical, evidence-based care practices.</p>
          </section>
          <section className="cs-highlights">
            <div>
              <h2>Project Highlights</h2>
              <ul>
                <li>Mobile-friendly interface</li>
                <li>Streamlined navigation for services</li>
                <li>Modern medical branding</li>
                <li>Engaging homepage visuals</li>
                <li>Simple appointment flow</li>
              </ul>
            </div>
            <div>
              <h2>Outcome</h2>
              <ul>
                <li>Improved patient engagement</li>
                <li>Boosted website credibility</li>
                <li>Increased online appointment bookings</li>
                <li>Established trust and reliability</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="wd-project-left">
          <UiuiCarousel />
        </div>
      </div>
    </section>

    <section className="faq-showcase">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-title-block">
            <h2>Any questions?</h2>
            <h3>We got you.</h3>
          </div>
          <p className="faq-intro">
            Have something on your mind? Whether it's about our services, process, timelines, or
            pricing — we've answered the most common questions to help you move forward with
            clarity and confidence.
          </p>
        </div>
        <div className="faq-grid">
          {wdFaqs.map((faq, idx) => <WDFaqCard key={idx} faq={faq} idx={idx} />)}
        </div>
      </div>
    </section>

    <section className="wd-banner-bottom">
      <img src="/banners/SSD_Banners (1).png" alt="Banner" />
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img
          className="footer-logo"
          src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
          alt="Sripada Studios Digital"
        />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">Get Started →</button>
      </div>
      <div className="footer-divider" />
      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">Subscribe</button>
        </div>
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li>Performance Marketing</li>
            <li>Social Media Management</li>
            <li>Website Development</li>
            <li>Branding and Re-branding</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul>
            <li>Content Solution</li>
            <li>Video Production</li>
            <li>Search Engine Optimization</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-socials">
          <span className="footer-social">f</span>
          <span className="footer-social">ig</span>
          <span className="footer-social">yt</span>
        </div>
        <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
      </div>
    </footer>
  </div>
);

export default WebsiteDevelopment;
