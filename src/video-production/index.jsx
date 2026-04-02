import { useRef, useState } from 'react';
import '../home/Home.css';

const VPSection2 = () => {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  const features = [
    { title: 'Visual Identity', desc: "We design each lyrical video to reflect the song's tone and mood." },
    { title: 'Sync With Story', desc: 'Every beat connects to a visual moment that builds the narrative.' },
    { title: 'Dynamic Typography', desc: "Lyrics are animated to flow seamlessly with the music's emotion." },
    { title: 'Color & Rhythm', desc: 'Vibrant palettes and pace-matched animation create harmony.' },
  ];

  return (
    <section style={{ background: '#f2fde4', padding: '80px 40px', marginTop: '-200px', paddingTop: '210px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ perspective: '1000px', flex: '1 1 400px', maxWidth: '560px' }}>
          <div ref={cardRef} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.2)', transition: 'transform 0.6s ease-out', transformStyle: 'preserve-3d', height: '360px' }}>
            <iframe
              src="https://www.youtube.com/embed/wtNWlT8TJfU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>

        <div style={{ flex: '1 1 340px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 900, color: '#7c3aed', marginBottom: '12px' }}>
            Lyrical Videos
          </h2>
          <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.7, marginBottom: '28px' }}>
            Transforming music into emotion through visuals, motion, and story — one lyric at a time.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.85)', borderLeft: '5px solid #7c3aed', borderRadius: '12px', padding: '20px 16px', position: 'relative' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 700, color: '#7c3aed', margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.95)', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VPSection3 = () => {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section style={{ background: '#1a1a1a', padding: '80px 40px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 900, color: '#83cd15', marginBottom: '20px' }}>
            DR. Ramesh Aravind
          </h2>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 16px' }}>
            Here is a bio video of the Actor, Director, Writer, Producer, TV Show Host, and an acknowledged Mr. Nice of the South Indian movie industry — Mr. Ramesh Aravind.
          </p>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 32px' }}>
            As a multi-talented celebrity, Ramesh Aravind motivates people through his speeches at various events. We were fortunate to edit and present the speeches in inspiring video formats.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Book Promo', 'Brand Bangaluru', 'Best Motivational Speech'].map((label) => (
              <button key={label} style={{ padding: '12px 28px', border: 'none', borderRadius: '30px', background: '#83cd15', color: '#000', fontSize: '13px', fontFamily: "'Syne', sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>{label}</button>
            ))}
          </div>
        </div>

        <div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ perspective: '1000px', maxWidth: '700px', margin: '0 auto' }}>
          <div ref={cardRef} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', transition: 'transform 0.6s ease-out', transformStyle: 'preserve-3d', height: '400px' }}>
            <iframe
              src="https://www.youtube.com/embed/sN5mGM2XepE"
              title="Ramesh Aravind Bio Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const adTabs = [
  { label: 'Fitness Factory', videoId: 'NgMFaxvs5rE', title: 'Fitness Factory Villain Challenge | Ad Film', sub: 'Feat: Yash Shetty, Sudhi & Vardhan' },
  { label: 'Movi Garage', videoId: 'WzCfJau2NeU', title: 'Movi Garage | Ad Promo', sub: 'A cinematic promo for premium automotive service branding.' },
  { label: 'Rajyotsava', videoId: 'J2XUohFcjuk', title: 'Kannada Rajyotsava Promo', sub: "Featuring: Little Kidz | Celebrating Karnataka's culture and pride." },
  { label: 'Political Ad', videoId: 'H3yMzPU5yrM', title: 'Political Ad Film', sub: 'Featuring: Priya Shatamarshan | Campaign ad with a clear message.' },
  { label: 'Life at Pace', videoId: 'Y7xG75PWweE', title: 'Life At Pace | Corporate Ad', sub: 'Featuring: Heads of Companies | Culture, people, and momentum.' },
  { label: 'HearFon', videoId: 'FO7aj_EiAuo', title: 'HearFon | Health Care Ad Film', sub: 'Featuring: Swathi Rajkumar | A hearing care campaign that connects.' },
];

const VPSection4 = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: '#f2fde4', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#83cd15', marginBottom: '10px' }}>
          Ad Films by Sripada Studios
        </h2>
        <p style={{ fontSize: '15px', color: '#555', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Explore our curated collection of high-impact ad films, crafted for diverse brands, voices, and causes.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
          {adTabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ padding: '10px 22px', border: 'none', borderRadius: '25px', background: active === i ? '#5b21b6' : '#83cd15', color: active === i ? '#fff' : '#000', fontSize: '14px', fontFamily: "'Syne', sans-serif", fontWeight: 700, cursor: 'pointer', transition: 'background 0.3s' }}>{t.label}</button>
          ))}
        </div>

        <div style={{ animation: 'vpFadeIn 0.4s ease-in-out' }}>
          <style>{`@keyframes vpFadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <iframe
            key={active}
            src={`https://www.youtube.com/embed/${adTabs[active].videoId}`}
            title={adTabs[active].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', maxWidth: '800px', height: '450px', border: 'none', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'block', margin: '0 auto' }}
          />
          <div style={{ marginTop: '16px', fontSize: '15px', color: '#333' }}>
            <strong>{adTabs[active].title}</strong><br />
            <span style={{ color: '#555' }}>{adTabs[active].sub}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const vpFaqs = [
  { q: 'What video production services does Buzziwah Studio offer?', a: 'We offer end-to-end video production including lyrical videos, ad films, reels, corporate videos, political campaign videos, and celebrity bio videos.' },
  { q: 'How long does it take to produce a video?', a: 'Timelines vary by project. A reel or lyrical video typically takes 3–5 days, while a full ad film can take 1–2 weeks depending on complexity and shoot requirements.' },
  { q: 'Do you handle both shooting and editing?', a: 'Yes. We manage the complete pipeline — concept, scripting, shoot coordination, editing, color grading, and final delivery.' },
  { q: 'What brands have you worked with?', a: 'We have worked with Fitness Factory, Samrat Restaurant, Movi Garage, HearFon, Little Kidz, EK Entertainers, Garuda Motion Pictures, and many more.' },
  { q: 'Can you create videos for social media platforms?', a: 'Absolutely. We produce platform-optimized content for Instagram Reels, YouTube Shorts, Facebook, and LinkedIn — all formatted for maximum reach and engagement.' },
  { q: 'How do I get started with a video project?', a: "Simply reach out via our contact page or click 'Get Started'. We'll schedule a brief call to understand your vision and put together a custom production plan." },
];

const timelineEntries = [
  { title: 'Ad Film', desc: 'A bold and creative way to showcase your brand through storytelling.', videoId: 'mrad_zt0nto' },
  { title: 'Testimonial', desc: 'Powerful client testimonials that build trust and authenticity.', videoId: 'ZvCIVVI3Ors' },
  { title: 'Brand Story', desc: 'Present your journey and values in a cinematic and engaging way.', videoId: 'NVo8qSk5alY' },
  { title: 'Promo Video', desc: 'Short and impactful promotional videos to drive engagement.', videoId: 'vDBrU7yeuKA' },
];

const VPSection6 = () => (
  <section style={{ background: '#f2fde4', padding: '60px 20px' }}>
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#5b21b6', marginBottom: '10px' }}>
        The Video Plan
      </h2>
      <p style={{ fontSize: '15px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
        Showcase yourself in a video format and get 80% viewer's attention. It could be an ad or testimonial.
      </p>
    </div>

    <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '4px', height: '100%', background: '#009688' }} />
      {timelineEntries.map((entry, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={i} style={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse', justifyContent: 'space-between', alignItems: 'flex-start', margin: '40px 0', gap: '20px' }}>
            <div style={{ width: '48%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${entry.videoId}`}
                title={entry.title}
                allowFullScreen
                style={{ width: '100%', height: '250px', border: 'none', borderRadius: '10px', display: 'block', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div style={{ width: '48%', background: '#fff', padding: '24px', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800, color: '#5b21b6', marginBottom: '10px' }}>{entry.title}</h3>
              <p style={{ fontSize: '15px', color: '#555', margin: 0, lineHeight: 1.7 }}>{entry.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const VPFaqCard = ({ item, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{`${idx + 1}. ${item.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{item.a}</div>
    </div>
  );
};

const VideoProductionPage = () => (
  <>
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img
        src="/banners/video-production-page-banner.png"
        alt="Video Production & Editing"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </section>

    <VPSection2 />
    <VPSection3 />
    <VPSection4 />
    <VPSection6 />

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
          {vpFaqs.map((item, idx) => (
            <VPFaqCard key={idx} item={item} idx={idx} />
          ))}
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
  </>
);

export default VideoProductionPage;
