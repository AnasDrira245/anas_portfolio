import { motion } from "framer-motion";

export default function Skills() {
	const skills = [
		{ name: "C++", level: 90 },
		{ name: "Python", level: 85 },
		{ name: "JavaScript", level: 75 },
		{ name: "FastAPI", level: 80 },
		{ name: "React", level: 70 },
		{ name: "Mistral AI", level: 60 },
		{ name: "LlamaIndex", level: 65 },
		{ name: "Computer Vision", level: 70 },
		{ name: "Git", level: 80 },
		{ name: "Linux", level: 75 },
	];

	return (
		<section className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Technologies and tools I use to build intelligent systems.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{skills.map((s, index) => (
						<motion.div
							key={s.name}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-cosmic-purple/30 transition-colors"
						>
							<div className="flex-1">
								<div className="flex justify-between items-center mb-2">
									<div className="font-semibold text-gray-800 dark:text-gray-200">{s.name}</div>
									<div className="text-sm font-medium text-cosmic-purple">{s.level}%</div>
								</div>
								<div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: `${s.level}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: 0.5 }}
										className="h-full bg-gradient-to-r from-cosmic-purple to-nebula-blue"
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}