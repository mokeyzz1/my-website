export default function Skills() {
    const skills = [
      { name: "Python", level: "90%" },
      { name: "SQL", level: "85%" },
      { name: "Data Visualization", level: "80%" },
      { name: "Machine Learning", level: "70%" },
      { name: "JavaScript", level: "75%" },
    ];
  
    return (
      <section id="skills" className="p-10">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <p className="text-lg font-medium">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div 
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  