import { motion } from "framer-motion";

const nameVariant = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
	return (
		<section className="min-h-screen flex items-center">
			<div className="max-w-6xl mx-auto px-6 w-full">
				<motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<div className="flex-shrink-0">
						<div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 p-1 shadow-md">
							<div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
								{/* Drop a profile photo at public/profile.jpg to replace initials */}
								<div className="text-3xl font-bold text-gray-700 dark:text-gray-200">AD</div>
							</div>
						</div>
					</div>

					<div className="flex-1 text-center md:text-left">
						<motion.h1 variants={nameVariant} initial="hidden" animate="show" className="text-4xl md:text-5xl font-extrabold mb-3">
							Hi, I'm <span className="text-purple-600 dark:text-purple-400">Anas Drira</span>
						</motion.h1>

						<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
							Software Engineering student focused on AI, full-stack development, and competitive programming. I build intelligent
							systems, automation tools and scalable web apps.
						</motion.p>

						<motion.div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
							<a href="/resume.pdf" className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-sm shadow">Download Resume</a>
							<a href="#projects" className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">View Projects</a>
							<a href="#contact" className="px-4 py-2 border border-purple-600 text-purple-600 dark:text-purple-300 rounded-md text-sm hover:bg-purple-50 dark:hover:bg-purple-900/20">Contact</a>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}