export default function Certificates() {
  const certs = [
    { title: "Facebook Hacker Cup Qualified Round 2", issuer: "Meta", date: "Oct 2023", link: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/257834442854828" },
    { title: "Problem Solving (Intermediate)", issuer: "HackerRank", date: "Jun 2024", link: "https://www.hackerrank.com/certificates/f5acd5607813" },
    { title: "TCPC Achievement", issuer: "ICPC", date: "Jul 2025", link: "https://drive.google.com/file/d/1d6iYsKKQsDb5Rui2k32yzWA_MDkmUne3/view?usp=sharing" },
  ];

  return (
    <section id="certificates" className="py-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Certificates</h2>
        <div className="space-y-4">
          {certs.map((c) => (
            <div key={c.title} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-gray-100">{c.title}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{c.issuer} • {c.date}</div>
                </div>
                <a href={c.link} target="_blank" rel="noreferrer" className="text-purple-600 hover:underline text-sm">View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
