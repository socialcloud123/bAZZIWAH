import { useRef, useState, useEffect } from 'react';
import '../home/Home.css';

const handleCursorMove = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty('--cx', `${x}px`);
  target.style.setProperty('--cy', `${y}px`);
};

const handleCursorEnter = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (target) target.classList.add('is-hover');
};

const handleCursorLeave = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (target) target.classList.remove('is-hover');
};

const VPSection2 = () => {
  const features = [
    { title: 'Visual Identity', desc: "We design each lyrical video to reflect the song's tone and mood." },
    { title: 'Sync With Story', desc: 'Every beat connects to a visual moment that builds the narrative.' },
    { title: 'Dynamic Typography', desc: "Lyrics are animated to flow seamlessly with the music's emotion." },
    { title: 'Color & Rhythm', desc: 'Vibrant palettes and pace-matched animation create harmony.' },
  ];

  return (
    <section
      className="vp-why-bg vp-section2"
      style={{ padding: '80px 40px', marginTop: '-200px', paddingTop: '210px', position: 'relative', zIndex: 1 }}
    >
      <div className="vp-section2-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="vp-section2-video" style={{ flex: '1 1 400px', maxWidth: '560px' }}>
          <div
            className="vp-video-frame vp-cursor-wrap"
            style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
          >
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <iframe
              src="https://www.youtube.com/embed/wtNWlT8TJfU?controls=0&modestbranding=1&rel=0&showinfo=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>

        <div className="vp-section2-content" style={{ flex: '1 1 340px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 900, color: '#7c3aed', marginBottom: '12px' }}>
            Lyrical Videos
          </h2>
          <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.7, marginBottom: '28px' }}>
            Transforming music into emotion through visuals, motion, and story — one lyric at a time.
          </p>
          <div className="vp-section2-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f) => (
              <div key={f.title} className="vp-lyrical-card">
                <div className="vp-lyrical-card-top">
                  <span className="vp-lyrical-dot" />
                  <h3>{f.title}</h3>
                </div>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VPSection3 = () => {
  return (
    <section className="vp-section3" style={{ background: '#1a1a1a', padding: '80px 40px' }}>
      <div className="vp-section3-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="vp-section3-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 900, color: '#83cd15', marginBottom: '20px' }}>
            DR. Ramesh Aravind
          </h2>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 16px' }}>
            Here is a bio video of the Actor, Director, Writer, Producer, TV Show Host, and an acknowledged Mr. Nice of the South Indian movie industry — Mr. Ramesh Aravind.
          </p>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 32px' }}>
            As a multi-talented celebrity, Ramesh Aravind motivates people through his speeches at various events. We were fortunate to edit and present the speeches in inspiring video formats.
          </p>
          <div className="vp-section3-tags" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Book Promo', 'Brand Bangaluru', 'Best Motivational Speech'].map((label) => (
              <button key={label} style={{ padding: '12px 28px', border: 'none', borderRadius: '30px', background: '#83cd15', color: '#000', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>{label}</button>
            ))}
          </div>
        </div>

        <div className="vp-section3-video" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="vp-video-frame vp-video-frame-lg vp-cursor-wrap" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <iframe
              src="https://www.youtube.com/embed/sN5mGM2XepE?controls=0&modestbranding=1&rel=0&showinfo=0"
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
    <section className="vp-why-bg vp-section4" style={{ padding: '60px 20px' }}>
      <div className="vp-section4-inner" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#83cd15', marginBottom: '10px' }}>
          Ad Films by Sripada Studios
        </h2>
        <p style={{ fontSize: '15px', color: '#555', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Explore our curated collection of high-impact ad films, crafted for diverse brands, voices, and causes.
        </p>

        <div className="vp-ad-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
          {adTabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ padding: '10px 22px', border: 'none', borderRadius: '25px', background: active === i ? '#5b21b6' : '#83cd15', color: active === i ? '#fff' : '#000', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.3s' }}>{t.label}</button>
          ))}
        </div>

        <div style={{ animation: 'vpFadeIn 0.4s ease-in-out' }}>
          <style>{`@keyframes vpFadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <div
            className="vp-ad-iframe vp-cursor-wrap"
            style={{ maxWidth: '800px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', margin: '0 auto', overflow: 'hidden' }}
          >
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <iframe
              key={active}
              src={`https://www.youtube.com/embed/${adTabs[active].videoId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
              title={adTabs[active].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
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

const VPSection6 = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.2;
      const end = viewport * 0.8;
      const travel = rect.height - (end - start);
      const progress = Math.min(Math.max((start - rect.top) / Math.max(travel, 1), 0), 1);
      line.style.transform = `scaleY(${progress})`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const items = rowRefs.current.filter(Boolean);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
          else entry.target.classList.remove('is-visible');
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="vp-timeline-section vp-hero-bg" style={{ padding: '60px 20px' }}>
      <div className="hz-orb hz-orb-1" />
      <div className="hz-orb hz-orb-2" />
      <div className="hz-orb hz-orb-3" />
      <div className="hz-mesh" />
      <div className="vp-hero-content">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 900, color: '#5b21b6', marginBottom: '10px' }}>
            The Video Plan
          </h2>
          <p style={{ fontSize: '15px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Showcase yourself in a video format and get 80% viewer's attention. It could be an ad or testimonial.
          </p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div className="vp-timeline-line">
            <div ref={lineRef} className="vp-timeline-progress" />
          </div>
          {timelineEntries.map((entry, i) => {
            const isEven = i % 2 === 0;
            return (
            <div
              key={i}
              ref={(el) => { rowRefs.current[i] = el; }}
              className={`vp-timeline-row ${isEven ? 'is-even' : 'is-odd'}`}
            >
              <div className={`vp-timeline-media vp-cursor-wrap ${isEven ? 'from-left' : 'from-right'}`}>
                <div
                  className="vp-cursor-overlay"
                  onMouseMove={handleCursorMove}
                  onMouseEnter={handleCursorEnter}
                  onMouseLeave={handleCursorLeave}
                />
                <iframe
                  src={`https://www.youtube.com/embed/${entry.videoId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title={entry.title}
                  allowFullScreen
                  style={{ width: '100%', height: '250px', border: 'none', borderRadius: '10px', display: 'block', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                />
              </div>
              <div className={`vp-timeline-text ${isEven ? 'from-right' : 'from-left'}`}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#5b21b6', marginBottom: '10px' }}>{entry.title}</h3>
                <p style={{ fontSize: '15px', color: '#555', margin: 0, lineHeight: 1.7 }}>{entry.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

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
  <div className="vp-page">
    <section style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0, position: 'relative', zIndex: 2 }}>
      <img
        src="/banners/video-production-page-banner.png"
        alt="Video Production & Editing"
        className="vp-banner-img"
        style={{ width: '100%', display: 'block' }}
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

  </div>
);

export default VideoProductionPage;
