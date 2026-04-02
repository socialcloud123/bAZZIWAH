import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../home/Home.css';

const Contact = () => {
  return (
    <>
      <section className="w-full bg-white px-6 py-16 mt-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-geom text-3xl font-extrabold text-[#5b21b6] md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 font-google-sans text-sm text-[#4a4a4a]">
            We would love to hear from you. Share your project details and we will get back to you.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="w-full">
              <div className="contact-form mt-6 bg-white">
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
                    <span>Phone Number</span>
                    <input type="tel" placeholder="99806 87439" />
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
              </div>
            </div>

            <div className="rounded-2xl border border-[#ececec] bg-[#f9f7ff] p-6">
              <h2 className="font-geom text-xl font-bold text-[#5b21b6]">Reach Us</h2>
              <div className="mt-4 space-y-4 font-google-sans text-sm text-[#2f2f2f]">
                <div>
                  <div className="text-xs font-semibold uppercase text-[#5b21b6]">Address</div>
                  <p>
                    3086/7, 8th C Cross Rd, Weavers Layout, RPC Layout, Vijayanagar, Bengaluru,
                    Karnataka 560040
                  </p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[#5b21b6]">Phone Number</div>
                  <p>99806 87439</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-[#5b21b6]">Email Address</div>
                  <p>contact@sripadastudios.com</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5b21b6] text-white">
                  <FaFacebookF />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5b21b6] text-white">
                  <FaInstagram />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5b21b6] text-white">
                  <FaYoutube />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2ddff]">
                <iframe
                  title="Sripada Studios Location"
                  src="https://www.google.com/maps?q=3086/7,%208th%20C%20Cross%20Rd,%20Weavers%20Layout,%20RPC%20Layout,%20Vijayanagar,%20Bengaluru,%20Karnataka%20560040&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
