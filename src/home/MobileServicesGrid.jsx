import React from 'react';
import './Home.css';

const MobileServicesGrid = () => {
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
    <div className="mobile-only">
      <div className="ssd-wrap">
        <div className="ssd-grid">
          <div className="ssd-card c1" onClick={() => window.location.href = links.branding}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-20.png" alt="Branding" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c2" onClick={() => window.location.href = links.content}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-21.png" alt="Content" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c3" onClick={() => window.location.href = links.content}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-23.png" alt="Content2" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c4" onClick={() => window.location.href = links.social}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-22.png" alt="Social" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c5" onClick={() => window.location.href = links.video}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-24.png" alt="Video" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c6" onClick={() => window.location.href = links.web}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-25.png" alt="Web" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c7" onClick={() => window.location.href = links.seo}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-26.png" alt="SEO" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c8" onClick={() => window.location.href = links.performance}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Website-27.png" alt="Performance" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServicesGrid;
