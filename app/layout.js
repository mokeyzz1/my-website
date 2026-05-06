import "./globals.css";

export const metadata = {
  title: "Moses Koroma - Portfolio",
  description: "A personal portfolio showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-new.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
