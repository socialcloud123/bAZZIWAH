


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
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(124,58,237,0.15)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '5%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(124,58,237,0.1)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <h2 className="section6-headline" style={{
        fontFamily: "'Syne', sans-serif",
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
          <div key={i} className="carousel-card" style={{
            flexShrink: 0,
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
        .section6-headline {
          font-size: clamp(20px, 3vw, 28px);
        }
        .carousel-card {
          width: 320px;
        }
        @media (max-width: 768px) {
          .section6-headline {
            font-size: 20px !important;
            padding: 0 5%;
          }
          .carousel-card {
            width: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ════════════════════════════════════════════
   SECTION 7 — Process Timeline
 ════════════════════════════════════════════ */

export default Section6;
