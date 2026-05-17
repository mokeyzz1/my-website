"use client";
import Link from "next/link";

export default function SaasAbTestCaseStudy() {
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
            <Link href="/#work" className="cs-back" style={{ color: '#10b981' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#10b981', color: '#10b981' }}>Product Analytics</span>
            <h1 className="cs-title">B2B SaaS Onboarding Experiment</h1>
            <p className="cs-desc">
              A project management company wanted to know whether a guided checklist would help new teams get to first value faster. It did overall, but the more useful finding was that the result was not consistent across customer segments.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Product Analyst</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Python, pandas, SciPy, statsmodels, SQLite, Plotly</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2026</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/saas-ab-test-onboarding" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981' }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Notebook</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/saas-ab-test-onboarding/blob/main/notebook/ab_test_analysis.ipynb" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981' }}>Open ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner - Emerald */}
        <section className="cs-stats-banner" style={{ background: '#10b981' }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">2,000</div>
                <div className="cs-stat-label">Accounts in Test</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">+5%</div>
                <div className="cs-stat-label">More Teams Got Started</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">90</div>
                <div className="cs-stat-label">Day Experiment</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">$97K</div>
                <div className="cs-stat-label">Projected Best-Case Impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Problem</h3>
                <p>
                  Too many new accounts were signing up, exploring briefly, and dropping off before they meaningfully adopted the product. The team wanted to know whether a more guided onboarding experience would improve that early activation window.
                </p>
              </div>
              <div className="cs-block">
                <h3>The Setup</h3>
                <p>
                  The company ran a 90-day experiment across 2,000 new accounts. Half saw the existing blank-slate experience, and half saw a guided checklist. From there, I looked at activation, speed to first project, early usage behavior, and whether the effect held across different types of customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>Key Findings</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>The Topline Was Positive</h3>
                <p>At the highest level, the experiment worked. Seven-day activation improved from 32.0% to 36.7%, which made the new onboarding experience look like a likely rollout candidate.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>The Average Hid Two Different Outcomes</h3>
                <p>Once I broke the result down, the story changed. Smaller self-serve teams responded well to the checklist, while larger enterprise-oriented accounts tended to do worse with it.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>Behavior Improved Faster Than Revenue</h3>
                <p>Accounts with the checklist got to their first project sooner and explored more in week one. But that improvement did not translate evenly into downstream business value, which made the segment differences more important than the headline lift alone.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>The Best Decision Was a Targeted Rollout</h3>
                <p>The strongest recommendation was not to ship the checklist everywhere. It was to roll it out only where it clearly helped: smaller self-serve teams, while leaving higher-touch enterprise accounts on the existing flow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#10b981' }}>Methodology</h2>

            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Setup</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">2K accounts</div>
                  <div className="cs-flow-detail">50/50 split</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Check</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Balance checks</div>
                  <div className="cs-flow-detail">Groups were comparable</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Result</div>
                <div className="cs-flow-box" style={{ background: '#10b981', borderColor: '#10b981', color: '#000' }}>
                  <div className="cs-flow-title">+4.7pp lift</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>32.0% to 36.7%</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Detail</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Segment split</div>
                  <div className="cs-flow-detail">SMB up, enterprise down</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Decision</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Targeted rollout</div>
                  <div className="cs-flow-detail">Self-serve under 20</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Focus */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>Analysis Focus</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>1</span>
                Making Sure the Test Was Worth Trusting
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">Before interpreting the outcome, I checked whether the experiment itself was trustworthy. I verified that the two groups were comparable and that nothing in the data distribution suggested the result was being driven by an uneven split.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>It made the observed lift worth taking seriously instead of dismissing it as noise or a flawed test.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>2</span>
                Looking Past the Average
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I broke the results down by company size, plan type, and whether the account was self-serve or sales-assisted. That is where the experiment became useful, because the same onboarding flow was clearly helping one group while getting in the way of another.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>That changed the recommendation from a broad rollout to a more selective one.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>3</span>
                Turning the Analysis Into a Real Decision
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I compared three rollout paths: ship it to everyone, ship it only to smaller self-serve accounts, or leave things as they were. The goal was to turn the experiment into a decision, not just a result.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>The targeted rollout projected roughly $97K more in first-year impact than shipping it broadly, and the strongest answer was also the most practical one.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>Recommendation</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '700px', marginBottom: '32px' }}>
              Show the walkthrough only to small teams under 20 people. Leave larger companies and sales-led accounts on the old experience. That way the company keeps the upside where the checklist clearly helped, without forcing it onto the customers it slowed down.
            </p>
            <div className="cs-achievements">
              <div className="cs-achievement" style={{ background: '#10b981' }}>
                <div className="cs-achievement-label">Ship to</div>
                <div className="cs-achievement-value">Self-Serve &lt;20</div>
              </div>
              <div className="cs-achievement" style={{ background: '#10b981' }}>
                <div className="cs-achievement-label">Revisit Later</div>
                <div className="cs-achievement-value">Mid-Market</div>
              </div>
              <div className="cs-achievement" style={{ background: '#10b981' }}>
                <div className="cs-achievement-label">Leave Alone</div>
                <div className="cs-achievement-value">Enterprise</div>
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
