import React from 'react';

const clienteleLogos = [
  '1 (4).png',
  '2 (4).png',
  '3 (4).png',
  '4 (6).png',
  '5 (4).png',
  '6.png',
  '7 (1).png',
  '8 (1).png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19 (2).png',
  '20 (2).png',
  '21.png',
  '23.png',
  '24.png',
  '25.png',
  '27.png',
  '28.png',
  '29.png',
  '30.png',
  '31.png',
  '32.png',
  '33.png',
  '34.png',
  '35.png',
  '36.png',
  '37.png',
  '38.png',
  '39.png',
  '40.png',
  '41.png',
  '42.png',
  '43.png',
  '44.png',
  '45.png',
  '46.png',
  'Untitled-design-90.png',
  'Untitled-design-91.png',
  'Untitled-design-92.png',
  'Untitled-design-93.png',
];

const ClienteleSection = () => {
  const baseSpeedSeconds = 180;
  const speedStepSeconds = 25;

  return (
    <section className="clientele-section">
      <div className="clientele-inner">
        <h2 className="clientele-title">CLIENTELE</h2>
        <p className="clientele-subtitle">A few of the brands we have elevated lately.</p>
      </div>

      <div className="clientele-marquee">
        {[0, 1, 2, 3].map((rowIndex) => {
          const offset = (rowIndex * 6) % clienteleLogos.length;
          const rowItems = clienteleLogos.slice(offset).concat(clienteleLogos.slice(0, offset));
          const duration = baseSpeedSeconds + rowIndex * speedStepSeconds;

          return (
            <div
              className={`clientele-row ${rowIndex % 2 === 0 ? 'forward' : 'reverse'}`}
              style={{ '--duration': `${duration}s` }}
              key={`clientele-row-${rowIndex}`}
            >
              <div className="clientele-track">
                {rowItems.map((item, idx) => (
                  <div className="clientele-card" key={`${item}-${idx}-a`}>
                    <img
                      className="clientele-logo"
                      src={encodeURI(`/clientlogos/${item}`)}
                      alt="Client logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClienteleSection;
