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
    <section id="achievements" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <motion.h2 className="text-3xl font-extrabold mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Achievements
        </motion.h2>

        <motion.p className="text-gray-600 dark:text-gray-300 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
          Selected podium photos — hover a card for a quick peek, click to open full view.
        </motion.p>

        <div className="space-y-8">
          {groups.map((g, gi) => (
            <div key={g.place}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{g.place}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{g.description}</div>
                </div>
                <div className="text-sm px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium">{g.badge}</div>
              </div>

              <div className="overflow-x-auto">
                <motion.div className="flex gap-4 pb-2" initial="hidden" animate="show" variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } }
                }}>
                  {g.items.map((it, idx) => {
                    const globalIndex = flat.findIndex((f) => f.src === it.src && f.title === it.title);
                    return (
                      <motion.button
                        key={it.title + idx}
                        onClick={() => openAt(globalIndex)}
                        className="group w-64 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900 focus:outline-none"
                        whileHover={{ y: -6, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
                        }}
                      >
                        <div className="relative w-full h-40">
                          <img src={it.src} alt={it.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute left-3 top-3 bg-white/80 dark:bg-black/60 text-xs px-2 py-1 rounded-lg font-semibold">{g.badge}</div>
                        </div>
                        <div className="p-3 text-left">
                          <div className="font-medium text-gray-900 dark:text-gray-100">{it.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{it.caption}</div>
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
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
              <div className="relative max-w-4xl w-full mx-4 p-4">
                <motion.div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 10, scale: 0.98 }}>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setCurrentIndex((i) => (i - 1 + flat.length) % flat.length)}
                      className="p-4 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-label="Previous"
                    >
                      ‹
                    </button>

                    <div className="flex-1 p-4">
                      <img src={flat[currentIndex].src} alt={flat[currentIndex].alt} className="w-full h-auto max-h-[70vh] object-contain bg-black" />
                      <div className="mt-4">
                        <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">{flat[currentIndex].title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{flat[currentIndex].caption} • {flat[currentIndex].place}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentIndex((i) => (i + 1) % flat.length)}
                      className="p-4 text-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>

                  <button
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 bg-white/70 dark:bg-gray-800/60 rounded-full p-2 hover:bg-white dark:hover:bg-gray-800"
                  >
                    ✕
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
