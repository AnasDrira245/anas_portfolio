export default function Education() {
  const schools = [
    {
      name: "Higher Institute of Computer Science And Multimedia (ISIMS)",
      degree: "Engineer's Degree in Computer Science",
      date: "2023 - 2026",
    },
    { name: "Higher Institute of Computer Science And Multimedia (ISIMS)", degree: "Pre-Engineering", date: "2021 - 2023" },
    { name: "Monji Slim High School, Sfax", degree: "Mathematics Baccalaureate", date: "2017 - 2021" },
  ];

  return (
    <section id="education" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {schools.map((s) => (
            <div key={s.name} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{s.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{s.degree}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{s.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
