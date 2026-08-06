import Link from "next/link";

const projects = [
  { slug: "course-rag-assistant", title: "Course RAG Assistant", accent: "#06b6d4" },
  { slug: "athletedesk", title: "AthleteDesk", accent: "#f59e0b" },
  { slug: "trackhub", title: "TrackHub", accent: "#00d4ff" },
  { slug: "saas-ab-test-onboarding", title: "B2B SaaS Onboarding Experiment", accent: "#10b981" },
  { slug: "rideshare-ops-intelligence", title: "NYC Rideshare Operations", accent: "#ed7a32" },
  { slug: "drug-reviews", title: "Drug Reviews NLP", accent: "#8b5cf6" },
  { slug: "olist-analysis", title: "Olist Multi-Seller Analysis", accent: "#0ea5e9" },
  { slug: "ecommerce-funnel", title: "E-Commerce Funnel Analysis", accent: "#facc15" },
];

export default function ProjectNavigation({ current }) {
  const currentIndex = projects.findIndex((project) => project.slug === current);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const activeProject = projects[currentIndex];

  if (!activeProject) {
    return null;
  }

  return (
    <section
      className="project-navigation"
      style={{ "--project-accent": activeProject.accent }}
      aria-label="More portfolio projects"
    >
      <div className="container">
        <div className="project-navigation-heading">
          <span>Keep Exploring</span>
          <Link href="/#work">View All Work</Link>
        </div>
        <div className="project-navigation-grid">
          <Link href={`/work/${previous.slug}`} className="project-navigation-card previous">
            <span>← Previous Project</span>
            <strong>{previous.title}</strong>
          </Link>
          <Link href={`/work/${next.slug}`} className="project-navigation-card next">
            <span>Next Project →</span>
            <strong>{next.title}</strong>
          </Link>
        </div>
      </div>
    </section>
  );
}
