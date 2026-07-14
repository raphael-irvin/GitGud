export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Git<span className="text-brand-light font-semibold">Gud</span> Workshop
          &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">Keep coding. Keep collaborating. Keep getting better.</p>
      </div>
    </footer>
  );
}
