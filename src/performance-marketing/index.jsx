import { useEffect, useRef, useState } from 'react';
import './PerformanceMarketing.css';
import '../home/Home.css';

const XyxyxyCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3000);
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
            <span
              key={i}
              className={`xyxyxy-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            />
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
    ref.current.querySelector('.pm-flip-card').style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
  {
    title: 'Social Media Marketing',
    desc: "We build your brand's presence through strategic content and targeted campaigns that convert casual scrollers into loyal customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11V7a2 2 0 0 1 2-2h1l11-4v22l-11-4H5a2 2 0 0 1-2-2v-4Z" />
        <path d="M15 5.5v13" />
        <path d="M7 7v10" />
      </svg>
    ),
  },
  {
    title: 'Account Audit & Strategy',
    desc: 'We audit your digital footprint, uncover inefficiencies, and craft a focused strategy that stretches every rupee of your marketing budget.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12" />
        <path d="M5 19h4" />
        <path d="M9 13H7" />
        <path d="M17 3a2 2 0 0 1 2 2v14l-4-2-4 2V5a2 2 0 0 1 2-2Z" />
        <path d="m9 9.4 6-2.4 6 2.5" />
      </svg>
    ),
  },
  {
    title: 'Search Engine Marketing',
    desc: 'Our SEM campaigns place your brand at the top of every relevant search — guiding prospects from discovery to purchase, every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v3l2 2" />
      </svg>
    ),
  },
  {
    title: 'Dynamic Remarketing & Product Listing Ads',
    desc: 'We re-engage high-intent visitors with personalised ad experiences that bring them back and turn browsing into buying.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11v-1a7 7 0 0 1 12-5l4 4" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v1a7 7 0 0 1-12 5l-4-4" />
      </svg>
    ),
  },
  {
    title: 'Catalogue & Shopping Ads',
    desc: 'We put your products in front of ready-to-buy customers — with the right image, price, and detail at the exact moment it matters.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h18l-1 7H4z" />
        <path d="M16 13a4 4 0 1 1-8 0" />
        <path d="M5 5 4 2H2" />
        <circle cx="9" cy="18" r="1" />
        <circle cx="15" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Marketing',
    desc: "We deliver personalised, real-time messages directly to your audience's hands — driving engagement and conversions where attention is highest.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l1.2-3.6A8 8 0 1 1 4 12" />
        <path d="M8 12a5 5 0 0 0 5 5h1l2 2" />
      </svg>
    ),
  },
  {
    title: 'Conversion Rate Optimisation',
    desc: 'We analyse your user journey — copy, design, and flow — to remove friction and turn more of your existing traffic into revenue.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4v16" />
        <path d="m8 14 4 4 4-4" />
        <path d="m16 10-4-4-4 4" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: 'YouTube Ads',
    desc: 'We create data-led video campaigns that capture attention, tell your story, and drive measurable results across every stage of the funnel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8s-.2-1.4-.8-2a3.1 3.1 0 0 0-2.2-.8C16 5 12 5 12 5s-4 0-7 .2A3.1 3.1 0 0 0 2.8 6c-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.8 16.6a3.1 3.1 0 0 0 2.2.8C8 17 12 17 12 17s4 0 7-.2a3.1 3.1 0 0 0 2.2-.8c.6-.6.8-2 .8-2s.2-1.6.2-3.2-.2-3.2-.2-3.2Z" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
  {
    title: 'LinkedIn Ads',
    desc: 'We connect B2B brands with the right decision-makers using precise targeting and strategic placements that make every impression count.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h4v12H4z" />
        <path d="M2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        <path d="M12 11a4 4 0 0 1 8 0v8h-4v-7a2 2 0 0 0-4 0v7h-4V7h4z" />
      </svg>
    ),
  },
];

const zigzagSteps = [
  { title: 'Strategy Planning', desc: 'Define goals, KPIs, audience, and funnel direction.' },
  { title: 'Channel Selection', desc: 'Select platforms like Google Ads, Meta, YouTube, and more.' },
  { title: 'Ad Creative', desc: 'Create engaging visuals and ad copy that convert.' },
  { title: 'Campaign Execution', desc: 'Launch optimized campaigns with proper targeting and budgets.' },
  { title: 'Tracking & Analytics', desc: 'Use pixels, UTM tracking, and tools like GA4, Meta Pixel.' },
  { title: 'Optimization', desc: 'Test creatives, refine bids, and enhance audience targeting.' },
  { title: 'Scaling', desc: 'Scale high-performing campaigns for growth and profit.' },
];

const pmFaqs = [
  { q: 'What is Sripada Studios Digital?', a: 'Sripada Studios Digital is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.' },
  { q: 'What services does Sripada Studios Digital offer?', a: 'Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach.' },
  { q: 'Who are your clients?', a: 'We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries.' },
  { q: 'What makes Sripada Studios Digital unique?', a: 'We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience.' },
  { q: 'Do you specialize in Kannada film promotions?', a: 'Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience.' },
  { q: 'Can you handle end-to-end digital marketing campaigns?', a: 'Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals.' },
  { q: 'How experienced is your team?', a: 'Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns.' },
  { q: 'Do you have examples of your past work?', a: 'Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise.' },
];

const PMFaqCard = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${faq.q}`}</span>
        <span className="faq-arrow">ƒO,</span>
      </button>
      <div className="faq-answer">{faq.a}</div>
    </div>
  );
};

const PerformanceMarketing = () => (
  <div className="pm-page im-font">

    <section className="relative z-[2] m-0 w-full p-0 leading-none">
      <img src="/banners/SSD_Banners.png" alt="Performance Marketing Banner" className="block h-auto w-full" />
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
            <div className="pm-service-icon" aria-hidden="true">{s.icon}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
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

    <footer className="site-footer">
      <div className="footer-cta">
        <img
          className="footer-logo"
          src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
          alt="Sripada Studios Digital"
        />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">
          Get Started →
        </button>
      </div>

      <div className="footer-divider" />

      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">
            Subscribe
          </button>
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
