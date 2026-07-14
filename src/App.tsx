import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Agenda from "./components/Agenda";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Agenda />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
