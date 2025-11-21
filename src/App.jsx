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
		} catch (e) {}
	}, [theme]);

	const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

	return (
		<div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
			<header className="sticky top-0 z-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
				<nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
					<div className="text-lg font-semibold">Anas Drira</div>
					<div className="flex items-center gap-4 text-sm">
						<a href="#about" className="hover:text-purple-500">About</a>
						<a href="#experience" className="hover:text-purple-500">Experience</a>
						<a href="#projects" className="hover:text-purple-500">Projects</a>
						<a href="#education" className="hover:text-purple-500">Education</a>
						<a href="#achievements" className="hover:text-purple-500">Achievements</a>
						<a href="#contact" className="hover:text-purple-500">Contact</a>
						<button onClick={toggleTheme} aria-label="Toggle theme" className="ml-3 p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
							{theme === "dark" ? (
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>
							) : (
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm8.24-2.84l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM20 11v2h3v-2h-3zM4.22 19.78l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM11 1h2v3h-2V1zm0 18a7 7 0 100-14 7 7 0 000 14z" fill="currentColor"/></svg>
							)}
						</button>
					</div>
				</nav>
			</header>

			<main className="pb-20">
				<Hero />
				<div className="max-w-6xl mx-auto px-4">
					<About />
					<Experience />
					<Projects />
					<Education />
					<Achievements />
					<Certificates />
					<Contact />
				</div>

				<footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
					Built with care • Available on <a href="https://github.com/AnasDrira245" className="text-purple-500">GitHub</a>
				</footer>
			</main>
		</div>
	);
}