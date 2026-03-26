import React from 'react';
import './Home.css';

const ServicesGrid = () => {
  const links = {
    branding: 'https://sripadastudiosdigital.com/branding-re-branding/',
    content: 'https://sripadastudiosdigital.com/content-solutions/',
    social: 'https://sripadastudiosdigital.com/social-media-management/',
    video: 'https://sripadastudiosdigital.com/video-production/',
    web: 'https://sripadastudiosdigital.com/website-development/',
    seo: 'https://sripadastudiosdigital.com/search-engine-optimization-2/',
    performance: 'https://sripadastudiosdigital.com/performances-marketing/',
  };

  return (
    <div className="ssd-wrap">
      <div className="ssd-grid">
        <div className="ssd-card c1" onClick={() => window.location.href = links.branding}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-10.png" alt="Branding" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c2" onClick={() => window.location.href = links.content}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Untitled-design-2026-03-23T180229.508.png" alt="Content" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c3" onClick={() => window.location.href = links.content}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-12.png" alt="Content 2" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c4" onClick={() => window.location.href = links.social}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-13.png" alt="Social" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c5" onClick={() => window.location.href = links.video}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Untitled-design-2026-03-23T175832.106.png" alt="Video" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c6" onClick={() => window.location.href = links.web}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-15.png" alt="Web" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c7" onClick={() => window.location.href = links.seo}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Performance-Marketing-2.png" alt="SEO" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c8" onClick={() => window.location.href = links.performance}>
          <div className="ssd-card__img-wrap">
            <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/Performance-Marketing-1.png" alt="Performance" />
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
