"use client";
import Link from "next/link";

export default function AthleteDeskCaseStudy() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav nav-dark">
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
        {/* Hero - Dark */}
        <section className="cs-hero">
          <div className="container">
            <Link href="/#work" className="cs-back" style={{ color: '#f59e0b' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#f59e0b', color: '#f59e0b' }}>CRM / SaaS</span>
            <h1 className="cs-title">AthleteDesk</h1>
            <p className="cs-desc">
              A purpose-built CRM for sports agencies. One platform for recruiting, roster management, brand deals, and team coordination.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Solo Developer & Designer</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Next.js, TypeScript, Tailwind, PostgreSQL</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2026</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Platform</span>
                <span className="cs-meta-value">
                  <a href="https://athletedesk.io" target="_blank" rel="noopener noreferrer" style={{ color: '#f59e0b' }}>athletedesk.io ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f59e0b' }}>Overview</h2>
            <div className="cs-story">
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #000' }}>The Problem</h3>
              <p>
                A NIL sports agency reached out with a scaling problem. They were managing hundreds of recruiting prospects, signed clients, brand deals, and contracts across disconnected spreadsheets. As their roster and staff grew, the cracks started showing.
              </p>
              <p>
                Scouts identified prospects and dropped them into a shared file. Agents had no real-time way of knowing who had been contacted or what the status was. When an athlete was ready to move forward, there was no structured handoff. Someone had to remember to tell the right person.
              </p>
              <p>
                Brand deals lived separately from athlete profiles. Financial tracking was manual math in a separate sheet. Contracts were buried in email threads. Leadership had no visibility. If they wanted to know how recruiting was going, they had to ask someone or open a file and count rows.
              </p>
              <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginTop: '40px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #000' }}>The Solution</h3>
              <p>
                I built AthleteDesk, a CRM designed entirely around how this agency actually operates. The core insight from discovery was that a sports agency runs two fundamentally different workflows: <strong>recruiting unsigned prospects</strong> and <strong>managing signed athletes</strong>. These needed to be separated, not merged into a single view.
              </p>
              <p>
                The result is a platform where every athlete, deal, communication, contract, and task lives in one place. Connected, searchable, and visible to the right people based on their role.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f59e0b' }}>Features</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Recruiting Database</h3>
                <p>All prospects organized by region and class year. Every scout sees their assigned region. Admin sees all regions with real-time outreach progress.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Roster Management</h3>
                <p>Signed clients only. Two deal tracks per athlete: Revenue Share contracts and Marketing/Brand deals, each with auto-calculated agency fees.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Automated Handoffs</h3>
                <p>When a scout qualifies an athlete, the system auto-assigns an agent. When an athlete signs, marketing is automatically notified. No manual coordination.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Brand Outreach</h3>
                <p>Track every brand partnership from first contact to deal closed. Attach potential deals to prospects as a pitch tool before they commit.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Communications Hub</h3>
                <p>Every call, email, text, and meeting logged to the athlete&apos;s profile. Full interaction history across the entire team.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Gmail Integration</h3>
                <p>Send emails directly from the CRM. Every sent email automatically logged to the athlete&apos;s communication history.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Team Visibility</h3>
                <p>Leadership sees staff activity, outreach completion by region, goal progress, and inactive team member alerts. All in real time.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f59e0b' }}>
                <h3>Excel Import</h3>
                <p>Existing recruiting spreadsheets import directly. Each sheet becomes a region, athletes populate automatically, outreach status carries over.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#f59e0b' }}>Challenges</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f59e0b' }}>1</span>
                Understanding the Business Before Building
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">The agency&apos;s workflow wasn&apos;t obvious from the outside. Scouts, agents, and marketing all do fundamentally different jobs with different data needs. A generic CRM would have combined everything into one view and created more confusion.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Started with discovery calls before writing any code. Mapped out the full workflow: how a prospect gets identified, moves through recruiting, what happens when they sign, and how brand deals get tracked separately.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f59e0b' }}>Two separate systems under one roof: a recruiting database for prospects and a roster for signed clients</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f59e0b' }}>2</span>
                Importing Years of Spreadsheet Data
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">The agency had hundreds of athletes tracked across regional spreadsheets. Each was formatted differently, with state sub-headers as dividers, inconsistent column names, and freeform status notes.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Built a smart importer that reads their existing format. Sheets become regions automatically, header rows are detected and skipped, freeform notes are parsed into structured statuses, and columns are matched intelligently.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f59e0b' }}>Upload an existing spreadsheet and all data populates into the right regions with correct statuses. No manual re-entry.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f59e0b' }}>3</span>
                Multi-Tenant Data Isolation
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">AthleteDesk is built to serve multiple agencies, each with their own athletes, deals, staff, and data. One agency must never see another agency&apos;s information.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Implemented data isolation at the database level using PostgreSQL Row Level Security, not just application filtering. Every piece of data is tagged to an organization and the database enforces the rules directly.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f59e0b' }}>Complete data isolation with invite-only onboarding. Ready to scale to additional agencies.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f59e0b' }}>Stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Next.js</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>TypeScript</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Supabase</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>PostgreSQL</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Tailwind CSS</span>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Vercel</span>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f59e0b' }}>Impact</h2>
            <div className="cs-story">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '20px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#f59e0b', fontWeight: 'bold' }}>→</span>
                  Replaced a fully manual spreadsheet operation with a single platform where every athlete, deal, communication, contract, and task is connected and visible in real time.
                </li>
                <li style={{ marginBottom: '20px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#f59e0b', fontWeight: 'bold' }}>→</span>
                  Leadership now has instant visibility into recruiting progress by region, team activity, and revenue pipeline. No status meetings or manual reports needed.
                </li>
                <li style={{ marginBottom: '20px', paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#f59e0b', fontWeight: 'bold' }}>→</span>
                  Automated handoffs between scouts, agents, and marketing eliminated the coordination gaps that were causing prospects to go cold and deals to get dropped.
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#f59e0b', fontWeight: 'bold' }}>→</span>
                  Built as a multi-tenant SaaS product, ready to onboard additional sports agencies beyond the initial client.
                </li>
              </ul>
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
