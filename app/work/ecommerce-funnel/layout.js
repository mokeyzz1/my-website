import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "E-Commerce Funnel Analysis",
  description:
    "An analysis of 109.9 million shopping events showing where customers leave the purchase journey and which improvements are most worth testing.",
  path: "/work/ecommerce-funnel",
});

export default function EcommerceFunnelLayout({ children }) {
  return children;
}
