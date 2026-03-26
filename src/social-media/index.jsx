import { useRef, useState, useEffect } from 'react';
import '../home/Home.css';

const SocialMediaPage = () => {
  return (
    <>
      <section className="relative z-[2] m-0 w-full p-0 leading-none">
        <img
          src="https://buzziwah.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-4-1-scaled.png"
          alt="Social Media Management"
          className="block h-auto w-full"
        />
      </section>

      <section className="relative z-[1] -mt-[200px] bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#1a0533] px-10 pb-10 pt-[210px]">
        <div className="mx-auto flex max-w-[1200px] justify-end">
          <div className="max-w-[580px] text-left">
            <h2 className="mb-5 font-['Syne'] text-[clamp(24px,3vw,40px)] font-bold leading-tight text-white">
              Social Media Management
            </h2>
            <p className="mb-9 text-[16px] font-medium leading-[1.8] text-white/85">
              We all know it's not just about posting; it's about crafting messages that resonate deeply
              with your audience. The real magic lies in the right form of communication and the strategy
              behind it, tailored to capture attention and inspire action. The key to building lasting
              social media relationships with your ideal customers is found in a perfect blend of technical
              expertise and creative strategy. By engaging authentically and providing value-driven content,
              you foster trust and loyalty, transforming followers into brand advocates.
            </p>
            <a
              href="http://linkedin.com/in/satish-ms-b7842a8b"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#9333ea] px-7 py-3 font-['Syne'] text-xs font-bold uppercase tracking-[0.08em] text-white"
            >
              Know More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f2fde4] px-10 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(480px,1fr))] items-center gap-16">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#eab308" />
              </svg>
            </div>
            <div className="relative z-0 grid grid-cols-2 gap-5">
              <FeatureCard
                icon={
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                title="Clear Strategy\nWith Goals"
                desc="Objective based content for you."
              />
              <FeatureCard
                icon={
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                title="Understanding\nTarget Audience"
                desc="Relevancy and personalization is everything."
              />
              <FeatureCard
                icon={
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                }
                title="Consistent &\nEngaging Content"
                desc="Maintain your Brand voice daily."
              />
              <FeatureCard
                icon={
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <path d="M6 11l3-3 3 3 6-6" />
                  </svg>
                }
                title="Analytics &\nOptimization"
                desc="Get ready to see viral numbers."
              />
            </div>
          </div>

          <div>
            <div className="mb-6 h-[2px] w-12 bg-gradient-to-r from-[#fdba74] to-[#a855f7]" />
            <h2 className="mb-4 font-['Syne'] text-[clamp(24px,3vw,36px)] font-extrabold leading-tight text-[#7fc52b]">
              Gotcha! We're here for it.
            </h2>
            <p className="mb-9 text-[15px] font-medium leading-[1.85] text-[#333]">
              Let us be your brand's voice on social media, weaving your unique stories in ways that captivate
              and engage. Our social media management service focuses on creating content that speaks directly
              to your audience's needs and interests. What works for your audience is what makes them pause,
              engage, and ultimately, choose you. We're all about driving the right conversations that lead to
              real connections, turning your social media presence into a powerful conversion tool.
            </p>
            <p className="mb-1 font-['Syne'] text-xs font-bold uppercase tracking-[0.08em] text-[#7fc52b]">
              We are with
            </p>
            <p className="mb-9 font-['Syne'] text-[clamp(52px,6vw,76px)] font-extrabold leading-none tracking-[-2px] text-[#7fc52b]">
              60+ Brands
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#7fc52b] px-7 py-3 font-['Syne'] text-xs font-bold uppercase tracking-[0.08em] text-black"
            >
              EXPLORE MORE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <SMFaq />

      <footer className="site-footer">
        <div className="footer-cta">
          <img
            className="footer-logo"
            src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
            alt="Sripada Studios Digital"
          />
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
    </>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-3 rounded-3xl bg-white px-6 py-8 text-center shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
    {icon}
    <h3 className="whitespace-pre-line text-[15px] font-bold leading-snug text-[#8b5cf6]">{title}</h3>
    <p className="text-[13px] leading-relaxed text-[#555]">{desc}</p>
  </div>
);

const FlipCard = ({ src, alt }) => {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const rect = e.currentTarget.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      className="flex grow basis-[calc(50%-15px)] max-w-[700px]"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        className="relative h-[400px] w-full cursor-pointer overflow-hidden rounded-xl shadow-[0_8px_15px_rgba(0,0,0,0.2)] transition-transform duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
      </div>
    </div>
  );
};

const Section4 = () => {
  const rows = [
    [
      { src: 'https://buzziwah.com/wp-content/uploads/2025/05/2.png', alt: 'Social Media 1' },
      { src: 'https://buzziwah.com/wp-content/uploads/2025/05/1.png', alt: 'Social Media 2' },
    ],
    [
      { src: 'https://buzziwah.com/wp-content/uploads/2025/05/The-most-appreciated-fitness-brand-page-1.png', alt: 'Fitness Brand' },
      { src: 'https://buzziwah.com/wp-content/uploads/2025/05/4.png', alt: 'Social Media 4' },
    ],
  ];

  return (
    <section className="bg-[#111] px-5 py-16">
      <div className="mx-auto mb-10 max-w-[1440px] text-center">
        <h2 className="font-['Syne'] text-[clamp(24px,3vw,40px)] font-extrabold text-[#c8f03d]">
          We're Here To Change Your Business Look
        </h2>
        <p className="text-sm text-[#aaa]">Click to watch the Digital Journey of progression.</p>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-8">
            {row.map((card) => (
              <FlipCard key={card.src} src={card.src} alt={card.alt} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const igImages = [
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-12.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-19.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-18.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-17.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-14.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-13.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/CRISPY-VADA-15.png',
];

const strategyCards = [
  { heading: 'Narrative-First Approach', text: 'We take a narrative-first approach, shaping your brand story from idea to execution—crafting slides that connect deeply and drive engagement.' },
  { heading: 'SEO-Driven Asset Structuring', text: 'We ensure every asset is SEO-optimized—embedding keywords like "Instagram poster design" and "visual marketing strategy" into file names, alt-text, and metadata.' },
  { heading: 'Consistent Brand Identity', text: "We apply your brand's logo, colors, and fonts consistently across campaigns, building stronger brand recognition and trust." },
  { heading: 'Flexible Carousel Frameworks', text: "Our modular slide templates adapt to Instagram's aspect ratios—ideal for storytelling, product showcases, or campaign summaries." },
  { heading: 'Performance Optimization', text: 'We optimize image quality, resolution, and captions to ensure quick loading, high clarity, and more engagement—without compromising visual appeal.' },
];

const IgPhone = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % igImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-[520px] w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
      <div className="flex h-11 items-center justify-between px-4">
        <div className="h-7 w-7 rounded-full bg-[#333]" />
        <div className="h-1 w-1 rounded-full bg-[#333] shadow-[0_6px_0_#333,0_12px_0_#333]" />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-current * 100}%)` }}
        >
          {igImages.map((src, i) => (
            <img key={i} src={src} alt={`slide ${i}`} className="min-w-full object-cover" />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {igImages.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 cursor-pointer rounded-full ${
                i === current ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex h-11 items-center justify-between px-3">
        <div className="flex gap-4">
          <img src="https://img.icons8.com/fluency/48/like.png" alt="like" className="h-7 w-7" />
          <img src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="comment" className="h-7 w-7" />
          <img src="https://img.icons8.com/ios/50/paper-plane.png" alt="share" className="h-7 w-7" />
        </div>
        <img src="https://img.icons8.com/ios-filled/50/bookmark-ribbon.png" alt="save" className="h-7 w-7" />
      </div>
    </div>
  );
};

const Section5 = () => (
  <section className="bg-[#f5f5f5] px-10 py-16">
    <div className="mb-12 text-center">
      <p className="text-[15px] leading-[1.7] text-[#333]">
        Creating a brand and establishing is quite a job.<br />
        Our expertise &amp; creativity makes it better &amp;<br />
        <strong>WE STAND IN FOR YOU.</strong>
      </p>
    </div>

    <div className="mx-auto flex max-w-[1100px] flex-wrap items-start justify-center gap-16">
      <div className="flex flex-col items-start gap-6">
        <h2 className="font-['Syne'] text-[clamp(52px,8vw,96px)] font-black leading-[0.95] text-[#7c3aed]">
          YOUR<br />POST
        </h2>
        <IgPhone />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h3 className="mb-2 text-center font-['Syne'] text-lg font-bold text-[#7c3aed]">
          Instagram Carousel Strategy By Sripada Studios Digital
        </h3>
        {strategyCards.map((c, i) => (
          <div
            key={i}
            className="rounded-lg bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            style={{ borderLeft: `4px solid ${i % 2 === 0 ? '#adfa3b' : '#009688'}` }}
          >
            <p className="mb-1 text-[15px] font-semibold text-[#8b5cf6]">{c.heading}</p>
            <p className="text-sm leading-[1.55] text-[#333]">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const sssImages = [
  'https://buzziwah.com/wp-content/uploads/2025/05/Bodhiable_Story-1-1.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/01-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/Fitness-Factory-1.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/Story_01-1.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/End-Card-2.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/story-1.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/WMN_Story-1.png',
  'https://buzziwah.com/wp-content/uploads/2025/05/FRY_S-STORIES.png',
];

const storiesCards = [
  { heading: 'Engaging & On-Brand Stories', text: 'At Sripada Studios Digital, we create engaging, on-brand Stories that connect instantly with your audience. From product launches to behind-the-scenes, our Stories boost interaction and amplify your digital presence.' },
  { heading: 'Goal-Driven Concept Development', text: 'We begin with your objectives and craft creative strategies that align with your brand. Every concept is built to drive engagement, boost performance, and achieve measurable results.' },
  { heading: 'Consistent Brand Integration', text: 'By highlighting your brand in all the creatives, we ensure it echoes across all the platforms on social media.' },
  { heading: 'Mobile-Optimized Design', text: 'We create mobile-first experiences that prioritize speed, usability, and seamless navigation. From UI to content flow, every element is tailored for smaller screens without compromising impact.' },
  { heading: 'Performance Focus', text: "We don't just create, we optimize for outcomes. Every campaign, design, and strategy is built to drive clicks, higher conversions and better ROI." },
];

const StoryPhone = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % sssImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[480px] w-[260px] flex-shrink-0 overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
      <div className="absolute left-2 right-2 top-2 z-20 flex gap-1">
        {sssImages.map((_, i) => (
          <div key={i} className="flex-1 overflow-hidden rounded bg-white/40">
            <div
              className="h-[3px] bg-white"
              style={{ width: i < current ? '100%' : i === current ? '100%' : '0%', transition: i === current ? 'width 1.5s linear' : 'none' }}
            />
          </div>
        ))}
      </div>
      <div
        className="flex h-full transition-transform duration-400 ease-in-out"
        style={{ transform: `translateX(${-current * 100}%)` }}
      >
        {sssImages.map((src, i) => (
          <img key={i} src={src} alt={`story ${i}`} className="min-w-full object-cover" />
        ))}
      </div>
    </div>
  );
};

const Section6 = () => (
  <section className="bg-[#0a0a0a] px-10 py-16">
    <div className="mx-auto flex max-w-[1100px] flex-wrap items-start justify-center gap-16">
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="mb-2 text-center font-['Syne'] text-lg font-bold text-[#7c3aed]">
          Instagram Stories by Sripada Studios Digital
        </h3>
        {storiesCards.map((c, i) => (
          <div
            key={i}
            className="rounded-lg bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            style={{ borderLeft: `4px solid ${i % 2 === 0 ? '#009688' : '#ffa500'}` }}
          >
            <p className="mb-1 text-[15px] font-semibold text-[#7c3aed]">{c.heading}</p>
            <p className="text-sm leading-[1.55] text-[#333]">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-6">
        <h2 className="font-['Syne'] text-[clamp(52px,8vw,96px)] font-black leading-[0.95] text-[#c8f03d]">
          STORY
        </h2>
        <StoryPhone />
      </div>
    </div>
  </section>
);

const reelVideos = [
  'https://buzziwah.com/wp-content/uploads/2025/05/ﬁtness-fitnessmotivation-bangaloregyms-southbangalore-isrolayout.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/05/In-Frame-@diyapalakkal.official.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/05/Samrat-food.mp4.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/05/prasanth.mp4.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/05/Deepthi.mp4.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/05/Copper-Edge.mp4.mp4',
];

const reelsCards = [
  { heading: 'Engaging Reels That Convert', text: 'At Sripada Studios Digital, we craft scroll-stopping Reels that boost brand visibility and engagement. From product highlights to behind-the-scenes clips, our content blends creativity with strategy to tell your brand story and grow your community.' },
  { heading: 'Content Strategy & Hook Planning', text: 'We begin with your goals—be it reach, sales, or traffic—and build tailored storyboards and scripts using trending hooks and audience insights to maximize impact and engagement.' },
  { heading: 'Brand-Integrated Visuals', text: 'Each Reel is tailored to reflect your visual identity—logo, colors, fonts, and tone—ensuring consistency across your digital presence.' },
  { heading: 'Narrative-Driven Creativity', text: "We blend storytelling with structure, delivering Reels that take your audience on a clear, compelling journey—whether it's 15 seconds or a full 60." },
  { heading: 'Performance Ready Assets', text: 'We optimize for mobile with crisp visuals, subtitles, and fast-loading exports—plus smart captions to boost reach and engagement.' },
];

const ReelPhone = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (videoRefs.current[current]) videoRefs.current[current].pause();
      setCurrent((i) => {
        const next = (i + 1) % reelVideos.length;
        setTimeout(() => {
          if (videoRefs.current[next]) videoRefs.current[next].play();
        }, 50);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[480px] w-[260px] flex-shrink-0 overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
      <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[100px] -translate-x-1/2 rounded-b-[12px] bg-[#333]" />
      <div className="absolute bottom-2 left-1/2 z-10 h-1 w-20 -translate-x-1/2 rounded bg-[#333]" />
      <div className="absolute left-2 right-2 top-6 z-20 flex gap-1">
        {reelVideos.map((_, i) => (
          <div key={i} className="flex-1 overflow-hidden rounded bg-white/40">
            <div className="h-[3px] bg-white" style={{ width: i < current ? '100%' : '0%', transition: i === current ? 'width 5s linear' : 'none' }} />
          </div>
        ))}
      </div>
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-current * 100}%)` }}
      >
        {reelVideos.map((src, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="min-w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

const Section7 = () => (
  <section className="bg-[#f2fde4] px-10 py-16">
    <div className="mx-auto flex max-w-[1100px] flex-wrap items-start justify-center gap-16">
      <div className="flex flex-col items-start gap-6">
        <h2 className="font-['Syne'] text-[clamp(52px,8vw,96px)] font-black leading-[0.95] text-[#7c3aed]">
          REEL
        </h2>
        <ReelPhone />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="mb-2 text-center font-['Syne'] text-lg font-bold text-[#7c3aed]">
          Instagram Reels By Sripada Studios Digital
        </h3>
        {reelsCards.map((c, i) => (
          <div
            key={i}
            className="rounded-lg bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
            style={{ borderLeft: `4px solid ${i % 2 === 0 ? '#009688' : '#ffa500'}` }}
          >
            <p className="mb-1 text-[15px] font-semibold text-[#7c3aed]">{c.heading}</p>
            <p className="text-sm leading-[1.55] text-[#333]">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const carouselImages = [
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/ISITA_1-1.jpg', alt: 'Carousel 1' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/01-2-scaled.jpg', alt: 'Carousel 2' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/5-days-2.jpg', alt: 'Carousel 3' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/24-04-2025-1.png', alt: 'Carousel 4' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/45-TEASER-POSTERS-1.jpg', alt: 'Carousel 5' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/Dear-Moments-Womens-Day-1.png', alt: 'Carousel 6' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/SOMETI_1-1.jpg', alt: 'Carousel 7' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-1-1.jpeg', alt: 'Carousel 8' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-2.jpeg', alt: 'Carousel 9' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-1.jpeg', alt: 'Carousel 10' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/Ui-Posters-4-Days-to-Go-1.png', alt: 'Carousel 11' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/G9-CME-POSTS.png', alt: 'Carousel 12' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/Song_01.png', alt: 'Carousel 13' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/Song_02.png', alt: 'Carousel 14' },
  { src: 'https://buzziwah.com/wp-content/uploads/2025/05/Song_03.png', alt: 'Carousel 15' },
];

const Section8 = () => (
  <section className="bg-white pt-16">
    <div className="mb-10 px-10 text-center">
      <h2 className="font-['Syne'] text-[clamp(24px,4vw,48px)] font-black text-[#7c3aed]">
        SPECIAL DAY CREATIVE
      </h2>
    </div>

    <div className="mx-auto mb-16 flex max-w-[1100px] flex-wrap items-start gap-12 px-10">
      <div className="flex-1">
        <h3 className="mb-5 font-['Syne'] text-[22px] font-extrabold text-[#7fc52b]">
          PRODUCTION HOUSE MANAGEMENT
        </h3>
        <p className="mb-4 text-[15px] leading-[1.85] text-[#333]">
          At Sripada Studios, we specialize in <strong>social media management for film production houses</strong>, delivering consistent and impactful digital presence year-round. From managing high-engagement campaigns during peak <strong>film release seasons</strong> to keeping audiences captivated with <strong>behind-the-scenes trivia</strong>, <strong>interactive challenges</strong>, <strong>special day celebrations</strong>, and curated <strong>social media campaigns</strong>, we ensure every production house remains relevant and connected. Our strategic approach not only boosts online engagement but also strengthens <strong>brand sustainability</strong> in the competitive entertainment industry.
        </p>
        <p className="mb-7 text-[15px] leading-[1.85] text-[#333]">
          Trusted by renowned names like <strong>Suraj Production</strong>, <strong>G9 CME</strong>, <strong>Garuda Motion Pictures</strong>, <strong>EK Entertainers</strong>, and <strong>EK Pictures</strong>, Sripada Studios continues to be a leading partner in <strong>digital marketing for the film industry</strong>.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-[#c8f03d] px-7 py-3 font-['Syne'] text-xs font-bold uppercase tracking-[0.08em] text-black"
        >
          EXPLORE MORE
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="flex flex-1 gap-3">
        <img
          src="https://buzziwah.com/wp-content/uploads/2025/05/24-04-2025-1.png"
          alt="Production 1"
          className="w-1/2 rounded-xl object-cover [aspect-ratio:3/4]"
        />
        <img
          src="https://buzziwah.com/wp-content/uploads/2025/05/45-TEASER-POSTERS-1.jpg"
          alt="Production 2"
          className="w-1/2 rounded-xl object-cover [aspect-ratio:3/4]"
        />
      </div>
    </div>

    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-1/5 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-1/5 bg-gradient-to-l from-white to-transparent" />
      <div className="aaaa-animate flex w-max">
        {[...carouselImages, ...carouselImages].map((img, i) => (
          <div key={i} className="h-[450px] w-[370px] flex-shrink-0">
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const viralVideos = [
  'https://buzziwah.com/wp-content/uploads/2025/10/ಚಂದ್ರ-ಗ್ರಹಣ-ದಿನ-ಗರ್ಭಿಣಿಯರು-ಏನು-ಮಾಡಬೇಕು-Doctors-AdviceFt.-Dr-ರಮ್ಯಾ-PriyaClarifying-the-doubts-re.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/10/Share-this-to-a-90s-kid-🤗Dear-90s-kids-you-know-you-are-at-your-fertile-reproductive-health-n.mp4',
  'https://buzziwah.com/wp-content/uploads/2025/10/There-are-different-types-of-contraceptives-a-woman-can-take-here-we-are-speaking-about-type-1.mp4',
];

const VideoCarousel = () => {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  const moveTo = (i) => {
    const next = (i + viralVideos.length) % viralVideos.length;
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
    setIndex(next);
    setTimeout(() => {
      if (videoRefs.current[next]) videoRefs.current[next].play().catch(() => {});
    }, 50);
  };

  useEffect(() => {
    const timer = setInterval(() => moveTo(index + 1), 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative max-w-[560px] flex-1 overflow-hidden rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${-index * 100}%)` }}>
        {viralVideos.map((src, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            muted
            playsInline
            loop
            preload="metadata"
            className="h-[360px] min-w-full bg-black object-cover"
          />
        ))}
      </div>
      <button onClick={() => moveTo(index - 1)} className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
        &#10094;
      </button>
      <button onClick={() => moveTo(index + 1)} className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
        &#10095;
      </button>
    </div>
  );
};

const Section9 = () => (
  <section className="bg-[#0a0a0a] px-10 py-16">
    <div className="mx-auto max-w-[1100px]">
      <h2 className="mb-12 text-center font-['Syne'] text-[clamp(24px,4vw,48px)] font-black text-white">
        &amp; IT IS <span className="text-[#c8f03d]">VIRAL NOW</span>
      </h2>

      <div className="flex flex-wrap items-start gap-16">
        <div className="flex-1">
          <h3 className="mb-5 font-['Syne'] text-[28px] font-black text-white">REELS</h3>
          <p className="mb-4 text-[15px] leading-[1.85] text-[#ccc]">
            At Sripada Studios Digital, <strong className="text-white">virality is at the core of our content strategy</strong>. We specialize in crafting <strong className="text-white">reels, videos, and carousels</strong> that don't just perform—they <strong className="text-white">go viral</strong>, helping brands gain massive visibility and organic growth. Our expert team blends <strong className="text-white">social media trends, meme culture</strong>, and <strong className="text-white">strategic video editing</strong> to create content that resonates with the audience and drives results.
          </p>
          <p className="mb-4 text-[15px] leading-[1.85] text-[#ccc]">
            In 2024 alone, our <strong className="text-white">social media management and video editing services</strong> contributed to over <strong className="text-white">200 million+ views</strong> across various platforms. One standout success is the <strong className="text-white">Samrat Restaurant's "The Hunger Reel"</strong>, which exploded on Instagram with <strong className="text-white">40 million+ views in just 25 days</strong>, bringing in <strong className="text-white">over 8,000 new followers</strong> within the same timeframe. So what made it viral? We tapped into popular <strong className="text-white">food memes</strong>, referenced iconic <strong className="text-white">film scenes</strong>, and used <strong className="text-white">relatable, slang-driven captions</strong> to make the content fun, shareable, and culturally relevant.
          </p>
          <p className="mb-7 text-[15px] leading-[1.85] text-[#ccc]">
            With over <strong className="text-white">15+ viral reels</strong> on a single page, Sripada Studios Digital is your go-to for <strong className="text-white">viral marketing, Instagram reel strategy</strong>, and <strong className="text-white">branded content that breaks the internet</strong>.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#c8f03d] px-7 py-3 font-['Syne'] text-xs font-bold uppercase tracking-[0.08em] text-black"
          >
            EXPLORE MORE
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <VideoCarousel />
      </div>
    </div>
  </section>
);

const Section10 = () => (
  <section className="bg-[#f2fde4] px-10 py-16">
    <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-10">
      {[
        { src: 'https://buzziwah.com/wp-content/uploads/2025/05/AK-1-1.png', name: 'DEEPTHI PRASHANTH' },
        { src: 'https://buzziwah.com/wp-content/uploads/2025/05/AK-9.png', name: 'RAMESH ARAVIND' },
      ].map((p) => (
        <div key={p.name} className="flex flex-1 flex-col items-center gap-4">
          <img src={p.src} alt={p.name} className="w-full rounded-xl object-cover" />
          <h3 className="font-['Syne'] text-[22px] font-extrabold text-[#7c3aed]">{p.name}</h3>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-[#c8f03d] px-6 py-2 font-['Syne'] text-xs font-bold text-black">
            Click here →
          </a>
        </div>
      ))}
    </div>
  </section>
);

const testimonials = [
  { name: 'Rahul Sharma', role: 'Founder, FitLife Brand', text: 'Buzziwah transformed our Instagram presence completely. Our engagement tripled in just 2 months and the content quality is unmatched.' },
  { name: 'Priya Nair', role: 'Marketing Head, Samrat Restaurant', text: 'The Hunger Reel they created went absolutely viral — 40M+ views in 25 days. We gained thousands of followers overnight. Incredible team!' },
  { name: 'Deepak Menon', role: 'CEO, Garuda Motion Pictures', text: 'Their film release campaigns are strategic and creative. They understand the entertainment industry deeply and deliver results every time.' },
  { name: 'Sneha Reddy', role: 'Owner, Little Kidz Pre-School', text: 'From reels to carousels, every piece of content they create feels authentic and on-brand. Our parents love the posts and engagement is through the roof.' },
  { name: 'Arjun Patel', role: 'Director, EK Entertainers', text: 'Professional, creative, and always on time. Buzziwah is the only social media partner we trust for our production house campaigns.' },
  { name: 'Kavitha Rao', role: 'Brand Manager, Fitness Factory', text: 'The team at Buzziwah truly understands fitness branding. Our page grew by 8,000+ followers in a month. Best investment we made.' },
];

const faqs = [
  { q: 'What services does Buzziwah Studio offer?', a: 'We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics.' },
  { q: 'Which platforms do you manage?', a: 'We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable engagement growth within 30–60 days. Viral results like our Samrat campaign can happen much faster with the right strategy.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content.' },
  { q: 'What makes Buzziwah different from other agencies?', a: "We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post — we craft content that resonates and converts." },
  { q: 'How do I get started with Buzziwah?', a: 'Simply click "Get Started" or reach out via our contact page. We\'ll schedule a discovery call to understand your brand and build a custom strategy.' },
];

const Section11 = () => (
  <section className="bg-[#1a0533] px-10 py-20">
    <div className="mx-auto max-w-[1100px]">
      <p className="mb-2 text-center font-['Syne'] text-xs font-bold uppercase tracking-[0.1em] text-[#c8f03d]">What clients say</p>
      <h2 className="mb-12 text-center font-['Syne'] text-[clamp(24px,3vw,40px)] font-extrabold text-white">
        Real Results, Real Stories
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`flex flex-col gap-3 rounded-2xl border-l-4 px-6 py-7 ${
              i % 2 === 0 ? 'bg-[#2d1b69]' : 'bg-[#1e0a40]'
            }`}
            style={{ borderLeftColor: '#c8f03d' }}
          >
            <p className="text-sm italic leading-[1.75] text-white/85">"{t.text}"</p>
            <div>
              <p className="font-['Syne'] text-sm font-bold text-[#c8f03d]">{t.name}</p>
              <p className="text-xs text-white/50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SMFaqCard = ({ f, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${i + 1}. ${f.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{f.a}</div>
    </div>
  );
};

const SMFaq = () => (
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
        {faqs.map((f, i) => <SMFaqCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

export default SocialMediaPage;
