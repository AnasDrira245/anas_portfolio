export default function Contact() {
	return (
		<section id="contact" className="py-12 px-4">
			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

				<form className="space-y-4">
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Name</label>
						<input className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="Your name" />
					</div>
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
						<input className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="your@email.com" />
					</div>
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
						<textarea className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" rows={4} placeholder="Say hi or ask about a project" />
					</div>
					<div className="flex items-center justify-between">
						<button type="button" className="px-4 py-2 bg-purple-600 text-white rounded-md shadow">Send (demo)</button>
						<div className="text-sm text-gray-600 dark:text-gray-400">Or email: <a href="mailto:anas.drira2011@gmail.com" className="text-purple-600 dark:text-purple-400">anas.drira2011@gmail.com</a></div>
					</div>
				</form>
			</div>
		</section>
	);
}