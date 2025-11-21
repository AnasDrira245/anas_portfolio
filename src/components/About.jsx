export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mb-4">
          I'm a Software Engineering student from Sfax, Tunisia with a strong interest in AI, problem solving, and building
          reliable systems. I have experience creating AI agents that generate and execute code, full-stack applications
          using FastAPI and Angular, and computer-vision automation tools. I enjoy algorithmic challenges and have strong
          C++ foundations for performance-critical tasks.
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mb-6">
          I look for internships and roles where I can combine AI, systems design and engineering practices to build
          products that help people and automate workflows.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="/resume.pdf" download className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-sm shadow">Download Resume (PDF)</a>
          <a href="https://github.com/AnasDrira245" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">GitHub</a>
          <a href="https://www.linkedin.com/in/anas-drira-6883b1219" target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700">LinkedIn</a>
        </div>

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <strong>AI Assistant:</strong> Coming soon — an interactive AI on this site will answer questions about my
          work and automate tasks like sending emails or scheduling demos.
        </div>
      </div>
    </section>
  );
}
