export default function ResumePage() {
    return (
      <section className="p-10 bg-gray-200">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="text-lg text-gray-700">Download my resume below:</p>
        
        <a 
          href="/resume.pdf" 
          download
          className="mt-5 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 inline-block"
        >
          Download Resume
        </a>
      </section>
    );
  }  