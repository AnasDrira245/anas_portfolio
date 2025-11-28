import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Icon({ name }) {
  // simple icon set (keeps bundle small)
  switch (name) {
    case "Home":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        </svg>
      );
  }
}

export default function NavMenu({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.4, 0.75] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  function go(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <>
      {/* Desktop horizontal header nav (to be placed inside header) */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            className={`relative group px-2 py-1 rounded-md transition-colors ${active === it.id ? "text-white bg-gradient-to-r from-purple-500 to-indigo-500" : "hover:text-cosmic-purple dark:hover:text-nebula-blue"}`}
          >
            {it.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-nebula-blue transition-all group-hover:w-full" />
          </button>
        ))}

        <div className="ml-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile floating button + drawer */}
      <div className="md:hidden fixed right-4 bottom-6 z-40">
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg flex items-center justify-center">
          ☰
        </button>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
              <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: "spring", stiffness: 300 }} className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-gray-900 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">Contents</div>
                  <button onClick={() => setOpen(false)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">✕</button>
                </div>

                <div className="flex flex-col gap-2">
                  {items.map((it) => (
                    <button key={it.id} onClick={() => go(it.id)} className={`text-left px-3 py-2 rounded-md transition-colors ${active === it.id ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}>
                      {it.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
