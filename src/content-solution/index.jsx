import { useState, useRef, useEffect } from 'react';


/* ════════════════════════════════════════════
   SECTION 10 — Reviews & Carousel Logic
════════════════════════════════════════════ */

const reviews = [
  { name: 'Venkata Siddharth', handle: 'V', color: '#7c3aed', time: '2 months ago', stars: 5, text: 'Working with Fugensys was a seamless experience. They delivered a high-quality, professional website exactly on...' },
  { name: 'Ananya Sharma', handle: 'A', color: '#ec4899', time: '1 month ago', stars: 5, text: 'Extremely satisfied with the results. Fugensys provided a sleek mobile-responsive design that boosted our site traffic by 40%.' },
  { name: 'Karthik Nair', handle: 'K', color: '#10b981', time: '3 weeks ago', stars: 5, text: 'Technical expertise at its best. Their full-stack development team handled our backend complexities with ease.' },
  { name: 'hasan ahmed', handle: 'H', color: '#4caf50', time: '3 months ago', stars: 5, text: 'Best web design and app development company with in Bangalore, got home services booking app like urban company...' },
  { name: 'Sneha Kapoor', handle: 'S', color: '#f59e0b', time: '2 weeks ago', stars: 5, text: 'Great attention to detail. The UI/UX is intuitive and exactly what our users needed. Highly recommended!' },
  { name: 'Rahul Mehta', handle: 'R', color: '#3b82f6', time: '4 months ago', stars: 5, text: 'Fantastic communication throughout the process. They understood our brand vision and delivered beyond expectations.' },
  { name: 'Reddy Documents', handle: 'R', color: '#e53935', time: '3 months ago', stars: 5, text: 'Quality work with minimal Price and Time' },
  { name: 'Priya Das', handle: 'P', color: '#8b5cf6', time: '5 months ago', stars: 5, text: 'The SEO strategies they implemented have been a game-changer. Our rankings have never been better.' },
  { name: 'Amit Verma', handle: 'A', color: '#f43f5e', time: '6 months ago', stars: 5, text: 'Professional, timely, and innovative. Fugensys is definitely our go-to for all digital development needs.' },
];

const StarRow = ({ count }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#fbbc04', fontSize: 14 }}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ name, handle, color, time, stars, text }) => (
  <div style={{
    background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 21,
    padding: '33px 33px 27px', position: 'relative', flex: '1 1 300px', minWidth: 0,
    minHeight: '300px', display: 'flex', flexDirection: 'column'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <div style={{ width: 54, height: 54, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22.5, fontFamily: "'Syne', sans-serif" }}>{handle}</span>
        </div>
        <div>
          <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 19.5, fontFamily: "'Syne', sans-serif" }}>{name}</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: 16.5, fontFamily: "'DM Sans', sans-serif" }}>{time}</p>
        </div>
      </div>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>
    <StarRow count={stars} />
    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18.75, lineHeight: 1.7, margin: '15px 0 21px', fontFamily: "'DM Sans', sans-serif", flex: 1 }}>{text}</p>
    <span style={{ color: '#7c3aed', fontSize: 16.5, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Read more</span>
    <span style={{ position: 'absolute', bottom: 21, right: 27, color: '#7c3aed', fontSize: 42, lineHeight: 1, fontFamily: 'Georgia, serif', opacity: 0.6 }}>"</span>
  </div>
);

const Section10 = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => { setActive((prev) => (prev + 1) % pageCount); }, 5000);
    return () => clearInterval(timer);
  }, [pageCount]);

  return (
    <section className="section10-container" style={{ background: '#0d0d1a', padding: '16px 6% 72px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '580px', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: '15%', left: '1%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '2%', width: 90, height: 90, borderRadius: '50%', background: 'rgba(124,58,237,0.2)', filter: 'blur(30px)', pointerEvents: 'none' }} />
      <div className="section10-inner" style={{ display: 'flex', alignItems: 'center', gap: 78, width: '100%', maxWidth: 1800, margin: '0 auto' }}>
        <div className="section10-logo-col" style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <img src="/logo.png" alt="Buzziwah Logo" className="section10-logo" style={{ width: 150 }} />
          <p className="section10-label" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, fontFamily: "'Syne', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 700 }}>Our Reviews</p>
        </div>
        <div className="section10-carousel-col" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 40, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end', marginBottom: 6 }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 42 : 12, height: 12, borderRadius: 6, background: active === i ? '#c8ff00' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', transform: `translateX(-${active * 100}%)` }}>
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div key={pageIndex} style={{ minWidth: '100%', display: 'flex', gap: 24, padding: '10px 0' }}>
                {reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((r, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 0 }}><ReviewCard {...r} /></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .section10-container { padding: 12px 6% 48px !important; height: auto !important; display: block !important; }
          .section10-inner { flex-direction: column !important; gap: 40px !important; }
          .section10-logo-col { width: 100% !important; margin-bottom: 20px !important; }
          .section10-logo { width: 100px !important; }
          .section10-label { font-size: 13px !important; }
          .section10-carousel-col { width: 100% !important; flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   SHARED BUTTON
═══════════════════════════════════════════════════ */
const PillBtn = ({ children, filled = false, onClick }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={onClick}
      style={{
        position: 'relative', overflow: 'hidden',
        background: filled ? (h ? '#5b21b6' : '#7c3aed') : 'transparent',
        color: filled ? '#fff' : (h ? '#fff' : '#7c3aed'),
        border: '2px solid #7c3aed',
        borderRadius: 50,
        padding: '14px 28px',
        fontSize: 11, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        cursor: 'pointer', zIndex: 0,
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-2px)' : 'none',
        boxShadow: h ? '0 8px 24px rgba(124,58,237,0.4)' : 'none',
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {!filled && (
        <span style={{
          position: 'absolute', inset: 0, background: '#7c3aed', borderRadius: 50,
          transform: h ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          zIndex: -1,
        }} />
      )}
      {children}
    </button>
  );
};

/* ═══════════════════════════════════════════════════
   SECTION 8 — Why Content Marketing
═══════════════════════════════════════════════════ */
const Section1 = () => (
  <>
    <style>{`
      .cm-hero { padding: 108px 5% 28px; transition: padding 0.3s ease; }
      .cm-banner { gap: 3rem; transition: gap 0.3s ease; }
      .cm-banner-item { display: flex; alignItems: center; gap: 3rem; }
      .cm-hero-copy { flex: 1 1 400px; max-width: 500px; margin-left: 20%; }
      .cm-hero-title { font-size: clamp(28px, 3.4vw, 44px); }
      .cm-hero-subtitle { font-size: clamp(16px, 1.7vw, 22px); }
      .cm-hero-text { font-size: 14px; line-height: 1.7; }
      .cm-hero-badge-text,
      .cm-hero-title,
      .cm-hero-subtitle,
      .cm-hero-text,
      .cm-hero-actions button { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important; }
      .cm-hero-image { flex: 1 1 380px; display: flex; justify-content: center; align-items: center; min-height: 320px; margin-right: 20%; }
      .cm-hero-image img { width: 100%; max-width: 460px; height: auto; display: block; }
      .cm-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
      @media (max-width: 768px) {
        .cm-hero { padding: 92px 5% 20px !important; gap: 28px !important; min-height: auto !important; }
        .cm-banner { gap: 1.5rem !important; padding: 1.75rem 1.5rem !important; }
        .cm-banner-item { gap: 1.5rem !important; }
        .cm-banner-divider { height: 40px !important; }
        .cm-badge { margin-bottom: 20px !important; }
        .cm-hero-copy { max-width: 100% !important; margin-left: 0 !important; }
        .cm-hero-title { font-size: 30px !important; margin-bottom: 20px !important; }
        .cm-hero-subtitle { font-size: 17px !important; margin-bottom: 14px !important; }
        .cm-hero-text { font-size: 12.5px !important; line-height: 1.65 !important; }
        .cm-hero-image { min-height: 240px !important; margin-right: 0 !important; }
        .cm-hero-image img { max-width: 320px !important; }
        .cm-hero-actions { gap: 12px !important; }
      }
    `}</style>
    {/* Hero */}
    <section className="cm-hero" style={{
      background: '#f5ffe8',
      display: 'flex', alignItems: 'center',
      gap: 24, flexWrap: 'wrap',
      minHeight: '75vh', boxSizing: 'border-box',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* LEFT */}
      <div className="cm-hero-copy">
        {/* Badge */}
        <div className="cm-badge" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#7c3aed', borderRadius: 50,
          padding: '8px 20px 8px 8px', marginBottom: 32,
          animation: 'badgeFloat 3s ease-in-out infinite',
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', background: '#1a0533',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
          </div>
          <span className="cm-hero-badge-text" style={{
            color: '#fff', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.13em', textTransform: 'uppercase',
          }}>
            A Few Quick Questions To Nail The Direction!
          </span>
        </div>

        {/* Headline */}
        <h1 className="cm-hero-title" style={{
          fontWeight: 900, lineHeight: 1.12,
          margin: '0 0 28px', textTransform: 'uppercase',
          color: '#1a1a1a',
        }}>
          WHY{' '}
          <span style={{ color: '#7c3aed' }}>CONTENT MARKETING?</span>
        </h1>

        <h3 className="cm-hero-subtitle" style={{
          fontWeight: 800, color: '#1a1a1a',
          margin: '0 0 18px',
        }}>
          Think Content Marketing is outdated?
        </h3>

        <p className="cm-hero-text" style={{
          color: '#444',
          margin: '0 0 14px', maxWidth: 460,
        }}>
          This is exactly what's{' '}
          <span style={{ color: '#7c3aed', fontWeight: 600 }}>holding your brand back</span>.
          {' '}Agree, it's old – but it's stood the test of time because{' '}
          <span style={{ color: '#7c3aed', fontWeight: 600 }}>it works</span>.
        </p>

        <p className="cm-hero-text" style={{
          color: '#444',
          margin: '0 0 36px', maxWidth: 460,
        }}>
          In a world flooded with short and punchy copies, long-form and valuable
          content builds credibility — the kind your brand has been missing for a long time.
        </p>

        <div className="cm-hero-actions">
          <PillBtn>Start With A Free Content Brief</PillBtn>
          <PillBtn filled>Request A Live Demo</PillBtn>
        </div>
      </div>

      {/* RIGHT — image */}
      <div className="cm-hero-image">
        <img src="/shared-web-content-hero-illustration.png" alt="Content Marketing" />
      </div>

      <style>{`
        @keyframes badgeFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
      `}</style>
    </section>

    {/* Services Banner 2 */}
    <section className="cm-banner" style={{
      backgroundColor: '#0F0F14',
      padding: '2rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      flexWrap: 'wrap',
    }}>
      <div style={{ position:'absolute', bottom:-50, right:'10%', width:200, height:200, background:'radial-gradient(circle, rgba(76,29,149,0.3) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
      {['WE STRATEGIZE', 'WE REACH', 'WE ENGAGE', 'WE SCALE'].map((item, i, arr) => (
        <div key={item} className="cm-banner-item">
          <div>
            <h2 style={{ color: '#7c3aed', fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 700, letterSpacing: 1, fontFamily: "'Syne', sans-serif" }}>{item}</h2>
          </div>
          {i < arr.length - 1 && <div className="cm-banner-divider" style={{ width: 2, height: 60, backgroundColor: 'rgba(139,92,246,0.4)' }} />}
        </div>
      ))}
    </section>
  </>
);
const Section2 = () => null;

const Section2Cards = () => {
  const bulletPoints = [
    "CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.",
    "COPYWRITING & CAPTIONS: OUR BRAINSTORMING COPIES DON'T JUST ATTRACT AN AUDIENCE — THEY KEEP THEM HOOKED WITH PURPOSE-DRIVEN MESSAGING.",
    "STRATEGY & PLANNING: WITH GROWTH IN MIND, WE DON'T JUST POST AND PRAY — WE BUILD, PLAN, AND GROW USING DATA AND INSIGHT."
  ];
  const cards = [
    { title: "ADVERTISING CONTENT", intro: "WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
    { title: "BLOG CONTENT", intro: "FROM LONG-FORM DEPTH TO SHORT-FORM PUNCH, WE EXCEL AT CRAFTING CONTENT THAT DELIVERS RESULTS.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { title: "SOCIAL MEDIA CONTENT", intro: "WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { title: "WEBSITE CONTENT", intro: "WE GIVE LIFE TO YOUR IMAGINATION THROUGH WORDS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { title: "ADVERTISING CONTENT", intro: "WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
  ];
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0d0914', overflow: 'hidden', padding: '80px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'rgba(88,28,135,0.2)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ textAlign: 'center', zIndex: 10, marginBottom: 64 }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 16, fontFamily: "'Syne', sans-serif" }}>WHY DO YOU NEED CONTENT MARKETING?</h2>
        <p style={{ color: '#d1d5db', fontSize: 14, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>We turn ideas into content that attracts, engages, and converts.<br />No fluff — just strategy, words, and results.</p>
      </div>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 16, maxWidth: 1400 }}>
        {cards.map((card, index) => {
          const isCenter = index === 2;
          return (
            <div key={index} style={{ background: '#fff', borderRadius: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', width: isCenter ? 300 : 260, minHeight: isCenter ? 500 : 440, padding: '32px 24px', transform: isCenter ? 'scale(1.05)' : 'none', zIndex: isCenter ? 20 : 10, transition: 'all 0.3s ease' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', color: '#6e32c9', fontWeight: 700, marginBottom: 16, fontSize: isCenter ? 16 : 13, fontFamily: "'Syne', sans-serif", gap: 8 }}>
                  {card.icon}
                  <h3 style={{ margin: 0 }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: 10, color: '#000', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.4, marginBottom: 16 }}>{card.intro}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {bulletPoints.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 9, color: '#1f2937', lineHeight: 1.3 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#000', flexShrink: 0, marginTop: 3 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <button style={{ background: '#84cc16', color: '#fff', fontSize: 11, fontWeight: 700, padding: '8px 24px', borderRadius: 50, border: 'none', cursor: 'pointer', width: 'fit-content' }}>LEARN MORE</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    title: "ADVERTISING CONTENT",
    intro: "WE CREATE SCROLL STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.",
    bullets: ["CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", "COPYWRITING & CAPTIONS: OUR COPIES DON'T JUST ATTRACT — THEY KEEP THEM HOOKED WITH PURPOSE-DRIVEN MESSAGING."],
    size: "outer",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: "BLOG CONTENT",
    intro: "FROM LONG-FORM DEPTH TO SHORT-FORM PUNCH, WE EXCEL AT CRAFTING CONTENT THAT DELIVERS RESULTS.",
    bullets: ["CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", "COPYWRITING & CAPTIONS: OUR BRAINSTORMING COPIES DON'T JUST ATTRACT AN AUDIENCE — THEY KEEP THEM HOOKED.", "STRATEGY & PLANNING: WE BUILD, PLAN, AND GROW USING DATA AND INSIGHT."],
    size: "mid",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    title: "SOCIAL MEDIA CONTENT",
    intro: "WE CREATE SCROLL STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.",
    bullets: ["CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", "COPYWRITING & CAPTIONS: OUR BRAINSTORMING COPIES DON'T JUST ATTRACT AN AUDIENCE — THEY KEEP THEM HOOKED WITH PURPOSE-DRIVEN MESSAGING.", "STRATEGY & PLANNING: WITH GROWTH IN MIND, WE DON'T JUST POST AND PRAY — WE BUILD, PLAN, AND GROW USING DATA AND INSIGHT."],
    featured: true,
    size: "center",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "WEBSITE CONTENT",
    intro: "WE GIVE LIFE TO YOUR IMAGINATION THROUGH WORDS",
    bullets: ["CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", "COPYWRITING & CAPTIONS: OUR BRAINSTORMING COPIES DON'T JUST ATTRACT AN AUDIENCE — THEY KEEP THEM HOOKED.", "STRATEGY & PLANNING: WE BUILD, PLAN, AND GROW USING DATA AND INSIGHT."],
    size: "mid",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    title: "ADVERTISING CONTENT",
    intro: "WE CREATE SCROLL STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.",
    bullets: ["CONTENT CREATION: FROM PLANNING TO EXECUTION, WE CREATE SCROLL-STOPPING CONTENT THAT TURNS YOUR AUDIENCE INTO CUSTOMERS.", "COPYWRITING & CAPTIONS: OUR COPIES DON'T JUST ATTRACT — THEY KEEP THEM HOOKED WITH PURPOSE-DRIVEN MESSAGING."],
    size: "outer",
  },
];

const cmStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap');
  .cm-root { background:#0d0b1a; min-height:auto; width:100%; font-family:'Barlow',sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:88px 20px 42px; position:relative; overflow:hidden; }
  .cm-bg-lines { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  .cm-bg-lines svg { position:absolute; top:0; left:0; width:100%; height:100%; }
  .cm-header { text-align:center; margin-bottom:72px; position:relative; z-index:2; }
  .cm-header h1 { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:clamp(28px,4vw,48px); color:#ffffff; letter-spacing:0.02em; text-transform:uppercase; margin-bottom:16px; }
  .cm-header p { font-size:clamp(14px,1.5vw,18px); color:#c0b8d8; line-height:1.5; max-width:520px; margin:0 auto; }
  .cm-cards-row { display:flex; align-items:flex-end; gap:12px; position:relative; z-index:2; max-width:1400px; width:100%; justify-content:center; }
  .cm-card { background:#ffffff; border-radius:16px; display:flex; flex-direction:column; gap:10px; cursor:default; transition:transform 0.2s ease,box-shadow 0.2s ease; }
  .cm-card.size-outer { flex:0 0 200px; width:200px; padding:14px 14px 12px; transform:scale(0.88); opacity:0.75; }
  .cm-card.size-mid { flex:0 0 245px; width:245px; padding:18px 18px 14px; transform:scale(0.94); opacity:0.88; }
  .cm-card.size-center { flex:0 0 290px; width:290px; padding:26px 22px 22px; box-shadow:0 12px 50px rgba(0,0,0,0.45); transform:scale(1); opacity:1; z-index:3; }
  .cm-card:hover { transform:scale(1.02) translateY(-4px) !important; box-shadow:0 20px 60px rgba(0,0,0,0.4); opacity:1 !important; }
  .cm-card-title-row { display:flex; align-items:center; gap:8px; }
  .cm-card-icon { color:#7c5cbf; flex-shrink:0; }
  .cm-card.size-center .cm-card-icon { color:#7cd4fd; }
  .cm-card-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; color:#1a0a3b; letter-spacing:0.04em; text-transform:uppercase; line-height:1.2; }
  .cm-card.size-center .cm-card-title { font-size:16px; }
  .cm-card.size-mid .cm-card-title { font-size:14px; }
  .cm-divider { height:1px; background:#e8e0f0; width:100%; flex-shrink:0; }
  .cm-card-intro { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:600; color:#3a2a5e; letter-spacing:0.05em; text-transform:uppercase; line-height:1.4; }
  .cm-bullets { list-style:disc; padding-left:14px; display:flex; flex-direction:column; gap:6px; }
  .cm-bullets li { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:600; color:#3a2a5e; letter-spacing:0.04em; text-transform:uppercase; line-height:1.4; }
  .cm-btn { margin-top:8px; align-self:flex-start; background:#7ac143; color:#0d0b1a; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; border:none; border-radius:6px; padding:8px 18px; cursor:pointer; transition:background 0.15s ease,transform 0.1s ease; white-space:nowrap; }
  .cm-btn:hover { background:#8fd44f; transform:scale(1.03); }
  .cm-card.size-center .cm-btn { padding:10px 24px; font-size:12px; }
  @media (max-width:900px) { .cm-cards-row { flex-direction:column; align-items:center; } .cm-card { width:100% !important; max-width:400px !important; flex:unset !important; transform:scale(1) !important; opacity:1 !important; } }
`;

const Section3Cards = () => (
  <>
    <style>{cmStyles}</style>
    <div className="cm-root">
      <div className="cm-bg-lines">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="320" y1="0" x2="600" y2="800" stroke="#6b3fa0" strokeWidth="1" strokeOpacity="0.35"/>
          <line x1="380" y1="0" x2="660" y2="800" stroke="#6b3fa0" strokeWidth="0.5" strokeOpacity="0.15"/>
          <line x1="900" y1="0" x2="1200" y2="800" stroke="#6b3fa0" strokeWidth="1" strokeOpacity="0.2"/>
        </svg>
      </div>
      <div className="cm-header">
        <h1>Why Do You Need Content Marketing?</h1>
        <p>We turn ideas into content that attracts, engages, and converts. No fluff — just strategy, words, and results.</p>
      </div>
      <div className="cm-cards-row">
        {services.map((s, i) => (
          <div key={i} className={`cm-card size-${s.size}`}>
            <div className="cm-card-title-row">
              <span className="cm-card-icon">{s.icon}</span>
              <span className="cm-card-title">{s.title}</span>
            </div>
            <div className="cm-divider" />
            <p className="cm-card-intro">{s.intro}</p>
            <ul className="cm-bullets">
              {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <button className="cm-btn">LEARN MORE</button>
          </div>
        ))}
      </div>
    </div>
  </>
);
const cardsData = [
  {
    number: "1",
    title: "Strategy first. Always.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "2",
    title: "Content that lasts.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "3",
    title: "Unmistakably yours.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "4",
    title: "One team, every format.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Card({ card, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        background: hovered ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? "rgba(202,255,90,0.4)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        padding: "28px 22px 26px",
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-9px)" : "translateY(0px)"
          : "translateY(44px)",
        transition: [
          `opacity 0.65s ease ${0.12 + index * 0.11}s`,
          `transform ${hovered ? "0.28s cubic-bezier(0.34,1.2,0.64,1)" : `0.65s cubic-bezier(0.22,1,0.36,1) ${0.12 + index * 0.11}s`}`,
          "border 0.28s ease",
          "background 0.28s ease",
          "box-shadow 0.28s ease",
        ].join(", "),
        boxShadow: hovered
          ? "0 14px 44px rgba(0,0,0,0.45)"
          : "0 2px 14px rgba(0,0,0,0.18)",
      }}
    >
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "1.05rem",
          color: "#ffffff",
          margin: "0 0 15px",
          lineHeight: 1.35,
          letterSpacing: "-0.01em",
        }}
      >
        {card.title}
      </h3>
      <ul style={{ margin: 0, padding: "0 0 0 15px" }}>
        {card.points.map((pt, i) => (
          <li
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "0.845rem",
              color: "rgba(255,255,255,0.56)",
              lineHeight: 1.65,
              marginBottom: i < card.points.length - 1 ? "6px" : 0,
            }}
          >
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

const WhyChooseUs = () => {
  const [sectionRef, inView] = useInView(0.08);
  const [lineWidth, setLineWidth] = useState(0);
  const [dotsVisible, setDotsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = 1100;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const t = Math.min((ts - startTime) / duration, 1);
      const eased = t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setLineWidth(eased * 100);
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    cardsData.forEach((_, i) => {
      setTimeout(() => {
        setDotsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 190 + 60);
    });
  }, [inView]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(22px,-16px) scale(1.04); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-18px,13px) scale(0.97); }
        }
        @keyframes headReveal {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes subReveal {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:0.62; transform: translateY(0); }
        }
        @keyframes dotPop {
          0%   { transform: scale(0); }
          65%  { transform: scale(1.22); }
          100% { transform: scale(1); }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(202,255,90,0.5); }
          50%      { box-shadow: 0 0 0 9px rgba(202,255,90,0); }
        }

        @media (max-width: 768px) {
          .wcu-timeline { display: none !important; }
          .wcu-cards { flex-direction: column !important; }
          .wcu-container { padding: 0 10px !important; }
          .wcu-section { padding: 16px 24px 24px !important; min-height: auto !important; }
        }
      `}</style>

      <section
        className="wcu-section"
        style={{
          minHeight: "auto",
          width: "100%",
          background:
            "radial-gradient(ellipse 88% 52% at 50% -4%, #2e0d52 0%, #100920 58%, #0b0817 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 48px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        <div style={{
          position: "absolute", top: "-9%", left: "-5%",
          width: "540px", height: "540px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(85,25,148,0.3) 0%, transparent 68%)",
          animation: "floatA 15s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-14%", right: "-7%",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(50,12,108,0.26) 0%, transparent 70%)",
          animation: "floatB 19s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* Header text */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            marginBottom: "14px",
            position: "relative",
            zIndex: 1,
            padding: '0 20px'
          }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              animation: "headReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both",
            }}
          >
            Why Choose Us
          </h1>
          <p
            style={{
              marginTop: "16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.88rem, 1.4vw, 0.98rem)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.78,
              animation: "subReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.22s both",
            }}
          >
            We leverage our profound expertise in web design and e-commerce,
            providing tailored services that prioritize your success.
            <br />
            Our innovative solutions challenge the norm, supported by a proven
            track record of excellence and strategic execution.
          </p>
        </div>

        {/* Timeline + Cards container */}
        <div
          ref={sectionRef}
          className="wcu-container"
          style={{
            width: "100%",
            maxWidth: "1180px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Timeline row */}
          <div
            className="wcu-timeline"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px",
              position: "relative",
            }}
          >
            {/* Base track */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "22px",
              right: "22px",
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              transform: "translateY(-50%)",
            }} />
            {/* Animated fill line */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "22px",
              right: "22px",
              height: "1px",
              transform: "translateY(-50%)",
              overflow: "hidden",
              pointerEvents: "none",
            }}>
              <div style={{
                height: "100%",
                width: `${lineWidth}%`,
                background: "#caff5a",
              }} />
            </div>

            {/* Number dots */}
            {cardsData.map((_, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, #d6ff68, #9fd428)",
                  color: "#1b2c00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  flexShrink: 0,
                  animation: dotsVisible[i]
                    ? `dotPop 0.44s cubic-bezier(0.34,1.56,0.64,1) both, dotPulse 2.8s ease-in-out ${i * 0.28}s infinite`
                    : "none",
                  transform: dotsVisible[i] ? undefined : "scale(0)",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="wcu-cards" style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
            {cardsData.map((card, i) => (
              <Card key={i} card={card} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Combined export ── */
const ContentMarketingPage = () => (
  <>
    <Section1 />
    <Section3Cards />
    <WhyChooseUs />
    <Section10 />
  </>
);

export default ContentMarketingPage;
