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
      className="w-full lg:h-screen min-h-screen overflow-hidden lg:overflow-hidden bg-black py-16 lg:py-0"
      style={{ overflow: 'visible' }} 
    >
      <div className="w-full px-6 lg:px-24 h-full flex flex-col lg:flex-row gap-20 lg:gap-32 justify-center">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-2/5 flex flex-col justify-start pt-10 lg:pt-32">
          <p className="text-xs lg:text-base font-semibold uppercase tracking-widest text-[#c8ff00] mb-4 lg:mb-6 font-syne">
            Crafting Digital Success
          </p>

          <h2 className="font-bold text-3xl lg:text-7xl leading-tight mb-6 lg:mb-10 text-white font-syne">
            Why Choose Us
          </h2>

          <p className="text-base lg:text-2xl leading-relaxed opacity-70 max-w-md text-white/80 font-dm-sans">
            We combine design, development, and strategy to build high-performing
            digital experiences that scale your business and elevate your brand.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={rightRef}
          className="w-full lg:w-3/5 flex flex-col gap-16 lg:gap-24 py-16 lg:py-48"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="
                w-full
                rounded-2xl
                bg-gradient-to-br from-purple-600/30 to-indigo-600/20
                border border-white/10
                shadow-2xl
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-[1.02] hover:border-[#c8ff00]/20
              "
            >
              {/* INNER CONTENT */}
              <div className="px-8 py-12 lg:px-20 lg:py-28 w-full text-center">

                <h3 className="text-xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white font-syne uppercase tracking-wider">
                  {f.title}
                </h3>

                <p className="text-base lg:text-2xl opacity-80 leading-relaxed text-white/80 mx-auto font-dm-sans max-w-2xl">
                  {f.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section8;
