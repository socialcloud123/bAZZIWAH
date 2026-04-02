


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
        maxWidth: 1500,
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
              style={{ clipPath }}
            >
              {text}
            </div>
          );
        })}
      </div>

      <style>{`
        .timeline-step {
          background: #7c3aed;
          color: #fff;
          padding: 32px 50px 32px 60px;
          fontSize: 18px;
          fontWeight: 800;
          fontFamily: 'Syne', sans-serif;
          letter-spacing: 0.05em;
          flex: 1 1 240px;
          min-width: 200px;
          text-align: center;
          margin: 10px -5px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-step:hover {
          background: #5b21b6;
          transform: translateY(-5px);
          filter: drop-shadow(0 15px 25px rgba(124,58,237,0.35));
        }
        @media (max-width: 768px) {
          .timeline-step {
            clip-path: none !important;
            border-radius: 12px !important;
            padding: 24px 30px !important;
            margin: 8px 0 !important;
            flex: 1 1 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section7;
