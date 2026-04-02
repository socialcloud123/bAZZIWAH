import React from 'react';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import MobileServicesGrid from './MobileServicesGrid';
import CoverflowSection from './CoverflowSection';
import ContentSalesSection from './ContentSalesSection';
import DigitalMarketingSection from './DigitalMarketingSection';
import ClienteleSection from './ClienteleSection';
import VisibleOnlineSection from './VisibleOnlineSection';
import Section10 from '../WebDevSections/Section10';

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);
  return (
    <div className="bg-black">
      <HeroSection />

      <DigitalMarketingSection />

      <div className="desktop-only">
        <section className="ssd-wrap ssd-center ssd-hero" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <h2 className="ssd-heading mb-2">WELCOME TO THE WORLD OF UPSCALE</h2>
            <h3 className="ssd-subheading mb-6">PICK YOUR SERVICES</h3>
          </div>
        </section>
        <ServicesGrid />
      </div>

      <div className="mobile-only">
        <section className="ssd-wrap ssd-center ssd-hero" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <h2 className="ssd-heading mb-2">WELCOME TO THE WORLD OF UPSCALE</h2>
            <h3 className="ssd-subheading mb-6">PICK YOUR SERVICES</h3>
          </div>
        </section>
        <MobileServicesGrid />
      </div>

      <CoverflowSection />

      <ContentSalesSection />

      <ClienteleSection />

      <section className="case-studies-section">
        <div className="case-studies-inner">
          <p className="case-studies-kicker">OUR PROJECTS</p>
          <h2 className="case-studies-title">OUR BEST CASE STUDIES</h2>
        </div>

        <div className="case-studies-scroll">
          <div className="case-studies-track">
            {[
              'ChatGPT-Image-Mar-18_-2026_-12_23_51-PM.png',
              'SSD_Performance-Marketing-Webpage-13-1.png',
              'SSD_Performance-Marketing-Webpage-7.png',
              'SSD_Performance-Marketing-Webpage-8.png',
              'SSD_Performance-Marketing-Webpage-9.png',
              'SSD_Website 7.png',
            ].map((img, idx) => (
              <div className="case-card" key={`case-${idx}`}>
                <div
                  className="case-media"
                  style={{ backgroundImage: `url(${encodeURI(`/best works/${img}`)})` }}
                />
                <div className="case-overlay">
                  <div className="case-icon" aria-hidden="true">
                    <span>↗</span>
                  </div>
                </div>
                <div className="case-tags">
                  <span className="case-pill">Cohesive Brand Identity</span>
                  <div className="case-bottom-bar">
                    <span>Branding</span>
                  </div>
                </div>
              </div>
            ))}
            {[
              'ChatGPT-Image-Mar-18_-2026_-12_23_51-PM.png',
              'SSD_Performance-Marketing-Webpage-13-1.png',
              'SSD_Performance-Marketing-Webpage-7.png',
              'SSD_Performance-Marketing-Webpage-8.png',
              'SSD_Performance-Marketing-Webpage-9.png',
              'SSD_Website 7.png',
            ].map((img, idx) => (
              <div className="case-card" key={`case-${idx}-dup`}>
                <div
                  className="case-media"
                  style={{ backgroundImage: `url(${encodeURI(`/best works/${img}`)})` }}
                />
                <div className="case-overlay">
                  <div className="case-icon" aria-hidden="true">
                    <span>↗</span>
                  </div>
                </div>
                <div className="case-tags">
                  <span className="case-pill">Cohesive Brand Identity</span>
                  <div className="case-bottom-bar">
                    <span>Branding</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="growth-section">
        <div className="growth-inner">
          <div className="growth-content">
            <div className="growth-kicker bbbbb-fiu" style={{ '--fiu-delay': '0.05s' }}>
              <span className="growth-kicker-dot" aria-hidden="true" />
              <span>Driven by Passion. Quality. Dedication.</span>
            </div>
            <h2 className="growth-title bbbbb-fiu" style={{ '--fiu-delay': '0.18s' }}>
              Grow Your Business
              <span className="growth-title-accent">with Sripada Studios</span>
            </h2>
            <p className="growth-lead bbbbb-fiu" style={{ '--fiu-delay': '0.36s' }}>
              You’re focused on growth — we help you achieve it through powerful digital solutions.
            </p>

            <ul className="growth-list bbbbb-fiu" style={{ '--fiu-delay': '0.46s' }}>
              <li>
                <span className="growth-list-icon" aria-hidden="true">✦</span>
                <span>Stay digitally visible to your customers anytime</span>
              </li>
              <li>
                <span className="growth-list-icon" aria-hidden="true">✦</span>
                <span>Build strong brand reputation and credibility</span>
              </li>
              <li>
                <span className="growth-list-icon" aria-hidden="true">✦</span>
                <span>Get cost-effective marketing with better ROI</span>
              </li>
              <li>
                <span className="growth-list-icon" aria-hidden="true">✦</span>
                <span>Reach and target customers globally</span>
              </li>
              <li>
                <span className="growth-list-icon" aria-hidden="true">✦</span>
                <span>Improve faster with data-driven analytics</span>
              </li>
            </ul>

            <div className="growth-cta bbbbb-fiu" style={{ '--fiu-delay': '0.58s' }}>
              <button className="growth-button" type="button">
                Start a Project <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="growth-visual bbbbb-fiu" style={{ '--fiu-delay': '0.24s' }}>
            <div className="growth-visual-shell">
              <div className="growth-badge growth-badge-top">Brand-Led Growth</div>
              <img className="growth-image" src="/SSD_Website (8).png" alt="Growth showcase" />
              <div className="growth-badge growth-badge-bottom">Digital visibility that converts</div>
            </div>
          </div>
        </div>
      </section>

      <VisibleOnlineSection />

      <section className="faq-showcase">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="faq-title-block">
              <h2>Any questions?</h2>
              <h3>We got you.</h3>
            </div>
            <p className="faq-intro">
              Have something on your mind? Whether it’s about our services, process, timelines, or
              pricing — we’ve answered the most common questions to help you move forward with
              clarity and confidence.
            </p>
          </div>

          {(() => {
            const faqItems = [
              {
                question: 'What is Sripada Studios Digital?',
                answer:
                  'Sripada Studios Digital is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.',
              },
              {
                question: 'What services does Sripada Studios Digital offer?',
                answer:
                  'Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach.',
              },
              {
                question: 'Who are your clients?',
                answer:
                  'We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries.',
              },
              {
                question: 'What makes Sripada Studios Digital unique?',
                answer:
                  'We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience.',
              },
              {
                question: 'Do you specialize in Kannada film promotions?',
                answer:
                  'Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience.',
              },
              {
                question: 'Can you handle end-to-end digital marketing campaigns?',
                answer:
                  'Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals.',
              },
              {
                question: 'How experienced is your team?',
                answer:
                  'Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns.',
              },
              {
                question: 'Do you have examples of your past work?',
                answer:
                  'Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise.',
              },
            ];

            return (
              <div className="faq-grid">
                {faqItems.map((item, idx) => (
                  <div className={`faq-card ${openFaqIndex === idx ? 'open' : ''}`} key={item.question}>
                    <button
                      className="faq-question"
                      type="button"
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                      aria-expanded={openFaqIndex === idx}
                    >
                      <span>{`${idx + 1}. ${item.question}`}</span>
                      <span className="faq-arrow">⌄</span>
                    </button>
                    <div className="faq-answer">{item.answer}</div>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>

      <Section10 />

      <section className="social-follow">
        <div className="social-follow-inner">
          <h2 className="social-title">FOLLOW ON SOCIAL MEDIA</h2>
          <div className="social-divider" />

          <div className="social-row">
            <div className="social-left">
              <div className="social-ig-icon" aria-hidden="true" />
              <span className="social-handle">@sripadastudios</span>
            </div>
            <button className="social-button" type="button">
              Follow on Instagram
            </button>
          </div>

          <div className="social-grid">
            <div className="social-image" />
            <div className="social-image" />
            <div className="social-image" />
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact">
        <div className="contact-form-header">
          <h2>Contact Us</h2>
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
            Get Started →
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
};

export default Home;
