import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "NYC Rideshare Operations Analysis",
  description:
    "An analysis of 62.4 million NYC rideshare trips revealing where supply lags demand, supported by an interactive operations dashboard.",
  path: "/work/rideshare-ops-intelligence",
});

export default function RideshareOpsLayout({ children }) {
  return children;
}
