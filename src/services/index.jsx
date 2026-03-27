import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Social Media Management',
    text: 'Content, community, and growth strategies to keep your brand active and loved.',
    href: '/social-media',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    title: 'Performance Marketing',
    text: 'ROI-first paid campaigns across search, social, and display with transparent reporting.',
    href: '/performance-marketing',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9-4-18-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Branding & Identity',
    text: 'Build memorable brands with naming, visual systems, and clear messaging.',
    href: '/branding',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22 9 20.8l-3 .9-.9-3L2 16l1.9-2.8L2 10l3-.9.9-3L9 7l3-1 3 1 2.1-1.9.9 3L22 10l-1.9 3L22 16l-3 .9-.9 3L16 20.8 12 22Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Website Development',
    text: 'Fast, beautiful, conversion-focused websites engineered for growth.',
    href: '/website-development',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Video Production',
    text: 'Cinematic storytelling, ads, and product films that stop the scroll.',
    href: '/video-production',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <path d="m22 7-6 4 6 4V7Z" />
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    text: 'Technical and on-page optimization to keep your brand discoverable.',
    href: '/seo',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="m8 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Influencer Marketing',
    text: 'Creator partnerships that build trust and amplify reach.',
    href: '/influencer-marketing',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Content Solutions',
    text: 'Strategy, copy, and creative assets tailored to your brand voice.',
    href: '/content-solution',
    image: encodeURI('/SSD_Website (16).png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const Services = () => (
  <div className="services-page">
    <section className="services-hero">
      <img
        className="services-hero-image"
        src={encodeURI('/banners/SSD_Performance Marketing Webpage (6).png')}
        alt="Services banner"
      />
    </section>

    <section className="services-intro">
      <h2>Everything you need to grow online</h2>
      <p>
        We design integrated service stacks that connect your brand story with measurable outcomes.
        Choose a single service or combine them into a tailored growth plan.
      </p>
      <p>
        Each engagement starts with discovery, then moves into creative development, execution, and optimization.
        That means you get strategy, production, and performance in one place.
      </p>
    </section>

    <section className="services-grid" id="services-grid">
      {services.map((service, index) => (
        <a className="service-card" href={service.href} key={service.title}>
          <div className="service-card-media">
            <div className="service-card-icon" aria-hidden="true">{service.icon}</div>
            <img src={service.image} alt={service.title} />
            <span className="service-card-tag">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="service-card-body">
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-text">{service.text}</p>
            <span className="service-card-cta">
              View service ->
            </span>
          </div>
        </a>
      ))}
    </section>

    <section className="contact-form-section" id="contact">
      <div className="contact-form-header">
        <h2>Contact us</h2>
        <p>Tell us about your project and we will get back to you quickly.</p>
      </div>
      <div className="contact-form-inner">
        <div className="contact-form-image">
          <img src="/SSD_Website (14).png" alt="Contact" />
        </div>

        <div>
          <form className="contact-form">
            <div className="form-row two">
              <label className="form-field">
                <span>Name *</span>
                <input type="text" placeholder="First" required />
              </label>
              <label className="form-field">
                <span>&nbsp;</span>
                <input type="text" placeholder="Last" required />
              </label>
            </div>

            <div className="form-row two">
              <label className="form-field">
                <span>Email *</span>
                <input type="email" placeholder="Email" required />
              </label>
              <label className="form-field">
                <span>Numbers</span>
                <input type="tel" placeholder="Phone" />
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Select your Services *</span>
                <select required>
                  <option value="">Select your Services</option>
                  <option>Branding</option>
                  <option>Digital Marketing</option>
                  <option>Performance Marketing</option>
                  <option>Film Promotion</option>
                  <option>Web Design</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Message *</span>
                <textarea rows="5" placeholder="Comment or Message" required />
              </label>
            </div>

            <div className="form-actions">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img
          className="footer-logo"
          src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
          alt="Sripada Studios Digital"
        />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">
          Get Started ->
        </button>
      </div>

      <div className="footer-divider" />

      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">
            Subscribe
          </button>
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

export default Services;
