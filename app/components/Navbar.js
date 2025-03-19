"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname(); // Detects the current page
  const router = useRouter(); // Handles navigation

  useEffect(() => {
    if (pathname !== "/") return; // Only run scrolling logic on Home page

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "expertise", "projects"];
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (section) => {
    if (section === "contact") {
      // If clicking "Contact", go to the Contact Page
      router.push("/contact");
    } else if (pathname !== "/") {
      // If not on the Home page, go there first
      router.push(`/#${section}`);
    } else {
      // Scroll smoothly if already on Home
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-center items-center space-x-10 text-lg font-medium">
        {["home", "about", "skills", "expertise", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className={`hover:text-blue-600 ${
              activeSection === section ? "text-blue-600 font-bold" : "text-gray-900"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
  
}

