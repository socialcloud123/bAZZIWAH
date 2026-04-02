import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section8 = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);

  const features = [
    { title: "Custom Web Design", desc: "Pixel-perfect, brand-focused designs crafted to convert visitors into customers." },
    { title: "Full-Stack Expertise", desc: "From frontend to backend, we build scalable and high-performance applications." },
    { title: "SEO & Performance", desc: "Optimized for speed, ranking, and visibility to grow your online presence." },
    { title: "Mobile-First Approach", desc: "Responsive designs that look stunning on every device." },
    { title: "Secure & Reliable", desc: "We follow best practices to ensure security, stability, and uptime." },
    { title: "Conversion-Focused", desc: "Every element is designed to drive engagement and maximize conversions." },
    { title: "Ongoing Support", desc: "We stay with you post-launch for updates, scaling, and improvements." },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": function() {
          const section = sectionRef.current;
          const right = rightRef.current;
          if (!section || !right) return;

          const scrollDistance = right.scrollHeight - window.innerHeight + 50;

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
          });

          gsap.to(right, {
            y: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${scrollDistance}`,
              scrub: true,
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wc8-section w-full lg:h-screen min-h-screen overflow-hidden lg:overflow-hidden py-16 lg:py-0"
      style={{
        overflow: "visible",
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
      }}
    >
      <div className="w-full px-6 lg:px-24 h-full flex flex-col lg:flex-row gap-20 lg:gap-32 justify-center">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/5 flex flex-col justify-start pt-10 lg:pt-32">
          <p className="text-xs lg:text-base font-semibold tracking-widest text-white/90 mb-4 lg:mb-6">
            Web Development
          </p>

          <h2 className="font-bold text-3xl lg:text-6xl leading-tight mb-6 lg:mb-10 text-white">
            Why Choose Us
          </h2>

          <p className="text-base lg:text-[22px] leading-relaxed max-w-md text-white/80">
            We leverage our profound expertise in web design and e-commerce,
            providing tailored services that prioritize your success. Our
            innovative solutions challenge the norm, supported by a proven track
            record of excellence and strategic execution.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={rightRef}
          className="w-full lg:w-3/5 flex flex-col gap-12 lg:gap-16 py-16 lg:py-48"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="wc8-card w-full rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.01]"
            >
              {/* INNER CONTENT */}
              <div className="px-8 py-10 lg:px-14 lg:py-12 w-full text-center">

                <h3 className="text-2xl lg:text-[44px] font-bold mb-2 lg:mb-3 text-white tracking-wide">
                  Custom Web Design
                </h3>

                <p className="text-sm lg:text-xl opacity-80 leading-relaxed text-white/85 mx-auto max-w-2xl">
                  Pixel-perfect, brand-focused designs crafted to convert visitors into customers.
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .wc8-card {
          background:
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(135deg, rgba(120, 72, 180, 0.78), rgba(101, 67, 164, 0.78));
          background-size: 10px 10px, 100% 100%;
          max-width: 690px;
          margin: 0 auto;
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.3);
        }
        .wc8-section h2,
        .wc8-section h3 {
          font-family: 'Nunito Sans', sans-serif !important;
        }
        .wc8-section p {
          font-family: 'Nunito Sans', sans-serif !important;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Section8;
