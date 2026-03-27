import { useRef, useState } from 'react';
import '../home/Home.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#83cd15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const tiles = [
  {
    icon: <SearchIcon />, step: 'Step 01', heading: 'Influencer Discovery & Vetting',
    items: [
      "Finding influencers who align with your brand's goals, target audience and industry",
      'Filtering by niche — demographics, follower count, content type and aesthetic',
      'Analysing engagement quality, past collaborations, content quality and values',
    ],
  },
  {
    icon: <ChartIcon />, step: 'Step 02', heading: 'Campaign Strategy & Planning',
    items: [
      'Strategies that align with your brand voice, create impact and drive business success',
      'Market research and trend analysis to understand and operate based on numbers',
      'Creative campaign concepts that stop viewers from scrolling',
    ],
  },
  {
    icon: <EditIcon />, step: 'Step 03', heading: 'Content Management', lime: true,
    items: [
      "From creating content to executing it — ensuring it's trending, timely and accurate",
      'Content calendar to plan, organise and schedule across various platforms',
      'Authentic and creator-led storytelling that truly resonates',
    ],
  },
];

const bannerPoints = [
  'Monitor how campaigns perform across all platforms to evaluate effectiveness and optimise future efforts',
  'Campaign summaries with strategic insights and clearly demonstrated ROI for every client',
  "Deep dives into what worked, what didn't, and actionable recommendations for future campaigns",
];

const flowSteps = [
  { num: '01', label: 'Discovery', lime: false },
  { num: '02', label: 'Strategy', lime: false },
  { num: '03', label: 'Content', lime: true },
  { num: '04', label: 'Tracking', lime: true },
];

const IMProcess = () => (
  <section style={{ background: '#0d0d0d', padding: '72px 40px', position: 'relative', overflow: 'hidden' }}>
    {[
      { top: '-120px', left: '-100px', w: 500, color: 'rgba(91,33,182,0.20)' },
      { bottom: '-80px', right: '-80px', w: 400, color: 'rgba(131,205,21,0.12)' },
    ].map((o, i) => (
      <div key={i} style={{ position: 'absolute', width: o.w, height: o.w, borderRadius: '50%', background: o.color, filter: 'blur(80px)', top: o.top, left: o.left, bottom: o.bottom, right: o.right, pointerEvents: 'none' }} />
    ))}

    <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '32px' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: '#fff', lineHeight: 1.06, letterSpacing: '-0.02em' }}>
            Influencer<br /><em style={{ color: '#83cd15', fontStyle: 'italic' }}>Marketing</em> Process
          </h2>
        </div>
        <div style={{ maxWidth: '300px', borderLeft: '3px solid #83cd15', paddingLeft: '14px' }}>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, fontWeight: 300 }}>
            A strategic, end-to-end framework for connecting your brand with the right voices — and turning them into measurable, lasting growth.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        {flowSteps.map((s, i) => (
          <div key={s.num} style={{ display: 'contents' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: s.lime ? '#83cd15' : '#5b21b6', color: s.lime ? '#000' : '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.num}</div>
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: s.lime ? '#83cd15' : 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>{s.label}</span>
            </div>
            {i < flowSteps.length - 1 && <div style={{ flex: 1, height: '1.5px', background: 'linear-gradient(90deg, rgba(91,33,182,0.45), rgba(131,205,21,0.35))', margin: '0 10px' }} />}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {tiles.map((t) => (
          <div key={t.step} style={{ background: '#1c1c1c', borderRadius: '22px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '4px', background: t.lime ? '#83cd15' : '#5b21b6' }} />
            <div style={{ padding: '26px', flex: 1 }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: t.lime ? 'rgba(131,205,21,0.15)' : 'rgba(91,33,182,0.25)', border: `1px solid ${t.lime ? 'rgba(131,205,21,0.35)' : 'rgba(91,33,182,0.45)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px', marginBottom: '16px' }}>{t.icon}</div>
              <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: t.lime ? '#83cd15' : '#a78bfa', display: 'block', marginBottom: '4px' }}>{t.step}</span>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '16px', paddingBottom: '14px', borderBottom: `1px solid ${t.lime ? 'rgba(131,205,21,0.25)' : 'rgba(255,255,255,0.08)'}` }}>{t.heading}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {t.items.map((item, i) => (
                  <li key={i} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '9px', alignItems: 'flex-start', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: t.lime ? 'rgba(131,205,21,0.15)' : 'rgba(91,33,182,0.25)', border: `1px solid ${t.lime ? 'rgba(131,205,21,0.35)' : 'rgba(91,33,182,0.45)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: t.lime ? '#83cd15' : '#5b21b6' }} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#5b21b6', borderRadius: '22px', padding: '36px 40px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '48px', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-50px', top: '-50px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(131,205,21,0.13)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(131,205,21,0.18)', border: '1px solid rgba(131,205,21,0.35)', borderRadius: '100px', padding: '4px 12px', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#83cd15', marginBottom: '12px' }}>Step 04 — Final Stage</div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '8px' }}>Performance Tracking &amp; Reporting</h3>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>From the first post to the final metric — every campaign, fully measured.</p>
        </div>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px 22px', position: 'relative', zIndex: 1 }}>
          {bannerPoints.map((p, i) => (
            <li key={i} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', fontSize: '13px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
              <span style={{ color: '#83cd15', fontWeight: 700, flexShrink: 0 }}>&#8599;</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const whyCards = [
  {
    num: '1', title: 'Strategic, Authentic, Results-Driven',
    points: [
      'With hundreds of successful influencer campaigns, we are known for crafting trust-driven stories that boost visibility.',
      'Our strategy-first approach sets us apart, making every campaign truly impactful.',
    ],
    lime: false,
  },
  {
    num: '2', title: 'Performance-Driven Campaigns',
    points: [
      'We focus on outcomes â€” boosting performance, traffic, and brand growth. With real-time optimization and insights, we ensure every campaign delivers maximum ROI.',
    ],
    lime: true,
  },
  {
    num: '3', title: 'Creative That Converts',
    points: [
      'We help influencers tell personal, engaging stories with a unique, creative approach.',
      'Every piece we craft is designed to inspire action and deliver clear value.',
    ],
    lime: false,
  },
  {
    num: '4', title: 'End-to-End Service',
    points: [
      'We curate the perfect influencers, shape captivating narratives, and oversee every detail with precision.',
      'From strategy to execution, we blend style and substance for campaigns that truly stand out.',
    ],
    lime: true,
  },
];

const WhyChooseUs = () => (
  <section style={{ background: '#f2fde4', padding: '60px 40px' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#83cd15', textAlign: 'center', marginBottom: '48px' }}>
        Why Choose Us
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
        {whyCards.map((c) => (
          <div key={c.num} style={{ background: '#fff', borderRadius: '12px', padding: '28px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', borderTop: `5px solid ${c.lime ? '#83cd15' : '#000'}` }}>
            <div style={{ position: 'absolute', top: '-16px', left: '20px', background: '#83cd15', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '4px 14px', borderRadius: '50px' }}>{c.num}</div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#000', marginTop: '12px' }}>{c.title}</h3>
            <ul style={{ paddingLeft: '18px', color: '#333', margin: 0 }}>
              {c.points.map((p, i) => (
                <li key={i} style={{ marginBottom: '8px', lineHeight: 1.65, fontSize: '14px' }}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const imVideoIds = ['Ba0Ek_aTd68', 'XBBYtirs4JU', 'S4QYOZeCPfw', 'siKBCPG-YKo'];

const TiltVideo = ({ videoId }) => {
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
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} onTouchEnd={handleLeave}
      style={{ perspective: '1000px', flex: '1 1 calc(50% - 15px)', maxWidth: '600px' }}>
      <div ref={cardRef} style={{ height: '360px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.3)', transition: 'transform 0.6s ease-out', transformStyle: 'preserve-3d' }}>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
      </div>
    </div>
  );
};

const IMVideos = () => (
  <section style={{ background: '#0d0d0d', padding: '60px 40px' }}>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900, color: '#83cd15', textAlign: 'center', marginBottom: '48px', letterSpacing: '0.05em' }}>
      VIDEOS
    </h2>
    <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
      {imVideoIds.map((id) => <TiltVideo key={id} videoId={id} />)}
    </div>
  </section>
);

const imFaqs = [
  { q: 'What services does Buzziwah Studio offer?', a: 'We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics.' },
  { q: 'Which platforms do you manage?', a: 'We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable engagement growth within 30â€“60 days. Viral results like our Samrat campaign can happen much faster with the right strategy.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content.' },
  { q: "What makes Buzziwah different from other agencies?", a: "We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post â€” we craft content that resonates and converts." },
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
        {imFaqs.map((f, i) => <IMFAQCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

const InfluencerPage = () => (
  <div className="im-font">
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img
        src="/banners/SSD_Banners (4).png"
        alt="Influencer Marketing"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </section>

    <section style={{ background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #5b21b6 100%)', padding: '80px 40px', position: 'relative', overflow: 'hidden', marginTop: '-200px', paddingTop: '210px', zIndex: 1 }}>
      <div style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)', width: '220px', height: '220px', background: 'rgba(131,205,21,0.15)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '36px', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', maxWidth: '520px', width: '100%', borderRadius: '26px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.35)', background: '#14092e' }}>
            <img
              src="/SSD_Performance%20Marketing%20Webpage%20(5).png"
              alt="Influencer marketing visual"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
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
            {[
              'Credibility through trusted creators',
              'Precision targeting with niche audiences',
              'Content that blends seamlessly into feeds',
              'Actionable insights and measurable growth',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8f041' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '10px' }}>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '50px',
                background: '#83cd15',
                color: '#000',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
                border: '2px solid transparent',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease',
              }}
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

    <section style={{ width: '100%', lineHeight: 0, marginTop: '0', position: 'relative', zIndex: 1, background: '#f2fde4' }}>
      <img src="/banners/SSD_Banners (4).png" alt="Influencer Marketing Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img
          className="footer-logo"
          src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
          alt="Sripada Studios Digital"
        />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">Get Started â†’</button>
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

export default InfluencerPage;
