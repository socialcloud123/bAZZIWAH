import { useState } from 'react';

const ContentSolutionPage = () => (
  <>
    <section className="w-full m-0 p-0 leading-none">
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

const csFaqs = [
  {
    q: 'What is Sripada Studios Digital?',
    a: 'Sripada Studios Digital is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.',
  },
  {
    q: 'What services do you offer?',
    a: 'We deliver end-to-end digital solutions including filmmaking, digital marketing, brand strategy, and research-driven growth planning tailored to your goals.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines depend on scope and deliverables, but we share a clear plan up front and keep you updated at every milestone.',
  },
  {
    q: 'Do you work with startups and SMEs?',
    a: 'Yes. We collaborate with startups, SMEs, and enterprises, scaling our approach to match your budget and growth stage.',
  },
  {
    q: 'How do we get started?',
    a: 'Share your goals and we will schedule a quick discovery call to craft the right strategy and timeline.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Absolutely. We offer ongoing marketing, performance tracking, and optimization packages for long-term growth.',
  },
  {
    q: 'Can you handle launch campaigns?',
    a: 'Yes. We plan and execute launch campaigns with creative, media, and performance tracking baked in.',
  },
  {
    q: 'Do you offer custom packages?',
    a: 'Every package is tailored. We build a scope that matches your outcomes, timeline, and budget.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We have experience across media, retail, hospitality, education, and tech, with strategies tailored per sector.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing is based on scope, complexity, and timelines. We provide transparent quotes and options.',
  },
];

const CSFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#f2fde4] px-10 py-20">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-2 text-center font-['Geom'] text-xs font-bold uppercase tracking-[0.1em] text-[#7c3aed]">
          Got questions?
        </p>
        <h2 className="mb-12 text-center font-['Geom'] text-[clamp(24px,3vw,40px)] font-extrabold text-[#1a0533]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {csFaqs.map((f, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] ${
                open === i ? 'border border-[#7c3aed]' : 'border border-transparent'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-['Geom'] text-[15px] font-bold ${
                  open === i ? 'text-[#7c3aed]' : 'text-[#1a0533]'
                }`}
              >
                {f.q}
                <span className="text-xl text-[#7c3aed]">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm leading-[1.75] text-[#444] font-['Google Sans']">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSolutionPage;
