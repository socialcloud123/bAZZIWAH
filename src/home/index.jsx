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
              <span className="growth-title-main">Grow Your Business <span className="growth-title-with">with</span></span>
              <span className="growth-title-accent">Sripada Studios</span>
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
              <img className="growth-image" src="/home-growth-section-visual.png" alt="Growth showcase" />
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
    </div>
  );
};

export default Home;
