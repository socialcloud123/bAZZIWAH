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
  <section className="faq-showcase" style={{ backgroundImage: "url('/SSD_Website (10).png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className="faq-inner">
      <div className="faq-header">
        <div className="faq-title-block">
          <h2>Any questions?</h2>
          <h3>We got you.</h3>
        </div>
        <p className="faq-intro">Have something on your mind? Whether it's about our services, process, timelines, or pricing — we've answered the most common questions to help you move forward with clarity and confidence.</p>
      </div>
      <div className="faq-grid">
        {imFaqs.map((f, i) => <IMFAQCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

const InfluencerPage = () => (
  <div className="im-font">
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img src="/banners/SSD_Banners (4).png" alt="Influencer Marketing" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </section>

    <section style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #5b21b6 100%)', padding: '80px 40px', position: 'relative', overflow: 'hidden', marginTop: '-238px', paddingTop: '210px', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '36px', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/SSD_Website 21 (1).png" alt="Influencer marketing visual" style={{ width: '100%', maxWidth: '520px', height: 'auto', display: 'block', borderRadius: '26px', objectFit: 'cover' }} />
        </div>
        <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.4)', width: 'fit-content', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '11px', color: '#1a0533' }}>
            Why Influencer Marketing Is Needed?
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.25, margin: 0 }}>
            Build trust with voices your audience already follows.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', margin: 0, textAlign: 'justify' }}>
            Influencer marketing connects your brand to communities through authentic storytellers. It sparks higher engagement, delivers targeted reach, and drives conversions that traditional ads struggle to match.
          </p>
          <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '8px', color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>
            {['Credibility through trusted creators', 'Precision targeting with niche audiences', 'Content that blends seamlessly into feeds', 'Actionable insights and measurable growth'].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8f041' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '10px' }}>
            <a
              href="#"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '50px', background: '#83cd15', color: '#000', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '13px', textDecoration: 'none', border: '2px solid transparent', transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#68a311'; e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 22px rgba(104,163,17,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#83cd15'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Know More ⊕
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
          <img src="/SSD_Website (14).png" alt="Contact" />
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
