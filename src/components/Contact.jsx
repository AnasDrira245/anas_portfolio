import { useState } from "react";
import emailjs from "@emailjs/browser";

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
		<section id="contact" className="py-12 px-4">
			<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-3xl mx-auto">
				<h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Name</label>
						<input value={name} onChange={(e) => setName(e.target.value)} required className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="Your name" />
					</div>
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="your@email.com" />
					</div>
					<div>
						<label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
						<textarea value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full mt-1 p-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" rows={4} placeholder="Say hi or ask about a project" />
					</div>

					<div className="flex items-center justify-between">
						<button type="submit" disabled={status === "sending"} className="px-4 py-2 bg-purple-600 text-white rounded-md shadow disabled:opacity-60">
							{status === "sending" ? "Sending..." : "Send Message"}
						</button>
						<div className="text-sm text-gray-600 dark:text-gray-400">Or email: <a href="mailto:anas.drira2011@gmail.com" className="text-purple-600 dark:text-purple-400">anas.drira2011@gmail.com</a></div>
					</div>

					{status === "sent" && <div className="text-sm text-green-600 dark:text-green-400">Message sent — thanks! I will reply soon.</div>}
					{status === "error" && <div className="text-sm text-red-600 dark:text-red-400">Error sending message — please try again later.</div>}
					{status === "missing" && (
						<div className="text-sm text-yellow-600 dark:text-yellow-400">Email service not configured. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in a `.env` file.</div>
					)}
				</form>
			</div>
		</section>
	);
}