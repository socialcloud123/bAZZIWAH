import React, { useEffect, useMemo, useRef, useState } from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import Section10 from '../WebDevSections/Section10';
import '../home/Home.css';

const Branding = () => {
  const pages = useMemo(
    () => [
      {
        back: null,
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ANGOLA-ACADEMY-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ANGOLA-ACADEMY-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CINIMINI-2.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CINIMINI.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/SVNI-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/SVNI-3.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRIME-STOPPER-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRIME-STOPPER-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/BODHIABLE-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/BODHIABLE.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/HELLO-RAMESH-4.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/HELLO-RAMESH-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/KOVEDAA-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/KOVEDAA.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/NKR-2.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/NKR.png',
        front: null,
        cover: true,
      },
    ],
    []
  );

  const pageRefs = useRef([]);
  const [flipIndex, setFlipIndex] = useState(pages.length);
  const [zIndex, setZIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const flipRight = () => {
    let nextIndex = flipIndex;
    if (nextIndex >= 1) {
      nextIndex -= 1;
    } else {
      nextIndex = pages.length - 1;
      pageRefs.current.forEach((page) => {
        if (!page) return;
        page.classList.remove('flipbk-flip');
        setTimeout(() => {
          page.style.zIndex = 'auto';
        }, 300);
      });
      setZIndex(1);
    }

    const target = pageRefs.current[nextIndex];
    if (target) {
      target.classList.add('flipbk-flip');
      const nextZ = zIndex + 1;
      target.style.zIndex = nextZ;
      setZIndex(nextZ);
    }
    setFlipIndex(nextIndex);
  };

  const flipLeft = () => {
    let nextIndex = flipIndex;
    if (nextIndex < pages.length) {
      nextIndex += 1;
    } else {
      nextIndex = 1;
      for (let i = pages.length - 1; i > 0; i -= 1) {
        const page = pageRefs.current[i];
        if (!page) continue;
        page.classList.add('flipbk-flip');
        page.style.zIndex = pages.length + 1 - i;
      }
    }

    const target = pageRefs.current[nextIndex - 1];
    if (target) {
      target.classList.remove('flipbk-flip');
      setTimeout(() => {
        target.style.zIndex = 'auto';
      }, 350);
    }
    setFlipIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      flipRight();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="branding-page">
      <section className="relative z-[2] m-0 w-full p-0 leading-none">
        <img
          className="block w-full h-[190px] object-cover sm:h-[190px] md:h-[420px] lg:h-[720px]"
          src="/banners/branding-page-banner.png"
          alt="Branding banner"
        />
      </section>

      <section
        className="relative z-[1] -mt-[120px] px-5 pb-8 pt-[140px] text-center sm:px-8 sm:pt-[170px] md:-mt-[200px] md:px-10 md:pb-10 md:pt-[210px]"
        style={{
          backgroundImage: "url('/shared-purple-grid-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="relative mx-auto mb-6 h-[420px] w-[90vw] max-w-[520px] sm:h-[500px] sm:max-w-[600px] md:h-[600px] md:w-[700px] md:max-w-[90vw]"
          style={{ perspective: '1200px' }}
        >
          {pages.map((page, idx) => (
            <div
              className="absolute inset-y-0 right-0 h-full w-1/2 rounded-l-[10px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
              key={`page-${idx}`}
              ref={(el) => {
                pageRefs.current[idx] = el;
              }}
              style={{ transformOrigin: 'left' }}
            >
              <figure
                className="absolute inset-0 overflow-hidden bg-white bg-cover bg-center [backface-visibility:hidden] rounded-l-[10px] shadow-[-2px_2px_15px_-2px_rgba(0,0,0,0.2)]"
                style={
                  page.back
                    ? { backgroundImage: `url('${page.back}')`, transform: 'rotateY(180deg)' }
                    : { transform: 'rotateY(180deg)' }
                }
              />
              {page.cover ? (
                <figure className="absolute inset-0 overflow-hidden bg-[#ffcb63] [backface-visibility:hidden] rounded-r-[10px] shadow-[2px_2px_15px_-2px_rgba(0,0,0,0.2)] text-left px-6 py-8 sm:px-8 sm:py-10">
                  <h1 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
                    SRIPADA STUDIOS
                  </h1>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-black/80">
                    Branding
                  </p>
                </figure>
              ) : (
                <figure
                  className="absolute inset-0 overflow-hidden bg-white bg-cover bg-center [backface-visibility:hidden] rounded-r-[10px] shadow-[2px_2px_15px_-2px_rgba(0,0,0,0.2)]"
                  style={page.front ? { backgroundImage: `url('${page.front}')` } : undefined}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={flipLeft}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-6 sm:text-xs"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={flipRight}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-6 sm:text-xs"
          >
            Next
          </button>
        </div>
      </section>

      <section className="parallax-stack">
        <div className="parallax-inner">
          <div className="parallax-header">
            <p>OUR BEST PROJECTS</p>
            <h2>Our Success Projects</h2>
            <h3>That Inspire</h3>
          </div>

          <ScrollStack
            className="parallax-stack-list"
            useWindowScroll
            itemDistance={80}
            itemScale={0}
            itemStackDistance={14}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={1}
            parallaxStrength={0}
          >
            {[
              { src: '/branding images/SSD_Performance-Marketing-Webpage-2.png', label: 'Brand Strategy' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-45.png', label: 'Competitive Analysis' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-50.png', label: 'Brand Guidelines' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-48.png', label: 'Tone of Voice & Messaging Frameworks' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-46.png', label: 'Strategic Planning & Alignment' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-49.png', label: 'Branding & Packaging Design' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-47.png', label: 'Final Brand Deliverables' },
            ].map((item, idx) => (
              <ScrollStackItem itemClassName="parallax-card" key={`parallax-${item.src}`}>
                <div className="parallax-media" style={{ backgroundImage: `url('${item.src}')` }} />
                <div className="parallax-label">
                  <span>{`0${idx + 1}`}</span>
                  <span>{item.label}</span>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
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
              Have something on your mind? Whether it’s about our services, process, timelines, or
              pricing — we’ve answered the most common questions to help you move forward with
              clarity and confidence.
            </p>
          </div>

          {(() => {
            const faqItems = [
              {
                question: 'What does a branding project include?',
                answer:
                  'A typical branding project includes identity design, visual system, brand guidelines, and messaging support tailored to your goals.',
              },
              {
                question: 'How long does branding take?',
                answer:
                  'Timelines depend on scope, but most projects take 3–6 weeks including revisions and final delivery.',
              },
              {
                question: 'Can you refresh an existing brand?',
                answer:
                  'Yes. We can evolve your current identity while preserving recognition and improving clarity.',
              },
              {
                question: 'Will I get brand guidelines?',
                answer:
                  'Absolutely. We deliver a clear brand guide to ensure consistent use across all platforms.',
              },
              {
                question: 'Do you also handle content for the brand?',
                answer:
                  'Yes. We can support copy, social templates, and launch assets as part of the package.',
              },
            ];

            const leftItems = faqItems
              .map((item, idx) => ({ item, idx }))
              .filter((_, idx) => idx % 2 === 0);
            const rightItems = faqItems
              .map((item, idx) => ({ item, idx }))
              .filter((_, idx) => idx % 2 !== 0);

            return (
              <div className="faq-columns">
                <div className="faq-column">
                  {leftItems.map(({ item, idx }) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div className={`faq-card${isOpen ? ' open' : ''}`} key={item.question}>
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => setOpenFaqIndex(idx)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${idx}`}
                        >
                          <span>{`${idx + 1}. ${item.question}`}</span>
                          <span className="faq-arrow">⌄</span>
                        </button>
                        <div className="faq-answer" id={`faq-answer-${idx}`}>
                          {item.answer}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="faq-column">
                  {rightItems.map(({ item, idx }) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div className={`faq-card${isOpen ? ' open' : ''}`} key={item.question}>
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => setOpenFaqIndex(idx)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${idx}`}
                        >
                          <span>{`${idx + 1}. ${item.question}`}</span>
                          <span className="faq-arrow">⌄</span>
                        </button>
                        <div className="faq-answer" id={`faq-answer-${idx}`}>
                          {item.answer}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <Section10 />

    </div>
  );
};

export default Branding;
