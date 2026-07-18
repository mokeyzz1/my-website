"use client";
import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

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
              I studied more than 215,000 historical patient reviews to understand which medications people rated highly, where patients repeatedly described poor experiences, and how a comparison tool could make those patterns easier to explore.
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
                <div className="cs-stat-label">Patient Reviews Studied</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">3,436</div>
                <div className="cs-stat-label">Medications Covered</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">885</div>
                <div className="cs-stat-label">Health Conditions</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">$27M+</div>
                <div className="cs-stat-label">Estimated Revenue Risk</div>
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
                  People taking medications for the same condition can report very different experiences. I wanted to know whether patient reviews could reveal where those differences were largest and make better-rated alternatives easier to find.
                </p>
              </div>
              <div className="cs-block">
                <h3>What I Did</h3>
                <p>
                  I organized reviews collected from 2008 to 2017, compared medications used for the same condition, and looked for repeated concerns in the written feedback. Then I built an interactive tool that lets someone explore those patterns without reading thousands of reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <section className="cs-section drug-finder-showcase">
          <div className="container">
            <div className="cs-showcase-heading">
              <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>
                Making Thousands of Reviews Easier to Compare
              </h2>
              <p>
                Instead of presenting a wall of analysis, the tool starts with one condition and shows how patient ratings differ across the medications used to treat it.
              </p>
            </div>

            <div className="drug-finder-preview">
              <div className="drug-finder-topbar">
                <div>
                  <span className="drug-finder-kicker">Historical patient review data</span>
                  <h3>Drug Alternative Finder</h3>
                </div>
                <span className="drug-finder-condition">Condition: Depression</span>
              </div>

              <div className="drug-finder-metrics">
                <div>
                  <strong>11,640</strong>
                  <span>patient reviews</span>
                </div>
                <div>
                  <strong>50</strong>
                  <span>medications compared</span>
                </div>
                <div>
                  <strong>4.7 points</strong>
                  <span>between the highest and lowest average ratings</span>
                </div>
              </div>

              <div className="drug-finder-comparison">
                <div className="drug-rating-card higher">
                  <div className="drug-rating-copy">
                    <span>Highest average patient rating</span>
                    <strong>9.4 <small>/ 10</small></strong>
                  </div>
                  <div className="drug-rating-track" aria-hidden="true">
                    <span style={{ width: '94%' }}></span>
                  </div>
                </div>
                <div className="drug-rating-card lower">
                  <div className="drug-rating-copy">
                    <span>Lowest average patient rating</span>
                    <strong>4.7 <small>/ 10</small></strong>
                  </div>
                  <div className="drug-rating-track" aria-hidden="true">
                    <span style={{ width: '47%' }}></span>
                  </div>
                </div>
              </div>

              <div className="drug-finder-takeaway">
                <strong>Why this matters</strong>
                <p>The large gap shows where patients reported very different experiences with medications used for the same condition. It creates a useful starting point for questions, not a medical recommendation.</p>
              </div>
            </div>

            <p className="drug-finder-disclaimer">
              Based on historical patient reviews from 2008–2017. For informational analysis only; medication decisions should be made with a healthcare professional.
            </p>
          </div>
        </section>

        {/* Key Findings */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Key Findings</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Ratings Varied Widely Within the Same Condition</h3>
                <p>For several common conditions, the highest- and lowest-rated medications were separated by five points or more on a ten-point scale.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Eight Conditions Had Consistently Low Ratings</h3>
                <p>Across these conditions, the average patient rating stayed below 6 out of 10, suggesting repeated dissatisfaction rather than one poorly rated medication.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Birth Control Generated the Most Feedback</h3>
                <p>It represented 18% of all reviews but still received below-average ratings, making it one of the clearest areas for deeper research and product improvement.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#8b5cf6' }}>
                <h3>Written Feedback Added Context to the Score</h3>
                <p>Some people selected a high rating while still describing concerns in their written review. Reading both signals helped surface dissatisfaction that a score alone could miss.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process - Horizontal Flow */}
        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#8b5cf6' }}>How I Worked Through It</h2>

            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Start</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Patient reviews</div>
                  <div className="cs-flow-detail">215K experiences</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Organize</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Group the data</div>
                  <div className="cs-flow-detail">By condition and medication</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Compare</div>
                <div className="cs-flow-box" style={{ background: '#8b5cf6', borderColor: '#8b5cf6', color: '#000' }}>
                  <div className="cs-flow-title">Ratings and words</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Find repeated patterns</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Understand</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Find the gaps</div>
                  <div className="cs-flow-detail">See where experiences differ</div>
                </div>
              </div>

              <span className="cs-flow-arrow" style={{ color: '#8b5cf6' }}>→</span>

              <div className="cs-flow-group">
                <div className="cs-flow-label">Share</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Comparison tool</div>
                  <div className="cs-flow-detail">Make findings explorable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Behind the Findings */}
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>The Work Behind the Findings</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>1</span>
                Reading More Than the Rating
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I compared each person&apos;s written feedback with the score they selected. This made it possible to flag reviews where the words sounded much more negative than the rating suggested.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>It uncovered concerns that would have been missed if the analysis only looked at the numeric rating.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>2</span>
                Finding Repeated Patient Concerns
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I grouped commonly repeated words and phrases in negative reviews to see which concerns appeared again and again across medications and conditions.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>It turned thousands of individual comments into a clearer picture of the issues patients mentioned most often.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#8b5cf6' }}>3</span>
                Connecting Patient Experience to Business Risk
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I combined review patterns with outside research about medication discontinuation to estimate how poor patient experiences could affect continued use and revenue.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#8b5cf6' }}>The model estimated more than $27M in potential revenue risk, while making the assumptions and need for further validation clear.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#8b5cf6' }}>Explore the Full Tool</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '700px', marginBottom: '32px' }}>
              The interactive version lets visitors choose a condition, compare patient ratings across medications, review commonly mentioned concerns, and read examples of positive and critical feedback.
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
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Choose a condition</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Compare patient ratings</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Review common concerns</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', background: '#fff', border: '2px solid #000', padding: '10px 16px' }}>Read sample feedback</span>
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

        <ProjectNavigation current="drug-reviews" />

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
