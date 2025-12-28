import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Core Contributor",
      company: "Repovive",
      link: "https://repovive.com",
      location: "Silicon Valley, United States (Remote)",
      date: "Nov 2025 - Present",
      tech: "Next.js, Redis, Judge0, MongoDB",
      description: "A competitive programming platform with over 4,500 users, tailored for equal access to education. Our mission is to fill the gaps in the CS world. Great training and mentorship are still limited to a few schools, universities, and circles. We're building a place where anyone, from any country, can learn, compete, and grow free of charge.",
      bullets: [
        "Optimized the judge architecture by implementing a Redis-based submission queue to efficiently handle requests.",
        "Developed gamification features including an activity heatmap and streak system to enhance user engagement.",
        "Implemented the Bug Report system which activated the 'Velots' economy, allowing users to earn rewards for contributions.",
        "Maintained platform reliability during live contests, including writing automation scripts to resolve stuck submissions.",
        "Collaborated closely with the founder, Shayan, to build Repovive, actively generating ideas and maintaining alignment through regular meetings and updates.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Coding Betounsi",
      date: "June 2025 - September 2025",
      tech: "Python, Angular, FastAPI, PostgreSQL",
      bullets: [
        "Debugged and reverse-engineered a payroll management system, improving validation and UI stability.",
        "Implemented CNSS generation module for social security files with UX components.",
        "Refactored the prime system to support date-based variant history and participated in code reviews.",
      ],
    },
    {
      role: "AI Intern",
      company: "KPIT (Primatec Engineering)",
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
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the value I've delivered.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent dark:before:via-white/10">
          {experiences.map((e, index) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-gray-50 dark:bg-space-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-cosmic-purple rounded-full animate-pulse" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:border-cosmic-purple/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{e.role}</h3>
                    <div className="text-cosmic-purple font-medium">
                      {e.link ? (
                        <a
                          href={e.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                        >
                          {e.company}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                      ) : (
                        e.company
                      )}
                      {e.location && <span className="block text-xs text-gray-500 dark:text-gray-400 font-normal mt-0.5">{e.location}</span>}
                    </div>
                  </div>
                  <div className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {e.date}
                  </div>
                </div>

                {e.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed border-l-2 border-cosmic-purple/30 pl-3 py-1">
                    {e.description}
                  </p>
                )}

                <ul className="space-y-2 mb-4">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cosmic-purple/50 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                  {e.tech.split(', ').map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
