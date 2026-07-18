"use client";
import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

export default function EcommerceFunnelCaseStudy() {
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
            <Link href="/#work" className="cs-back" style={{ color: '#facc15' }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: '#facc15', color: '#facc15' }}>Customer Journey Analytics</span>
            <h1 className="cs-title">E-Commerce Funnel Analysis</h1>
            <p className="cs-desc">
              I analyzed two months of shopping activity to understand where customers were leaving before purchase. Across 109.9 million events, the largest loss happened before shoppers added a product to their cart, while a second opportunity appeared among people who carted but never completed an order.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">Data Analyst</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Python, DuckDB, pandas, statsmodels</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Data Period</span>
                <span className="cs-meta-value">October–November 2019</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/ecommerce-funnel-analysis" target="_blank" rel="noopener noreferrer" style={{ color: '#facc15' }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Notebook</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/ecommerce-funnel-analysis/blob/main/funnel_analysis.ipynb" target="_blank" rel="noopener noreferrer" style={{ color: '#facc15' }}>Open ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-stats-banner" style={{ background: '#facc15' }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">109.9M</div>
                <div className="cs-stat-label">Shopping Events Studied</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">5.3M</div>
                <div className="cs-stat-label">Shoppers Observed</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">19.8%</div>
                <div className="cs-stat-label">Viewers Added to Cart</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">46.3%</div>
                <div className="cs-stat-label">Cart Users Did Not Buy</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#facc15' }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Business Question</h3>
                <p>
                  Millions of people viewed products, but only a small share completed a purchase. The important question was not simply how many left, but where they left and which part of the shopping experience offered the clearest opportunity to improve.
                </p>
              </div>
              <div className="cs-block">
                <h3>What I Looked At</h3>
                <p>
                  I followed shoppers from product view to cart to purchase, then compared behavior across product categories, price levels, weekdays, weekends, and the two months in the dataset. I also looked for purchases that did not follow the expected cart path.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section funnel-journey-section">
          <div className="container">
            <div className="cs-showcase-heading">
              <h2 className="cs-section-title" style={{ '--title-color': '#facc15' }}>
                Where Shoppers Leave the Journey
              </h2>
              <p>
                The largest loss happened between looking at a product and deciding to add it to the cart. That made product-page engagement the first part of the journey worth improving.
              </p>
            </div>

            <div className="funnel-journey">
              <div className="funnel-path">
                <div className="funnel-stage view">
                  <div className="funnel-stage-copy">
                    <span>1. View a product</span>
                    <strong>100 shoppers</strong>
                  </div>
                  <div className="funnel-stage-bar"><span></span></div>
                </div>
                <div className="funnel-drop">
                  <strong>80 shoppers do not add to cart</strong>
                  <span>This is the biggest drop in the journey.</span>
                </div>
                <div className="funnel-stage cart">
                  <div className="funnel-stage-copy">
                    <span>2. Add something to cart</span>
                    <strong>About 20 shoppers</strong>
                  </div>
                  <div className="funnel-stage-bar"><span></span></div>
                </div>
                <div className="funnel-cart-outcomes">
                  <div className="purchased">
                    <span>Purchase after using cart</span>
                    <strong>About 11</strong>
                  </div>
                  <div className="left">
                    <span>Leave after using cart</span>
                    <strong>About 9</strong>
                    <small>46.3% of cart users</small>
                  </div>
                </div>
                <div className="funnel-stage purchase">
                  <div className="funnel-stage-copy">
                    <span>3. Purchase overall</span>
                    <strong>About 13 shoppers</strong>
                  </div>
                  <div className="funnel-stage-bar"><span></span></div>
                  <small>About 11 used the cart and about 2 followed the separate direct-buy path.</small>
                </div>
              </div>

              <aside className="funnel-opportunity-panel">
                <span className="funnel-panel-kicker">A separate path</span>
                <div className="funnel-opportunity">
                  <strong>18.9%</strong>
                  <p>of purchasers bought without a recorded cart event.</p>
                </div>
                <div className="funnel-opportunity">
                  <strong>≈ 2 of 13</strong>
                  <p>purchasers followed this separate route. It may reflect a “Buy Now” experience and should be analyzed on its own.</p>
                </div>
              </aside>
            </div>

            <p className="funnel-journey-note">
              The cart held roughly $345M in products that were not purchased. That is an upper-bound estimate, not guaranteed recoverable revenue, but even a small improvement could matter.
            </p>
          </div>
        </section>

        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#facc15' }}>What the Data Revealed</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': '#facc15' }}>
                <h3>Product Pages Were the Main Bottleneck</h3>
                <p>Only 19.8% of people who viewed a product added something to their cart. Improving product information, trust, and relevance should be tested before redesigning the entire checkout.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#facc15' }}>
                <h3>Cart Recovery Was Still a Large Opportunity</h3>
                <p>About 46.3% of shoppers who used the cart did not go on to purchase, giving the business a clear audience for reminder and recovery tests.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#facc15' }}>
                <h3>Some Customers Followed a Different Path</h3>
                <p>Nearly one in five purchasers had no recorded cart event. That could reflect a “Buy Now” experience or another direct-purchase route that deserved separate analysis.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': '#facc15' }}>
                <h3>Weekend Performance Was Worth Testing</h3>
                <p>Weekend activity showed stronger observed conversion than weekday activity. The pattern was useful for planning a test, but the data alone did not prove that weekends caused the improvement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': '#facc15' }}>How I Worked Through It</h2>
            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">Start</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">109.9M events</div>
                  <div className="cs-flow-detail">Two months of activity</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#facc15' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Organize</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Build each journey</div>
                  <div className="cs-flow-detail">View, cart, purchase</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#facc15' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Find</div>
                <div className="cs-flow-box" style={{ background: '#facc15', borderColor: '#facc15', color: '#000' }}>
                  <div className="cs-flow-title">Locate the exits</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>See where shoppers leave</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#facc15' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Compare</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Look for patterns</div>
                  <div className="cs-flow-detail">Category, price, and time</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: '#facc15' }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">Decide</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Prioritize tests</div>
                  <div className="cs-flow-detail">Start with the largest gaps</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#facc15' }}>The Work Behind the Recommendation</h2>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#facc15' }}>1</span>
                Defining a Real Customer Journey
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I turned millions of individual events into one journey per shopper, while preserving the order and timing of views, cart actions, and purchases.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#ca8a04' }}>That prevented repeated clicks from being mistaken for additional customers and made the drop-off rates meaningful.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#facc15' }}>2</span>
                Separating the Standard and Direct-Buy Paths
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I identified purchasers who never generated a cart event instead of forcing every purchase into the same funnel.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#ca8a04' }}>It exposed a second customer path and avoided treating those shoppers as broken or missing data.</span>
              </div>
            </div>

            <div className="cs-challenge-card">
              <div className="cs-challenge-title">
                <span className="cs-challenge-num" style={{ background: '#facc15' }}>3</span>
                Turning Large Numbers Into Testable Actions
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">What I did</span>
                <span className="cs-challenge-text">I treated abandoned cart value as an upper limit, then translated the patterns into smaller experiments the business could measure safely.</span>
              </div>
              <div className="cs-challenge-row">
                <span className="cs-challenge-label">Why it mattered</span>
                <span className="cs-challenge-text cs-challenge-result" style={{ color: '#ca8a04' }}>The recommendation became a testing plan instead of an unrealistic promise that every abandoned dollar could be recovered.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section funnel-recommendation-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': '#facc15' }}>Recommended Tests</h2>
            <p className="funnel-recommendation-intro">
              Start with the biggest measurable opportunities, learn what changes behavior, and expand only after the results are clear.
            </p>
            <div className="cs-achievements">
              <div className="cs-achievement" style={{ background: '#facc15' }}>
                <div className="cs-achievement-label">Recover</div>
                <div className="cs-achievement-value">Test Cart Reminder Messages</div>
              </div>
              <div className="cs-achievement" style={{ background: '#facc15' }}>
                <div className="cs-achievement-label">Improve</div>
                <div className="cs-achievement-value">Test Product Pages in Weak Categories</div>
              </div>
              <div className="cs-achievement" style={{ background: '#facc15' }}>
                <div className="cs-achievement-label">Learn</div>
                <div className="cs-achievement-value">Test Weekend Ads and Direct-Buy Behavior</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation current="ecommerce-funnel" />

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
