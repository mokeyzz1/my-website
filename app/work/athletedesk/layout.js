import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "AthleteDesk Sports Agency CRM",
  description:
    "A purpose-built CRM for sports agencies managing recruiting, rosters, brand deals, and team coordination in one platform.",
  path: "/work/athletedesk",
});

export default function AthleteDeskLayout({ children }) {
  return children;
}
