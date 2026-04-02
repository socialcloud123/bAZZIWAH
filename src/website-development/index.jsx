import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Btn = ({ children }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#8b4bff',
        color: '#fff',
        border: 'none',
        borderRadius: 999,
        padding: '14px 26px',
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        zIndex: 0,
        transition: 'transform 0.2s ease, box-shadow 0.25s ease, filter 0.25s ease, background 0.25s ease',
        transform: h ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: h ? '0 14px 26px rgba(124,58,237,0.36)' : '0 10px 20px rgba(124,58,237,0.24)',
        filter: h ? 'brightness(1.05)' : 'none',
      }}
    >
      {children}
    </button>
  );
};

const Section1 = () => (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#f4ffe3',
      padding: '90px 7% 70px',
      minHeight: '80vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '52%',
        width: 160,
        transform: 'translateX(-50%)',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.1) 26%, rgba(0,0,0,0.04) 55%, rgba(0,0,0,0))',
        pointerEvents: 'none',
        opacity: 0.65,
      }} />
      <div style={{
        position: 'absolute',
        top: -80,
        left: '10%',
        width: 220,
        height: 220,
        background: 'radial-gradient(circle at 30% 40%, rgba(124,58,237,0.12), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        alignItems: 'center',
        gap: 40,
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Left */}
        <div style={{ maxWidth: 600 }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#8b4bff', borderRadius: 999,
            padding: '9px 24px 9px 10px', marginBottom: 22,
            width: 'fit-content',
            animation: 'badgeFloat 3s ease-in-out infinite',
            boxShadow: '0 16px 30px rgba(124,58,237,0.32)',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', background: '#1a0533',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
            </div>
            <span style={{ color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
              Studio-Grade Web Experiences
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            fontWeight: 800, lineHeight: 1.18,
            margin: '0 0 6px', color: '#101010', textTransform: 'uppercase',
          }}>Websites That Develop</h1>
          <h1 style={{
            fontFamily: "'Poppins', 'Segoe UI', sans-serif",
            fontSize: 'clamp(26px, 3.2vw, 34px)',
            fontWeight: 800, lineHeight: 1.18,
            margin: '0 0 22px', color: '#8b4bff', textTransform: 'uppercase',
          }}>Your Business &amp; Fame!</h1>

          <p style={{ fontSize: 16, color: '#444', lineHeight: 1.75, margin: '0 0 28px', maxWidth: 520, fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
            Worried about upscaling your business digitally? With SEO-based content, Attractive Videos, and Eye-catching Design, your website will stand out in the market.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
            <Btn>Start With A Free Website Brief</Btn>
            <Btn>Request A Live Demo</Btn>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: '#0d0d0d', border: '2px solid #f3c94e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 18px rgba(0,0,0,0.12)',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#222', fontFamily: "'Poppins', 'Segoe UI', sans-serif" }}>
              Studio-Grade Web Experiences
            </span>
          </div>
        </div>

        {/* Right: image in sunken square */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '100%',
            maxWidth: 620,
            aspectRatio: '1 / 1',
            borderRadius: 12,
            background: 'linear-gradient(135deg, #f2ffe5 0%, #eef6d7 48%, #e6f0d0 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            padding: 36,
            boxShadow: 'inset -22px 0 32px rgba(0,0,0,0.08)',
          }}>
            {/* left-to-right depth gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 12,
              background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.08) 32%, rgba(0,0,0,0.03) 60%, transparent 82%)',
              pointerEvents: 'none',
              zIndex: 2,
            }} />
            <img
              src="/webdev-sec1.png"
              alt="Web Development Illustration"
              style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
);

/* ════════════════════════════════════════════
   SECTION 2 — Dark Marquee Bar
════════════════════════════════════════════ */
const Section2 = () => {
  const items = ['We Design', 'We Develop', 'We Promote', 'We Market', 'We Design', 'We Develop', 'We Promote', 'We Market'];

  return (
    <section style={{
      background: '#0d0d1a',
      padding: '0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Purple glow blobs */}
      <div style={{
        position: 'absolute', top: '50%', left: '5%',
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(124,58,237,0.55)',
        filter: 'blur(22px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '6%',
        width: 60, height: 60, borderRadius: '50%',
        background: 'rgba(124,58,237,0.45)',
        filter: 'blur(18px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '10%', left: '30%',
        width: 40, height: 40, borderRadius: '50%',
        background: 'rgba(124,58,237,0.3)',
        filter: 'blur(14px)',
        pointerEvents: 'none',
      }} />

      {/* Marquee track */}
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marqueeScroll 18s linear infinite',
      }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              color: '#c8ff00',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '48px 80px',
              whiteSpace: 'nowrap',
            }}>
              {item}
            </span>
            {/* Vertical divider */}
            <div style={{
              width: 1,
              height: 28,
              background: 'rgba(200,255,0,0.35)',
              flexShrink: 0,
            }} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════════
   SECTION 3 — Case Study with Device Mockups
════════════════════════════════════════════ */

/* ── Laptop Mockup ── */
const Laptop = ({ videoRef, videoSrc }) => (
  <div style={{
    position: 'relative',
    width: 420,
    flexShrink: 0,
    filter: 'drop-shadow(0 24px 40px rgba(0,0,0,0.28))',
    zIndex: 2,
  }}>
    {/* Screen bezel */}
    <div style={{
      background: '#1a1a2e',
      borderRadius: '14px 14px 0 0',
      padding: '10px 12px 0',
      border: '3px solid #2a2a3e',
    }}>
      {/* Camera dot */}
      <div style={{
        width: 6, height: 6, borderRadius: '50%',
        background: '#444', margin: '0 auto 6px',
      }} />
      {/* Screen */}
      <div style={{
        background: '#000',
        borderRadius: '6px 6px 0 0',
        overflow: 'hidden',
        aspectRatio: '16/10',
        position: 'relative',
      }}>
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loop
            muted
            playsInline
          />
        ) : (
          /* Placeholder screen */
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 11, color: '#888', fontFamily: 'sans-serif' }}>
              Drop video here
            </span>
          </div>
        )}
      </div>
    </div>
    {/* Base */}
    <div style={{
      background: '#1a1a2e',
      height: 14,
      borderRadius: '0 0 4px 4px',
      border: '3px solid #2a2a3e',
      borderTop: 'none',
    }} />
    {/* Stand neck */}
    <div style={{
      background: '#2a2a3e',
      height: 8,
      width: 60,
      margin: '0 auto',
    }} />
    {/* Base foot */}
    <div style={{
      background: '#1a1a2e',
      height: 8,
      borderRadius: 4,
      border: '2px solid #2a2a3e',
    }} />
  </div>
);

/* ── Tablet Mockup ── */
const Tablet = ({ videoRef, videoSrc }) => (
  <div style={{
    position: 'absolute',
    bottom: -20,
    left: -70,
    width: 180,
    zIndex: 3,
    filter: 'drop-shadow(0 16px 30px rgba(0,0,0,0.35))',
  }}>
    <div style={{
      background: '#1a1a2e',
      borderRadius: 14,
      padding: '8px 6px',
      border: '3px solid #2a2a3e',
    }}>
      {/* Camera */}
      <div style={{
        width: 5, height: 5, borderRadius: '50%',
        background: '#444', margin: '0 auto 5px',
      }} />
      {/* Screen */}
      <div style={{
        background: '#000', borderRadius: 8,
        overflow: 'hidden', aspectRatio: '3/4',
        position: 'relative',
      }}>
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loop muted playsInline
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(160deg, #e1bee7, #ce93d8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PlayIcon size={28} />
          </div>
        )}
      </div>
      {/* Home bar */}
      <div style={{
        width: 36, height: 4, borderRadius: 2,
        background: '#444', margin: '6px auto 0',
      }} />
    </div>
  </div>
);

/* ── Phone Mockup ── */
const Phone = ({ videoRef, videoSrc }) => (
  <div style={{
    position: 'absolute',
    bottom: -30,
    right: -60,
    width: 120,
    zIndex: 3,
    filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.35))',
  }}>
    <div style={{
      background: '#1a1a2e',
      borderRadius: 20,
      padding: '10px 5px',
      border: '3px solid #2a2a3e',
    }}>
      {/* Notch */}
      <div style={{
        width: 28, height: 8, borderRadius: 4,
        background: '#2a2a3e', margin: '0 auto 6px',
      }} />
      {/* Screen */}
      <div style={{
        background: '#000', borderRadius: 10,
        overflow: 'hidden', aspectRatio: '9/16',
        position: 'relative',
      }}>
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loop muted playsInline
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(180deg, #fce4ec, #f06292)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PlayIcon size={20} />
          </div>
        )}
      </div>
      {/* Home indicator */}
      <div style={{
        width: 28, height: 3, borderRadius: 2,
        background: '#444', margin: '6px auto 0',
      }} />
    </div>
  </div>
);

/* ── Play icon ── */
const PlayIcon = ({ size = 36 }) => (
  <div style={{
    width: size * 1.5, height: size * 1.5, borderRadius: '50%',
    background: 'rgba(255,255,255,0.25)',
    backdropFilter: 'blur(4px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  }}>
    <div style={{
      width: 0, height: 0,
      borderTop: `${size * 0.3}px solid transparent`,
      borderBottom: `${size * 0.3}px solid transparent`,
      borderLeft: `${size * 0.5}px solid white`,
      marginLeft: size * 0.1,
    }} />
  </div>
);

/* ── Pill Badge — defined below with dark prop ── */

/* ── Section 3 ── */
const Section3 = () => {

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
      background: '#f5ffe8',
      padding: '60px 6% 70px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple blobs decoration */}
      <div style={{
        position: 'absolute', top: '15%', right: '3%',
        width: 60, height: 60, borderRadius: '50%',
        background: 'rgba(124,58,237,0.22)', filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '2%',
        width: 44, height: 44, borderRadius: '50%',
        background: 'rgba(124,58,237,0.18)', filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '30%', right: '8%',
        width: 30, height: 30, borderRadius: '50%',
        background: 'rgba(124,58,237,0.15)', filter: 'blur(1px)',
        pointerEvents: 'none',
      }} />

      {/* Category label */}
      <p style={{
        textAlign: 'center',
        fontFamily: "'Syne', sans-serif",
        fontSize: 11, fontWeight: 700,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#888', marginBottom: 48,
      }}>
        Ecommerce Website
      </p>

      {/* Main row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 60,
        flexWrap: 'wrap',
      }}>

        {/* ── LEFT: Video ── */}
        <div style={{
          flex: '1 1 360px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <video
            src="/webdev-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: 560,
              display: 'block',
              mixBlendMode: 'multiply',
            }}
          />
        </div>

        {/* ── RIGHT: Case study info ── */}
        <div style={{ flex: '1 1 360px', maxWidth: 480 }}>
          <CaseBadge />

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(22px, 2.8vw, 34px)',
            fontWeight: 900,
            color: '#7c3aed',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            margin: '0 0 14px',
          }}>
            Kovedaa Skincare Website
          </h2>

          <p style={{
            fontSize: 15, color: '#444', lineHeight: 1.8,
            margin: '0 0 32px', maxWidth: 420,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Designed and developed a modern eCommerce website for Kovedaa, blending
            Ayurvedic heritage with a clean, conversion-focused user experience.
          </p>

          {/* Two-column highlights */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {/* Project Highlights */}
            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 12, fontWeight: 800,
                color: '#7c3aed', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 12px',
              }}>
                Project Highlights
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 7,
                    fontSize: 12, color: '#333', lineHeight: 1.55,
                    marginBottom: 7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div style={{ flex: '1 1 180px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 12, fontWeight: 800,
                color: '#7c3aed', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 12px',
              }}>
                Outcome
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {outcomes.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 7,
                    fontSize: 12, color: '#333', lineHeight: 1.55,
                    marginBottom: 7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <KnowMoreBtn />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;600&display=swap');
      `}</style>
    </section>
  );
};

/* ── Combined export removed — WebDevPage above handles all sections ── */

/* ════════════════════════════════════════════
   SHARED COMPONENTS (updated with dark prop)
════════════════════════════════════════════ */

const CaseBadge = ({ dark = false }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: dark ? 'rgba(124,58,237,0.25)' : '#ede9fe',
    borderRadius: 50,
    padding: '6px 16px 6px 6px', marginBottom: 18,
    border: dark ? '1px solid rgba(124,58,237,0.4)' : 'none',
  }}>
    <div style={{
      width: 22, height: 22, borderRadius: '50%',
      background: '#7c3aed',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />
    </div>
    <span style={{
      color: dark ? '#c4b5fd' : '#7c3aed',
      fontSize: 10, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      fontFamily: "'Syne', sans-serif",
    }}>
      Case Studies
    </span>
  </div>
);

const KnowMoreBtn = ({ dark = false }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        background: '#c8ff00',
        color: '#0d0d1a',
        border: 'none',
        borderRadius: 50,
        padding: '14px 40px',
        fontSize: 12, fontWeight: 800,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-3px)' : 'none',
        boxShadow: h ? '0 10px 25px rgba(200,255,0,0.4)' : 'none',
        fontFamily: "'Syne', sans-serif",
        marginTop: 32,
      }}
    >
      Know More
    </button>
  );
};

/* ── Laptop shell ── */
const LaptopShell = ({ videoSrc }) => (
  <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
    <div style={{
      background: '#111',
      borderRadius: '16px 16px 0 0',
      padding: '10px 12px 0',
      border: '3px solid #333',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#444', margin: '0 auto 8px' }} />
      {/* Screen */}
      <div style={{
        background: '#000', borderRadius: '8px 8px 0 0',
        overflow: 'hidden', aspectRatio: '16/10',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
          <video src={videoSrc} autoPlay loop muted playsInline style={{width:'100%',height:'100%',objectFit:'cover'}} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 20, marginLeft: 3 }}>▶</span>
            </div>
          </div>
        )}
      </div>
    </div>
    <div style={{ background: '#111', height: 15, borderRadius: '0 0 6px 6px', border: '3px solid #333', borderTop: 'none' }} />
    <div style={{ background: '#222', height: 8, width: 70, margin: '0 auto' }} />
    <div style={{ background: '#111', height: 8, borderRadius: 5, border: '2.5px solid #333' }} />
  </div>
);

/* ── Tablet shell ── */
const TabletShell = ({ videoSrc }) => (
  <div style={{
    width: '100%', zIndex: 3,
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
  }}>
    <div style={{
      background: '#111', borderRadius: 14,
      padding: '8px 6px', border: '3px solid #333',
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#444', margin: '0 auto 6px' }} />
      <div style={{
        background: '#000', borderRadius: 8,
        overflow: 'hidden', aspectRatio: '3/4',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
           <video src={videoSrc} autoPlay loop muted playsInline style={{width:'100%',height:'100%',objectFit:'cover'}} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(160deg, #1a1a2e, #2d1b69)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 14, marginLeft: 2 }}>▶</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ width: 35, height: 4, borderRadius: 2, background: '#444', margin: '6px auto 0' }} />
    </div>
  </div>
);

/* ── Phone shell ── */
const PhoneShell = ({ videoSrc }) => (
  <div style={{
    width: '100%', zIndex: 3,
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
  }}>
    <div style={{
      background: '#111', borderRadius: 22,
      padding: '10px 5px', border: '3px solid #333',
    }}>
      <div style={{ width: 28, height: 8, borderRadius: 4, background: '#333', margin: '0 auto 6px' }} />
      <div style={{
        background: '#000', borderRadius: 12,
        overflow: 'hidden', aspectRatio: '9/16',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
           <video src={videoSrc} autoPlay loop muted playsInline style={{width:'100%',height:'100%',objectFit:'cover'}} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(180deg, #1a1a2e, #4c1d95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 12, marginLeft: 2 }}>▶</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ width: 28, height: 3, borderRadius: 2, background: '#444', margin: '6px auto 0' }} />
    </div>
  </div>
);

/* ════════════════════════════════════════════
   SECTION 4 — Dark Case Study (PivotCall)
════════════════════════════════════════════ */
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
      padding: '60px 6% 70px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple blob decorations */}
      <div style={{ position:'absolute', top:'50%', left:'50%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)', filter:'blur(100px)', transform:'translate(-50%, -50%)', pointerEvents:'none', zIndex: 0 }} />
      <div style={{ position:'absolute', top:'10%', right:'10%', width:150, height:150, borderRadius:'50%', background:'rgba(124,58,237,0.25)', filter:'blur(40px)', pointerEvents:'none', zIndex: 0 }} />
      <div style={{ position:'absolute', bottom:'10%', left:'5%', width:120, height:120, borderRadius:'50%', background:'rgba(124,58,237,0.3)', filter:'blur(30px)', pointerEvents:'none', zIndex: 0 }} />

      {/* Top Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 60,
        position: 'relative',
        zIndex: 1
      }}>
        <h5 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 14,
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          margin: 0
        }}>
          BUSINESS WEBSITE
        </h5>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 60, flexWrap: 'wrap',
      }}>

        {/* LEFT — Video */}
        <div style={{
          flex: '1 1 480px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <video
            src="/webdev-demo2.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: 580,
              display: 'block',
              borderRadius: 12,
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              // The user said the video already has a screen, so we just show it.
            }}
          />
        </div>

        {/* RIGHT — Info */}
        <div style={{ flex: '1 1 340px', maxWidth: 460 }}>
          <CaseBadge dark />

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(24px, 3.5vw, 42px)',
            fontWeight: 900,
            color: '#c8ff00',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            margin: '0 0 20px',
            letterSpacing: '-0.02em'
          }}>
            PIVOTCALL BUSINESS WEBSITE
          </h2>

          <p style={{
            fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8,
            margin: '0 0 28px', maxWidth: 400,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Developed a high-performance business website for PivotCall, focused on
            lead generation and showcasing trading expertise, contributing to ₹25Cr
            yearly sales.
          </p>

          {/* Two-col highlights */}
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 160px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 11, fontWeight: 800,
                color: '#c8ff00', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 12px',
              }}>Project Highlights</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 7,
                    fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
                    marginBottom: 7, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#c8ff00', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 160px' }}>
              <h4 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 11, fontWeight: 800,
                color: '#c8ff00', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 12px',
              }}>Outcome</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {outcomes.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 7,
                    fontSize: 11, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
                    marginBottom: 7, fontFamily: "'DM Sans', sans-serif",
                  }}>
                    <span style={{ color: '#c8ff00', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <KnowMoreBtn dark />
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   SECTION 5 — What We Offer (6 service cards)
════════════════════════════════════════════ */

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Website Designing',
    desc: 'Well-designed website help businesses build trust and attract more customers online. Therefore, modern layouts and responsive design create strong impressions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'Ecommerce Development',
    desc: 'Online stores need secure, smooth and easy shopping experiences to grow sales. As a result, scalable ecommerce development improves user flow and conversions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Web Development\nFast and reliable websites are essential for today\'s digital businesses. Because of this, responsive web development better performance on all devices.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="7" y1="21" x2="17" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Business Website',
    desc: 'Well-designed website help businesses build trust and attract more customers online. Therefore, modern layouts and responsive design create strong impressions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Portfolio Website',
    desc: 'Online stores need secure, smooth and easy shopping experiences to grow sales. As a result, scalable ecommerce development improves user flow and conversions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
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
      style={{
        background: '#0d0d1a',
        border: `1.5px solid ${h ? '#c8ff00' : 'rgba(200,255,0,0.1)'}`,
        borderRadius: 16,
        padding: '36px 28px 32px',
        display: 'flex', flexDirection: 'column', gap: 16,
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-6px)' : 'none',
        boxShadow: h
          ? '0 20px 50px rgba(200,255,0,0.15)'
          : '0 4px 15px rgba(0,0,0,0.2)',
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
        marginBottom: 8,
        transition: 'all 0.3s ease',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 14, fontWeight: 700,
        color: '#c8ff00',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: 0,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 13, color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.6, margin: '14px 0 20px',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {desc}
      </p>

      {/* Learn More */}
      <LearnMoreBtn />
    </div>
  );
};

const LearnMoreBtn = () => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        alignSelf: 'flex-start',
        background: h ? '#7c3aed' : '#c8ff00',
        color: h ? '#fff' : '#0d0d1a',
        border: 'none',
        borderRadius: 50,
        padding: '10px 24px',
        fontSize: 10, fontWeight: 800,
        letterSpacing: '0.05em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Syne', sans-serif",
        marginTop: 'auto',
        boxShadow: h ? '0 10px 25px rgba(124, 58, 237, 0.4)' : 'none',
        transform: h ? 'translateY(-2px)' : 'none'
      }}
    >
      LEARN MORE
    </button>
  );
};

const Section5 = () => (
  <section style={{
    background: '#f5ffe8',
    padding: '64px 6% 72px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Subtle blob */}
    <div style={{
      position: 'absolute', top: '8%', right: '4%',
      width: 60, height: 60, borderRadius: '50%',
      background: 'rgba(124,58,237,0.15)', filter: 'blur(2px)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '10%', left: '3%',
      width: 44, height: 44, borderRadius: '50%',
      background: 'rgba(124,58,237,0.12)', filter: 'blur(2px)',
      pointerEvents: 'none',
    }} />

    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: 60, position: 'relative', zIndex: 1 }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 14, fontWeight: 800, color: '#7c3aed',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        marginBottom: 20,
      }}>
        What We Offer
      </p>
      <p style={{
        fontSize: 'clamp(18px, 2.5vw, 22px)',
        color: '#1a1a1a', lineHeight: 1.6,
        maxWidth: 680, margin: '0 auto',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500
      }}>
        We align strategy with digital innovation to propel your success.
        Begin your journey with us and discover our comprehensive solutions
      </p>
    </div>

    {/* 3×2 Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      maxWidth: 1140,
      margin: '0 auto',
    }}>
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;600&display=swap');
    `}</style>
  </section>
);

/* ════════════════════════════════════════════
   SECTION 6 — Impactful Solutions Carousel
 ════════════════════════════════════════════ */
const Section6 = () => {
  // Hardcoded list based on public/corsal contents, will expand as user adds more
  const carouselImages = [
    '/corsal/image.png',
    '/corsal/2.png',
    '/corsal/3.png',
    '/corsal/4.png',
    '/corsal/5.png',
    '/corsal/6.png',
    '/corsal/7.png',
  ];

  return (
    <section style={{
      background: '#0d0d1a',
      padding: '80px 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Glows */}
      <div style={{ position:'absolute', top:'20%', left:'5%', width:200, height:200, borderRadius:'50%', background:'rgba(124,58,237,0.15)', filter:'blur(60px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'20%', right:'5%', width:180, height:180, borderRadius:'50%', background:'rgba(124,58,237,0.1)', filter:'blur(50px)', pointerEvents:'none' }} />

      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(20px, 3vw, 28px)',
        fontWeight: 800,
        color: '#c8ff00',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: 60,
        position: 'relative',
        zIndex: 1
      }}>
        A GLIMPSE INTO OUR IMPACTFUL SOLUTIONS
      </h2>

      {/* Marquee Wrapper */}
      <div style={{
        display: 'flex',
        width: 'max-content',
        gap: 30,
        animation: 'carouselScroll 35s linear infinite',
        padding: '0 20px'
      }}>
        {[...carouselImages, ...carouselImages, ...carouselImages].map((src, i) => (
          <div key={i} style={{
            flexShrink: 0,
            width: 320,
            aspectRatio: '9/16',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
            border: '2px solid rgba(255,255,255,0.05)',
            background: '#1a1a2e',
            transition: 'transform 0.4s ease',
            cursor: 'pointer'
          }}>
            <img 
              src={src} 
              alt={`Solution ${i}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#1a1a2e'; }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes carouselScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════════
   SECTION 7 — Process Timeline
 ════════════════════════════════════════════ */
const Section7 = () => {
  const steps = ['DISCOVER', 'DESIGN', 'BUILD', 'LAUNCH', 'GROW'];
  
  return (
    <section style={{
      background: '#f5ffe8',
      padding: '80px 5% 120px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 18,
        fontWeight: 800,
        color: '#7c3aed',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        marginBottom: 10
      }}>
        PROCESS TIMELINE
      </h2>

      {/* Decorative Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 70
      }}>
        <div style={{ height: 1, width: 100, borderBottom: '2px solid rgba(124,58,237,0.3)' }} />
        <div style={{ 
          width: 34, height: 34, 
          border: '2.5px solid #7c3aed', 
          transform: 'rotate(45deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: 14, height: 14, background: '#7c3aed' }} />
        </div>
        <div style={{ height: 1, width: 100, borderBottom: '2px solid rgba(124,58,237,0.3)' }} />
      </div>

      {/* Chevron Timeline */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 6,
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        {steps.map((text, i) => {
          let clipPath = '';
          if (i === 0) {
            clipPath = 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)';
          } else if (i === steps.length - 1) {
            clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 8% 50%)';
          } else {
            clipPath = 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)';
          }

          return (
            <div 
              key={i}
              className="timeline-step"
              style={{
                background: '#7c3aed',
                color: '#fff',
                padding: '32px 50px 32px 60px',
                fontSize: 18,
                fontWeight: 800,
                fontFamily: "'Syne', sans-serif",
                letterSpacing: '0.05em',
                clipPath,
                flex: '1 1 180px',
                minWidth: 160,
                textAlign: 'center',
                margin: '10px -5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {text}
            </div>
          );
        })}
      </div>

      <style>{`
        .timeline-step:hover {
          background: #5b21b6;
          transform: translateY(-5px);
          filter: drop-shadow(0 15px 25px rgba(124,58,237,0.35));
        }
      `}</style>
    </section>
  );
};

const Section8 = () => null;

/* ════════════════════════════════════════════
   SECTION 9 — What We Do (Portfolio Grid)
════════════════════════════════════════════ */

/* Each portfolio card — laptop + phone mockup with a screenshot inside */
const PortfolioCard = ({ laptopImg, phoneImg, index }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        position: 'relative',
        background: '#f0f0f0',
        borderRadius: 14,
        overflow: 'hidden',
        aspectRatio: '4/3',
        cursor: 'pointer',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        transform: h ? 'translateY(-6px) scale(1.01)' : 'none',
        boxShadow: h
          ? '0 20px 48px rgba(124,58,237,0.22)'
          : '0 4px 18px rgba(0,0,0,0.1)',
      }}
    >
      {/* Laptop mockup */}
      <div style={{
        position: 'absolute',
        left: '4%', top: '8%',
        width: '76%',
        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.22))',
        zIndex: 1,
      }}>
        {/* Screen bezel */}
        <div style={{
          background: '#1a1a2e', borderRadius: '8px 8px 0 0',
          padding: '5px 6px 0',
          border: '2px solid #2a2a3e',
        }}>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#444', margin: '0 auto 3px' }} />
          <div style={{
            borderRadius: '4px 4px 0 0', overflow: 'hidden',
            aspectRatio: '16/9', background: '#e0e0e0',
          }}>
            {laptopImg ? (
              <img src={laptopImg} alt="project screenshot"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              /* Placeholder — replace laptopImg prop with your image path */
              <div style={{
                width: '100%', height: '100%',
                background: index % 2 === 0
                  ? 'linear-gradient(135deg, #e8f5e9, #c8e6c9)'
                  : 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 9, color: '#999', fontFamily: 'sans-serif' }}>
                  Add laptopImg prop
                </span>
              </div>
            )}
          </div>
        </div>
        <div style={{ background: '#1a1a2e', height: 7, borderRadius: '0 0 3px 3px', border: '2px solid #2a2a3e', borderTop: 'none' }} />
        <div style={{ background: '#222', height: 5, width: 38, margin: '0 auto' }} />
        <div style={{ background: '#1a1a2e', height: 5, borderRadius: 3, border: '1.5px solid #2a2a3e' }} />
      </div>

      {/* Phone mockup */}
      <div style={{
        position: 'absolute',
        right: '4%', bottom: '6%',
        width: '22%',
        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
        zIndex: 2,
      }}>
        <div style={{
          background: '#1a1a2e', borderRadius: 12,
          padding: '6px 3px',
          border: '2px solid #2a2a3e',
        }}>
          <div style={{ width: 16, height: 5, borderRadius: 3, background: '#333', margin: '0 auto 3px' }} />
          <div style={{
            background: '#000', borderRadius: 6,
            overflow: 'hidden', aspectRatio: '9/16',
          }}>
            {phoneImg ? (
              <img src={phoneImg} alt="project mobile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                background: index % 2 === 0
                  ? 'linear-gradient(180deg, #fff9c4, #f9a825)'
                  : 'linear-gradient(180deg, #fce4ec, #e91e63)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 6, color: '#fff', fontFamily: 'sans-serif' }}>phone</span>
              </div>
            )}
          </div>
          <div style={{ width: 16, height: 3, borderRadius: 2, background: '#444', margin: '3px auto 0' }} />
        </div>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(124,58,237,0.08)',
        opacity: h ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 0,
        borderRadius: 14,
      }} />
    </div>
  );
};

const Section9 = () => (
  <section style={{
    background: '#f5ffe8',
    padding: '64px 6% 72px',
    boxSizing: 'border-box',
  }}>
    {/* Header text */}
    <div style={{ maxWidth: 1000, margin: '0 auto 48px' }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 11, fontWeight: 700, color: '#7c3aed',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        marginBottom: 16,
      }}>
        What We Do
      </p>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(18px, 2.2vw, 26px)',
        fontWeight: 800, color: '#1a1a1a',
        lineHeight: 1.3, marginBottom: 16,
      }}>
        Our Work Delivers{' '}
        <span style={{ color: '#7c3aed' }}>Innovative Solutions and Impressive Results</span>
      </p>
      <p style={{
        fontSize: 14, color: '#444', lineHeight: 1.8,
        maxWidth: 720, fontFamily: "'DM Sans', sans-serif",
      }}>
        Our portfolio highlights creative{' '}
        <span style={{ color: '#7c3aed', fontWeight: 600 }}>web design, high-conversion e-commerce platforms, and impactful digital marketing</span>.
        {' '}Each project reflects our passion for excellence, strategic execution, and commitment to
        achieving client success with bold, innovative solutions.
      </p>
    </div>

    {/* 2x3 plain image grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 6,
      maxWidth: 1000,
      margin: '0 auto',
    }}>
      {[
        '/section 9/Copy of Website Ad Landing Page 6.png',
        '/section 9/Copy of Website Ad Landing Page 7.png',
        '/section 9/Copy of Website Ad Landing Page 8.png',
        '/section 9/Copy of Website Ad Landing Page 9.png',
        '/section 9/Copy of Website Ad Landing Page 10.png',
        '/section 9/Copy of Website Ad Landing Page 11.png',
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Project ${i + 1}`}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10 }}
        />
      ))}
    </div>
  </section>
);
/* ════════════════════════════════════════════
   SECTION 10 — Google Reviews
════════════════════════════════════════════ */

const reviews = [
  {
    name: 'Venkata Siddharth',
    handle: 'V',
    color: '#7c3aed',
    time: '5 months ago',
    stars: 5,
    text: 'Working with Eugenesys was a seamless experience. They delivered a high-quality, professional website exactly on...',
  },
  {
    name: 'hasan ahmed',
    handle: 'H',
    color: '#4caf50',
    time: '1 month ago',
    stars: 5,
    text: 'Best web design and app development company with in Bangalore, got home services booking app like urban company...',
  },
  {
    name: 'Reddy Documents',
    handle: 'R',
    color: '#e53935',
    time: '4 months ago',
    stars: 5,
    text: 'Quality work with minimal Price and Time',
  },
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
    background: '#13131f',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 14,
    padding: '22px 22px 18px',
    position: 'relative',
    flex: '1 1 200px',
    minWidth: 0,
  }}>
    {/* Top row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Avatar */}
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: "'Syne', sans-serif" }}>
            {handle}
          </span>
        </div>
        <div>
          <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 13, fontFamily: "'Syne', sans-serif" }}>
            {name}
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>
            {time}
          </p>
        </div>
      </div>
      {/* Google G */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>

    <StarRow count={stars} />

    <p style={{
      color: 'rgba(255,255,255,0.65)', fontSize: 12.5,
      lineHeight: 1.7, margin: '10px 0 14px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {text}
    </p>

    <span style={{
      color: '#7c3aed', fontSize: 11, fontWeight: 600,
      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
    }}>
      Read more
    </span>

    {/* Quote mark bottom-right */}
    <span style={{
      position: 'absolute', bottom: 14, right: 18,
      color: '#7c3aed', fontSize: 28, lineHeight: 1,
      fontFamily: 'Georgia, serif', opacity: 0.6,
    }}>"</span>
  </div>
);

const Section10 = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      background: '#0d0d1a',
      padding: '60px 6% 70px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple blobs */}
      <div style={{ position:'absolute', top:'15%', left:'1%', width:80, height:80, borderRadius:'50%', background:'rgba(124,58,237,0.25)', filter:'blur(26px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'2%', width:60, height:60, borderRadius:'50%', background:'rgba(124,58,237,0.2)', filter:'blur(20px)', pointerEvents:'none' }} />

      <div style={{
        display: 'flex', alignItems: 'center',
        gap: 52, flexWrap: 'wrap',
      }}>

        {/* LEFT — Logo */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 16,
        }}>
          <img src="/logo.png" alt="Buzziwah Logo" style={{ width: 100 }} />
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 10,
            fontFamily: "'Syne', sans-serif",
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            Our Reviews
          </p>
        </div>

        {/* RIGHT — Review cards */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Nav arrows */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginBottom: 4 }}>
            {[0, 1, 2].map(i => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: active === i ? '#7c3aed' : 'rgba(255,255,255,0.1)',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.25s ease',
                }}
              />
            ))}
          </div>

          {/* Cards row */}
          <div style={{
            display: 'flex', gap: 16,
            flexWrap: 'wrap',
          }}>
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;600&display=swap');
      `}</style>
    </section>
  );
};

const WebDevPage = () => (
  <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Section10 />
  </>
);

export default WebDevPage;
