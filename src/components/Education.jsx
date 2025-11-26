import { motion } from "framer-motion";

export default function Education() {
  const schools = [
    {
      name: "Higher Institute of Computer Science And Multimedia (ISIMS)",
      degree: "Engineer's Degree in Computer Science",
      date: "2023 - 2026",
      icon: "🎓"
    },
    {
      name: "Higher Institute of Computer Science And Multimedia (ISIMS)",
      degree: "Pre-Engineering",
      date: "2021 - 2023",
      icon: "📚"
    },
    {
      name: "Monji Slim High School, Sfax",
      degree: "Mathematics Baccalaureate",
      date: "2017 - 2021",
      icon: "🏫"
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education <span className="text-gradient">Journey</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schools.map((s, index) => (
            <motion.div
              key={s.name + s.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-cosmic-purple/30 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 min-h-[3.5rem]">{s.name}</h3>
              <p className="text-cosmic-purple font-medium mb-4">{s.degree}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-sm text-gray-600 dark:text-gray-400">
                {s.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
