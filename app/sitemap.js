import { siteConfig } from "./site-metadata";

const routes = [
  "",
  "/contact",
  "/work/athletedesk",
  "/work/drug-reviews",
  "/work/rideshare-ops-intelligence",
  "/work/saas-ab-test-onboarding",
  "/work/trackhub",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/contact" ? 0.6 : 0.8,
  }));
}
