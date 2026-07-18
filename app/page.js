"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      slug: "athletedesk",
      title: "AthleteDesk",
      category: "product",
      desc: "A working CRM that helps sports agencies manage recruiting, athletes, brand deals, and team follow-ups without relying on disconnected spreadsheets.",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      link: "https://athletedesk.io",
    },
    {
      slug: "trackhub",
      title: "TrackHub",
      category: "product",
      desc: "A live mobile app that makes it easier to follow college track and field through athlete profiles, rankings, head-to-head comparisons, and meet results.",
      tech: ["React Native", "Expo", "Supabase", "PostgreSQL"],
      link: "https://apps.apple.com/us/app/trackhub-collegiate-t-f/id6758220972",
    },
    {
      slug: "saas-ab-test-onboarding",
      title: "B2B SaaS Onboarding Experiment",
      category: "data",
      desc: "A guided setup checklist helped smaller teams get started, but made onboarding harder for larger companies. The better decision was to use it only where it worked.",
      tech: ["Python", "pandas", "SciPy", "statsmodels", "SQLite"],
      link: "https://github.com/mokeyzz1/saas-ab-test-onboarding",
    },
    {
      slug: "rideshare-ops-intelligence",
      title: "NYC Rideshare Operations: Analysis & Dashboard",
      category: "data",
      desc: "Analyzed 62.4 million NYC trips to find where riders were waiting longer for drivers. Residential Brooklyn showed the clearest gaps, and the dashboard turns them into actions.",
      tech: ["Python", "SQL", "DuckDB", "Dash"],
      link: "https://github.com/mokeyzz1/rideshare-ops-intelligence",
    },
    {
      slug: "drug-reviews",
      title: "Drug Reviews NLP",
      category: "data",
      desc: "Compared 215,000 historical patient reviews to reveal large rating differences between medications used for the same condition and built a tool for exploring them.",
      tech: ["Python", "SQL", "NLTK", "Streamlit"],
      link: "https://mokeyzz1-drug-reviews-nlp-app-d9dls4.streamlit.app",
    },
    {
      slug: "olist-analysis",
      title: "Olist Multi-Seller Analysis",
      category: "data",
      desc: "Found that orders split across several sellers received much lower customer ratings, even when they arrived on time, pointing to a communication problem the marketplace could fix.",
      tech: ["Python", "pandas", "scipy", "matplotlib"],
      link: "https://github.com/mokeyzz1/olist-multiseller-analysis",
    },
    {
      slug: "ecommerce-funnel",
      title: "E-Commerce Funnel Analysis",
      category: "data",
      desc: "Followed 5.3 million shoppers to find where they left before purchasing, uncovering opportunities on product pages, abandoned carts, and a separate direct-buy path.",
      tech: ["Python", "DuckDB", "pandas", "statsmodels"],
      link: "https://github.com/mokeyzz1/ecommerce-funnel-analysis",
    },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "product", label: "Products" },
    { key: "data", label: "Data" },
  ];

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

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
              <Link href="#work" className="nav-link">Work</Link>
              <Link href="#about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <p className="hero-greeting">Hi, I&apos;m</p>
                <h1 className="hero-name">Moses Koroma</h1>
                <p className="hero-tagline">
                  I spend most of my time working with data—and the rest building things I wish existed.
                </p>
                <div className="hero-links">
                  <a href="#work" className="brutal-btn primary">View Work</a>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-card">
                  <p className="hero-card-title">What I Do</p>
                  <ul className="hero-card-list">
                    <li>Build Apps</li>
                    <li>Analyze Data</li>
                    <li>Design Interfaces</li>
                    <li>Solve Problems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Data Visualization</span>
            <span>•</span>
                        <span>Tableau</span>
            <span>•</span>
            <span>Power BI</span>
            <span>•</span>
                        <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Data Visualization</span>
            <span>•</span>
                        <span>Tableau</span>
            <span>•</span>
            <span>Power BI</span>
            <span>•</span>
                      </div>
        </div>

        {/* Work */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Selected Work</h2>
              <div className="filter-bar">
                {filters.map(f => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`filter-btn ${filter === f.key ? "active" : ""}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="project-grid">
              {filtered.map(project => (
                project.external ? (
                  <div
                    key={project.slug}
                    className="project-card"
                    style={{ cursor: 'default' }}
                  >
                    <div className="project-header">
                      <span className="project-category-tag">{project.category}</span>
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                      <div className="project-tech">
                        {project.tech.map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/work/${project.slug}`}
                    key={project.slug}
                    className="project-card"
                  >
                    <div className="project-header">
                      <span className="project-category-tag">{project.category}</span>
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                      <div className="project-tech">
                        {project.tech.map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "48px" }}>About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I&apos;m curious by default. I like figuring out how things work, why they break, and what would make them better.
                </p>
                <p>
                  Most of what I build starts with noticing something that feels slower, messier, or harder than it should be. Sometimes the answer is a dashboard. Sometimes it&apos;s an app. Sometimes it&apos;s a better way to organize information so people can actually use it.
                </p>
                <p>
                  I care about making things practical, clear, and useful. The work I enjoy most sits between data, software, product thinking, and real-world problem solving.
                </p>
              </div>
              <div className="about-sidebar">
                <div className="skill-box">
                  <div className="skill-label">Languages & Tools</div>
                  <div className="skill-tags">
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">R</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Git/GitHub</span>
                  </div>
                </div>
                <div className="skill-box">
                  <div className="skill-label">Data & Visualization</div>
                  <div className="skill-tags">
                    <span className="skill-tag">Power BI</span>
                    <span className="skill-tag">Tableau</span>
                    <span className="skill-tag">Excel</span>
                    <span className="skill-tag">Statistics</span>
                    <span className="skill-tag">Data Modeling</span>
                  </div>
                </div>
                <div className="skill-box">
                  <div className="skill-label">Infrastructure</div>
                  <div className="skill-tags">
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">GCP</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">SQL Server</span>
                    <span className="skill-tag">MongoDB</span>
                  </div>
                </div>
              </div>
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
