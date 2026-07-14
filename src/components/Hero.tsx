export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand/5 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-brand/10 text-brand text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6">
          Master Event Operations &amp; Version Control
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Welcome to the <span className="text-brand">GitGud</span> Workshop
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Learn event operations, soft skills, and Git &amp; GitHub fundamentals —
          then put it all together in the GitGud Challenge.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#agenda"
            className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View Agenda
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto border border-slate-300 hover:border-brand hover:text-brand text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
}
