import React, { useState, useEffect, useRef } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

/* ───────────────────────── hook: animate on scroll ───────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ───────────────────────────── main component ────────────────────────────── */
export default function Contact() {
  const [formData, setFormData] = useState({ first: "", last: "", email: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [heroRef, heroVisible] = useReveal(0.1);
  const [formRef, formVisible] = useReveal(0.1);
  const [infoRef, infoVisible] = useReveal(0.1);

  const handle = (key) => (e) => setFormData((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,400&family=Sora:wght@600;800&display=swap');

        /* ── keyframes ── */
        @keyframes float    { 0%,100%{ transform:translateY(0) }  50%{ transform:translateY(-8px) } }
        @keyframes pulse    { 0%,100%{ transform:scale(1); opacity:.85 } 50%{ transform:scale(1.12); opacity:1 } }
        @keyframes slideUp  { from{ opacity:0; transform:translateY(40px) } to{ opacity:1; transform:translateY(0) } }
        @keyframes slideLeft{ from{ opacity:0; transform:translateX(40px) } to{ opacity:1; transform:translateX(0) } }
        @keyframes fadeIn   { from{ opacity:0 } to{ opacity:1 } }
        @keyframes dash     { to{ stroke-dashoffset:0 } }
        @keyframes glow     { 0%,100%{ filter:drop-shadow(0 0 6px rgba(91,33,182,.25)) } 50%{ filter:drop-shadow(0 0 18px rgba(91,33,182,.55)) } }
        @keyframes ripple   { 0%{ transform:scale(.6); opacity:.6 } 100%{ transform:scale(2.4); opacity:0 } }
        @keyframes wiggle   { 0%,100%{ transform:rotate(0) } 25%{ transform:rotate(-4deg) } 75%{ transform:rotate(4deg) } }
        @keyframes spin     { to{ transform:rotate(360deg) } }
        @keyframes bounceIn { 0%{ opacity:0; transform:scale(.3) } 50%{ transform:scale(1.08) } 100%{ opacity:1; transform:scale(1) } }

        .reveal       { opacity:0 }
        .reveal.show  { animation: slideUp .7s cubic-bezier(.22,1,.36,1) forwards }
        .reveal-l.show{ animation: slideLeft .7s cubic-bezier(.22,1,.36,1) forwards }

        /* icon wrappers */
        .icon-box {
          width:44px; height:44px; border-radius:14px;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg,#5b21b6,#7c3aed);
          color:#fff; flex-shrink:0;
          transition: transform .3s, box-shadow .3s;
        }
        .icon-box:hover { transform:scale(1.12) rotate(-6deg); box-shadow:0 6px 24px rgba(91,33,182,.35) }

        .social-icon {
          width:42px; height:42px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          background:#5b21b6; color:#fff; cursor:pointer;
          transition: transform .3s, box-shadow .3s, background .3s;
        }
        .social-icon:hover { transform:translateY(-4px) scale(1.08); box-shadow:0 8px 20px rgba(91,33,182,.4); background:#7c3aed }

        /* form field */
        .field-wrap {
          position:relative; display:flex; flex-direction:column; gap:6px; flex:1; min-width:0;
        }
        .field-wrap label {
          font-size:13px; font-weight:600; color:#5b21b6;
          display:flex; align-items:center; gap:6px;
          transition: color .3s;
        }
        .field-wrap input, .field-wrap textarea {
          width:100%; padding:12px 14px; border-radius:12px;
          border:2px solid #e9e2f5; background:#faf8ff; font-size:15px;
          font-family:'DM Sans',sans-serif; color:#2f2f2f;
          transition: border-color .3s, box-shadow .3s, background .3s;
          outline:none; resize:vertical;
        }
        .field-wrap input:focus, .field-wrap textarea:focus {
          border-color:#5b21b6; background:#fff;
          box-shadow:0 0 0 4px rgba(91,33,182,.1);
        }
        .field-wrap .focus-dot {
          position:absolute; top:10px; right:12px; width:6px; height:6px;
          border-radius:50%; background:#5b21b6;
          animation: pulse 1.2s infinite;
          pointer-events:none;
        }

        /* submit btn */
        .submit-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 36px; border:none; border-radius:14px;
          background:linear-gradient(135deg,#5b21b6,#7c3aed);
          color:#fff; font-size:16px; font-weight:700;
          font-family:'Sora',sans-serif; cursor:pointer;
          transition: transform .3s, box-shadow .3s;
          position:relative; overflow:hidden;
        }
        .submit-btn:hover { transform:translateY(-2px); box-shadow:0 10px 32px rgba(91,33,182,.4) }
        .submit-btn:active { transform:translateY(0) }
        .submit-btn .ripple-circle {
          position:absolute; border-radius:50%; width:20px; height:20px;
          background:rgba(255,255,255,.35);
          animation: ripple .6s ease-out forwards; pointer-events:none;
        }

        /* connector */
        .section-connector {
          display:flex; justify-content:center; padding:0;
          position:relative; z-index:2; margin-top:-1px;
        }
        .connector-line {
          width:2px; height:56px;
          background:linear-gradient(to bottom,#5b21b6,#e9e2f5);
          border-radius:2px;
          position:relative;
        }
        .connector-line::after {
          content:''; position:absolute; bottom:-5px; left:50%; transform:translateX(-50%);
          width:10px; height:10px; border-radius:50%;
          background:#5b21b6; animation: pulse 2s infinite;
        }

        /* info card hover */
        .info-row {
          display:flex; align-items:flex-start; gap:14px;
          padding:14px; border-radius:14px;
          transition: background .3s, transform .3s;
          cursor:default;
        }
        .info-row:hover { background:rgba(91,33,182,.06); transform:translateX(4px) }

        /* success overlay */
        .success-overlay {
          position:absolute; inset:0; display:flex; flex-direction:column;
          align-items:center; justify-content:center; background:rgba(255,255,255,.95);
          border-radius:20px; z-index:5;
          animation: fadeIn .4s ease-out;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
          .contact-banner {
            min-height: 180px !important;
            margin-top: 36px !important;
          }
          .contact-banner-image {
            object-position: center 72% !important;
            transform: scale(1.16) !important;
          }
        }

        @media (min-width: 901px) and (max-width: 1400px) {
          .contact-banner-image {
            object-position: center 68% !important;
            transform: scale(1.14) !important;
          }
        }

        @media (min-width: 1401px) {
          .contact-banner-image {
            object-position: center 64% !important;
            transform: scale(1.12) !important;
          }
        }
      `}</style>

      {/* ═══════════════════ HERO BANNER ═══════════════════ */}
      <section
        ref={heroRef}
        className="contact-banner"
        style={{
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          minHeight: "clamp(180px, 26vw, 320px)",
          marginTop: 48,
        }}
      >
        <img
          className="contact-banner-image"
          src="/contact us bannnerpng.png"
          alt="Contact Us"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            transform: "scale(1.02)",
          }}
        />
      </section>

      {/* ═══════════════════ FORM + INFO ═══════════════════ */}
      <section style={{ padding: "48px 24px 80px", maxWidth: 1140, margin: "0 auto" }}>
        <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.08fr) minmax(320px, 0.92fr)", gap: 40, alignItems: "start" }}>
          {/* ── contact form ── */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? "show" : ""}`}
            style={{ position: "relative" }}
          >
            <h2 style={{
              fontFamily: "'Sora',sans-serif", fontSize: 26, fontWeight: 700,
              color: "#5b21b6", marginBottom: 6,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <FiMessageSquare size={24} style={{ animation: "wiggle 3s infinite" }} />
              Send a Message
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 14, marginBottom: 28 }}>
              Fill in the form below and we'll respond promptly.
            </p>

            <div style={{ position: "relative" }}>
              {submitted && (
                <div className="success-overlay">
                  <div style={{ animation: "bounceIn .6s ease-out" }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "linear-gradient(135deg,#5b21b6,#7c3aed)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 16px",
                    }}>
                      <FiSend size={28} color="#fff" />
                    </div>
                    <h3 style={{ fontFamily: "'Sora',sans-serif", color: "#5b21b6", fontSize: 22, margin: "0 0 6px" }}>Message Sent!</h3>
                    <p style={{ color: "#7b7b7b", fontSize: 14 }}>We'll get back to you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ first: "", last: "", email: "", phone: "", message: "" }); }}
                      style={{
                        marginTop: 18, padding: "10px 28px", borderRadius: 12,
                        border: "2px solid #5b21b6", background: "transparent",
                        color: "#5b21b6", fontWeight: 700, cursor: "pointer",
                        fontFamily: "'Sora',sans-serif", fontSize: 14,
                        transition: "all .3s",
                      }}
                      onMouseEnter={(e) => { e.target.style.background = "#5b21b6"; e.target.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#5b21b6"; }}
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              )}

              <div style={{
                display: "flex", flexDirection: "column", gap: 20,
                background: "#fff", borderRadius: 20, padding: 28,
                border: "1px solid #ede8f5",
                boxShadow: "0 4px 32px rgba(91,33,182,.06)",
                opacity: submitted ? .3 : 1,
                transition: "opacity .3s",
                minHeight: 380,
              }}>
                {/* row 1 */}
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <div className="field-wrap">
                    <label><FiUser size={14} /> First Name *</label>
                    <input
                      value={formData.first} onChange={handle("first")}
                      onFocus={() => setFocusedField("first")} onBlur={() => setFocusedField(null)}
                      placeholder="John"
                    />
                    {focusedField === "first" && <div className="focus-dot" />}
                  </div>
                  <div className="field-wrap">
                    <label><FiUser size={14} /> Last Name *</label>
                    <input
                      value={formData.last} onChange={handle("last")}
                      onFocus={() => setFocusedField("last")} onBlur={() => setFocusedField(null)}
                      placeholder="Doe"
                    />
                    {focusedField === "last" && <div className="focus-dot" />}
                  </div>
                </div>

                {/* row 2 */}
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <div className="field-wrap">
                    <label><FiMail size={14} /> Email *</label>
                    <input
                      type="email" value={formData.email} onChange={handle("email")}
                      onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                    />
                    {focusedField === "email" && <div className="focus-dot" />}
                  </div>
                  <div className="field-wrap">
                    <label><FiPhone size={14} /> Phone</label>
                    <input
                      type="tel" value={formData.phone} onChange={handle("phone")}
                      onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)}
                      placeholder="99806 87439"
                    />
                    {focusedField === "phone" && <div className="focus-dot" />}
                  </div>
                </div>

                {/* message */}
                <div className="field-wrap">
                  <label><FiMessageSquare size={14} /> Message *</label>
                  <textarea
                    rows={5} value={formData.message} onChange={handle("message")}
                    onFocus={() => setFocusedField("msg")} onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project..."
                  />
                  {focusedField === "msg" && <div className="focus-dot" />}
                </div>

                {/* submit */}
                <div>
                  <button
                    className="submit-btn"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const circle = document.createElement("span");
                      circle.className = "ripple-circle";
                      circle.style.left = (e.clientX - rect.left - 10) + "px";
                      circle.style.top = (e.clientY - rect.top - 10) + "px";
                      e.currentTarget.appendChild(circle);
                      setTimeout(() => circle.remove(), 600);
                      setSubmitted(true);
                    }}
                  >
                    <FiSend size={18} />
                    Submit Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── info panel ── */}
          <div
            ref={infoRef}
            className={`reveal ${infoVisible ? "show" : ""}`}
            style={{ animationDelay: ".15s" }}
          >
            <div style={{
              background: "#f9f7ff", borderRadius: 20, padding: 28,
              border: "1px solid #ede8f5",
            }}>
              <h2 style={{
                fontFamily: "'Sora',sans-serif", fontSize: 22, fontWeight: 700,
                color: "#5b21b6", marginBottom: 24,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <FiMapPin size={22} style={{ animation: "float 2.5s ease-in-out infinite" }} />
                Reach Us
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {/* address */}
                <div className="info-row">
                  <div className="icon-box">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#5b21b6", marginBottom: 4 }}>Address</div>
                    <p style={{ fontSize: 14, color: "#2f2f2f", margin: 0, lineHeight: 1.55 }}>
                      3086/7, 8th C Cross Rd, Weavers Layout,<br />
                      RPC Layout, Vijayanagar, Bengaluru,<br />
                      Karnataka 560040
                    </p>
                  </div>
                </div>

                {/* phone */}
                <div className="info-row">
                  <div className="icon-box">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#5b21b6", marginBottom: 4 }}>Phone</div>
                    <p style={{ fontSize: 14, color: "#2f2f2f", margin: 0 }}>99806 87439</p>
                  </div>
                </div>

                {/* email */}
                <div className="info-row">
                  <div className="icon-box">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#5b21b6", marginBottom: 4 }}>Email</div>
                    <p style={{ fontSize: 14, color: "#2f2f2f", margin: 0 }}>contact@sripadastudios.com</p>
                  </div>
                </div>
              </div>

              {/* socials */}
              <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
                {[
                  { icon: <FaFacebookF size={18} />, label: "Facebook" },
                  { icon: <FaInstagram size={18} />, label: "Instagram" },
                  { icon: <FaYoutube size={18} />, label: "YouTube" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="social-icon"
                    title={s.label}
                    style={{ animationDelay: `${i * .1}s` }}
                  >
                    {s.icon}
                  </div>
                ))}
              </div>

              {/* map */}
              <div style={{
                marginTop: 24, borderRadius: 16, overflow: "hidden",
                border: "2px solid #e2ddff",
                boxShadow: "0 4px 20px rgba(91,33,182,.08)",
              }}>
                <iframe
                  title="Sripada Studios Location"
                  src="https://www.google.com/maps?q=3086/7,%208th%20C%20Cross%20Rd,%20Weavers%20Layout,%20RPC%20Layout,%20Vijayanagar,%20Bengaluru,%20Karnataka%20560040&output=embed"
                  style={{ width: "100%", height: 240, border: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
