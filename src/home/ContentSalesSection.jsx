import React from 'react';

const ContentSalesSection = ({ image = '/SSD_Website 9.png' }) => {
  return (
    <section className="content-sales-section">
      <div className="content-sales-inner">
        <div className="content-sales-text">
          <h2 className="bbbbb-fiu" style={{ '--fiu-delay': '0.05s' }}>
            Good Content =&nbsp;<span>Good Sales</span>
          </h2>
          <p className="bbbbb-fiu" style={{ '--fiu-delay': '0.18s' }}>
            SS Digital shall help you grow your business with digital marketing by creating a unique
            brand voice
          </p>
          <ul className="bbbbb-fiu" style={{ '--fiu-delay': '0.3s' }}>
            <li>600000+ Leads Generation</li>
            <li>50 Million Views Contribution Everyyear</li>
            <li>300% Of Organic Content</li>
            <li>Best In Market</li>
          </ul>
          <a className="content-sales-btn bbbbb-fiu" style={{ '--fiu-delay': '0.44s' }} href="/contact">
            Get Started
          </a>
        </div>

        <div className="content-sales-image">
          <img src={image} alt="Content Growth" />
        </div>
      </div>
    </section>
  );
};

export default ContentSalesSection;
