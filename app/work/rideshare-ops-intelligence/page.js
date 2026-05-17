"use client";
import Link from "next/link";

export default function RideshareOpsCaseStudy() {
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
            <Link href="/#work" className="cs-back" style={{ color: '#f43f5e' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#f43f5e', color: '#f43f5e' }}>Operations Analytics</span>
            <h1 className="cs-title">Rideshare Supply and Demand in NYC</h1>
            <p className="cs-desc">
              This project looks at how rideshare demand shifts across New York City and where supply appears to lag behind it. Using 62.4 million TLC trip records, I analyzed pickup patterns, wait times, and seasonal spikes, then built a dashboard that simulates fleet movement and flags zones where operators may be losing trips and revenue.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Data Analyst</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Python, SQL, DuckDB, pandas, Plotly, Dash</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2026</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/rideshare-ops-intelligence" target="_blank" rel="noopener noreferrer" style={{ color: '#f43f5e' }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Demo</span>
                <span className="cs-meta-value">
                  <a href="https://rideshare-ops-intelligence.onrender.com" target="_blank" rel="noopener noreferrer" style={{ color: '#f43f5e' }}>Live Dashboard ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner - Rose */}
        <section className="cs-stats-banner" style={{ background: '#f43f5e' }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">62.4M</div>
                <div className="cs-stat-label">Trip Records Analyzed</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">39</div>
                <div className="cs-stat-label">NYC Zones Tracked</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">1,500</div>
                <div className="cs-stat-label">Drivers Simulated</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">5</div>
                <div className="cs-stat-label">Boroughs Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Approach */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f43f5e' }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Problem</h3>
                <p>
                  Rideshare demand in New York is not centered only in Manhattan, but wait times are still shortest there. Brooklyn alone accounts for more than a quarter of pickups, yet riders often wait longer. I wanted to see whether the data could show where supply was falling behind demand and where that pattern was most consistent.
                </p>
              </div>
              <div className="cs-block">
                <h3>The Approach</h3>
                <p>
                  I started with 62.4 million NYC TLC trip records across January, June, and December 2025, looking at pickup patterns, wait times, and how they changed by zone and hour. Because the data only captures completed trips, I paired the historical analysis with a driver simulation and built a dashboard that highlights likely supply gaps and where fleets might want to reposition drivers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f43f5e' }}>Key Findings</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#f43f5e' }}>
                <h3>Brooklyn showed the clearest signs of undersupply</h3>
                <p>Brooklyn accounts for 27% of pickups but the median wait is 3.4 minutes versus 3.0 in Manhattan. Crown Heights North, East New York, Bushwick South, and Bedford show up as undersupplied across every cut of the data.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f43f5e' }}>
                <h3>New Year&apos;s Eve demand was concentrated in residential Brooklyn</h3>
                <p>Citywide demand at 9 PM on New Year&apos;s Eve was 75% above a typical December 9 PM, and almost all of that surge came from residential Brooklyn: Stuyvesant Heights +209%, Bushwick South +183%, Bedford +150%, Crown Heights North +141%. Manhattan event destinations were not the story.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f43f5e' }}>
                <h3>Airports need to be treated differently</h3>
                <p>JFK and LaGuardia together pulled more than 2 million trips with a 5.8 minute average wait, the longest in the system. They need their own operational playbook, not the same logic used for neighborhood demand.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#f43f5e' }}>
                <h3>The highest wait times happened overnight</h3>
                <p>Citywide median wait peaks at 4.37 minutes around 4 AM, when demand is at its lowest. Wait time is only a proxy for supply, but the timing points to fewer drivers on shift rather than volume pressure, exactly the kind of pattern an ops team would want to monitor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#f43f5e' }}>How I Worked Through It</h2>

            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Source</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">TLC trip data</div>
                  <div className="cs-flow-detail">62.4M trips</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#f43f5e' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Process</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Demand patterns</div>
                  <div className="cs-flow-detail">By zone and hour</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#f43f5e' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Simulate</div>
                <div className="cs-flow-box" style={{ background: '#f43f5e', borderColor: '#f43f5e', color: '#000' }}>
                  <div className="cs-flow-title">1,500 drivers</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Modeled fleet behavior</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#f43f5e' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Detect</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Pressure points</div>
                  <div className="cs-flow-detail">Wait-time signals</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#f43f5e' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Act</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Suggestions</div>
                  <div className="cs-flow-detail">Reposition drivers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Focus */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f43f5e' }}>What I Focused On</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f43f5e' }}>1</span>
                Finding the strongest demand patterns
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I broke 62.4 million trip records into repeatable demand patterns by zone, hour, and month so the dashboard could show where ride activity consistently builds and where it falls off.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f43f5e' }}>It kept the dashboard grounded in observed behavior instead of a generic demand curve.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f43f5e' }}>2</span>
                Filling in the part the trip data couldn&apos;t show
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">The TLC data only shows completed trips, not live driver supply. To make the dashboard more useful, I built a driver simulation that estimates how a fleet might spread across the city under different demand conditions.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f43f5e' }}>That made it possible to move from describing demand to estimating where supply might actually fall short.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#f43f5e' }}>3</span>
                Turning patterns into something operational
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I used the relationship between demand, simulated supply, and wait times to flag likely pressure zones, then ranked those areas by potential operational impact inside the dashboard.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#f43f5e' }}>It turned the project into something more useful than a static analysis by pointing toward where action might matter most.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#f43f5e' }}>The Dashboard</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '700px', marginBottom: '32px' }}>
              The analysis ends in a live dashboard. It shows a citywide map of all 39 zones, highlights where supply appears tight, and surfaces repositioning suggestions based on the simulation. There&apos;s also a playback mode that lets you step through a full day and watch how those patterns change hour by hour.
            </p>
            <a
              href="https://rideshare-ops-intelligence.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn"
              style={{ display: 'inline-block' }}
            >
              Open the Live Dashboard ↗
            </a>
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
