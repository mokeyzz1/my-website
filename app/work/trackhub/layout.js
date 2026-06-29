import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "TrackHub Collegiate Track & Field App",
  description:
    "How Moses Koroma built and shipped TrackHub, a live mobile app for collegiate track results, rankings, athlete profiles, and meet information.",
  path: "/work/trackhub",
});

export default function TrackHubLayout({ children }) {
  return children;
}
