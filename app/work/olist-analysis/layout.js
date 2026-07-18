import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "Olist Multi-Seller Order Analysis",
  description:
    "A marketplace analysis of 96,478 delivered orders showing how split fulfillment affected customer satisfaction and what Olist could do to improve the experience.",
  path: "/work/olist-analysis",
});

export default function OlistAnalysisLayout({ children }) {
  return children;
}
