const pillars = [
  {
    title: "Event Operations",
    description:
      "Build the soft skills great teams run on: initiative, communication, and situational awareness.",
  },
  {
    title: "Git & GitHub",
    description:
      "Master version control fundamentals — branches, commits, merges, and collaboration workflows.",
  },
  {
    title: "GitGud Challenge",
    description:
      "Put it all into practice with your team in a real end-to-end Git workflow challenge.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What You'll Learn
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A two-part workshop combining people skills with technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-brand/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center font-bold mb-4">
                {pillar.title.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
