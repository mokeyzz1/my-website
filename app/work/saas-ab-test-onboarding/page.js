"use client";
import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

export default function SaasAbTestCaseStudy() {
  const segmentGroups = [
    {
      label: "Company size",
      rows: [
        { label: "Small teams", lift: 8.7 },
        { label: "Mid-size", lift: 6.1 },
        { label: "Enterprise", lift: -10.0 },
      ],
    },
    {
      label: "Plan type",
      rows: [
        { label: "Free trial", lift: 6.7 },
        { label: "Pro trial", lift: 9.5 },
        { label: "Enterprise trial", lift: -11.0 },
      ],
    },
    {
      label: "Onboarding motion",
      rows: [
        { label: "Self-serve", lift: 7.0 },
        { label: "Sales-assisted", lift: -4.3 },
      ],
    },
  ];

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
              A project management company wanted more new customers to finish setting up their first project. I tested a step-by-step checklist and found that it helped smaller teams, but made the experience worse for larger companies.
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
                <div className="cs-stat-label">New Customers Studied</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">+5%</div>
                <div className="cs-stat-label">More Customers Got Started</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">90</div>
                <div className="cs-stat-label">Days of Testing</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">$97K</div>
                <div className="cs-stat-label">Projected First-Year Gain</div>
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
                  New customers were signing up, looking around, and leaving before they created their first project. The company wanted to make those first few steps easier without adding unnecessary friction.
                </p>
              </div>
              <div className="cs-block">
                <h3>What We Tested</h3>
                <p>
                  For 90 days, half of the 2,000 new customers used the regular setup screen. The other half received a checklist that walked them through creating their first project. I compared how many people got started, how quickly they did it, and which types of customers benefited.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Segment Visual */}
        <section className="cs-section experiment-visual-section">
          <div className="container">
            <div className="experiment-visual-heading">
              <div>
                <span className="experiment-eyebrow">What changed</span>
                <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>
                  The checklist helped some customers and slowed down others
                </h2>
              </div>
              <p>
                Smaller, self-serve teams got started more often with the checklist. Enterprise customers did better with the original, higher-touch experience.
              </p>
            </div>

            <div className="experiment-chart" role="img" aria-label="The guided checklist helped small, mid-size, free trial, pro trial, and self-serve customers. The original onboarding worked better for enterprise, enterprise trial, and sales-assisted customers.">
              <div className="experiment-chart-scale" aria-hidden="true">
                <span>Original onboarding worked better</span>
                <span>No change</span>
                <span>Guided checklist worked better</span>
              </div>

              {segmentGroups.map((group) => (
                <div className="experiment-chart-group" key={group.label}>
                  <div className="experiment-chart-group-label">{group.label}</div>
                  {group.rows.map((row) => {
                    const width = `${Math.min(Math.abs(row.lift) / 12, 1) * 50}%`;
                    const positive = row.lift > 0;

                    return (
                      <div className="experiment-chart-row" key={row.label}>
                        <span className="experiment-chart-label">{row.label}</span>
                        <div className="experiment-chart-track" aria-hidden="true">
                          <span className="experiment-chart-zero"></span>
                          <span
                            className={`experiment-chart-bar ${positive ? "positive" : "negative"}`}
                            style={{ width }}
                          ></span>
                          <strong className={`experiment-chart-value ${positive ? "positive" : "negative"}`}>
                            {Math.abs(row.lift).toFixed(1)} points {positive ? "better" : "worse"}
                          </strong>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <p className="experiment-chart-note">
              That difference changed the decision: give the checklist to smaller teams, but keep enterprise customers on the experience that already worked for them.
            </p>
          </div>
        </section>

        {/* Key Findings */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>Key Findings</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>At First, the Checklist Looked Like a Win</h3>
                <p>With the regular setup, 32 out of every 100 customers got started within seven days. With the checklist, that increased to about 37 out of every 100.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>But It Did Not Work for Everyone</h3>
                <p>Smaller teams benefited because they were setting up the product on their own. Larger companies often had help from a sales or support team, so the extra checklist became another step in their way.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>Customers Moved Faster</h3>
                <p>People who received the checklist created their first project sooner and tried more features during their first week. That showed the checklist was useful, but only for the right customers.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#10b981' }}>
                <h3>The Answer Was Not One-Size-Fits-All</h3>
                <p>Instead of giving every customer the same setup, the better decision was to show the checklist to smaller teams and keep the existing experience for larger companies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Process - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#10b981' }}>How I Reached the Decision</h2>

            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Start</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">2,000 customers</div>
                  <div className="cs-flow-detail">Half tried each version</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Fairness</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Fair comparison</div>
                  <div className="cs-flow-detail">Both groups started alike</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Overall Result</div>
                <div className="cs-flow-box" style={{ background: '#10b981', borderColor: '#10b981', color: '#000' }}>
                  <div className="cs-flow-title">5 more per 100</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Customers got started</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">The Catch</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Different outcomes</div>
                  <div className="cs-flow-detail">Small teams up, large teams down</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#10b981' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Decision</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Use it selectively</div>
                  <div className="cs-flow-detail">Only where it helped</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Behind the Recommendation */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#10b981' }}>The Work Behind the Recommendation</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>1</span>
                Checking That the Comparison Was Fair
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">Before comparing the two experiences, I made sure one group did not start with an unfair advantage. The customers were similar in company size, plan type, and starting behavior.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>That gave me confidence that the checklist caused the difference instead of one group simply being easier to help.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>2</span>
                Finding Out Who It Helped
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I compared smaller and larger companies, different plans, and customers working alone versus customers receiving hands-on support. The checklist clearly helped one group while getting in the way of another.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>Without that closer look, the company could have launched the checklist to everyone and made setup harder for its largest customers.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#10b981' }}>3</span>
                Choosing the Safest Way to Launch It
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I compared three choices: give the checklist to everyone, give it only to smaller teams, or keep the original setup. Then I estimated the first-year value of each option.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#10b981' }}>Giving it only to the customers it helped was projected to create roughly $97K more value in the first year than giving it to everyone.</span>
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
                <div className="cs-achievement-label">Use It Now</div>
                <div className="cs-achievement-value">Teams Under 20</div>
              </div>
              <div className="cs-achievement" style={{ background: '#10b981' }}>
                <div className="cs-achievement-label">Test Again</div>
                <div className="cs-achievement-value">Growing Teams</div>
              </div>
              <div className="cs-achievement" style={{ background: '#10b981' }}>
                <div className="cs-achievement-label">Keep Current Setup</div>
                <div className="cs-achievement-value">Large Companies</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation current="saas-ab-test-onboarding" />

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
