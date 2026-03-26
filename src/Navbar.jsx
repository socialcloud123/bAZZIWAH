import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const setActive = () => {
      const path = window.location.pathname.replace(/\/$/, '');
      ['#navLinks > li > a', '#mobileLinks > li > a'].forEach(sel => {
        document.querySelectorAll(sel).forEach(a => {
          const linkPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '');
          if (linkPath && linkPath === path) {
            a.closest('li').classList.add('active-link');
          }
        });
      });
    };
    setActive();
  }, []);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleDdEnter = () => setOpenDropdown('dd-services');
  const handleDdLeave = () => setOpenDropdown(null);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  const toggleMobileSub = () => {
    setOpenMobileSub(!openMobileSub);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-backdrop"></div>
        <div className="nav-inner">
          {/* LOGO (left) */}
          <a href="/" className="logo">
            <img src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png" alt="Sripada Studios Digital" />
          </a>

          {/* DESKTOP LINKS (center) */}
          <ul className="nav-links" id="navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>

            <li id="dd-services" className={openDropdown === 'dd-services' ? 'open' : ''} onMouseEnter={handleDdEnter} onMouseLeave={handleDdLeave}>
              <button>
                Services
                <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="dropdown">
                <div className="dropdown-grid">
                  <a className="dropdown-item" href="/social-media">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></div>
                    <div className="dropdown-copy"><strong>Social Media</strong><span>Grow & engage your audience</span></div>
                  </a>
                  <a className="dropdown-item" href="/performance-marketing">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                    <div className="dropdown-copy"><strong>Performance Marketing</strong><span>ROI-driven paid campaigns</span></div>
                  </a>
                  <a className="dropdown-item" href="/branding">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
                    <div className="dropdown-copy"><strong>Branding</strong><span>Identity & visual systems</span></div>
                  </a>
                  <a className="dropdown-item" href="/website-development">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                    <div className="dropdown-copy"><strong>Web Development</strong><span>Fast, conversion-focused sites</span></div>
                  </a>
                  <a className="dropdown-item" href="/video-production">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div>
                    <div className="dropdown-copy"><strong>Video Production</strong><span>Cinematic brand storytelling</span></div>
                  </a>
                  <a className="dropdown-item" href="/seo">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
                    <div className="dropdown-copy"><strong>SEO</strong><span>Rank higher, get found faster</span></div>
                  </a>
                  <a className="dropdown-item" href="/influencer-marketing">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
                    <div className="dropdown-copy"><strong>Influencer Marketing</strong><span>Authentic creator partnerships</span></div>
                  </a>
                  <a className="dropdown-item" href="/content-solution">
                    <div className="dropdown-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
                    <div className="dropdown-copy"><strong>Content Solutions</strong><span>Strategy, copy & creative assets</span></div>
                  </a>
                </div>
                <div className="dropdown-footer">
                  <span>Not sure where to start?</span>
                  <a href="https://sripadastudiosdigital.com/contact/">
                    Talk to us
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </li>

          <li><a href="/contact">Contact</a></li>
          </ul>

          {/* RIGHT (right-aligned) */}
          <div className="nav-right">
            <a href="tel:+919980687439" className="phone-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.21 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>+91 99806 87439</span>
            </a>
            <a href="https://sripadastudiosdigital.com/contact/" className="btn-cta">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <button className={`hamburger ${mobileOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMobile} aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`} id="mobilePanel">
        <ul className="mobile-links" id="mobileLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>
            <button onClick={toggleMobileSub}>
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openMobileSub ? 'rotate(180deg)' : '' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div className={`mobile-sub ${openMobileSub ? 'open' : ''}`}>
              <a href="/social-media"><span className="mobile-sub-dot"></span>Social Media Management</a>
              <a href="/performance-marketing"><span className="mobile-sub-dot"></span>Performance Marketing</a>
              <a href="https://sripadastudiosdigital.com/branding-re-branding/"><span className="mobile-sub-dot"></span>Branding & Re-Branding</a>
              <a href="/website-development"><span className="mobile-sub-dot"></span>Website Development</a>
              <a href="/video-production"><span className="mobile-sub-dot"></span>Video Production</a>
              <a href="/seo"><span className="mobile-sub-dot"></span>Search Engine Optimization</a>
              <a href="/influencer-marketing"><span className="mobile-sub-dot"></span>Influencer Marketing</a>
              <a href="/content-solution"><span className="mobile-sub-dot"></span>Content Solutions</a>
            </div>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="mobile-footer">
          <a href="https://sripadastudiosdigital.com/contact/" className="btn-cta">Get Started →</a>
          <a href="tel:+919980687439" className="phone-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.21 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>+91 99806 87439</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
