export const siteConfig = {
  url: "https://www.mkoroma.com",
  title: "Moses Koroma | Data Analyst & Product Builder",
  description:
    "Portfolio of Moses Koroma, a data analyst and product builder creating useful software, analytical tools, and data-driven products.",
};

export function createPageMetadata({ title, description, path }) {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Moses Koroma`,
      description,
      url,
      siteName: "Moses Koroma Portfolio",
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Moses Koroma - Data analyst and product builder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Moses Koroma`,
      description,
      images: ["/twitter-image"],
    },
  };
}
