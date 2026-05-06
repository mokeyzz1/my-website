"use client";
import Link from "next/link";

export default function DrugReviewsCaseStudy() {
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
            <Link href="/#work" className="cs-back" style={{ color: '#8b5cf6' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}>Data Science</span>
            <h1 className="cs-title">Drug Reviews NLP</h1>
            <p className="cs-desc">
              Mining 215,063 patient reviews to identify which medications outperform alternatives — and quantifying the business impact of drug non-adherence.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Data Analyst</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Python, SQL, NLTK, Streamlit</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2025</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/drug-reviews-nlp" target="_blank" rel="noopener noreferrer" style={{ color: '#8b5cf6' }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Demo</span>
                <span className="cs-meta-value">
                  <a href="https://mokeyzz1-drug-reviews-nlp-app-d9dls4.streamlit.app" target="_blank" rel="noopener noreferrer" style={{ color: '#8b5cf6' }}>Live App ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner - Violet */}
        <section className="cs-stats-banner" style={{ background: '#8b5cf6' }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">215K+</div>
                <div className="cs-stat-label">Reviews Analyzed</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">3,436</div>
                <div className="cs-stat-label">Drugs</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">885</div>
                <div className="cs-stat-label">Conditions</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">$27M+</div>
                <div className="cs-stat-label">Revenue Risk Identified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Question</h3>
                <p>
                  Patients frequently switch or stop medications due to dissatisfaction. Which drugs significantly underperform their alternatives, and what&apos;s the financial impact of this non-adherence?
                </p>
              </div>
              <div className="cs-block">
                <h3>The Approach</h3>
                <p>
                  Combined SQL analysis, NLP sentiment extraction, and topic modeling on 215K patient reviews from Drugs.com (2008-2017) to surface rating gaps, sentiment discrepancies, and recurring side effect themes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Key Findings</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>5+ Point Rating Gap</h3>
                <p>Found systematic performance gaps between best and worst drugs within the same conditions — some patients getting significantly worse care.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>8 Underperforming Conditions</h3>
                <p>Identified conditions with average ratings below 6.0, indicating systematic unmet patient needs across multiple medications.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Birth Control: 18% of Reviews</h3>
                <p>Highest volume category despite below-average satisfaction — a major opportunity for pharmaceutical improvement.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Sentiment vs Rating Mismatch</h3>
                <p>VADER analysis revealed reviews where explicit ratings didn&apos;t match expressed sentiment — hidden dissatisfaction signals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#8b5cf6' }}>Methodology</h2>

            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Data</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">UCI Dataset</div>
                  <div className="cs-flow-detail">215K reviews</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">SQL Analysis</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">SQLite</div>
                  <div className="cs-flow-detail">Rankings & trends</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">NLP</div>
                <div className="cs-flow-box" style={{ background: '#8b5cf6', borderColor: '#8b5cf6', color: '#000' }}>
                  <div className="cs-flow-title">VADER + TF-IDF</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Sentiment & topics</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Insights</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Findings</div>
                  <div className="cs-flow-detail">$27M impact</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Product</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Streamlit</div>
                  <div className="cs-flow-detail">Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Technical Highlights</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>1</span>
                Sentiment Analysis at Scale
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Approach</span>
                <span className="cs-challenge-text">Applied VADER sentiment analysis across 215K reviews to extract polarity scores and compare against explicit 1-10 ratings.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Insight</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>Found significant rating-sentiment mismatches revealing hidden patient dissatisfaction</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>2</span>
                Topic Modeling for Side Effects
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Approach</span>
                <span className="cs-challenge-text">Used TF-IDF vectorization with NMF (Non-negative Matrix Factorization) to extract recurring themes from negative reviews.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Insight</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>Surfaced common side effect complaints and unmet patient needs by condition</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>3</span>
                Business Impact Quantification
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Approach</span>
                <span className="cs-challenge-text">Combined rating data with market research on drug adherence costs and patient switching behavior.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Insight</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>Estimated $27M+ in revenue risk from preventable non-adherence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>The Dashboard</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '700px', marginBottom: '32px' }}>
              Built a Streamlit app (&quot;Drug Alternative Finder&quot;) that lets users explore the data — compare drugs within conditions, view rating distributions, and surface better-rated alternatives.
            </p>
            <a
              href="https://mokeyzz1-drug-reviews-nlp-app-d9dls4.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn"
              style={{ marginBottom: '32px', display: 'inline-block' }}
            >
              Try the Live App ↗
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Condition-based filtering</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Drug comparison charts</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Rating distributions</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Alternative recommendations</span>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Impact</h2>
            <div className="cs-achievements">
              <div className="cs-achievement" style={{ background: '#8b5cf6' }}>
                <div className="cs-achievement-label">Revenue Risk</div>
                <div className="cs-achievement-value">$27M+</div>
              </div>
              <div className="cs-achievement" style={{ background: '#8b5cf6' }}>
                <div className="cs-achievement-label">Reviews Analyzed</div>
                <div className="cs-achievement-value">215K</div>
              </div>
              <div className="cs-achievement" style={{ background: '#8b5cf6' }}>
                <div className="cs-achievement-label">Conditions Flagged</div>
                <div className="cs-achievement-value">8</div>
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
