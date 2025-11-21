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
	<section id="projects" className="py-12 px-4">
		<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((p) => (
					<div key={p.name} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
						<div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800 rounded-md mb-4 flex items-center justify-center">
							{/* replace with screenshot: /public/projects/{name}.png */}
							<div className="text-gray-400">Screenshot</div>
						</div>
						<h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">{p.name}</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-2">{p.desc}</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tech: {p.tech}</p>
						<div className="flex items-center justify-between">
							<a href={p.link} className="text-purple-600 hover:underline">View</a>
							<a href="#contact" className="text-sm px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">Ask about this</a>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);
}