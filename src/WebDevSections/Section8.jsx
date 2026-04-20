import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section8 = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    { title: "Website Planning & Structure", desc: "Strategic planning and information architecture that creates intuitive user journeys and clear navigation paths." },
    { title: "UI/UX Design", desc: "Beautiful, user-centered interfaces that blend aesthetics with functionality for seamless experiences." },
    { title: "Responsive Website Development", desc: "Fully responsive websites that adapt perfectly to all devices, from mobile to desktop." },
    { title: "Landing Pages for Campaigns", desc: "High-converting landing pages designed specifically for your marketing campaigns and lead generation." },
    { title: "Content & Messaging", desc: "Compelling copy and strategic messaging that resonates with your audience and drives action." },
    { title: "SEO-ready Setup", desc: "Built-in SEO optimization from the ground up to ensure your website ranks well and gets discovered." },
    { title: "Speed & Performance Optimisation", desc: "Lightning-fast load times and optimized performance for better user experience and conversions." },
    { title: "Ongoing Support", desc: "Continuous maintenance, updates, and support to keep your website running smoothly and securely." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerItems = headerRef.current?.querySelectorAll(".wc8-anim-head");
      const cards = cardsRef.current.filter(Boolean);

      gsap.set(headerItems, { opacity: 0, y: 28 });
      gsap.set(cards, { opacity: 0, y: 36, scale: 0.97 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headerItems, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      }).to(
        cards,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wc8-section"
      style={{
        backgroundColor: "#05081f",
        backgroundImage: `
          radial-gradient(circle at 14% 22%, rgba(110, 54, 170, 0.45), transparent 34%),
          radial-gradient(circle at 16% 38%, rgba(49, 120, 184, 0.25), transparent 30%),
          repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 148px,
            rgba(64, 80, 145, 0.2) 150px,
            rgba(64, 80, 145, 0.2) 151px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 148px,
            rgba(64, 80, 145, 0.2) 150px,
            rgba(64, 80, 145, 0.2) 151px
          )
        `,
        padding: "84px 6% 96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1220, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          ref={headerRef}
          className="wc8-header"
          style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 56px" }}
        >
          <p
            className="wc8-anim-head"
            style={{
              margin: "0 0 14px",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Web Development
          </p>
          <h2
            className="wc8-anim-head"
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#ffffff",
            }}
          >
            Narrate your brand story through the website
          </h2>
          <p
            className="wc8-anim-head"
            style={{
              margin: 0,
              fontSize: "clamp(16px, 1.8vw, 22px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            From strategic planning to ongoing support, we deliver comprehensive web solutions that bring your brand story to life and drive meaningful results.
          </p>
        </div>

        <div className="wc8-grid">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="wc8-card"
            >
              <div className="wc8-card-number">{String(index + 1).padStart(2, "0")}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .wc8-section,
        .wc8-section * {
          font-family: 'Nunito Sans', sans-serif !important;
        }
        .wc8-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .wc8-card {
          position: relative;
          border-radius: 24px;
          padding: 28px 28px 26px;
          background:
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(135deg, rgba(120, 72, 180, 0.82), rgba(101, 67, 164, 0.82));
          background-size: 10px 10px, 100% 100%;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .wc8-card:hover {
          transform: translateY(-6px);
          border-color: rgba(202,255,90,0.28);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34);
        }
        .wc8-card-number {
          margin-bottom: 16px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(202,255,90,0.96);
        }
        .wc8-card h3 {
          margin: 0 0 10px;
          font-size: clamp(24px, 2.6vw, 36px);
          line-height: 1.1;
          font-weight: 800;
          color: #ffffff;
        }
        .wc8-card p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.84);
          max-width: 34ch;
        }
        @media (max-width: 900px) {
          .wc8-grid {
            grid-template-columns: 1fr;
          }
          .wc8-header {
            margin-bottom: 34px !important;
          }
          .wc8-card {
            padding: 24px 20px 22px;
          }
          .wc8-card h3 {
            font-size: 26px;
          }
          .wc8-card p {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Section8;
