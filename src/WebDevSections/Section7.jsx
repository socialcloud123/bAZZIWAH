


const Section7 = () => {
  const steps = ['DISCOVER', 'DESIGN', 'BUILD', 'LAUNCH', 'GROW'];

  return (
    <section style={{
      background: '#dfead2',
      padding: '58px 1.8% 86px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <h2 style={{
        fontSize: 34,
        fontWeight: 800,
        color: '#6c2ecf',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: 4
      }}>
        PROCESS TIMELINE
      </h2>

      {/* Decorative Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        marginBottom: 44
      }}>
        <div style={{ height: 1, width: 300, background: 'rgba(108,46,207,0.45)' }} />
        <div style={{ color: '#6c2ecf', fontSize: 18, lineHeight: 1 }}>✤</div>
        <div style={{ height: 1, width: 300, background: 'rgba(108,46,207,0.45)' }} />
      </div>

      {/* Chevron Timeline */}
      <div className="timeline-row" style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        gap: 0,
        maxWidth: 1440,
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
          background: #6428c4;
          color: #fff;
          padding: 0 42px;
          font-size: 36px;
          font-weight: 700;
          letter-spacing: 0.03em;
          height: 92px;
          width: 260px;
          text-align: center;
          margin: 0 -7px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1200px) {
          .timeline-row {
            flex-wrap: wrap !important;
            gap: 12px !important;
          }
          .timeline-step {
            width: 220px !important;
            height: 78px !important;
            font-size: 28px !important;
            margin: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .timeline-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .timeline-step {
            width: min(92vw, 360px) !important;
            height: 66px !important;
            font-size: 22px !important;
            clip-path: none !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section7;
