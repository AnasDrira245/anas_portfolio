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
	<section className="py-12 px-4">
		<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
			<h2 className="text-2xl font-bold mb-4">Skills</h2>
			<div className="max-w-3xl mx-auto space-y-4">
				{skills.map((s) => (
					<div key={s.name} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
						<div className="flex justify-between items-center mb-2">
							<div className="font-semibold text-gray-800 dark:text-gray-200">{s.name}</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">{s.level}%</div>
						</div>
						<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
							<div className="h-full bg-purple-500 transition-all" style={{ width: `${s.level}%` }} />
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);
}