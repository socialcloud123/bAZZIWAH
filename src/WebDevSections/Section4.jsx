import { useState } from 'react';
import Btn from './Btn';
import LearnMoreBtn from './LearnMoreBtn';
import { CaseBadge, KnowMoreBtn } from './Section3';


const Section4 = () => {
  const highlights = [
    'User-Focused Website Structure',
    'Showcases Acting Courses & Faculty',
    'Clean Visual Storytelling',
    'Responsive Design for Mobile Users',
    'Minimalistic UI that Reflects Artistic Values',
  ];
  const outcomes = [
    'Boosted Visibility Among Aspiring Actors',
    'Stronger Digital Brand Presence',
    'Lasting Impression in Performing Arts Education',
    'Easy Navigation & CTA Engagement',
    'Reflects Artistic Values',
  ];

  return (
    <section style={{
      background: '#0d0d1a',
      padding: '90px 6% 105px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple blob decorations */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)', filter: 'blur(150px)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '10%', right: '10%', width: 225, height: 225, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(124,58,237,0.3)', filter: 'blur(45px)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Top Header */}
      <div className="section4-top-header" style={{
        textAlign: 'center',
        marginBottom: 90,
        position: 'relative',
        zIndex: 1
      }}>
        <h5 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 21,
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          margin: 0
        }}>
          BUSINESS WEBSITE
        </h5>
      </div>

      <div className="section4-main-row" style={{
        display: 'flex', alignItems: 'center',
        gap: 90, flexWrap: 'wrap',
      }}>

        {/* LEFT — Video */}
        <div className="section4-video-col" style={{
          flex: '1 1 720px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <video
            src="/webdev-demo2.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: 870,
              display: 'block',
              borderRadius: 18,
              boxShadow: '0 30px 90px rgba(0,0,0,0.6)',
            }}
          />
        </div>

        {/* RIGHT — Info */}
        <div className="section4-content-col" style={{ flex: '1 1 510px', maxWidth: 690 }}>
          <CaseBadge dark scale={1.5} />

          <h2 className="section4-headline" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            color: '#c8ff00',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            margin: '0 0 30px',
            letterSpacing: '-0.02em'
          }}>
            PIVOTCALL BUSINESS WEBSITE
          </h2>

          <p className="section4-para" style={{
            fontSize: 21, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8,
            margin: '0 0 42px', maxWidth: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Developed a high-performance business website for PivotCall, focused on
            lead generation and showcasing trading expertise, contributing to ₹25Cr
            yearly sales.
          </p>

          {/* Two-col highlights */}
          <div style={{ display: 'flex', gap: 42, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 240px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 16.5, fontWeight: 800,
                color: '#c8ff00', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 18px',
              }}>Project Highlights</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 16.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
                    marginBottom: 10.5, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#c8ff00', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 240px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 16.5, fontWeight: 800,
                color: '#c8ff00', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 18px',
              }}>Outcome</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {outcomes.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 16.5, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
                    marginBottom: 10.5, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#c8ff00', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <KnowMoreBtn dark scale={1.5} />
        </div>
      </div>
      <style>{`
        .section4-headline {
          font-size: clamp(36px, 5.25vw, 63px);
        }
        @media (max-width: 1024px) {
          .section4-top-header {
             marginBottom: 40px !important;
          }
          .section4-main-row {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .section4-video-col, .section4-content-col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .section4-headline {
            font-size: 32px !important;
          }
          .section4-para {
            font-size: 18px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════════
   SECTION 5 — What We Offer (6 service cards)
════════════════════════════════════════════ */

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Website Designing',
    desc: 'Well-designed website help businesses build trust and attract more customers online. Therefore, modern layouts and responsive design create strong impressions.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'Ecommerce Development',
    desc: 'Online stores need secure, smooth and easy shopping experiences to grow sales. As a result, scalable ecommerce development improves user flow and conversions.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Web Development\nFast and reliable websites are essential for today\'s digital businesses. Because of this, responsive web development better performance on all devices.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /><line x1="7" y1="21" x2="17" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Business Website',
    desc: 'Well-designed website help businesses build trust and attract more customers online. Therefore, modern layouts and responsive design create strong impressions.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Portfolio Website',
    desc: 'Online stores need secure, smooth and easy shopping experiences to grow sales. As a result, scalable ecommerce development improves user flow and conversions.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Web App Development',
    desc: 'Fast and reliable websites are essential for today\'s digital businesses. Because of this, responsive web development better performance on all devices.',
  },
];

const ServiceCard = ({ icon, title, desc }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="service-card-responsive"
      style={{
        background: '#0d0d1a',
        border: `1.5px solid ${h ? '#c8ff00' : 'rgba(200,255,0,0.1)'}`,
        borderRadius: 24,
        display: 'flex', flexDirection: 'column', gap: 24,
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-9px)' : 'none',
        boxShadow: h
          ? '0 30px 75px rgba(200,255,0,0.15)'
          : '0 6px 22px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        width: 1, // hidden but kept structure
        height: 1,
        position: 'absolute', top: 0, left: 0
      }} />

      {/* Icon */}
      <div style={{
        marginBottom: 12,
        transition: 'all 0.3s ease',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 21, fontWeight: 700,
        color: '#c8ff00',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: 0,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 19.5, color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.6, margin: '21px 0 30px',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {desc}
      </p>

      {/* Learn More */}
      <LearnMoreBtn />
      <style>{`
        .service-card-responsive {
          padding: 54px 42px 48px;
        }
        @media (max-width: 768px) {
          .service-card-responsive {
            padding: 30px 20px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export { services, ServiceCard };
export default Section4;
