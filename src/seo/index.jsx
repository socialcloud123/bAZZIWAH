import React, { useEffect, useRef } from "react";

/* ══════════════════════════════════════════════════════
   SECTION 1 CSS
══════════════════════════════════════════════════════ */
const CSS1 = `
  *,*::before,*::after{box-sizing:border-box}
  .seo-section{background-color:#e6f5cb;width:100%;min-height:870px;display:flex;align-items:center;justify-content:center;padding:72px 120px;font-family:'Segoe UI',sans-serif;}
  .seo-inner{display:flex;align-items:center;gap:96px;max-width:1600px;width:100%;}
  .seo-img-col{position:relative;flex-shrink:0;width:630px;height:780px;}
  .seo-img-col img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;}
  .seo-content-col{flex:1;display:flex;flex-direction:column;}
  .seo-pill{display:inline-flex;align-items:center;gap:12px;background:#f3e8ff;border:1.5px solid #c084fc;border-radius:999px;padding:9px 24px;width:fit-content;margin-bottom:33px;}
  .seo-pill-dot{width:13px;height:13px;border-radius:50%;background:#6d28d9;flex-shrink:0;}
  .seo-pill-text{font-size:16px;font-weight:700;letter-spacing:1.5px;color:#4b5563;text-transform:uppercase;}
  .seo-headline{font-size:32px;font-weight:800;line-height:1.45;color:#111827;text-transform:uppercase;letter-spacing:.2px;margin:0 0 27px;}
  .seo-purple{color:#7c3aed;}
  .seo-amber{color:#b45309;}
  .seo-body{font-size:22px;line-height:1.8;color:#374151;text-align:justify;margin:0 0 33px;max-width:645px;}
  .seo-why-title{font-size:30px;font-weight:700;color:#111827;margin:0 0 12px;}
  .seo-why-body{font-size:22px;line-height:1.7;color:#374151;margin:0 0 42px;}
  .seo-link-purple{color:#7c3aed;text-decoration:none;font-weight:500;}
  .seo-link-ul{color:#374151;text-decoration:underline;text-decoration-color:#9ca3af;}
  .seo-cta{display:flex;gap:21px;flex-wrap:wrap;}
  .seo-btn{padding:19px 51px;border-radius:999px;font-size:19px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;border:2px solid #7c3aed;transition:background .18s ease,color .18s ease;}
  .seo-btn-primary{background:#7c3aed;color:#fff;}
  .seo-btn-primary:hover{background:#6d28d9;border-color:#6d28d9;}
  .seo-btn-outline{background:transparent;color:#111827;}
  .seo-btn-outline:hover{background:#f3e8ff;}
  @media(max-width:1200px){.seo-section{padding:56px 48px;}.seo-inner{gap:60px;}.seo-img-col{width:440px;height:540px;}.seo-headline{font-size:24px;}.seo-body{font-size:17px;}.seo-why-title{font-size:22px;}.seo-why-body{font-size:17px;}.seo-btn{font-size:14px;padding:15px 38px;}}
  @media(max-width:900px){.seo-section{padding:40px 32px;}.seo-inner{gap:36px;}.seo-img-col{width:300px;height:380px;}.seo-headline{font-size:20px;}.seo-body{font-size:15px;}.seo-why-title{font-size:18px;}.seo-why-body{font-size:15px;}}
  @media(max-width:640px){.seo-section{padding:32px 18px;}.seo-inner{flex-direction:column;gap:28px;}.seo-img-col{width:100%;height:auto;}.seo-body{max-width:100%;text-align:left;}.seo-headline{font-size:18px;}}
`;

const CSS2 = `
  @keyframes glassShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50% { box-shadow: 0 0 28px 6px rgba(124,58,237,0.22); } }
  @keyframes tabletFloat1 { 0% { transform: translateY(0px) rotate(-6deg) scale(1); } 33% { transform: translateY(-28px) rotate(-3deg) scale(1.02); } 66% { transform: translateY(-14px) rotate(-8deg) scale(0.98); } 100% { transform: translateY(0px) rotate(-6deg) scale(1); } }
  @keyframes tabletFloat2 { 0% { transform: translateY(0px) rotate(10deg) scale(1); } 40% { transform: translateY(-22px) rotate(13deg) scale(1.03); } 80% { transform: translateY(-8px) rotate(7deg) scale(0.97); } 100% { transform: translateY(0px) rotate(10deg) scale(1); } }
  @keyframes tabletFloat3 { 0% { transform: translateY(0px) rotate(-14deg) scale(1); } 50% { transform: translateY(-35px) rotate(-10deg) scale(1.04); } 100% { transform: translateY(0px) rotate(-14deg) scale(1); } }
  @keyframes tabletFloat4 { 0% { transform: translateY(0px) rotate(4deg) scale(1); } 45% { transform: translateY(-20px) rotate(7deg) scale(1.02); } 100% { transform: translateY(0px) rotate(4deg) scale(1); } }
  @keyframes tabletFloat5 { 0% { transform: translateY(0px) rotate(-20deg) scale(1); } 55% { transform: translateY(-18px) rotate(-16deg) scale(1.03); } 100% { transform: translateY(0px) rotate(-20deg) scale(1); } }

  .svc-section { background: linear-gradient(135deg, #0d0d1a 0%, #150d2e 50%, #0d0d1a 100%); width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 80px 5%; font-family: 'DM Sans','Segoe UI',sans-serif; position: relative; overflow: hidden; }
  .svc-dotgrid-panel { position:absolute;top:0;right:0;width:50%;height:100%;background-image:radial-gradient(circle,rgba(180,255,0,0.10) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0; }
  .svc-tablet { position:absolute;border-radius:18px;pointer-events:none;z-index:0; }
  .svc-tablet-1 { width:110px;height:155px;top:6%;left:3%;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);backdrop-filter:blur(6px);animation:tabletFloat1 9s ease-in-out infinite; }
  .svc-tablet-2 { width:80px;height:115px;top:18%;left:28%;background:rgba(200,255,0,0.06);border:1px solid rgba(200,255,0,0.18);backdrop-filter:blur(4px);animation:tabletFloat2 12s ease-in-out infinite;animation-delay:-4s; }
  .svc-tablet-3 { width:130px;height:90px;bottom:12%;left:8%;background:rgba(124,58,237,0.09);border:1px solid rgba(124,58,237,0.20);backdrop-filter:blur(5px);animation:tabletFloat3 10s ease-in-out infinite;animation-delay:-2s; }
  .svc-tablet-4 { width:70px;height:100px;bottom:28%;right:6%;background:rgba(200,255,0,0.07);border:1px solid rgba(200,255,0,0.15);backdrop-filter:blur(4px);animation:tabletFloat4 14s ease-in-out infinite;animation-delay:-7s; }
  .svc-tablet-5 { width:95px;height:135px;top:55%;left:18%;background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.18);backdrop-filter:blur(4px);animation:tabletFloat5 11s ease-in-out infinite;animation-delay:-5s; }
  .svc-tablet-6 { width:60px;height:85px;top:8%;right:22%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);backdrop-filter:blur(3px);animation:tabletFloat2 16s ease-in-out infinite;animation-delay:-9s; }
  .svc-inner { display:flex;align-items:center;justify-content:center;gap:48px;max-width:1800px;width:100%;margin:0 auto;position:relative;z-index:1; }
  .svc-left { flex:1 1 0;min-width:0;max-width:680px;display:flex;flex-direction:column;gap:48px; }
  .svc-title { font-size:48px;font-weight:700;color:#fff;margin:0;font-family:'Syne','Segoe UI',sans-serif;letter-spacing:-0.5px;line-height:1.15; }
  .svc-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
  .svc-card { background:rgba(255,255,255,0.04);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.10);border-radius:20px;padding:33px 30px 36px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;cursor:default;transition:border-color 0.3s ease,transform 0.3s ease,background 0.3s ease;animation:glowPulse 4s ease-in-out infinite; }
  .svc-card::before { content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.07) 50%,transparent 70%);background-size:200% 100%;opacity:0;transition:opacity 0.3s ease;pointer-events:none;border-radius:inherit; }
  .svc-card:hover::before { opacity:1;animation:glassShimmer 1.2s ease forwards; }
  .svc-card:hover { border-color:rgba(124,58,237,0.65);transform:translateY(-6px);background:rgba(124,58,237,0.10);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px); }
  .svc-card:nth-child(1){animation-delay:0s}.svc-card:nth-child(2){animation-delay:1s}.svc-card:nth-child(3){animation-delay:2s}.svc-card:nth-child(4){animation-delay:3s}
  .svc-card-title { font-size:22px;font-weight:700;color:#fff;margin:0;line-height:1.35;font-family:'Syne','Segoe UI',sans-serif; }
  .svc-card-body { font-size:19px;color:rgba(255,255,255,0.58);line-height:1.65;margin:0; }
  .svc-right { flex:1 1 0;min-width:0;max-width:570px;height:840px;display:flex;align-items:center;justify-content:center; }
  .svc-right img { width:100%;height:100%;object-fit:contain;object-position:center;display:block; }
  @media(max-width:1200px){ .svc-right{max-width:420px;height:630px;} }
  @media(max-width:1024px){ .svc-inner{gap:36px;}.svc-right{max-width:300px;height:480px;}.svc-title{font-size:36px;}.svc-card-title{font-size:18px;}.svc-card-body{font-size:15px;}.svc-card{padding:24px 20px 26px;} }
  @media(max-width:768px){ .svc-section{padding:60px 5%;min-height:auto;}.svc-inner{flex-direction:column;gap:40px;}.svc-left{flex:unset;width:100%;gap:32px;}.svc-right{flex:unset;width:100%;max-width:100%;height:380px;}.svc-title{font-size:30px;}.svc-dotgrid-panel{width:100%;opacity:0.4;}.svc-tablet{display:none;} }
  @media(max-width:480px){ .svc-grid{grid-template-columns:1fr;}.svc-title{font-size:26px;}.svc-card-title{font-size:16px;}.svc-card-body{font-size:14px;} }
`;

const CSS3 = `
  @keyframes shimmerSweep { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  .seo-section4 { padding: 80px 5%; background: linear-gradient(135deg, #000000 0%, #0d0020 40%, #150d2e 70%, #0a1a00 100%); font-family: 'DM Sans','Segoe UI',sans-serif; }
  .seo-section-title { text-align: center; font-family: 'Syne','Segoe UI',sans-serif; font-size: 2.2rem; font-weight: 800; color: #83cd15; margin-bottom: 48px; }
  .seo-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .seo-services-last-row { display: flex; justify-content: center; gap: 24px; max-width: 1200px; margin: 24px auto 0; }
  .seo-services-last-row .seo-service-container { flex: 0 0 calc(33.333% - 16px); max-width: calc(33.333% - 16px); }
  .seo-service-container { cursor: pointer; }
  .seo-service-card { position: relative; background: #6D28D9; border-radius: 12px; padding: 25px; overflow: hidden; border: 1px solid #333; min-height: 380px; transition: min-height 0.35s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
  .seo-service-container:hover .seo-service-card { min-height: 480px; border-color: #83cd15; box-shadow: 0 0 40px rgba(131,205,21,0.18), 0 20px 50px rgba(0,0,0,0.4); }
  .seo-card-shimmer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%); background-size: 200% 100%; pointer-events: none; animation: shimmerSweep 1.8s linear infinite; }
  .seo-icon-container { position: absolute; top: 2px; left: 50%; transform: translateX(-50%); width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; }
  .seo-icon-container img { width: 100%; height: auto; }
  .seo-service-content { margin-top: 230px; text-align: center; }
  .seo-service-title { color: white; font-size: 20px; font-weight: bold; margin-bottom: 12px; line-height: 1.2; transition: color 0.3s ease; }
  .seo-service-container:hover .seo-service-title { color: #83cd15; }
  .seo-service-desc { color: white; font-size: 14px; line-height: 1.6; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.35s ease; }
  .seo-service-container:hover .seo-service-desc { opacity: 1; max-height: 200px; margin-top: 12px; }
  @media(max-width:900px) { .seo-services-grid { grid-template-columns: 1fr 1fr; } .seo-services-last-row { flex-direction: column; align-items: center; } .seo-services-last-row .seo-service-container { flex: none; max-width: 100%; width: 100%; } }
  @media(max-width:600px) { .seo-services-grid { grid-template-columns: 1fr; } .seo-section-title { font-size: 1.6rem; } }
`;

const CSS4 = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');
  .seo-wrap { position: relative; background: #090e14; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px 48px; box-sizing: border-box; overflow: hidden; font-family: 'Barlow', sans-serif; }
  .seo-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
  .seo-inner-process { position: relative; z-index: 1; max-width: 1060px; width: 100%; }
  .seo-head { text-align: center; margin-bottom: 72px; opacity: 0; transform: translateY(22px); animation: seoFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
  @keyframes seoFadeUp { to { opacity: 1; transform: translateY(0); } }
  .seo-title-v2 { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(24px, 3.6vw, 42px); color: #ffffff; margin: 0 0 14px; letter-spacing: -0.015em; line-height: 1.15; }
  .seo-subtitle { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 13.5px; color: #6b7888; letter-spacing: 0.14em; text-transform: uppercase; margin: 0; }
  .seo-rows { display: flex; flex-direction: column; }
  .seo-row { display: grid; grid-template-columns: 64px 260px 1fr; align-items: start; gap: 0 40px; padding: 38px 0; position: relative; opacity: 0; transform: translateX(-20px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
  .seo-row::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); transition: opacity 0.3s ease; }
  .seo-row:last-child::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); }
  .seo-row:hover::before { background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.45) 20%, rgba(160,100,255,0.7) 50%, rgba(160,100,255,0.45) 80%, transparent 100%); }
  .seo-row.row-visible { opacity: 1; transform: translateX(0); }
  .seo-num { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 14px; color: #414d5c; letter-spacing: 0.04em; padding-top: 3px; }
  .seo-name { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(15px, 1.8vw, 21px); color: #b06aff; line-height: 1.3; letter-spacing: 0.01em; padding-top: 2px; }
  .seo-desc-v2 { font-family: 'Barlow', sans-serif; font-weight: 500; font-size: clamp(10px, 1vw, 12px); color: #526070; line-height: 1.95; letter-spacing: 0.09em; text-transform: uppercase; padding-top: 4px; }
  @media (max-width: 700px) { .seo-wrap { padding: 72px 24px; } .seo-row { grid-template-columns: 44px 1fr; grid-template-rows: auto auto; gap: 6px 14px; } .seo-num { grid-column:1; grid-row:1; } .seo-name { grid-column:2; grid-row:1; } .seo-desc-v2 { grid-column:1/-1; grid-row:2; } }
`;

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const mainServices = [
  { title: "1. Comprehensive SEO Services", body: "From on-page, off-page SEO to technical audits we have got you covered" },
  { title: "2. Local SEO & Google My Business", body: "Dominate local search results and drive foot traffic to your business" },
  { title: "3. Content Strategy & Marketing", body: "Data-driven content that ranks, engages and converts your target audience" },
  { title: "4. Link Building & Authority", body: "High-quality backlinks that boost your domain authority and search rankings" },
];

const seoDetailedServices = [
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-27.png', title: 'Search-Ready Websites', desc: 'Deep site health check, technical performance audit, site infrastructure review, and SEO foundations audit to ensure your website is built to rank.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-28.png', title: 'Targeted Keyword Optimization', desc: 'Competitor keyword insights, precision keyword research, hyperlocal keyword targeting, and keyword performance tracking for maximum reach.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-29.png', title: 'On-Page SEO', desc: 'Content built to rank, optimized meta titles and tags, smart site linking, and enhanced search appearance for every page.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-30.png', title: 'Regional SEO Solutions', desc: 'Google Business Profile enhancements, location-based directory linking, online reputation management, and geo-targeted listing management.' },
  { img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-31.png', title: 'Backlink Strategy', desc: 'Power domain links, content-driven outreach, trusted page links, and backlink gap analysis to build your domain authority.' },
];

const howItWorks = [
  { number: "01.", title: "Social Media Marketing", description: "WE SPECIALIZE IN CONDUCTING IN-DEPTH EVALUATIONS THAT HELP IDENTIFY OPPORTUNITIES TO ANALYSE AND DEVELOP STRATEGIES FOR IMPROVING PERFORMANCE - DRIVING GROWTH AND ACHIEVING HIGHER SEARCH ENGINE RANKINGS." },
  { number: "02.", title: "Action-Driven Strategy", description: "ALONG WITH CREATIVE STRATEGIES, WE AT SRIPADA STUDIOS DELIVER AND EXECUTE SOLUTIONS THAT FIX ALL CRITICAL ISSUES AND FUEL EXPONENTIAL GROWTH. OUR INNOVATIVE, LOCATION SPECIFIC APPROACH DOES NOT JUST DRIVE SUCCESS BUT ENSURES YOUR BRAND IS REMEMBERED." },
  { number: "03.", title: "Continuous Enhancement", description: "THROUGH CONTINUOUS TRACKING, INSIGHTFUL REPORTING, AND SMART STRATEGY UPDATES, WE ENSURE LONG-TERM GROWTH AND STABLE RANKINGS IN EVERY TARGET LOCATION." },
];

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function SEOPage() {
  const rowRefs = useRef([]);
  const canvasRef = useRef(null);

  /* ── animated background orbs ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.12, y: 0.35, r: 0.42, color: "rgba(80,20,140,0.6)",  speed: 0.0007 },
      { x: 0.82, y: 0.62, r: 0.36, color: "rgba(50,10,100,0.55)", speed: 0.0005 },
      { x: 0.5,  y: 0.08, r: 0.30, color: "rgba(100,30,160,0.38)", speed: 0.0009 },
    ];

    const draw = () => {
      t += 1;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      orbs.forEach((o, i) => {
        const ox = (o.x + Math.sin(t * o.speed + i * 1.5) * 0.1) * W;
        const oy = (o.y + Math.cos(t * o.speed + i * 2.1) * 0.08) * H;
        const gr = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.r * W);
        gr.addColorStop(0, o.color);
        gr.addColorStop(1, "transparent");
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(ox, oy, o.r * W, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── staggered row reveal on scroll ── */
  useEffect(() => {
    const obs = rowRefs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("row-visible"), i * 140);
            o.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <>
      <style>{CSS1}</style>
      <style>{CSS2}</style>
      <style>{CSS3}</style>
      <style>{CSS4}</style>

      {/* ── SECTION 1 — Hero ── */}
      <section className="seo-section">
        <div className="seo-inner">
          <div className="seo-img-col">
            <img src="/seo/image.png" alt="SEO Expert" />
          </div>
          <div className="seo-content-col">
            <div className="seo-pill">
              <span className="seo-pill-dot" />
              <span className="seo-pill-text">Search Engine Optimization</span>
            </div>
            <h1 className="seo-headline">We don&apos;t just optimise for <span className="seo-purple">Search Engines</span>,<br />We optimise for <span className="seo-amber">Impact</span></h1>
            <p className="seo-body">SEO is required to increase the visibility of your website on search engines, attract the audience and grow your reach across platforms.</p>
            <h2 className="seo-why-title">Why Sripada Studios?</h2>
            <p className="seo-why-body">Because nobody handles it better than us. <a href="#" className="seo-link-purple">True SEO</a> means being <a href="#" className="seo-link-ul">found and remembered</a>.</p>
            <div className="seo-cta">
              <button className="seo-btn seo-btn-primary">Start Now</button>
              <button className="seo-btn seo-btn-outline">Live Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — Services We Offer ── */}
      <section className="svc-section">
        <div className="svc-dotgrid-panel" />
        <div className="svc-tablet svc-tablet-1" /><div className="svc-tablet svc-tablet-2" /><div className="svc-tablet svc-tablet-3" /><div className="svc-tablet svc-tablet-4" /><div className="svc-tablet svc-tablet-5" /><div className="svc-tablet svc-tablet-6" />
        <div className="svc-inner">
          <div className="svc-left">
            <h2 className="svc-title">Services We Offer</h2>
            <div className="svc-grid">
              {mainServices.map((s, i) => (
                <div className="svc-card" key={i}>
                  <p className="svc-card-title">{s.title}</p>
                  <p className="svc-card-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="svc-right"><img src="/seo/Buzziwah SEO page.png" alt="Buzziwah SEO Services" /></div>
        </div>
      </section>

      {/* ── SECTION 3 — Detailed Services ── */}
      <section className="seo-section4">
        <h2 className="seo-section-title">Our SEO services that drive Success</h2>
        <div className="seo-services-grid">
          {seoDetailedServices.slice(0, 3).map((s, i) => (
            <div className="seo-service-container" key={i}>
              <div className="seo-service-card">
                <div className="seo-card-shimmer" /><div className="seo-icon-container"><img src={s.img} alt={s.title} /></div>
                <div className="seo-service-content"><div className="seo-service-title">{s.title}</div><p className="seo-service-desc">{s.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="seo-services-last-row">
          {seoDetailedServices.slice(3).map((s, i) => (
            <div className="seo-service-container" key={i}>
              <div className="seo-service-card">
                <div className="seo-card-shimmer" /><div className="seo-icon-container"><img src={s.img} alt={s.title} /></div>
                <div className="seo-service-content"><div className="seo-service-title">{s.title}</div><p className="seo-service-desc">{s.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4 — Process ── */}
      <section className="seo-wrap">
        <canvas ref={canvasRef} className="seo-canvas" />
        <div className="seo-inner-process">
          <div className="seo-head">
            <h2 className="seo-title-v2">How we make SEO work for you</h2>
            <p className="seo-subtitle">We don&apos;t follow trends. We set the standard.</p>
          </div>
          <div className="seo-rows">
            {howItWorks.map((s, i) => (
              <div key={i} className="seo-row" ref={(el) => (rowRefs.current[i] = el)}>
                <span className="seo-num">{s.number}</span>
                <span className="seo-name">{s.title}</span>
                <p className="seo-desc-v2">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
