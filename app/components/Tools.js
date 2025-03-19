export default function Tools() {
    const tools = ["Python", "SQL", "Power BI", "Tableau", "Pandas", "NumPy", "Scikit-Learn", "JavaScript", "React"];
  
    return (
      <section id="tools" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span key={tool} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
      </section>
    );
  }