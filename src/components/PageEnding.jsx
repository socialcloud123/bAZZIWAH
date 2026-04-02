import '../home/Home.css';

const FooterOnly = () => (
  <footer className="site-footer">
    <div className="footer-cta">
      <img
        className="footer-logo"
        src="https://sripadastudiosdigital.com/wp-content/uploads/2024/01/Copy-of-About-Us-Page-SSD-WEBSITE-DESIGN-1366-x-768-px-3.png"
        alt="Sripada Studios Digital"
      />
      <div className="footer-cta-text">Ready To Get Started</div>
      <button className="footer-cta-button" type="button">
        Get Started →
      </button>
    </div>

    <div className="footer-divider" />

    <div className="footer-grid">
      <div className="footer-col">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input className="footer-input" type="text" placeholder="Name" />
        <input className="footer-input" type="email" placeholder="Email Address" />
        <button className="footer-subscribe" type="button">
          Subscribe
        </button>
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

const SharedContactForm = () => (
  <section className="contact-form-section" id="contact">
    <div className="contact-form-header">
      <h2>Contact Us</h2>
      <p>Tell us about your project and we will get back to you quickly.</p>
    </div>
    <div className="contact-form-inner">
      <div className="contact-form-image">
        <img src="/shared-contact-section-illustration.png" alt="Contact" />
      </div>

      <div>
        <form className="contact-form">
          <div className="form-row two">
            <label className="form-field">
              <span>Name *</span>
              <input type="text" placeholder="First" required />
            </label>
            <label className="form-field">
              <span>&nbsp;</span>
              <input type="text" placeholder="Last" required />
            </label>
          </div>

          <div className="form-row two">
            <label className="form-field">
              <span>Email *</span>
              <input type="email" placeholder="Email" required />
            </label>
            <label className="form-field">
              <span>Numbers</span>
              <input type="tel" placeholder="Phone" />
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Select your Services *</span>
              <select required>
                <option value="">Select your Services</option>
                <option>Branding</option>
                <option>Digital Marketing</option>
                <option>Performance Marketing</option>
                <option>Film Promotion</option>
                <option>Web Design</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span>Message *</span>
              <textarea rows="5" placeholder="Comment or Message" required />
            </label>
          </div>

          <div className="form-actions">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const PageEnding = ({ showContactForm = true }) => (
  <>
    {showContactForm ? <SharedContactForm /> : null}
    <FooterOnly />
  </>
);

export default PageEnding;
