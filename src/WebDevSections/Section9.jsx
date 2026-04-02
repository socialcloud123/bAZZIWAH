


const Section9 = () => (
  <section style={{
    background: '#fff',
    padding: '108px 6% 120px',
    boxSizing: 'border-box',
  }}>
    {/* Section label + decorative divider */}
    <div style={{ textAlign: 'center', marginBottom: 78 }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 19.5, fontWeight: 800,
        color: '#7c3aed',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        marginBottom: 27,
      }}>
        What We Do
      </p>
      {/* Decorative diamond divider */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 21, marginBottom: 0,
      }}>
        <div style={{ height: 1, width: 165, borderBottom: '3px solid rgba(124,58,237,0.3)' }} />
        <div style={{
          width: 45, height: 45,
          border: '3.75px solid #7c3aed',
          transform: 'rotate(45deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: 18, height: 18, background: '#7c3aed' }} />
        </div>
        <div style={{ height: 1, width: 165, borderBottom: '3px solid rgba(124,58,237,0.3)' }} />
      </div>
    </div>

    {/* Two-column header */}
    <div style={{
      display: 'flex', gap: 72, flexWrap: 'wrap',
      maxWidth: 1650, margin: '0 auto 84px',
      alignItems: 'flex-start',
    }}>
      <div style={{ flex: '1 1 480px' }}>
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(30px, 3.6vw, 42px)',
          fontWeight: 900, color: '#1a1a1a',
          lineHeight: 1.25, margin: 0,
        }}>
          Our Work Delivers{' '}
          <span style={{ color: '#7c3aed' }}>Innovative Solutions and Impressive Results</span>
        </p>
      </div>
      <div style={{ flex: '1 1 480px' }}>
        <p style={{
          fontSize: 22.5, color: '#333', lineHeight: 1.8,
          fontFamily: "'DM Sans', sans-serif", margin: 0, fontWeight: 500,
        }}>
          Our portfolio highlights creative{' '}
          <span style={{ color: '#7c3aed', fontWeight: 700 }}>web design, high-conversion e-commerce platforms, and impactful digital marketing</span>.
          {' '}Each project reflects our passion for excellence, strategic execution, and commitment to
          achieving client success with bold, innovative solutions.
        </p>
      </div>
    </div>

    {/* Grid Content */}
    <div className="section9-grid" style={{
      display: 'grid',
      maxWidth: 1600,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    }}>
      {[
        '/section 9/Copy of Website Ad Landing Page 6.png',
        '/section 9/Copy of Website Ad Landing Page 7.png',
        '/section 9/Copy of Website Ad Landing Page 8.png',
        '/section 9/Copy of Website Ad Landing Page 9.png',
        '/section 9/Copy of Website Ad Landing Page 10.png',
        '/section 9/Copy of Website Ad Landing Page 11.png',
      ].map((src, i) => (
        <div key={i} className="portfolio-item" style={{
          position: 'relative',
          borderRadius: 21,
          overflow: 'hidden',
          boxShadow: '0 15px 45px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.05)',
          background: '#0d0d1a',
          cursor: 'pointer',
          aspectRatio: '16/10',
        }}>
          <img
            src={src}
            alt={`Portfolio ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
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
    time: '2 months ago',
    stars: 5,
    text: 'Working with Fugensys was a seamless experience. They delivered a high-quality, professional website exactly on...',
  },
  {
    name: 'Ananya Sharma',
    handle: 'A',
    color: '#ec4899',
    time: '1 month ago',
    stars: 5,
    text: 'Extremely satisfied with the results. Fugensys provided a sleek mobile-responsive design that boosted our site traffic by 40%.',
  },
  {
    name: 'Karthik Nair',
    handle: 'K',
    color: '#10b981',
    time: '3 weeks ago',
    stars: 5,
    text: 'Technical expertise at its best. Their full-stack development team handled our backend complexities with ease.',
  },
  {
    name: 'hasan ahmed',
    handle: 'H',
    color: '#4caf50',
    time: '3 months ago',
    stars: 5,
    text: 'Best web design and app development company with in Bangalore, got home services booking app like urban company...',
  },
  {
    name: 'Sneha Kapoor',
    handle: 'S',
    color: '#f59e0b',
    time: '2 weeks ago',
    stars: 5,
    text: 'Great attention to detail. The UI/UX is intuitive and exactly what our users needed. Highly recommended!',
  },
  {
    name: 'Rahul Mehta',
    handle: 'R',
    color: '#3b82f6',
    time: '4 months ago',
    stars: 5,
    text: 'Fantastic communication throughout the process. They understood our brand vision and delivered beyond expectations.',
  },
  {
    name: 'Reddy Documents',
    handle: 'R',
    color: '#e53935',
    time: '3 months ago',
    stars: 5,
    text: 'Quality work with minimal Price and Time',
  },
  {
    name: 'Priya Das',
    handle: 'P',
    color: '#8b5cf6',
    time: '5 months ago',
    stars: 5,
    text: 'The SEO strategies they implemented have been a game-changer. Our rankings have never been better.',
  },
  {
    name: 'Amit Verma',
    handle: 'A',
    color: '#f43f5e',
    time: '6 months ago',
    stars: 5,
    text: 'Professional, timely, and innovative. Fugensys is definitely our go-to for all digital development needs.',
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
    borderRadius: 21,
    padding: '33px 33px 27px',
    position: 'relative',
    flex: '1 1 300px',
    minWidth: 0,
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}>
    {/* Top row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        {/* Avatar */}
        <div style={{
          width: 54, height: 54, borderRadius: '50%',
          background: color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22.5, fontFamily: "'Syne', sans-serif" }}>
            {handle}
          </span>
        </div>
        <div>
          <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 19.5, fontFamily: "'Syne', sans-serif" }}>
            {name}
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: 16.5, fontFamily: "'DM Sans', sans-serif" }}>
            {time}
          </p>
        </div>
      </div>
      {/* Google G */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>

    <StarRow count={stars} />

    <p style={{
      color: 'rgba(255,255,255,0.65)', fontSize: 18.75,
      lineHeight: 1.7, margin: '15px 0 21px',
      fontFamily: "'DM Sans', sans-serif",
      flex: 1
    }}>
      {text}
    </p>

    <span style={{
      color: '#7c3aed', fontSize: 16.5, fontWeight: 600,
      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
    }}>
      Read more
    </span>

    {/* Quote mark bottom-right */}
    <span style={{
      position: 'absolute', bottom: 21, right: 27,
      color: '#7c3aed', fontSize: 42, lineHeight: 1,
      fontFamily: 'Georgia, serif', opacity: 0.6,
    }}>"</span>
  </div>
);

export { reviews, ReviewCard };
export default Section9;
