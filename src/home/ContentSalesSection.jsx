import React from 'react';

const ContentSalesSection = ({ image = '/SSD_Website 9.png' }) => {
  return (
    <section className="content-sales-section">
      <div className="content-sales-inner">
        <div className="content-sales-text">
          <h2>
            Good Content =&nbsp;<span>Good Sales</span>
          </h2>
          <p>
            SS Digital shall help you grow your business with digital marketing by creating a unique
            brand voice
          </p>
          <ul>
            <li>600000+ Leads Generation</li>
            <li>50 Million Views Contribution Everyyear</li>
            <li>300% Of Organic Content</li>
            <li>Best In Market</li>
          </ul>
        </div>

        <div className="content-sales-image">
          <img src={image} alt="Content Growth" />
        </div>
      </div>
    </section>
  );
};

export default ContentSalesSection;
