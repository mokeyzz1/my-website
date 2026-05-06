"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <span className="nav-name-full">Moses K.</span>
              <span className="nav-name-short">MK</span>
            </Link>
            <div className="nav-links">
              <Link href="/#work" className="nav-link">Work</Link>
              <Link href="/#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="section" style={{ paddingTop: "140px" }}>
          <div className="container">
            <h1 className="section-title" style={{ marginBottom: "48px" }}>Get In Touch</h1>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Let&apos;s Work Together</h3>
                <p style={{ marginBottom: "24px" }}>
                  Have a project in mind? Let&apos;s talk about how I can help.
                </p>
                <div className="contact-links">
                  <a href="https://github.com/mokeyzz1" target="_blank" rel="noopener noreferrer" className="contact-link">
                    → GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/mosesbkoroma/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    → LinkedIn
                  </a>
                </div>
              </div>
              <form
                action="https://formspree.io/f/xblglvaa"
                method="POST"
                className="contact-form"
              >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" className="brutal-btn primary" style={{ alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p className="footer-text">© {new Date().getFullYear()} Moses Koroma</p>
              <div className="footer-links">
                <a href="https://github.com/mokeyzz1" target="_blank" rel="noopener noreferrer" className="footer-link">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mosesbkoroma/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
