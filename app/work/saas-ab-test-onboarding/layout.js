import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "B2B SaaS Onboarding Experiment",
  description:
    "A product analytics case study evaluating a guided onboarding checklist across 2,000 SaaS accounts and uncovering different results by segment.",
  path: "/work/saas-ab-test-onboarding",
});

export default function SaasAbTestLayout({ children }) {
  return children;
}
