import { useState, useEffect, useRef } from 'react';
import './PerformanceMarketing.css';
import '../home/Home.css';

const XyxyxyCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 3000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="xyxyxy-frame">
      <div className="xyxyxy-carousel-container">
        <div className="xyxyxy-carousel" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((s, i) =>
            s.type === 'video'
              ? <video key={i} src={s.src} autoPlay muted loop playsInline />
              : <img key={i} src={s.src} alt={`Slide ${i + 1}`} />
          )}
        </div>
        <div className="xyxyxy-dots">
          {slides.map((_, i) => (
            <span key={i} className={`xyxyxy-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ src, alt }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    ref.current.querySelector('.pm-flip-card').style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleLeave = () => {
    ref.current.querySelector('.pm-flip-card').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };
  return (
    <div className="pm-flip-container" ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="pm-flip-card">
        <div className="pm-flip-card-front">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

const gymSlides = [
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-38.png' },
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-39.png' },
  { type: 'video', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/gym1-mp4.mp4' },
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-41.png' },
  { type: 'video', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/gym-mp4.mp4' },
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-45.png' },
];

const lilbeezSlides = [
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-59.png' },
  { type: 'video', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/lilbeez1-mp4-2.mp4' },
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-56.png' },
  { type: 'video', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/lilbeez1-mp4-3.mp4' },
  { type: 'img', src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-55.png' },
];

const services = [
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-32.png', title: 'Social Media Marketing', desc: 'We help you grow online presence by creating engaging content and reaching the right audience. With smart strategies and creative posts, we turn scrolls into stops and likes into customers.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-33.png', title: 'Account Audit and Strategy', desc: 'Stay ahead with our Account Audit & Strategy services. We analyze your digital presence, spot gaps, and refine your strategy to get the most out of your marketing budget.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-34.png', title: 'Search Engine Marketing', desc: 'From search to click to sale—our SEM campaigns guide your audience every step of the way. Be the first name they see, and the only one they remember.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-35.png', title: 'Dynamic Remarketing & Product Listing Ads', desc: 'Bring back lost visitors and boost sales with Dynamic Remarketing and Product Listing Ads. We create tailored ad experiences that re-engage your audience and turn interest into action.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-36.png', title: 'Catalogue And Shopping Ads', desc: 'Put your products in front of buyers with Shopping and Catalogue Ads. We highlight key details like price and image to capture attention when customers are ready to purchase.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-37.png', title: 'WhatsApp Marketing', desc: 'Connect instantly with your audience through WhatsApp Marketing—personalized messages, real-time updates, and higher engagement that drives conversions.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-38.png', title: 'Conversion Rate Optimization', desc: "Boost your website's performance with our expert CRO services. We analyze usability, design, copy, and user journey to improve conversions and drive more results from your traffic." },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-39.png', title: 'YouTube Ads', desc: 'Reach your audience with high-impact YouTube ad campaigns. Our experts use data-driven strategies, creative planning, and detailed performance tracking to deliver results tailored to your business goals.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-40.png', title: 'LinkedIn Ads', desc: 'Target the right decision-makers with cost-effective LinkedIn ad campaigns. We help B2B brands reach professionals across industries using precise targeting and strategic ad placements.' },
];

const zigzagSteps = [
  { title: '01. Strategy Planning', desc: 'Define goals, KPIs, audience, and funnel direction.' },
  { title: '02. Channel Selection', desc: 'Select platforms like Google Ads, Meta, YouTube, and more.' },
  { title: '03. Ad Creative', desc: 'Create engaging visuals and ad copy that convert.' },
  { title: '04. Campaign Execution', desc: 'Launch optimized campaigns with proper targeting and budgets.' },
  { title: '05. Tracking & Analytics', desc: 'Use pixels, UTM tracking, and tools like GA4, Meta Pixel.' },
  { title: '06. Optimization', desc: 'Test creatives, refine bids, and enhance audience targeting.' },
  { title: '07. Scaling', desc: 'Scale high-performing campaigns for growth and profit.' },
];

const pmFaqs = [
  { q: 'Can You Redesign Or Develop A Website For My Brand?', a: 'Absolutely. We handle everything from scratch — concept, design, development, and launch — tailored to your brand identity and goals.' },
  { q: 'Do You Offer SEO Services?', a: 'Yes. Every website we build is SEO-optimized with proper structure, meta tags, performance tuning, and mobile responsiveness baked in.' },
  { q: 'What Kind Of Support Do You Offer After A Campaign Is Launched?', a: 'We provide ongoing monitoring, A/B testing, performance reports, and optimization to ensure your campaigns keep delivering results.' },
  { q: 'Why Should I Choose SS Digital For My Digital Marketing Needs?', a: 'We combine creative strategy, data-driven execution, and transparent reporting to deliver measurable ROI for businesses of all sizes.' },
];

const PMFaqCard = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${faq.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{faq.a}</div>
    </div>
  );
};

const PerformanceMarketing = () => (
  <div className="pm-page">

    <section className="pm-banner">
      <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-52.png" alt="Performance Marketing Banner" />
    </section>

    <section className="pm-section2">
      <div className="pm-section2-left">
        <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SEO-F.png" alt="SEO" />
      </div>
      <div className="pm-section2-right">
        <div className="paid-marketing-section">
          <h2>Why do you need Performances Marketing?</h2>
          <ul>
            <li><span>Rank on the top of the search engine results page and start driving results instantly after setting up an ad campaign.</span></li>
            <li><span>Be in front of those who need you. Target relevant audiences based on location, demographic, interest, and more.</span></li>
            <li><span>Reach more people and generate quality leads, increase your sales, and achieve goals with paid marketing.</span></li>
            <li><span>Track results, analyse, and get insight into what ad is working best for your target audience.</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section className="pm-section3">
      <div className="pm-section3-left">
        <XyxyxyCarousel slides={gymSlides} />
      </div>
      <div className="pm-section3-right">
        <h2 className="pm-case-title">PERFORMANCE MARKETING</h2>
        <p>The performance marketing campaign for <strong>Fitness Factory</strong> was strategically crafted to engage Bengaluru's health and fitness-conscious audience. With a sharp focus on compelling creative direction, targeted ad placement, and real-time performance tracking, the campaign drove high-quality leads and boosted membership sign-ups. Not only did it meet expectations—it exceeded them with measurable results, improved ROI, and scalable growth potential.</p>
        <a href="#" className="pm-explore-btn">EXPLORE MORE →</a>
      </div>
    </section>

    <section className="pm-section4">
      <div className="pm-section4-left">
        <h2 className="pm-case-title">PERFORMANCE MARKETING</h2>
        <p>The performance marketing campaign for <strong>Lilbeez Pre-school Academic Partner</strong>, under NIECCE EDU SOLUTIONS PVT LTD, was precisely engineered for Bengaluru's target education audience. With a clear focus on creative direction, ad precision, and consistent monitoring, the campaign produced strong lead quality and profitability. Not only were expectations met—they were surpassed with measurable, scalable results.</p>
        <a href="#" className="pm-explore-btn">EXPLORE →</a>
      </div>
      <div className="pm-section4-right">
        <XyxyxyCarousel slides={lilbeezSlides} />
      </div>
    </section>

    <section className="pm-services">
      <h2 className="pm-section-title">OUR SERVICES</h2>
      <div className="pm-services-grid">
        {services.map((s, i) => (
          <div className="pm-service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="pm-why">
      <h2 className="pm-section-title">Why Choose Us</h2>
      <div className="pm-flip-row">
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-34.png" alt="Why 1" />
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-35.png" alt="Why 2" />
      </div>
      <div className="pm-flip-row">
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-36.png" alt="Why 3" />
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-37.png" alt="Why 4" />
      </div>
    </section>

    <section className="pm-process">
      <h1 className="pm-chart-title">Performance Marketing Process</h1>
      <div className="pm-zigzag-chart">
        <div className="pm-zigzag-line" />
        {zigzagSteps.map((step, i) => (
          <div key={i} className={`pm-zigzag-step ${i % 2 === 0 ? 'pm-zigzag-left' : 'pm-zigzag-right'}`}>
            <div className={`pm-zigzag-dot ${i % 2 === 0 ? 'pm-dot-left' : 'pm-dot-right'}`} />
            <h3 className="pm-zigzag-title">{step.title}</h3>
            <p className="pm-zigzag-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="faq-showcase">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-title-block">
            <h2>Any questions?</h2>
            <h3>We got you.</h3>
          </div>
          <p className="faq-intro">
            Have something on your mind? Whether it's about our services, process, timelines, or
            pricing — we've answered the most common questions to help you move forward with
            clarity and confidence.
          </p>
        </div>
        <div className="faq-grid">
          {pmFaqs.map((faq, idx) => <PMFaqCard key={idx} faq={faq} idx={idx} />)}
        </div>
      </div>
    </section>

    <section className="pm-bottom-banner">
      <img src="https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SEO-F.png" alt="Bottom Banner" />
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img className="footer-logo" src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png" alt="Sripada Studios Digital" />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">Get Started →</button>
      </div>
      <div className="footer-divider" />
      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">Subscribe</button>
        </div>
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li>Performance Marketing</li>
            <li>Social Media Management</li>
            <li>Website Development</li>
            <li>Branding and Re-branding</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul>
            <li>Content Solution</li>
            <li>Video Production</li>
            <li>Search Engine Optimization</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-socials">
          <span className="footer-social">f</span>
          <span className="footer-social">ig</span>
          <span className="footer-social">yt</span>
        </div>
        <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
      </div>
    </footer>

  </div>
);

export default PerformanceMarketing;
