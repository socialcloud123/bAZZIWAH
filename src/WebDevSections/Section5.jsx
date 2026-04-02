


import { services, ServiceCard } from './Section4';

const Section5 = () => (
  <section style={{
    background: '#f5ffe8',
    padding: '96px 6% 108px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Subtle blob */}
    <div style={{
      position: 'absolute', top: '8%', right: '4%',
      width: 90, height: 90, borderRadius: '50%',
      background: 'rgba(124,58,237,0.15)', filter: 'blur(3px)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '10%', left: '3%',
      width: 66, height: 66, borderRadius: '50%',
      background: 'rgba(124,58,237,0.12)', filter: 'blur(3px)',
      pointerEvents: 'none',
    }} />

    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: 90, position: 'relative', zIndex: 1 }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 21, fontWeight: 800, color: '#7c3aed',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        marginBottom: 30,
      }}>
        What We Offer
      </p>
      <p style={{
        fontSize: 'clamp(27px, 3.75vw, 33px)',
        color: '#1a1a1a', lineHeight: 1.6,
        maxWidth: 1020, margin: '0 auto',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500
      }}>
        We align strategy with digital innovation to propel your success.
        Begin your journey with us and discover our comprehensive solutions
      </p>
    </div>

    {/* 3×2 Grid */}
    <div className="section5-grid" style={{
      display: 'grid',
      maxWidth: 1710,
      margin: '0 auto',
    }}>
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;600&display=swap');
      .section5-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 36px;
      }
      @media (max-width: 1024px) {
        .section5-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 24px !important;
        }
      }
      @media (max-width: 768px) {
        .section5-grid {
          grid-template-columns: repeat(1, 1fr) !important;
          gap: 20px !important;
        }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════════
   SECTION 6 — Impactful Solutions Carousel
 ════════════════════════════════════════════ */

export default Section5;
