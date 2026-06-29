import { createPageMetadata } from "../../site-metadata";

export const metadata = createPageMetadata({
  title: "AthleteDesk Sports Agency CRM",
  description:
    "How Moses Koroma designed and built AthleteDesk, a CRM for sports agencies managing recruiting, rosters, brand deals, and team coordination.",
  path: "/work/athletedesk",
});

export default function AthleteDeskLayout({ children }) {
  return children;
}
