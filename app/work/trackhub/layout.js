import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "TrackHub Collegiate Track & Field App",
  description:
    "A live mobile app for following collegiate track and field through results, rankings, athlete profiles, and meet information.",
  path: "/work/trackhub",
});

export default function TrackHubLayout({ children }) {
  return children;
}
