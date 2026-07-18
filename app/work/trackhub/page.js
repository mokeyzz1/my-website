"use client";
import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

export default function TrackHubCaseStudy() {
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
            <Link href="/#work" className="cs-back">← Back to Work</Link>
            <span className="cs-tag">Mobile App</span>
            <h1 className="cs-title">TrackHub</h1>
            <p className="cs-desc">
              A live mobile app for following college track & field. TrackHub brings together results, rankings, athlete profiles, and meet information in one place for athletes, coaches, and fans who actually follow the sport.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Solo Developer & Designer</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">React Native, Expo, Supabase</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2025–2026</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Live</span>
                <span className="cs-meta-value">
                  <a href="https://apps.apple.com/us/app/trackhub-collegiate-t-f/id6758220972" target="_blank" rel="noopener noreferrer" style={{ color: '#06b6d4' }}>On the App Store ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner - Cyan */}
        <section className="cs-stats-banner">
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">2.8M+</div>
                <div className="cs-stat-label">Results Indexed</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">123K+</div>
                <div className="cs-stat-label">Athlete Profiles</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">12K+</div>
                <div className="cs-stat-label">Meets Tracked</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">300+</div>
                <div className="cs-stat-label">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title">Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>Why I Built It</h3>
                <p>
                  College track & field data lives across TFRRS, USTFCCCA, Athletic.net, and MileSplit, but following the sport still feels fragmented. People bounce between different sites just to check results, compare athletes, or keep up with meets, and none of it feels built for mobile.
                </p>
              </div>
              <div className="cs-block">
                <h3>What TrackHub Does</h3>
                <p>
                  TrackHub pulls that experience into one app. Users can check weekly leaderboards ranked by World Athletics scoring, follow athlete profiles over time, compare athletes head to head, and keep up with meet results without stitching the sport together themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title">Features</h2>
            <div className="cs-features">
              <div className="cs-feature">
                <h3>Live Leaderboards</h3>
                <p>Weekly top performances ranked by World Athletics 2025 scoring. Compare a sprinter&apos;s 100m to a distance runner&apos;s 5000m fairly.</p>
              </div>
              <div className="cs-feature">
                <h3>Athlete Profiles</h3>
                <p>Complete performance history, personal records by event, and season progression tracking for 123,000+ athletes.</p>
              </div>
              <div className="cs-feature">
                <h3>Head-to-Head</h3>
                <p>Compare any two athletes with visual charts across their shared events and competition history.</p>
              </div>
              <div className="cs-feature">
                <h3>Meet Tracker</h3>
                <p>Live, upcoming, and past meets in one view. Multi-day meet support with direct links to live timing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff' }}>System Architecture</h2>

            <div className="cs-flow">
              {/* Data Sources */}
              <div className="cs-flow-group">
                <div className="cs-flow-label">Sources</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">TFRRS</div>
                  <div className="cs-flow-detail">Results</div>
                </div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">USTFCCCA</div>
                  <div className="cs-flow-detail">Schedules</div>
                </div>
              </div>

              <span className="cs-flow-arrow">→</span>

              {/* Scrapers */}
              <div className="cs-flow-group">
                <div className="cs-flow-label">Scraping</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Node.js</div>
                  <div className="cs-flow-detail">Puppeteer + Cheerio</div>
                </div>
              </div>

              <span className="cs-flow-arrow">→</span>

              {/* Processing */}
              <div className="cs-flow-group">
                <div className="cs-flow-label">Processing</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Normalize</div>
                  <div className="cs-flow-detail">100+ event variations</div>
                </div>
              </div>

              <span className="cs-flow-arrow">→</span>

              {/* Database */}
              <div className="cs-flow-group">
                <div className="cs-flow-label">Database</div>
                <div className="cs-flow-box highlight">
                  <div className="cs-flow-title">Supabase</div>
                  <div className="cs-flow-detail">PostgreSQL + WA Scoring</div>
                </div>
              </div>

              <span className="cs-flow-arrow">→</span>

              {/* Mobile App */}
              <div className="cs-flow-group">
                <div className="cs-flow-label">Frontend</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">React Native</div>
                  <div className="cs-flow-detail">Expo • iOS & Android</div>
                </div>
              </div>
            </div>

            {/* Automation note */}
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Automated via GitHub Actions • Mon/Thu/Fri scrapes • Sun/Mon syncs
              </span>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title">Technical Challenges</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num">1</span>
                Cross-Event Athlete Comparison
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">How do you fairly compare a 100m sprinter to a 5000m distance runner?</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Implemented the official World Athletics 2025 scoring system using quadratic equations (points = a×x² + b×x + c) with event-specific coefficients for 100+ events. Indoor vs outdoor detection based on 60m event presence.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result">Fair 0-1600 point scoring across all track & field events</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num">2</span>
                Dynamic Source Collection
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">Meet schedules were spread across source pages that loaded content dynamically and changed structure over time, making simple HTTP collection unreliable.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Built a browser-based collection pipeline with paced requests, validation checks, and fallback matching so meet discovery stayed consistent.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result">100% success rate on meet discovery</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num">3</span>
                Performance at Scale
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">Calculating WA scores for thousands of performances was slow with individual queries (2-3 second load times).</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Created PostgreSQL functions that handle scoring, deduplication, and filtering in a single database call. Added multi-layer caching with AsyncStorage (5-min TTL) and in-memory cache.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result">45 → 1 API calls, load time reduced to 50-100ms</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num">4</span>
                Meet Matching Across Platforms
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Problem</span>
                <span className="cs-challenge-text">Same meet has different names: &quot;NCAA Division I Indoor&quot; vs &quot;NCAA Division I Indoor Track &amp; Field Championships&quot;</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Solution</span>
                <span className="cs-challenge-text">Built a fuzzy matching algorithm with manual mappings for known variations. Adjacent date searching for multi-day meets.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Result</span>
                <span className="cs-challenge-text cs-challenge-result">Match rate improved from 6% to 57%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title">Results</h2>
            <div className="cs-achievements">
              <div className="cs-achievement">
                <div className="cs-achievement-label">Query Optimization</div>
                <div className="cs-achievement-value">45 → 1</div>
              </div>
              <div className="cs-achievement">
                <div className="cs-achievement-label">Load Time</div>
                <div className="cs-achievement-value">50-100ms</div>
              </div>
              <div className="cs-achievement">
                <div className="cs-achievement-label">Match Rate</div>
                <div className="cs-achievement-value">6% → 57%</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation current="trackhub" />

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
