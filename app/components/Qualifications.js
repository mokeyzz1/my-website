export default function Qualifications() {
    const education = [
      { degree: "B.S. in Management Information Systems", school: "Your University", year: "2024" },
      { degree: "Google Data Analytics Certification", school: "Google", year: "In Progress" },
    ];
  
    const experience = [
      { job: "Student Data Analyst", company: "Institutional Research Department", year: "2025-Present" },
      { job: "Assistant Manager", company: "Domino’s Pizza", year: "Past Role" },
    ];
    
    return (
      <section id="qualifications" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Qualifications</h2>
        
        {/* Education */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Education</h3>
          <ul className="mt-3 space-y-2">
            {education.map((edu) => (
              <li key={edu.degree} className="bg-gray-100 p-3 rounded-lg">
                <p className="text-lg font-medium">{edu.degree}</p>
                <p className="text-gray-600">{edu.school} - {edu.year}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold">Work Experience</h3>
          <ul className="mt-3 space-y-2">
            {experience.map((exp) => (
              <li key={exp.job} className="bg-gray-100 p-3 rounded-lg">
                <p className="text-lg font-medium">{exp.job}</p>
                <p className="text-gray-600">{exp.company} - {exp.year}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }