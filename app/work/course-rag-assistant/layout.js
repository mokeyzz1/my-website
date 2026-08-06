import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "Course RAG Assistant",
  description:
    "A source-grounded course workspace that turns student materials into cited answers, study reviews, and assignment checklists.",
  path: "/work/course-rag-assistant",
});

export default function CourseRagLayout({ children }) {
  return children;
}
