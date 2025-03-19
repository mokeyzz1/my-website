"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "IMDB Movie Analysis",
      description: "Exploratory Data Analysis on IMDB movies dataset.",
      image: "/imdb.png",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/mokeyzz1/datafun-06-eda",
    },
    {
      title: "NYC Crash Analysis",
      description: "Analyzing NYC motor vehicle collisions for insights.",
      image: "/nyc-crash.png",
      tech: ["Python", "Folium", "Seaborn"],
      link: "https://github.com/mokeyzz1/NYC-Traffic-Crashes-Analysis",
    },
    {
      title: "Time Series Forecasting (NYC Temperature)",
      description: "Predicting NYC temperature trends with ML models.",
      image: "/nyc-temperature.png",
      tech: ["Python", "SciPy", "Scikit-learn", "Statsmodels"],
      link: "https://github.com/mokeyzz1/datafun-07-ml",
    },
    {
      title: "Shiny Stock Dashboard",
      description: "Interactive stock market dashboard using PyShiny.",
      image: "/shiny-stock.png",
      tech: ["Python", "PyShiny", "Plotly", "Pandas"],
      link: "https://github.com/mokeyzz1/cintel-06-custom",
      liveDemo: "https://moseskoroma.shinyapps.io/dashboard/", // Live link
    },
    {
      title: "Shiny Data Dashboard (Temperature Analysis)",
      description: "A PyShiny-based temperature trend analysis dashboard.",
      image: "/shiny-temperature.png",
      tech: ["Python", "Shiny", "Plotly"],
      link: "https://github.com/mokeyzz1/cintel-05-cintel",
      liveDemo: "https://mokeyzz1.github.io/cintel-05-cintel/", // Live link
    },
  ];

  return (
    <main className="w-full py-20 bg-white flex flex-col items-center">
      <h1 className="text-5xl font-bold text-gray-900">All Projects</h1>
      <p className="text-lg text-gray-600 mt-2">Explore all my projects in detail.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105">
            <Image src={project.image} alt={project.title} width={300} height={180} className="rounded-md"/>
            <h3 className="text-2xl font-semibold text-gray-900 mt-4">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>

            <div className="flex flex-wrap justify-center mt-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mx-1">{tech}</span>
              ))}
            </div>

            {/* View Project Button */}
            <Link href={project.link} target="_blank">
              <button className="mt-4 px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                View Project
              </button>
            </Link>

            {/* View Live Button (Only for projects with a live demo) */}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <button className="mt-2 px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all">
                  View Live
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
      
    </main>
  );
}
