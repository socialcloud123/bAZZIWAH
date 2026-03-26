import { useState } from 'react';

const ContentSolutionPage = () => (
  <>
    <section className="w-full m-0 p-0 leading-none mt-14">
      <img
        src="https://buzziwah.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-53.png"
        alt="Content Solution"
        className="block w-full h-auto"
      />
    </section>

    <section
      className="bg-[#f5f5f5] px-10 py-16"
      style={{
        backgroundImage: "url('/SSD_Website%20(16).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-10">
        <div className="flex-1 min-w-[260px]">
          <img
            src="/banners/Social-Media-Management-5.png"
            alt="Content marketing"
            className="max-h-[460px] w-full object-contain"
          />
        </div>
        <div className="w-full max-w-[520px] overflow-hidden rounded-lg border-l-[8px] border-l-[#83cd15] bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)]">
          <div className="bg-[#83cd15] px-8 py-5 text-[clamp(16px,2vw,26px)] font-bold uppercase text-white font-['Geom']">
            Why Content Marketing?
          </div>
          <div className="px-8 py-7">
            <h2 className="mb-4 text-[clamp(18px,2vw,24px)] font-['Geom'] font-semibold text-[#5b21b6]">
              Think content marketing is <span className="font-bold">outdated</span>?
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#333] font-['Google Sans']">
              This is exactly what's <span className="font-semibold text-[#5b21b6]">holding your brand back</span>. Agree, it's old – but it's stood the test of time because{' '}
              <span className="font-semibold text-[#5b21b6]">it works</span>.
              <br />
              <br />
              In a world flooded with short and punchy copies,{' '}
              <strong>long-form and valuable content</strong> builds credibility — the kind your brand has been missing for a long time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CSSection3 />
    <CSWhyChooseUs />
    <CSFAQ />
    <CSFooter />
  </>
);

const csCards = [
  {
    title: '1. SOCIAL MEDIA CONTENT',
    borderBottom: '#ffa500',
    intro: 'We create scroll stopping content that turns your audience into customers.',
    labelColor: '#83cd15',
    items: [
      { label: 'A. Content Creation:', desc: 'From planning to execution, we create scroll-stopping content that turns your audience into customers.' },
      { label: 'B. Copywriting & Captions:', desc: "Our brainstorming copies don't just attract an audience — they keep them hooked with purpose-driven messaging." },
      { label: 'C. Strategy & Planning:', desc: "With growth in mind, we don't just post and pray — we build, plan, and grow using data and insight." },
    ],
  },
  {
    title: '2. WEBSITE CONTENT',
    borderBottom: '#83cd15',
    intro: 'We give life to your imagination through words',
    labelColor: '#009688',
    items: [
      { label: 'A. Website Copywriting:', desc: 'Clear, compelling, conversion-focused content tailored to your brand.' },
      { label: 'B. Landing Pages & Product Descriptions:', desc: 'Targeted messaging that drives action.' },
      { label: 'C. Creative Scripting:', desc: 'Narratives for explainer videos, motion graphics, and promotional content.' },
    ],
  },
  {
    title: '3. ADVERTISEMENT CONTENT',
    borderBottom: '#ffa500',
    intro: "At Sripada Studios, our creative and sassy advertisements don't just grab attention — they own it.",
    labelColor: '#83cd15',
    items: [
      { label: 'A. Social Media Campaigns:', desc: 'Scroll-stopping content made for every platform.' },
      { label: 'B. Ad Films & Promos:', desc: 'Slick, creative, and built to convert.' },
      { label: 'C. Creative Concept Development:', desc: 'Ideas that speak your brand energy.' },
    ],
  },
  {
    title: '4. BLOG CONTENT',
    borderBottom: '#ffa500',
    intro: 'From long-form depth to short-form punch, we excel at crafting content that delivers impact.',
    labelColor: '#83cd15',
    items: [
      { label: 'A. Thought Leadership:', desc: "In-depth insights from your brand's perspective and establish authority in your niche." },
      { label: 'B. Brand Stories & Case Studies:', desc: 'Real-world success stories and behind-the-scenes insights.' },
      { label: 'C. Industry Trends & News:', desc: 'Keeps your brand current and part of the bigger conversation.' },
    ],
  },
];

const CSSection3 = () => (
  <section className="bg-[#0d0d0d] px-10 py-16">
    <h2 className="mb-12 text-center font-['Geom'] text-[clamp(24px,3vw,42px)] font-black text-[#ffa500]">
      Why Do You Need Content Marketing?
    </h2>
    <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(440px,1fr))] gap-6">
      {csCards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white px-7 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          style={{ borderLeft: '8px solid #83cd15' }}
        >
          <div
            className="mb-4 pb-2 text-[clamp(16px,2vw,22px)] font-['Geom'] font-bold text-[#83cd15]"
            style={{ borderBottom: `2px solid ${card.borderBottom}` }}
          >
            {card.title}
          </div>
          <p className="mb-5 text-sm leading-[1.6] text-[#555] font-['Google Sans']">{card.intro}</p>
          <ul className="flex flex-col gap-4">
            {card.items.map((item) => (
              <li key={item.label} className="relative rounded-xl bg-[#f9f9f9] px-4 py-3 pl-9">
                <span className="absolute left-3 top-3 text-2xl leading-none text-[#ffa500]">•</span>
                <span className="mb-1 block text-sm font-semibold" style={{ color: card.labelColor }}>
                  {item.label}
                </span>
                <span className="text-sm leading-[1.6] text-[#333] font-['Google Sans']">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const csWhyCards = [
  {
    num: '1',
    title: 'We Strategize Before We Create',
    points: [
      'Every piece of content starts with a goal.',
      'Audience understanding drives the writing.',
      'Consistency across platforms ensured.',
    ],
  },
  {
    num: '2',
    title: 'Content With Long-Term Value',
    points: [
      'SEO-optimized content keeps performing.',
      'Builds trust and brand authority.',
      'Designed to convert and retain.',
    ],
  },
  {
    num: '3',
    title: 'Personalized to Your Brand',
    points: [
      'Your voice, tone, and values stand out.',
      'Content that feels uniquely you.',
      'Style adapted to match your brand identity.',
    ],
  },
  {
    num: '4',
    title: 'Versatility is Our Superpower',
    points: [
      'Blogs, ads, scripts — we do it all.',
      'Flexible tone across platforms.',
    ],
  },
];

const CSWhyChooseUs = () => (
  <section
    className="bg-gradient-to-br from-[#1a0533] via-[#2d1b69] to-[#1a0533] px-10 py-20"
    style={{
      backgroundImage: "url('/SSD_Website%20(16).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="mx-auto max-w-[1200px]">
      <h2 className="mb-10 text-center font-['Geom'] text-[clamp(24px,3vw,40px)] font-extrabold text-white">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
        {csWhyCards.map((card) => (
          <div
            key={card.num}
            className="rounded-2xl border border-[#ede7ff] bg-white px-6 py-7 shadow-[0_12px_24px_rgba(109,40,217,0.08)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6d28d9] text-sm font-bold text-white">
                {card.num}
              </span>
              <h3 className="font-['Geom'] text-[16px] font-bold text-[#6d28d9]">
                {card.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-[#3f3f46] font-['Google Sans']">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#3f3f46]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const csFaqItems = [
  {
    question: 'What is Sripada Studios Digital?',
    answer: 'Sripada Studios Digital is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.',
  },
  {
    question: 'What services do you offer?',
    answer: 'We deliver end-to-end digital solutions including filmmaking, digital marketing, brand strategy, and research-driven growth planning tailored to your goals.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on scope and deliverables, but we share a clear plan up front and keep you updated at every milestone.',
  },
  {
    question: 'Do you work with startups and SMEs?',
    answer: 'Yes. We collaborate with startups, SMEs, and enterprises, scaling our approach to match your budget and growth stage.',
  },
  {
    question: 'How do we get started?',
    answer: 'Share your goals and we will schedule a quick discovery call to craft the right strategy and timeline.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Absolutely. We offer ongoing marketing, performance tracking, and optimization packages for long-term growth.',
  },
  {
    question: 'Can you handle launch campaigns?',
    answer: 'Yes. We plan and execute launch campaigns with creative, media, and performance tracking baked in.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Every package is tailored. We build a scope that matches your outcomes, timeline, and budget.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across media, retail, hospitality, education, and tech, with strategies tailored per sector.',
  },
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on scope, complexity, and timelines. We provide transparent quotes and options.',
  },
];

const CSFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
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
          {csFaqItems.map((item, idx) => (
            <div className={`faq-card ${openFaqIndex === idx ? 'open' : ''}`} key={item.question}>
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                aria-expanded={openFaqIndex === idx}
              >
                <span>{`${idx + 1}. ${item.question}`}</span>
                <span className="faq-arrow">⌄</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CSFooter = () => (
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
);

export default ContentSolutionPage;
