export const siteConfig = {
  url: "https://www.mkoroma.com",
  title: "Moses Koroma | Portfolio",
  description:
    "Portfolio of Moses Koroma featuring product, data, and software projects.",
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
          alt: "Moses Koroma portfolio",
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
