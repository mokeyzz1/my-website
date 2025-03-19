import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Moses Koroma - Portfolio",
  description: "A personal portfolio showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico", // Ensure the file is inside /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-new.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
