import Link from "next/link";
import ProjectNavigation from "../ProjectNavigation";

const accent = "#fefae0";
const accentInk = "#7f1d1d";

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
              A source-grounded course workspace for the moments when the answer is somewhere in your syllabus, rubric, notes, or assignment—but you should not have to search for it all over again.
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

        <section className="cs-section" style={{ background: accent }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ color: '#000', '--title-color': accentInk }}>The moment it clicked</h2>
            <div className="cs-story">
              <p>
                When I was a student, the hard part was not always understanding the work. It was remembering where the information lived: a deadline in the syllabus, requirements in a rubric, and the details of an assignment in a separate document.
              </p>
              <p>
                A student should be able to upload the material they already have, ask the question that is actually on their mind, and leave with a clear next step—not another generic chat response.
              </p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>Overview</h2>
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
            <h2 className="cs-section-title" style={{ color: '#fff', '--title-color': accent }}>From scattered material to a next step</h2>
            <div className="cs-flow">
              <div className="cs-flow-group">
                <div className="cs-flow-label">01 · Add</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">Your material</div>
                  <div className="cs-flow-detail">Syllabus, rubric, notes, or assignment</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">02 · Ask</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">The question in front of you</div>
                  <div className="cs-flow-detail">A deadline, requirement, concept, or quiz</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">03 · Choose</div>
                <div className="cs-flow-box" style={{ background: accent, borderColor: accent, color: '#000' }}>
                  <div className="cs-flow-title">The right kind of help</div>
                  <div className="cs-flow-detail" style={{ color: '#000', opacity: 0.7 }}>Answer, checklist, dates, or study review</div>
                </div>
              </div>
              <span className="cs-flow-arrow" style={{ color: accent }}>→</span>
              <div className="cs-flow-group">
                <div className="cs-flow-label">04 · Verify</div>
                <div className="cs-flow-box">
                  <div className="cs-flow-title">A usable answer</div>
                  <div className="cs-flow-detail">Source text, evidence, and a clear next step</div>
                </div>
              </div>
            </div>
            <p style={{ maxWidth: '760px', marginTop: '28px', color: '#aaa', fontSize: '14px', lineHeight: 1.7 }}>
              Under the hood, the material is parsed, retrieved, and matched to the question. The student experience stays focused on what to do next.
            </p>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>How it works under the hood</h2>
            <p style={{ maxWidth: '760px', marginBottom: '40px', fontSize: '17px', lineHeight: 1.7 }}>
              The interface stays simple for the student, but the answer still has a deliberate path behind it. I built the system so the source, retrieval step, and evidence remain inspectable.
            </p>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Ingest the material</h3>
                <p>Parse PDF, DOCX, TXT, Markdown, or pasted text, then report unreadable files instead of silently indexing an empty document.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Preserve where it came from</h3>
                <p>Split documents into boundary-aware chunks while keeping source name, page metadata, character range, and chunk order attached.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Retrieve before answering</h3>
                <p>Embed the question, search the course-specific Pinecone namespace, and pass the most relevant chunks into answer generation.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Cite or say it cannot verify</h3>
                <p>Return inline citations and an evidence drawer for supported claims, while surfacing missing or ambiguous information instead of guessing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section" style={{ background: '#f5f5f5' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>Ways a student can use it</h2>
            <div className="cs-features">
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Answer the question in front of you</h3>
                <p>“Is the quiz multiple choice?” “How long should the research paper be?” The answer stays inside the course sources.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Turn a rubric into a checklist</h3>
                <p>See what to submit, what the rubric prioritizes, and what still needs clarification before starting the assignment.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Make study material actionable</h3>
                <p>Turn the material into focused review prompts instead of another undifferentiated summary.</p>
              </div>
              <div className="cs-feature" style={{ '--hover-color': accentInk }}>
                <h3>Show the evidence</h3>
                <p>Open the source behind the answer so you can verify the requirement before relying on it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-product-showcase">
          <div className="container">
            <div className="cs-showcase-heading">
              <div>
                <span className="experiment-eyebrow" style={{ color: accentInk }}>The experience</span>
                <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>Material first. Then the right tool.</h2>
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

        <section className="cs-section" style={{ background: '#fefae0' }}>
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>Useful after the answer</h2>
            <div className="cs-problem-solution">
              <div className="cs-block">
                <h3>What exists today</h3>
                <p>
                  The assistant can pull deadlines, requirements, and study material into focused tools so a student does not have to keep reopening the same documents.
                </p>
              </div>
              <div className="cs-block">
                <h3>Where it can go next</h3>
                <p>
                  A future course plan could let students save selected dates and tasks, then export them to the calendar or planner they already use. The important part is making the output portable—not forcing another place to manage school.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section-title" style={{ '--title-color': accentInk }}>Designing for trust</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, maxWidth: '760px', marginBottom: '32px' }}>
              The assistant should make course material easier to use without pretending to replace it. That means starting with the student&apos;s own sources, giving them different ways to work, and making the evidence visible whenever an answer matters.
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
