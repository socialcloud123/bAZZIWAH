


const Section7 = () => {
  const steps = [
    { title: 'Idea to Website', desc: '' },
    { title: 'Design', desc: 'structure, layout, user experience' },
    { title: 'Development', desc: 'building, functionality, responsiveness' },
    { title: 'Testing', desc: 'performance, bugs, usability' },
    { title: 'Deployment', desc: 'going live' },
  ];

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
        {steps.map((step, i) => {
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: '0.03em' }}>
                  {step.title}
                </span>
                {step.desc && (
                  <span style={{ fontSize: 14, fontWeight: 500, opacity: 0.9, letterSpacing: '0.01em' }}>
                    {step.desc}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .timeline-step {
          background: #6428c4;
          color: #fff;
          padding: 0 42px;
          height: 92px;
          width: 320px;
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
            width: 280px !important;
            height: 78px !important;
            margin: 0 !important;
          }
          .timeline-step span:first-child {
            font-size: 28px !important;
          }
          .timeline-step span:last-child {
            font-size: 12px !important;
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
            height: auto !important;
            min-height: 66px !important;
            padding: 12px 20px !important;
            clip-path: none !important;
            border-radius: 10px !important;
          }
          .timeline-step span:first-child {
            font-size: 22px !important;
          }
          .timeline-step span:last-child {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section7;
