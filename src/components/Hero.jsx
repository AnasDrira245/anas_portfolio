import { motion } from "framer-motion";
import profile from "../../photo/anas_image.jpg";

const nameVariant = {
	hidden: { opacity: 0, y: -20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
	return (
		<section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">

					<div className="flex-1 text-center md:text-left">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 text-cosmic-purple dark:text-purple-300 text-sm font-medium"
						>
							🚀 Welcome to my portfolio
						</motion.div>

						<motion.h1
							variants={nameVariant}
							initial="hidden"
							animate="show"
							className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
						>
							Hi, I'm <span className="text-gradient">Anas Drira</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed"
						>
							Software Engineering student passionate about <span className="text-gray-900 dark:text-white font-semibold">AI</span>, <span className="text-gray-900 dark:text-white font-semibold">Full-stack Development</span>, and building intelligent systems that solve real-world problems.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4 justify-center md:justify-start"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<a href="#projects" className="btn-primary">
								View Projects
							</a>
							<a href="/resume.pdf" className="btn-outline group">
								Download Resume
								<span className="inline-block ml-2 transition-transform group-hover:translate-y-1">↓</span>
							</a>
						</motion.div>
					</div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
					>
						<div className="absolute inset-0 bg-gradient-to-tr from-cosmic-purple to-nebula-blue rounded-full blur-3xl opacity-30 animate-pulse-glow" />
						<motion.div
							className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-white/20 to-white/0 backdrop-blur-sm border border-white/20"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 dark:border-space-black/50 shadow-2xl">
								<img src={profile} alt="Anas Drira" className="w-full h-full object-cover" />
							</div>
						</motion.div>

						{/* Floating badges */}
						<motion.div
							className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-2"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						>
							<span className="text-2xl">💻</span> Full Stack
						</motion.div>
						<motion.div
							className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-2"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
						>
							<span className="text-2xl">🤖</span> AI Enthusiast
						</motion.div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}