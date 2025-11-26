import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import codebreakerThird from "../../photo/CodeBreaker ThirdPlace.jpg";
import crackcodeSecondAlt from "../../photo/CrackCode SecondPlace second photo.jpg";
import crackcodeSecond from "../../photo/CrackCode SecondPlace.jpg";
import helloworldThird from "../../photo/HelloWorld ThirdPlace.jpg";
import shinobiSecond from "../../photo/Shinobi SecondPlace.jpg";
import solveit1First from "../../photo/SolveIt1 FirstPlace.jpg";
import solveit2First from "../../photo/SolveIt2 FirstPlace.jpg";
import trcFirst from "../../photo/TRC FirstPlace.jpg";

const groups = [
  {
    place: "First Place",
    badge: "1st",
    color: "from-yellow-400 to-yellow-600",
    description: "Top finishes across major national competitions.",
    items: [
      { src: trcFirst, title: "TRC", caption: "TRC — First Place", alt: "Anas — TRC First Place" },
      { src: solveit1First, title: "SolveIt1", caption: "SolveIt1 — First Place", alt: "Anas — SolveIt1 First Place" },
      { src: solveit2First, title: "SolveIt2", caption: "SolveIt2 — First Place", alt: "Anas — SolveIt2 First Place" },
    ],
  },
  {
    place: "Second Place",
    badge: "2nd",
    color: "from-gray-300 to-gray-500",
    description: "Strong runner-up performances with memorable moments.",
    items: [
      { src: crackcodeSecond, title: "CrackCode", caption: "CrackCode — Second Place", alt: "Anas — CrackCode Second Place" },
      { src: crackcodeSecondAlt, title: "CrackCode (alt)", caption: "Alternate photo from CrackCode — Second Place", alt: "Anas — CrackCode Second Place alternate photo" },
      { src: shinobiSecond, title: "Shinobi", caption: "Shinobi — Second Place", alt: "Anas — Shinobi Second Place" },
    ],
  },
  {
    place: "Third Place",
    badge: "3rd",
    color: "from-orange-400 to-orange-600",
    description: "Consistent podium finishes across events.",
    items: [
      { src: helloworldThird, title: "HelloWorld", caption: "HelloWorld — Third Place", alt: "Anas — HelloWorld Third Place" },
      { src: codebreakerThird, title: "CodeBreaker", caption: "CodeBreaker — Third Place", alt: "Anas — CodeBreaker Third Place" },
    ],
  },
];

export default function Achievements() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flat = useMemo(() => groups.flatMap((g) => g.items.map((it) => ({ ...it, place: g.place }))), []);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % flat.length);
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + flat.length) % flat.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, flat.length]);

  function openAt(index) {
    setCurrentIndex(index);
    setOpen(true);
  }

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-gradient">Achievements</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Selected podium photos — hover a card for a quick peek, click to open full view.
          </p>
        </motion.div>

        <div className="space-y-12">
          {groups.map((g, gi) => (
            <div key={g.place}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    {g.place}
                    <span className={`text-sm px-3 py-1 bg-gradient-to-r ${g.color} text-white rounded-full font-medium shadow-lg`}>
                      {g.badge}
                    </span>
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">{g.description}</div>
                </div>
              </div>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <motion.div
                  className="flex gap-6"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {g.items.map((it, idx) => {
                    const globalIndex = flat.findIndex((f) => f.src === it.src && f.title === it.title);
                    return (
                      <motion.button
                        key={it.title + idx}
                        onClick={() => openAt(globalIndex)}
                        className="group w-72 flex-shrink-0 rounded-2xl overflow-hidden glass-card hover:border-cosmic-purple/30 transition-all focus:outline-none"
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                      >
                        <div className="relative w-full h-48 overflow-hidden">
                          <img src={it.src} alt={it.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className={`absolute top-3 left-3 bg-gradient-to-r ${g.color} text-white text-xs px-2 py-1 rounded-lg font-bold shadow-lg`}>
                            {g.badge}
                          </div>
                        </div>
                        <div className="p-4 text-left">
                          <div className="font-bold text-gray-900 dark:text-white mb-1">{it.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{it.caption}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <img src={flat[currentIndex].src} alt={flat[currentIndex].alt} className="max-w-full max-h-full object-contain" />

                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i - 1 + flat.length) % flat.length); }}
                    className="absolute left-4 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i + 1) % flat.length); }}
                    className="absolute right-4 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                  >
                    ›
                  </button>
                </div>

                <div className="p-6 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{flat[currentIndex].title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{flat[currentIndex].caption}</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
