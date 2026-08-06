import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

const accent = "#e11d48";

export default function CourseRagCaseStudy() {
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
            <Link href="/#work" className="cs-back" style={{ color: accent }}>← Back to Work</Link>
            <span className="cs-tag" style={{ borderColor: accent, color: accent }}>Applied AI · RAG</span>
            <h1 className="cs-title">Course RAG Assistant</h1>
            <p className="cs-desc">
              A source-grounded course workspace that helps students work from the material they already have. Upload a syllabus, assignment, rubric, or notes, then ask a real question and open the evidence behind the answer.
            </p>

            <div className="cs-meta-row">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">AI Product Engineer</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Stack</span>
                <span className="cs-meta-value">Next.js, TypeScript, OpenAI, Pinecone</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">2026</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Code</span>
                <span className="cs-meta-value">
                  <a href="https://github.com/mokeyzz1/course-rag-assistant" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>GitHub ↗</a>
                </span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Live Demo</span>
                <span className="cs-meta-value">
                  <a href="https://course-rag-assistant.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: accent }}>Open ↗</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-stats-banner" style={{ background: accent }}>
          <div className="container">
            <div className="cs-stats-grid">
              <div className="cs-stat">
                <div className="cs-stat-num">4</div>
                <div className="cs-stat-label">Document formats</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">1</div>
                <div className="cs-stat-label">Cited answer path</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">3</div>
                <div className="cs-stat-label">Student workflows</div>
              </div>
              <div className="cs-stat">
                <div className="cs-stat-num">0</div>
                <div className="cs-stat-label">Accounts required</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accent }}>Overview</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>The Problem</h3>
                <p>
                  Students rarely have one clean source of truth. A deadline may be in a syllabus, requirements in a rubric, and the context they need in lecture notes. A generic chatbot can sound confident while inventing details or losing track of which document supports an answer.
                </p>
              </div>
              <div className="cs-block">
                <h3>The Product Decision</h3>
                <p>
                  The experience starts with the student&apos;s material, not an empty chat box. After the documents are read, the interface adapts: students can ask directly, build an assignment checklist, or create a study review. Every answer links back to retrieved source text.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-section-dark">
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': accent }}>How the RAG pipeline works</h2>
            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">01 · Add</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Course material</div>
                  <div className="cs-flow-detail">PDF, DOCX, TXT, Markdown, or pasted text</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">02 · Prepare</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Parse + chunk</div>
                  <div className="cs-flow-detail">Preserve source and page metadata</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">03 · Retrieve</div>
                <div className="cs-flow-box" style={{ background: accent, borderColor: accent, color: '#000' }}>
                  <div className="cs-flow-title">Vector search</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>OpenAI embeddings + Pinecone</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">04 · Answer</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Grounded response</div>
                  <div className="cs-flow-detail">Answer, citations, and evidence drawer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accent }}>What the assistant can do</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': accent }}>
                <h3>Answer the question in front of you</h3>
                <p>Ask about a deadline, a quiz format, a concept, or a specific assignment. The answer stays inside the indexed course sources.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accent }}>
                <h3>Turn a rubric into a checklist</h3>
                <p>Assignment mode separates deliverables, requirements, grading priorities, and questions that still need instructor clarification.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accent }}>
                <h3>Make study material actionable</h3>
                <p>Study mode organizes retrieved ideas and creates self-test prompts instead of returning another undifferentiated summary.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accent }}>
                <h3>Show the evidence</h3>
                <p>Inline citations open the exact retrieved chunk, source name, page metadata when available, and character range used to ground the answer.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-product-showcase">
          <div className="container">
            <div className="cs-showcase-heading">
              <div>
                <span className="experiment-eyebrow" style={{ color: accent }}>The experience</span>
                <h2 className="cs-section-title" style={{ '--title-color': accent }}>Material first. Then the right tool.</h2>
              </div>
              <p>The sample course lets someone try the complete path in one click. Their own files use the same pipeline.</p>
            </div>
            <div className="course-rag-screenshot-grid">
              <figure className="course-rag-screenshot course-rag-screenshot-wide">
                <img src="/images/course-rag/workspace.jpg" alt="Course RAG Assistant workspace with a grounded answer and student tools" />
                <figcaption>One workspace for questions, deadlines, study reviews, and assignment work.</figcaption>
              </figure>
              <figure className="course-rag-screenshot">
                <img src="/images/course-rag/upload-screen.jpg" alt="Course RAG Assistant upload screen" loading="lazy" />
                <figcaption>Start with the material a student already has.</figcaption>
              </figure>
              <figure className="course-rag-screenshot">
                <img src="/images/course-rag/cited-answer.jpg" alt="Course RAG Assistant cited answer with source evidence" loading="lazy" />
                <figcaption>Make the answer verifiable, not just plausible.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accent }}>What I learned</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '760px', marginBottom: '32px' }}>
              The hard part was not connecting a language model to a vector database. It was deciding when the assistant should act, what it should refuse to invent, and how a student can verify the answer without leaving the flow. The result is a small RAG product with a clear boundary: the student brings the source, retrieval finds the relevant context, and the interface makes the evidence visible.
            </p>
            <a className="brutal-btn primary" href="https://course-rag-assistant.vercel.app" target="_blank" rel="noopener noreferrer">
              Try the live demo →
            </a>
          </div>
        </section>

        <ProjectNavigation current="course-rag-assistant" />

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
