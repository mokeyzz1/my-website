import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "Drug Reviews NLP Analysis",
  description:
    "An NLP analysis of 215,000 patient reviews identifying underperforming medications and quantifying revenue risk from drug non-adherence.",
  path: "/work/drug-reviews",
});

export default function DrugReviewsLayout({ children }) {
  return children;
}
