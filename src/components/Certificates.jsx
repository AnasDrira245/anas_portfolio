import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    {
      title: "Facebook Hacker Cup — Round 2 Qualifier",
      issuer: "Meta",
      date: "Oct 2025",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/257834442854828",
      icon: "🏆"
    },
    {
      title: "TCPC Achievement",
      issuer: "ICPC",
      date: "Jul 2025",
      link: "https://drive.google.com/file/d/1d6iYsKKQsDb5Rui2k32yzWA_MDkmUne3/view?usp=sharing",
      icon: "🏅"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "Jun 2024",
      link: "https://www.hackerrank.com/certificates/f5acd5607813",
      icon: "⭐"
    },
    {
      title: "Facebook Hacker Cup Qualified Round 2",
      issuer: "Meta",
      date: "Oct 2023",
      link: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/257834442854828",
      icon: "📜"
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & <span className="text-gradient">Awards</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition of my skills and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, index) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-cosmic-purple/30 transition-all hover:-translate-y-1 group block"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl bg-gray-100 dark:bg-white/5 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cosmic-purple transition-colors">
                    {c.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {c.issuer}
                  </div>
                  <div className="text-xs font-medium text-cosmic-purple bg-cosmic-purple/10 inline-block px-2 py-1 rounded">
                    {c.date}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
