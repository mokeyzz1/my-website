import { createPageMetadata } from "../site-metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Moses Koroma about data analysis, product development, software projects, or professional opportunities.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
