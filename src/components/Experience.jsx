export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer Intern, Coding Betounsi",
      date: "June 2025 - September 2025",
      tech: "Python, Angular, FastAPI, PostgreSQL",
      bullets: [
        "Debugged and reverse-engineered a payroll management system, improving validation and UI stability.",
        "Implemented CNSS generation module for social security files with UX components.",
        "Refactored the prime system to support date-based variant history and participated in code reviews.",
      ],
    },
    {
      role: "AI Intern, KPIT (Primatec Engineering)",
      date: "July 2024 - September 2024",
      tech: "Python, LlamaIndex, MistralAI, Streamlit",
      bullets: [
        "Developed a multi-language AI code generation agent supporting Python, C++, Java and JavaScript.",
        "Integrated LlamaIndex with MistralAI for context-aware code generation.",
        "Added code execution and download features so users could run and save generated code.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-4">
          {experiences.map((e) => (
            <div key={e.role} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{e.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{e.tech}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{e.date}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
