"use client";
import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

export default function OlistAnalysisCaseStudy() {
  return (
    <>
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
        <section className="cs-hero">
          <div className="container">
            <Link href="/#work" className="cs-back" style={{ color: '#0ea5e9' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#0ea5e9', color: '#0ea5e9' }}>Marketplace Analytics</span>
            <h1 className="cs-title">Olist Multi-Seller Order Analysis</h1>
            <p className="cs-desc">
              On Olist, one checkout can include products from several independent sellers and arrive as separate packages. I analyzed 96,478 delivered orders to understand how that experience affected customer satisfaction and what the marketplace could do about it.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Data Analyst</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Python, pandas, SciPy, Matplotlib</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Data</span>
                <span className="cs-meta-value">Olist Brazilian E-Commerce</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/olist-multiseller-analysis" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Notebook</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/olist-multiseller-analysis/blob/main/olist_multiseller_analysis.ipynb" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9' }}>Open ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-stats-banner" style={{ background: '#0ea5e9' }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">96K+</div>
                <div className="cs-stat-label">Delivered Orders Studied</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">4.18</div>
                <div className="cs-stat-label">Single-Seller Rating</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">2.86</div>
                <div className="cs-stat-label">Multi-Seller Rating</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">3.8×</div>
                <div className="cs-stat-label">Higher One-Star Rate</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#0ea5e9' }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Customer Problem</h3>
                <p>
                  A shopper can place one order without realizing that several sellers will fulfill it. That can mean separate tracking numbers, packages arriving on different days, and no single place to understand what is happening.
                </p>
              </div>
              <div className="cs-block">
                <h3>What I Investigated</h3>
                <p>
                  I connected order, seller, delivery, and review data to compare purchases handled by one seller with purchases split across several sellers. Then I checked whether delivery delays explained the rating difference or whether the experience itself was the problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section olist-comparison-section">
          <div className="container">
            <div className="cs-showcase-heading">
              <h2 className="cs-section-title" style={{ '--title-color': '#0ea5e9' }}>
                One Checkout, Two Very Different Experiences
              </h2>
              <p>
                Customers were far more satisfied when one seller handled the entire order. Splitting the same checkout across sellers changed both the delivery experience and the review that followed.
              </p>
            </div>

            <div className="olist-order-comparison" role="img" aria-label="Single-seller orders averaged 4.18 stars with 9.4 percent one-star reviews. Multi-seller orders averaged 2.86 stars with 35.6 percent one-star reviews.">
              <article className="olist-order-card single">
                <div className="olist-package-row" aria-hidden="true">
                  <span className="olist-package"></span>
                </div>
                <span className="olist-order-label">One seller</span>
                <h3>One package journey</h3>
                <p>One seller, one tracking path, and a clearer delivery expectation.</p>
                <div className="olist-rating">
                  <strong>4.18</strong>
                  <span>average rating out of 5</span>
                </div>
                <div className="olist-one-star">
                  <span>One-star reviews</span>
                  <strong>9.4%</strong>
                </div>
              </article>

              <div className="olist-comparison-callout">
                <span>Customer rating</span>
                <strong>32% lower</strong>
                <small>when an order was split across sellers</small>
              </div>

              <article className="olist-order-card multiple">
                <div className="olist-package-row" aria-hidden="true">
                  <span className="olist-package"></span>
                  <span className="olist-package"></span>
                  <span className="olist-package"></span>
                </div>
                <span className="olist-order-label">Several sellers</span>
                <h3>One order, multiple deliveries</h3>
                <p>Separate packages, different arrival dates, and a harder order to follow.</p>
                <div className="olist-rating">
                  <strong>2.86</strong>
                  <span>average rating out of 5</span>
                </div>
                <div className="olist-one-star">
                  <span>One-star reviews</span>
                  <strong>35.6%</strong>
                </div>
              </article>
            </div>

            <p className="olist-comparison-note">
              The difference remained even when both types of orders arrived on time. That pointed to a customer communication problem, not simply a late-delivery problem.
            </p>
          </div>
        </section>

        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#0ea5e9' }}>What the Data Revealed</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#0ea5e9' }}>
                <h3>The Rating Drop Was Too Large to Ignore</h3>
                <p>Single-seller orders averaged 4.18 stars, while orders involving several sellers averaged 2.86. The one-star review rate increased from 9.4% to 35.6%.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#0ea5e9' }}>
                <h3>Late Delivery Was Not the Main Explanation</h3>
                <p>Even among orders that arrived on time, multi-seller purchases scored 3.42 compared with 4.26 for single-seller purchases.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#0ea5e9' }}>
                <h3>Home-Goods Orders Were Most Exposed</h3>
                <p>Bed and bath, furniture and decor, and housewares produced the most split orders, making them practical starting points for a fix.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#0ea5e9' }}>
                <h3>The Cost Would Grow With the Marketplace</h3>
                <p>The estimated annual exposure was R$38K at the observed rate and rose to R$115K if split-order volume tripled.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#0ea5e9' }}>How I Reached the Answer</h2>
            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Start</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">96K orders</div>
                  <div className="cs-flow-detail">Delivered purchases only</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#0ea5e9' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Group</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Count sellers</div>
                  <div className="cs-flow-detail">One versus several</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#0ea5e9' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Compare</div>
                <div className="cs-flow-box" style={{ background: '#0ea5e9', borderColor: '#0ea5e9', color: '#000' }}>
                  <div className="cs-flow-title">Review scores</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Find the satisfaction gap</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#0ea5e9' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Check</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Rule out delays</div>
                  <div className="cs-flow-detail">On-time orders still differed</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#0ea5e9' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Act</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Design the fix</div>
                  <div className="cs-flow-detail">Set clearer expectations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#0ea5e9' }}>The Work Behind the Recommendation</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#0ea5e9' }}>1</span>
                Making Sure the Difference Was Real
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">Because split orders were a small share of all purchases, I tested whether the rating gap could reasonably be explained by chance.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#0ea5e9' }}>The result was strong and consistent enough to treat as a marketplace problem rather than a random fluctuation.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#0ea5e9' }}>2</span>
                Finding the Root of the Bad Experience
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I compared only orders that arrived on time. Split orders still received much lower ratings, which meant late delivery alone could not explain the problem.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#0ea5e9' }}>That shifted the solution from speeding up delivery to improving expectations, tracking, and communication.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#0ea5e9' }}>3</span>
                Turning the Finding Into a Practical Plan
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I estimated how the cost would grow with order volume and compared that exposure with several possible product fixes.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#0ea5e9' }}>The simplest first step cost almost nothing: tell customers at checkout that their items will arrive in separate packages.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section olist-recommendation-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#0ea5e9' }}>Recommended Next Steps</h2>
            <p className="olist-recommendation-intro">
              Fix the expectation gap first, then make split orders easier to follow and measure.
            </p>
            <div className="cs-achievements">
              <div className="cs-achievement" style={{ background: '#0ea5e9' }}>
                <div className="cs-achievement-label">Do Now</div>
                <div className="cs-achievement-value">Show “Separate Packages” at Checkout</div>
              </div>
              <div className="cs-achievement" style={{ background: '#0ea5e9' }}>
                <div className="cs-achievement-label">Build Next</div>
                <div className="cs-achievement-value">One Tracking View for the Full Order</div>
              </div>
              <div className="cs-achievement" style={{ background: '#0ea5e9' }}>
                <div className="cs-achievement-label">Monitor</div>
                <div className="cs-achievement-value">Split-Order Rate and Review Scores</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation current="olist-analysis" />

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <p className="footer-text">© {new Date().getFullYear()} Moses Koroma</p>
              <div className="footer-links">
                <a href="https://github.com/mokeyzz1" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                <a href="https://www.linkedin.com/in/mosesbkoroma/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
