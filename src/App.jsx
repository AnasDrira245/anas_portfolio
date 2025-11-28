
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import NavMenu from "./components/NavMenu";

export default function App() {
	const [theme, setTheme] = useState(() => {
		try {
			const stored = localStorage.getItem("theme");
			if (stored) return stored;
			return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		} catch (e) {
			return "dark";
		}
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		try {
			localStorage.setItem("theme", theme);
		} catch (e) { }
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

	return (
		<div className="min-h-screen bg-starlight-white text-gray-900 dark:bg-space-black dark:text-starlight-white transition-colors selection:bg-cosmic-purple selection:text-white overflow-x-hidden">
			{/* Background Elements */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse-glow" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nebula-blue/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }} />
			</div>

			<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
				<nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cosmic-purple to-nebula-blue"
					>
						Anas Drira
					</motion.div>
								<NavMenu toggleTheme={toggleTheme} theme={theme} />
				</nav>
			</header>

			<main className="relative z-10 pt-24 pb-20 space-y-24">
				<Hero />
				<div className="max-w-7xl mx-auto px-6 space-y-24">
					<About />
					<Experience />
					<Projects />
					<Education />
					<Achievements />
					<Certificates />
					<Contact />
				</div>

				<footer className="mt-24 py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/5">
					<p>Built with <span className="text-red-500">♥</span> by Anas Drira • <a href="https://github.com/AnasDrira245" className="text-cosmic-purple hover:underline">GitHub</a></p>
				</footer>
			</main>
		</div>
	);
}
