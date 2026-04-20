import { useState } from 'react';
import LearnMoreBtn from './LearnMoreBtn';
const Section4 = () => {
  const highlights = [
    <>USER-FOCUSED WEBSITE STRUCTURE</>,
    <>SHOWCASES ACTING COURSES &<br />FACULTY</>,
    <>CLEAN VISUAL STORYTELLING</>,
    <>RESPONSIVE DESIGN FOR MOBILE<br />USERS</>,
    <>MINIMALISTIC UI THAT REFLECTS<br />ARTISTIC VALUES</>,
  ];
  const outcomes = [
    <>BOOSTED VISIBILITY AMONG<br />ASPIRING ACTORS</>,
    <>STRONGER DIGITAL BRAND PRESENCE</>,
    <>LASTING IMPRESSION IN PERFORMING<br />ARTS EDUCATION</>,
    <>EASY NAVIGATION & CTA<br />ENGAGEMENT</>,
    <>AT REFLECTS ARTISTIC VALUES</>,
  ];

  return (
    <section style={{
      backgroundColor: '#05081c',
      padding: '72px 6% 105px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'visible',
    }}>
      <video
        src="/section 4 bg an video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.38,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(5,8,28,0) 0%, rgba(5,8,28,0.02) 46%, rgba(5,8,28,0.34) 76%, rgba(5,8,28,0.5) 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Purple blob decorations */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)', filter: 'blur(150px)', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '10%', right: '10%', width: 225, height: 225, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(124,58,237,0.3)', filter: 'blur(45px)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Top Header */}
      <div className="section4-top-header" style={{
        textAlign: 'center',
        marginTop: -50,
        marginBottom: 70,
        position: 'relative',
        top: 0,
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
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: 60,
        flexWrap: 'nowrap',
      }}>

        {/* RIGHT — Info */}
        <div className="section4-content-col" style={{
          flex: '0 0 52%',
          maxWidth: '52%',
          position: 'relative',
          zIndex: 2,
          padding: '24px 26px',
          borderRadius: 24,
          background: 'rgba(5,8,28,0.42)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            background: '#76b813',
            borderRadius: 999,
            padding: '9px 18px 9px 9px',
            marginBottom: 24,
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#101010' }} />
            </div>
            <span style={{
              color: '#111',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>
              CASE STUDIES
            </span>
          </div>

          <h2 className="section4-headline" style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 900,
            color: '#76b813',
            lineHeight: 1.1,
            margin: '0 0 18px',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}>
            PivotCall Business Website
          </h2>

          <p className="section4-para" style={{
            fontSize: 22.5, color: 'rgba(255,255,255,0.93)', lineHeight: 1.6,
            margin: '0 0 22px', maxWidth: 650,
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
          }}>
            Developed a high-performance business website for PivotCall, focused on
            lead generation and showcasing trading expertise, contributing to ₹25Cr
            yearly sales.
          </p>

          {/* Two-col highlights */}
          <div className="section4-lists" style={{ display: 'flex', gap: 30, flexWrap: 'nowrap' }}>
            <div style={{ flex: '1 1 240px' }}>
              <h4 style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 18, fontWeight: 600,
                color: '#76b813',
                letterSpacing: '0.03em', margin: '0 0 12px',
                whiteSpace: 'nowrap',
              }}>Project Highlights</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 15, color: 'rgba(255,255,255,0.95)', lineHeight: 1.45,
                    marginBottom: 8, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500,
                  }}>
                    <span style={{ color: '#fff', marginTop: 0, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 240px' }}>
              <h4 style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 18, fontWeight: 600,
                color: '#76b813',
                letterSpacing: '0.03em', margin: '0 0 12px',
                whiteSpace: 'nowrap',
              }}>Outcome</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {outcomes.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 15, color: 'rgba(255,255,255,0.95)', lineHeight: 1.45,
                    marginBottom: 8, fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500,
                  }}>
                    <span style={{ color: '#fff', marginTop: 0, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            style={{
              marginTop: 28,
              border: 'none',
              borderRadius: 999,
              background: '#76b813',
              color: '#0f0f0f',
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '16px 40px',
              cursor: 'pointer',
            }}
          >
            Know More
          </button>
        </div>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700;800;900&display=swap');
        .section4-headline {
          font-size: clamp(24px, 2.1vw, 34px);
        }
        @media (min-width: 1025px) and (max-width: 1366px) {
          .section4-headline {
            font-size: 24px !important;
          }
        }
        @media (min-width: 1025px) {
          .section4-main-row {
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: flex-start !important;
          }
          .section4-video-col {
            flex: 0 0 52% !important;
            max-width: 52% !important;
          }
          .section4-content-col {
            flex: 0 0 48% !important;
            max-width: 48% !important;
          }
          .section4-lists {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            column-gap: 28px !important;
          }
        }
        @media (max-width: 1024px) {
          .section4-top-header {
             marginBottom: 40px !important;
          }
          .section4-main-row {
            flex-direction: column !important;
            gap: 40px !important;
            flex-wrap: wrap !important;
          }
          .section4-video-col, .section4-content-col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .section4-lists {
            display: flex !important;
            flex-wrap: wrap !important;
          }
          .section4-headline {
            font-size: 28px !important;
            white-space: nowrap !important;
          }
          .section4-para {
            font-size: 20px !important;
            line-height: 1.55 !important;
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
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Custom-coded Websites',
    desc: 'Fully tailored websites built from scratch with clean code, optimized performance, and unique functionality designed specifically for your business needs.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      </svg>
    ),
    title: 'One-page Websites',
    desc: 'Sleek, single-page designs that deliver your complete message in one seamless scroll, perfect for portfolios, events, and focused campaigns.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed to capture leads, drive action, and maximize ROI for your marketing campaigns and product launches.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Portfolio Websites',
    desc: 'Stunning visual showcases that highlight your work, skills, and achievements with elegant design and smooth user experience.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'E-commerce Websites',
    desc: 'Complete online stores with secure payment integration, inventory management, and seamless shopping experiences that drive sales and customer loyalty.',
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
        backgroundColor: '#070a1f',
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          )
        `,
        border: `1.5px solid ${h ? '#c8ff00' : 'rgba(200,255,0,0.1)'}`,
        borderRadius: 16,
        display: 'flex', flexDirection: 'column', gap: 14,
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-6px)' : 'none',
        boxShadow: h
          ? '0 22px 50px rgba(200,255,0,0.14)'
          : '0 8px 24px rgba(0,0,0,0.22)',
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
        marginBottom: 2,
        transition: 'all 0.3s ease',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontSize: 16, fontWeight: 700,
        color: '#7ed316',
        textTransform: 'uppercase',
        letterSpacing: '0.03em',
        margin: 0,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 12, color: 'rgba(255,255,255,0.9)',
        lineHeight: 1.55, margin: '6px 0 14px',
        fontWeight: 500,
      }}>
        {desc}
      </p>

      {/* Learn More */}
      <LearnMoreBtn />
      <style>{`
        .service-card-responsive {
          min-height: 286px;
          padding: 18px 18px 16px;
        }
        @media (max-width: 768px) {
          .service-card-responsive {
            min-height: auto !important;
            padding: 18px 16px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export { services, ServiceCard };
export default Section4;
