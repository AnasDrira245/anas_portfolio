import { motion } from "framer-motion";

export default function Projects() {
	const projects = [
		{
			name: "AI Agent Pipeline",
			desc: "An AI agent that generates and executes code using Mistral + LlamaIndex.",
			tech: "Python, FastAPI, Streamlit, Mistral AI",
			link: "#",
		},
		{
			name: "Streamlit Chatbot",
			desc: "Chatbot with streaming + code generation capabilities.",
			tech: "Python, Streamlit, Mistral",
			link: "#",
		}
	];

	return (
		<section id="projects" className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Here are some of the projects I've worked on, showcasing my skills in AI and full-stack development.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((p, index) => (
						<motion.div
							key={p.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="glass-card rounded-2xl p-6 hover:border-cosmic-purple/30 transition-colors group"
						>
							<div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
								<div className="absolute inset-0 bg-cosmic-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<span className="text-4xl">🚀</span>
							</div>

							<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-cosmic-purple transition-colors">
								{p.name}
							</h3>

							<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
								{p.desc}
							</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{p.tech.split(', ').map((t) => (
									<span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-cosmic-purple/10 text-cosmic-purple dark:bg-cosmic-purple/20 dark:text-purple-300">
										{t}
									</span>
								))}
							</div>

							<div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
								<a href={p.link} className="text-sm font-medium text-gray-900 dark:text-white hover:text-cosmic-purple transition-colors flex items-center gap-1">
									View Project <span>→</span>
								</a>
								<a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
									Details
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}