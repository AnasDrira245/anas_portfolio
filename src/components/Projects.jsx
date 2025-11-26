import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import smartBotImage from "../../photo/SmartBot Game Automation.png";
import smartBotVideo from "../../photo/smart_bot_game_automation_video_demo.mp4";
import posImage from "../../photo/image.png";

export default function Projects() {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const projects = [
		{
			name: "Point of Sale (POS) System",
			desc: "Full-stack POS application integrating secure authentication, employee management, and inventory tracking with robust error handling.",
			tech: "Angular, FastAPI, SQLAlchemy, OAuth2",
			link: "https://github.com/AnasDrira245/PointOfSale",
			image: posImage,
			video: null
		},
		{
			name: "SmartBot: Game Automation",
			desc: "Automated gameplay using real-time object detection (YOLOv4-tiny) and mouse/keyboard control with OpenCV template matching.",
			tech: "Python, OpenCV, PyAutoGUI, YOLOv4-tiny",
			link: "#",
			image: smartBotImage,
			video: smartBotVideo
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
								{p.image ? (
									<img
										src={p.image}
										alt={p.name}
										onClick={() => setSelectedImage(p.image)}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
									/>
								) : (
									<>
										<div className="absolute inset-0 bg-cosmic-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<span className="text-4xl">🚀</span>
									</>
								)}
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
								<div className="flex gap-4">
									<a href={p.link} className="text-sm font-medium text-gray-900 dark:text-white hover:text-cosmic-purple transition-colors flex items-center gap-1">
										View Project <span>→</span>
									</a>
									{p.video && (
										<button
											onClick={() => setSelectedVideo(p.video)}
											className="text-sm font-medium text-cosmic-purple hover:text-purple-400 transition-colors flex items-center gap-1"
										>
											Watch Demo <span>▶</span>
										</button>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<AnimatePresence>
				{selectedVideo && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedVideo(null)}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
						>
							<div className="absolute top-4 right-4 z-10">
								<button
									onClick={() => setSelectedVideo(null)}
									className="p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
								>
									✕
								</button>
							</div>
							<video
								src={selectedVideo}
								controls
								autoPlay
								className="w-full h-auto"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
						>
							<div className="relative aspect-video bg-black flex items-center justify-center">
								<img src={selectedImage} alt="Project Preview" className="max-w-full max-h-full object-contain" />
								<div className="absolute top-4 right-4 z-10">
									<button
										onClick={() => setSelectedImage(null)}
										className="p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
									>
										✕
									</button>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}