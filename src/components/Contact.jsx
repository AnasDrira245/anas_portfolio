import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!serviceId || !templateId || !publicKey) {
			setStatus("missing");
			return;
		}

		setStatus("sending");
		try {
			await emailjs.send(serviceId, templateId, {
				from_name: name,
				name: name,
				reply_to: email,
				email: email,
				from_email: email,
				title: subject,
				message,
			}, publicKey);
			setStatus("sent");
			setName("");
			setEmail("");
			setMessage("");
		} catch (err) {
			console.error(err);
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="py-20">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Feel free to reach out!
					</p>
				</motion.div>

				<div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 focus:border-cosmic-purple focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									type="email"
									className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 focus:border-cosmic-purple focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 focus:border-cosmic-purple focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all min-h-[150px]"
								placeholder="Say hi or ask about a project..."
							/>
						</div>

						<div className="flex items-center justify-between pt-4">
							<button
								type="submit"
								disabled={status === "sending"}
								className="btn-primary w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
							>
								{status === "sending" ? "Sending..." : "Send Message"}
							</button>

							<div className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
								Or email: <a href="mailto:anas.drira2011@gmail.com" className="text-cosmic-purple hover:underline">anas.drira2011@gmail.com</a>
							</div>
						</div>

						{status === "sent" && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm text-center"
							>
								Message sent successfully! I'll get back to you soon.
							</motion.div>
						)}
						{status === "error" && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm text-center"
							>
								Something went wrong. Please try again later.
							</motion.div>
						)}
						{status === "missing" && (
							<div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-sm text-center">
								Email service not configured. Please check your environment variables.
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}