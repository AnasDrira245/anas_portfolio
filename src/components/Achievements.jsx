export default function Achievements() {
  const items = [
    {
      title: "First Place - Tech Resolve Challenge / SOLVEIT1 / SOLVEIT2",
    },
    { title: "Second Place - Shinobi / CrackCode" },
    { title: "Third Place - Hello World 4.0 / CodeBreaker" },
  ];

  return (
    <section id="achievements" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((a) => (
            <div key={a.title} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <p className="text-gray-800 dark:text-gray-100">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
