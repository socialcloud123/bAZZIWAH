const Section1 = () => (
  <section
    className="hero-section-reponsive"
    style={{
      background: "#0d0d1a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 48,
      flexWrap: "wrap",
      minHeight: "80vh",
      boxSizing: "border-box",
      position: "relative",
    }}
  >
    {/* Home Why Choose Us background glows */}
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "1%",
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "rgba(124,58,237,0.25)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "10%",
        right: "2%",
        width: 90,
        height: 90,
        borderRadius: "50%",
        background: "rgba(124,58,237,0.2)",
        filter: "blur(30px)",
        pointerEvents: "none",
      }}
    />

    {/* ── Left Card ── */}
    <div
      className="hero-left-card"
      style={{
        flex: "1 1 600px",
        maxWidth: 720,
        background: "transparent",
        borderRadius: "18px",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        zIndex: 1,
        margin: "0 auto",
      }}
    >
      {/* Top badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          backgroundColor: "#a78ee6",
          borderRadius: 999,
          padding: "8px 20px 8px 10px",
          marginBottom: 32,
          width: "fit-content",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#76b813",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          STUDIO-GRADE WEB EXPERIENCES
        </span>
      </div>

      {/* Headline */}
      <h1
        className="hero-headline"
        style={{
          margin: "0 0 24px",
          fontWeight: 900,
          lineHeight: 1.2,
          letterSpacing: "-0.5px",
          color: "#ffffff",
        }}
      >
        WEBSITES THAT DEVELOP<br />
        <span style={{ color: "#7c4dcc" }}>YOUR BUSINESS &amp; FAME!</span>
      </h1>

      {/* Body text */}
      <p
        className="hero-description"
        style={{
          margin: "0 0 36px",
          fontSize: 20,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.6,
          fontWeight: 400,
          textAlign: "left",
        }}
      >
        Worried about upscaling your business digitally? With SEO-based content,
        Attractive Videos, and Eye-catching Design, your website will stand out
        in the market.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: 15,
          marginBottom: 36,
          flexWrap: "wrap",
        }}
      >
        {[
          "START WITH A FREE WEBSITE BRIEF",
          "REQUEST A LIVE DEMO",
        ].map((label) => (
          <button
            key={label}
            style={{
              backgroundColor: "#7c4dcc",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "14px 24px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#76b813";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7c4dcc";
              e.currentTarget.style.color = "#fff";
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Bottom badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#76b813",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          STUDIO-GRADE WEB EXPERIENCES
        </span>
      </div>
    </div>

    {/* ── Right: Illustration ── */}
    <div
      style={{
        flex: "1 1 460px",
        maxWidth: 520,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "20px 0",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 1,
        margin: "0 auto",
      }}
    >
      <img
        src="/website dev.png"
        alt="Web Development Illustration"
        style={{
          width: "100%",
          maxWidth: 500,
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>

    <style>{`
      .hero-section-reponsive {
        flex-direction: row;
        padding: 90px 5%;
      }
      .hero-left-card {
        padding: 60px 50px;
      }
      .hero-headline {
        font-size: 46px;
      }
      .hero-description {
        font-size: 20px;
      }
      @media (max-width: 1024px) {
        .hero-section-reponsive {
          flex-direction: column !important;
          align-items: center !important;
          padding: 60px 5% !important;
        }
        .hero-left-card {
          flex: 1 1 100% !important;
          max-width: 100% !important;
          padding: 40px 24px !important;
        }
        .hero-headline {
          font-size: 34px !important;
        }
        .hero-description {
          font-size: 17px !important;
        }
      }
    `}</style>
  </section>
);

export default Section1;
