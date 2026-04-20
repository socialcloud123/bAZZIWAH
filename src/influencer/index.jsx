import { useRef, useState } from 'react';
import '../home/Home.css';
import { IMProcess, WhyChooseUs } from './IMComponents';

const imVideoIds = ['Ba0Ek_aTd68', 'XBBYtirs4JU', 'S4QYOZeCPfw', 'siKBCPG-YKo'];

const TiltVideo = ({ videoId }) => {
  const cardRef = useRef(null);
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cardRef.current.style.transform = `perspective(1000px) rotateX(${((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15}deg) rotateY(${((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15}deg)`;
  };
  const handleLeave = () => { cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; };
  return (
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} onTouchEnd={handleLeave} style={{ perspective: '1000px', flex: '1 1 calc(50% - 15px)', maxWidth: '600px' }}>
      <div ref={cardRef} style={{ height: '360px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.3)', transition: 'transform 0.6s ease-out', transformStyle: 'preserve-3d' }}>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
      </div>
    </div>
  );
};

const IMVideos = () => (
  <section style={{ background: '#0d0d0d', padding: '60px 40px' }}>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#83cd15', textAlign: 'center', marginBottom: '48px', letterSpacing: '0.05em' }}>VIDEOS</h2>
    <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
      {imVideoIds.map((id) => <TiltVideo key={id} videoId={id} />)}
    </div>
  </section>
);

const imFaqs = [
  { q: 'What services does Buzziwah Studio offer?', a: 'We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics.' },
  { q: 'Which platforms do you manage?', a: 'We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable engagement growth within 30–60 days. Viral results like our Samrat campaign can happen much faster with the right strategy.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content.' },
  { q: "What makes Buzziwah different from other agencies?", a: "We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post — we craft content that resonates and converts." },
  { q: 'How do I get started with Buzziwah?', a: "Simply click 'Get Started' or reach out via our contact page. We'll schedule a discovery call to understand your brand and build a custom strategy." },
];

const IMFAQCard = ({ f, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${i + 1}. ${f.q}`}</span>
        <span className="faq-arrow">&#8964;</span>
      </button>
      <div className="faq-answer">{f.a}</div>
    </div>
  );
};

const IMFAQ = () => (
  <section className="faq-showcase" style={{ backgroundImage: "url('/shared-light-pattern-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className="faq-inner">
      <div className="faq-header">
        <div className="faq-title-block">
          <h2 style={{ color: '#000' }}>Any questions?</h2>
          <h3 style={{ color: '#000' }}>We got you.</h3>
        </div>
        <p className="faq-intro" style={{ color: '#000' }}>Have something on your mind? Whether it's about our services, process, timelines, or pricing — we've answered the most common questions to help you move forward with clarity and confidence.</p>
      </div>
      <div className="faq-grid">
        {imFaqs.map((f, i) => <IMFAQCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

const InfluencerPage = () => (
  <div className="im-font">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
      .im-font,
      .im-font * {
        font-family: 'Nunito Sans', sans-serif !important;
      }
    `}</style>
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img src="/banners/influencer-marketing-page-banner.png" alt="Influencer Marketing" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </section>

    <section style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #5b21b6 100%)', padding: '80px 40px', position: 'relative', overflow: 'hidden', marginTop: '-238px', paddingTop: '210px', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '36px', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/influencer-marketing-hero-illustration.png" alt="Influencer marketing visual" style={{ width: '100%', maxWidth: '520px', height: 'auto', display: 'block', borderRadius: '26px', objectFit: 'cover' }} />
        </div>
        <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '18px', fontFamily: "'Nunito Sans', sans-serif" }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', width: 'fit-content', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '11px', color: '#ffffff' }}>
            Credible Collaborations
          </div>
          <h2 style={{ fontFamily: "'Nunito Sans', sans-serif", fontSize: 'clamp(22px, 2.1vw, 30px)', fontWeight: 800, lineHeight: 1.1, margin: 0, color: '#98dd2d', maxWidth: '24ch' }}>
            People trust people more than brands.
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
            And the right voice can make your brand feel real, relatable and trusted. We connect your brand with the right creators— not just based on reach, but relevance and alignment.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
            From identifying influencers to managing collaborations and content, we handle everything end-to-end.
          </p>
          <ul style={{ margin: '4px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '12px', color: 'rgba(255,255,255,0.95)', fontSize: '16px' }}>
            {['Credibility through trusted creators', 'Precision targeting with niche audiences', 'Content that blends seamlessly into feeds', 'Actionable insights and measurable growth'].map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px 18px',
                  borderRadius: '18px',
                  background: 'linear-gradient(180deg, rgba(100,66,170,0.34), rgba(76,44,148,0.34))',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <span
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(120,120,160,0.45)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c8f041',
                    fontSize: '18px',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  ✦
                </span>
                <span style={{ fontWeight: 600 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '16px' }}>
            <a
              href="#"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 36px', borderRadius: '14px', background: 'linear-gradient(135deg, #7a36ea, #b13cf2)', color: '#fff', fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(13px, 1.1vw, 18px)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.18)', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 24px rgba(122,54,234,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>

    <IMProcess />
    <WhyChooseUs />
    <IMVideos />
    <IMFAQ />

    <section className="contact-form-section" id="contact">
      <div className="contact-form-header">
        <h2>Contact Us</h2>
        <p>Tell us about your project and we will get back to you quickly.</p>
      </div>
      <div className="contact-form-inner">
        <div className="contact-form-image">
          <img src="/shared-contact-section-illustration.png" alt="Contact" />
        </div>
        <div>
          <form className="contact-form">
            <div className="form-row two">
              <label className="form-field"><span>Name *</span><input type="text" placeholder="First" required /></label>
              <label className="form-field"><span>&nbsp;</span><input type="text" placeholder="Last" required /></label>
            </div>
            <div className="form-row two">
              <label className="form-field"><span>Email *</span><input type="email" placeholder="Email" required /></label>
              <label className="form-field"><span>Numbers</span><input type="tel" placeholder="Phone" /></label>
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
              <label className="form-field"><span>Message *</span><textarea rows="5" placeholder="Comment or Message" required /></label>
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
        <img className="footer-logo" src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png" alt="Buzziwah" />
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
          <ul><li>Performance Marketing</li><li>Social Media Management</li><li>Website Development</li><li>Branding and Re-branding</li></ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul><li>Our Story</li><li>Benefits</li><li>Team</li><li>Careers</li></ul>
        </div>
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul><li>Content Solution</li><li>Video Production</li><li>Search Engine Optimization</li><li>Influencer Marketing</li></ul>
        </div>
        <div className="footer-col">
          <h4>HELP</h4>
          <ul><li>FAQs</li><li>Contact Us</li></ul>
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

export default InfluencerPage;
