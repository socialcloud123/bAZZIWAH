import React from 'react';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import MobileServicesGrid from './MobileServicesGrid';
import CoverflowSection from './CoverflowSection';
import ContentSalesSection from './ContentSalesSection';
import DigitalMarketingSection from './DigitalMarketingSection';
import ClienteleSection from './ClienteleSection';

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
            <p className="growth-kicker">Driven by Passion. Quality. Dedication.</p>
            <h2 className="growth-title">Grow Your Business</h2>
            <h3 className="growth-title-secondary">with Sripada Studios</h3>
            <p className="growth-lead">
              You’re focused on growth — we help you achieve it through powerful digital solutions.
            </p>

            <ul className="growth-list">
              <li>Stay digitally visible to your customers anytime</li>
              <li>Build strong brand reputation and credibility</li>
              <li>Get cost-effective marketing with better ROI</li>
              <li>Reach and target customers globally</li>
              <li>Improve faster with data-driven analytics</li>
            </ul>

            <div className="growth-cta">
              <button className="growth-button" type="button">
                Start a Project <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="growth-visual">
            <img className="growth-image" src="/SSD_Website (8).png" alt="Growth showcase" />
          </div>
        </div>
      </section>

      <section className="visibility-section">
        <div className="visibility-inner">
          <p className="visibility-kicker">Digital Growth Starts Here</p>
          <h2 className="visibility-title">Make Your Business Visible Online</h2>
          <p className="visibility-subtitle">
            Buzziwah blends filmmaking creativity with digital expertise to deliver complete growth
            solutions for films and brands.
          </p>

          <ul className="visibility-list">
            <li>Digital Filmmaking — Creative storytelling powered by smart digital promotion.</li>
            <li>Film Promotion — Teasers, motion posters, influencer marketing & theatre campaigns.</li>
            <li>Brand Identity — Impactful websites, visuals, videos, and social strategies.</li>
            <li>Performance Marketing — Scalable, data-driven campaigns that accelerate growth.</li>
            <li>One Partner — Film promotions or brand strategy — everything under one roof.</li>
          </ul>

          <div className="visibility-cta">
            <button className="visibility-button" type="button">
              Start a Project <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="testimonials-title">What people say</h2>
          <p className="testimonials-subtitle">Voices of our happy clients.</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-avatar" />
              <h3 className="testimonial-name">Sachin Rajan</h3>
              <p className="testimonial-text">
                Creativity! Team work! Hard work! Are the core strengths of sripada team!
              </p>
            </div>

            <div className="testimonial-card featured">
              <div className="testimonial-avatar" />
              <h3 className="testimonial-name">Chitra</h3>
              <p className="testimonial-text">
                Good quality of work and excellent work with professional service.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-avatar" />
              <h3 className="testimonial-name">Shiva</h3>
              <p className="testimonial-text">
                Creative bunch of people working passionately for all your digital marketing
                queries. A client-friendly workspace.
              </p>
            </div>
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
                question: 'What services do you offer?',
                answer:
                  'We deliver end-to-end digital solutions including filmmaking, digital marketing, brand strategy, and research-driven growth planning tailored to your goals.',
              },
              {
                question: 'How long does a typical project take?',
                answer:
                  'Timelines depend on scope and deliverables, but we share a clear plan up front and keep you updated at every milestone.',
              },
              {
                question: 'Do you work with startups and SMEs?',
                answer:
                  'Yes. We collaborate with startups, SMEs, and enterprises, scaling our approach to match your budget and growth stage.',
              },
              {
                question: 'How do we get started?',
                answer:
                  'Share your goals and we will schedule a quick discovery call to craft the right strategy and timeline.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer:
                  'Absolutely. We offer ongoing marketing, performance tracking, and optimization packages for long-term growth.',
              },
              {
                question: 'Can you handle launch campaigns?',
                answer:
                  'Yes. We plan and execute launch campaigns with creative, media, and performance tracking baked in.',
              },
              {
                question: 'Do you offer custom packages?',
                answer:
                  'Every package is tailored. We build a scope that matches your outcomes, timeline, and budget.',
              },
              {
                question: 'What industries do you specialize in?',
                answer:
                  'We have experience across media, retail, hospitality, education, and tech, with strategies tailored per sector.',
              },
              {
                question: 'How is pricing determined?',
                answer:
                  'Pricing is based on scope, complexity, and timelines. We provide transparent quotes and options.',
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
                      <span>{`1. ${item.question}`}</span>
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

      <section className="contact-cta">
        <div className="contact-cta-inner">
          <div className="contact-left">
            <h2 className="contact-title">CONTACT</h2>
            <p className="contact-line">
              Would you like to <span className="contact-chip">Collaborate</span>?
            </p>
            <p className="contact-line">
              start your new <span className="contact-chip">Job</span> here,
            </p>
            <p className="contact-line">
              or just say <span className="contact-chip">Hi</span>!
            </p>
          </div>

          <div className="contact-right">
            <h3 className="contact-subscribe">Subscribe To Our Newsletter!</h3>
          </div>
        </div>
      </section>

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

      <section className="contact-form-section">
        <div className="contact-form-inner">
          <div className="contact-form-header">
            <h2>Contact us</h2>
            <p>Tell us about your project and we will get back to you quickly.</p>
          </div>

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
