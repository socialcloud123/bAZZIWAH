import { useState } from 'react';
import './SEO.css';
import '../home/Home.css';

const seoServices = [
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-27.png', title: 'Search-Ready Websites', desc: '1. Deep site health check\n2. Technical performance audit\n3. Site Infrastructure Review\n4. SEO Foundations Audit' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-28.png', title: 'Targeted Keyword Optimization', desc: '1. Competitor Keyword Insights\n2. Precision Keyword Research\n3. Hyperlocal Keyword Targeting\n4. Keyword Performance Tracking' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-29.png', title: 'ON–Page SEO', desc: '1. Content Built to Rank\n2. Optimized Meta Titles & Tags\n3. Smart Site Linking\n4. Enhanced Search Appearance' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-30.png', title: 'Regional SEO Solutions', desc: '1. Google business profile enhancements\n2. Location-Based Directory Linking\n3. Online Reputation Management\n4. Geo-targeted listing management'},
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-31.png', title: 'Backlink Strategy', desc: '1. Power Domain Links\n2. Content-Driven Outreach\n3. Trusted Page links\n4. Backlink Gap Analysis' },
];

const howCards = [
  {
    title: 'Social Media Marketing',
    desc: 'We specialize in conducting in-depth evaluations that help identify opportunities to analyse and develop strategies for improving performance - driving growth and achieving higher search engine rankings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11V7a2 2 0 0 1 2-2h1l11-4v22l-11-4H5a2 2 0 0 1-2-2v-4Z" />
        <path d="M15 5.5v13" />
        <path d="M7 7v10" />
      </svg>
    ),
  },
  {
    title: 'Action-Driven Strategy',
    desc: 'Along with creative strategies, we at Sripada studios deliver and execute solutions that fix all critical issues and fuel exponential growth. Our innovative, location specific approach does not just drive success but ensures your brand is remembered.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path d="m12 6 1.5 5H18l-4 3 1.5 5-3.5-2.5L8 19l1.5-5-4-3h4.5Z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Enhancement',
    desc: 'Through continuous tracking, insightful reporting, and smart strategy updates, we ensure long-term growth and stable rankings in every target location.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2v6h-6" />
        <path d="M3 22v-6h6" />
        <path d="M3 16 9.5 9.5" />
        <path d="m14.5 14.5 6.5-6.5" />
        <path d="M21 12a9 9 0 0 1-9 9A9 9 0 0 1 3 12" />
        <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
      </svg>
    ),
  },
];

const seoFaqs = [
  { q: 'Can You Redesign Or Develop A Website For My Brand?', a: 'Absolutely. We handle everything from scratch — concept, design, development, and launch — tailored to your brand identity and goals.' },
  { q: 'Do You Offer SEO Services?', a: 'Yes. Every website we build is SEO-optimized with proper structure, meta tags, performance tuning, and mobile responsiveness baked in.' },
  { q: 'What Kind Of Support Do You Offer After A Campaign Is Launched?', a: 'We provide ongoing monitoring, A/B testing, performance reports, and optimization to ensure your campaigns keep delivering results.' },
  { q: 'Why Should I Choose SS Digital For My Digital Marketing Needs?', a: 'We combine creative strategy, data-driven execution, and transparent reporting to deliver measurable ROI for businesses of all sizes.' },
];

const SEOFaqCard = ({ faq, idx }) => {
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

const SEO = () => (
  <div className="seo-page">

    <section className="seo-banner">
      <img src="/banners/SSD_Banners (5).png" alt="SEO Banner" />
    </section>

    <section className="seo-section2">
      <div className="seo-s2-left">
        <div className="seo-s2-image-shell">
          <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Social-Media-Management-3.png" alt="SEO" />
        </div>
      </div>
      <div className="seo-s2-right">
        <div className="iuuui-section">
          <div className="iuuui-banner">We don't just optimise for search engines, we optimise for impact</div>
          <p className="iuuui-intro">SEO is required to increase the visibility of your website on search engines, attract the audience and grow your reach across platforms.</p>
          <h2 className="iuuui-subheading">Why Sripada Studios?</h2>
          <ul className="iuuui-points">
            <li><span>Because nobody handles it better than us.</span></li>
          </ul>
          <p className="iuuui-footer">True SEO means being found and remembered.</p>
        </div>
      </div>
    </section>

    <section className="seo-section3">
      <div className="seo-s3-left">
        <div className="yyyyy-wrapper">
          <h2 className="yyyyy-title">SEO Services We Offer</h2>
          <div className="yyyyy-grid">
            <div className="yyyyy-card"><h3>1. Comprehensive SEO Services</h3><p>From on-page, off-page SEO to technical audits we have got you covered</p></div>
            <div className="yyyyy-card"><h3>2. Hyperlocal SEO Solutions</h3><p>Deep understanding of search patterns and solutions tailored to your regional needs</p></div>
            <div className="yyyyy-card"><h3>3. Results Backed by Data</h3><p>Every strategy we make is backed by data and driven by results</p></div>
            <div className="yyyyy-card"><h3>4. Client-Centric Mindset</h3><p>We put "you" first and make sure every strategy we create is carefully aligned with your goals and tailored to your business needs.</p></div>
          </div>
        </div>
      </div>
      <div className="seo-s3-right">
        <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Social-Media-Management-6.png" alt="SEO Services" />
      </div>
    </section>

    <section className="seo-section4">
      <h2 className="seo-section-title" style={{ color: '#83cd15' }}>Our SEO services that drive Success</h2>
      <div className="seo-services-grid">
        {seoServices.slice(0, 3).map((s, i) => (
          <div className="seo-service-container" key={i}>
            <div className="seo-service-card">
              {!s.noImg && (
                <div className="seo-icon-container">
                  <img src={s.img} alt={s.title} />
                </div>
              )}
              <div className={`seo-service-content${s.noImg ? ' seo-no-img' : ''}`}>
                <div className="seo-service-title">{s.title}</div>
                <p className="seo-service-desc">{s.desc.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="seo-services-last-row" style={{ marginTop: '24px' }}>
        {seoServices.slice(3).map((s, i) => (
          <div className="seo-service-container" key={i}>
            <div className="seo-service-card">
              {!s.noImg && (
                <div className="seo-icon-container">
                  <img src={s.img} alt={s.title} />
                </div>
              )}
              <div className={`seo-service-content${s.noImg ? ' seo-no-img' : ''}`}>
                <div className="seo-service-title">{s.title}</div>
                <p className="seo-service-desc">{s.desc.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="seo-section5">
      <h2 className="seo-section-title">How we make SEO work for you</h2>
      <p className="seo-section-sub">Our creative and innovative approach is what made us aficionados.</p>
      <div className="seo-how-grid">
        {howCards.map((c, i) => (
          <div className="seo-how-card" key={i}>
            <div className="seo-how-icon" aria-hidden="true">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
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
          {seoFaqs.map((faq, idx) => <SEOFaqCard key={idx} faq={faq} idx={idx} />)}
        </div>
      </div>
    </section>

    <section className="seo-bottom-banner">
      <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SEO-F.png" alt="SEO Footer" />
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img className="footer-logo" src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png" alt="Sripada Studios Digital" />
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

export default SEO;
