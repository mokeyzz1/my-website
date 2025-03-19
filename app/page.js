"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center overflow-hidden">
      
      <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
  
  
 {/* Floating Background Text */}
<div className="absolute inset-0 overflow-hidden">
  {["top-10 left-10", "top-1/3 left-1/4", "bottom-10 right-10", "top-2/3 right-1/4"].map((position, index) => (
    <motion.span
      key={index}
      className={`absolute text-[8vw] font-extrabold text-gray-800 opacity-10 ${position}`}
      initial={{ opacity: 0.1, x: 0, y: 0 }}
      animate={{
        opacity: [0.1, 0.4, 0.1], // Fade in and out for echo effect
        x: [0, 10, -10, 0], // Slight side-to-side movement
        y: [0, -10, 10, 0], // Slight up-down movement
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Continuous looping
    >
      WELCOME
    </motion.span>
  ))}
</div>

  {/* Profile Image + Social Links */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }} 
    className="text-center flex flex-col items-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
      <Image 
        src="/profile.jpg" 
        alt="Moses Koroma" 
        width={160} 
        height={160} 
        className="rounded-full shadow-lg border-4 border-white"
      />
    </motion.div>

   {/* Social Media Icons */}
<div className="flex space-x-4 mt-3">
  <motion.a 
    whileHover={{ scale: 1.1 }} 
    href="https://github.com/yourgithub" 
    target="_blank"
    className="icon-glow"
  >
    <Image 
      src="/github.svg" 
      alt="GitHub" 
      width={32} 
      height={32} 
      className="text-white opacity-90"
    />
  </motion.a>
  
  <motion.a 
    whileHover={{ scale: 1.1 }} 
    href="https://linkedin.com/in/yourlinkedin" 
    target="_blank"
    className="icon-glow"
  >
    <Image 
      src="/linkedin.svg" 
      alt="LinkedIn" 
      width={32} 
      height={32} 
      className="text-white opacity-90"
    />
  </motion.a>
</div>
  </motion.div>

  {/* Name + Title */}
  <motion.h1 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
  className="text-6xl font-extrabold text-white drop-shadow-lg"
>
  Moses Koroma
</motion.h1>
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 1 }}
    className="text-lg text-gray-700 mt-2"
  >
    Aspiring Data Analyst | Python | SQL | Data Visualization
  </motion.p>

  {/* Scroll Down Indicator */}
  <motion.a 
    href="#about"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    className="absolute bottom-10 text-gray-600 hover:text-blue-600 cursor-pointer"
  >
    <p className="text-sm">Scroll Down</p>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </motion.a>
</section>

      {/* About Section */}
      <section id="about" className="w-full py-24 bg-white flex flex-col md:flex-row items-center justify-center px-12">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image 
            src="/profile.jpg" 
            alt="Moses Koroma" 
            width={350} 
            height={350} 
            className="rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        {/* About Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 space-y-5"
        >
          <h2 className="text-5xl font-bold text-gray-900">About Me</h2>
          <p className="text-gray-600 mt-3 text-lg leading-relaxed max-w-lg">
            Hi, I’m Moses Koroma—a Data Analyst and graduate student passionate about uncovering insights through data. 
            I have a background in Management Information Systems and am currently pursuing a Master’s in Data Analytics.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            I specialize in Python, SQL, Machine Learning, and Data Visualization, applying these skills to solve real-world problems. 
            As a Student Data Analyst, I work with institutional data to support data-driven decision-making and process improvements.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            I’m constantly learning, refining my analytical skills, and exploring new ways to make data more accessible and impactful. 
            My goal is to leverage data insights to drive smarter business decisions and meaningful change.
          </p>

          {/* Key Highlights */}
          <div className="flex justify-center md:justify-start mt-6 space-x-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">2+</h3>
              <p className="text-md text-gray-600">Years in Data Analytics</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">1</h3>
              <p className="text-md text-gray-600">Internship</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">15+</h3>
              <p className="text-md text-gray-600">Completed Projects</p>
            </div>
          </div>

          {/* View Résumé Button */}
          <Link href="/resume.pdf" download>
            <button className="mt-6 px-8 py-3 flex items-center space-x-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all">
              <span>View Résumé</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7"></path>
              </svg>
            </button>
          </Link>
        </motion.div>

      </section>
    
   {/* Skills Section */}
<section id="skills" className="w-full py-20 bg-gray-200 flex flex-col items-center">
  <h2 className="text-4xl font-bold text-gray-900 mb-6">My Skills</h2>

  {/* Programming Languages */}
  <div className="w-3/4 mt-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
    {[
      { name: "Python", level: "90%" },
      { name: "SQL", level: "75%" },
      { name: "Java", level: "50%" },
    ].map((skill) => (
      <div key={skill.name} className="flex items-center space-x-2 mb-4">
        <p className="text-lg font-medium text-gray-900 w-32">{skill.name}</p>
        <div className="w-full bg-gray-300 rounded-full h-2 relative">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: skill.level }}
          />
          <span className="absolute right-0 text-sm font-bold text-gray-900 -top-5">
            {skill.level}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Technologies */}
  <div className="w-3/4 mt-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies</h3>
    {[
      { name: "Tableau", level: "80%" },
      { name: "Power BI", level: "80%" },
      { name: "Excel", level: "85%" },
      { name: "Git", level: "80%" },
    ].map((skill) => (
      <div key={skill.name} className="flex items-center space-x-2 mb-4">
        <p className="text-lg font-medium text-gray-900 w-32">{skill.name}</p>
        <div className="w-full bg-gray-300 rounded-full h-2 relative">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: skill.level }}
          />
          <span className="absolute right-0 text-sm font-bold text-gray-900 -top-5">
            {skill.level}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Expertise Section */}
<section id="expertise" className="w-full py-20 bg-white flex flex-col items-center">
  <h2 className="text-4xl font-bold text-gray-900">Expertise</h2>
  <p className="text-lg text-gray-700 mt-2">Areas of Interest</p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl">
    
    {/* Expertise Items */}
    {[
      { title: "Data Analysis", description: "Transforming raw data into actionable insights." },
      { title: "Machine Learning", description: "Building predictive models for smarter decision-making." },
      { title: "Data Visualization", description: "Creating meaningful visual representations of complex data." },
      { title: "Business Intelligence", description: "Leveraging BI tools to optimize decision-making." },
      { title: "Database Management", description: "Designing and managing efficient database systems." },
      { title: "Process Automation", description: "Streamlining workflows through automation techniques." }
    ].map((expertise, index) => (
      <motion.div 
        key={index} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold text-gray-900">{expertise.title}</h3>
        <p className="text-gray-700 mt-2">{expertise.description}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Featured Projects Section */}
<section id="projects" className="w-full py-20 bg-gray-100 flex flex-col items-center">
  <h2 className="text-5xl font-bold text-gray-900">Projects</h2>
  <p className="text-lg text-gray-600 mt-2">Some of my featured work. Explore more projects!</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl">
    {[
      {
        title: "IMDB Movie Analysis",
        description: "Analyzing IMDB movies dataset to uncover trends and insights.",
        image: "/imdb.png",
        link: "/projects", // Links to full Projects page
      },
      {
        title: "NYC Crash Analysis",
        description: "Analyzing NYC motor vehicle collision data for patterns and safety insights.",
        image: "/nyc-crash.png",
        link: "/projects",
      },
      {
        title: "Time Series Forecasting",
        description: "Predicting NYC temperature trends using machine learning models.",
        image: "/nyc-temperature.png",
        link: "/projects",
      },
    ].map((project, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105">
        <Image src={project.image} alt={project.title} width={300} height={180} className="rounded-md"/>
        <h3 className="text-2xl font-semibold text-gray-900 mt-4">{project.title}</h3>
        <p className="text-gray-700 mt-2">{project.description}</p>

        <Link href={project.link}>
          <button className="mt-4 px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
            View Project
          </button>
        </Link>
      </div>
    ))}
  </div>

  {/* Button to View All Projects */}
  <Link href="/projects">
    <button className="mt-8 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
      View All Projects
    </button>
  </Link>
</section>

<section id="contact" className="w-full py-20 bg-gray-100 flex flex-col items-center px-6">
  <h2 className="text-5xl font-bold text-gray-900">Get in Touch</h2>
  <p className="text-lg text-gray-600 mt-2">Let&apos;s connect! Feel free to reach out.</p>

  <form 
    action="https://formspree.io/f/xblglvaa"
    method="POST" 
    className="bg-white shadow-lg p-6 rounded-lg mt-6 w-full max-w-lg"
  >
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Name
      <input type="text" name="name" required className="mt-1 p-2 w-full border rounded" />
    </label>

    <label className="block text-gray-700 text-sm font-bold mb-2">
      Email
      <input type="email" name="email" required className="mt-1 p-2 w-full border rounded" />
    </label>

    <label className="block text-gray-700 text-sm font-bold mb-2">
      Message
      <textarea name="message" rows="4" required className="mt-1 p-2 w-full border rounded"></textarea>
    </label>

    <button 
      type="submit" 
      className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</section>
    </main>
  );
}
