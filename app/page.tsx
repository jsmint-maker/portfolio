import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SideDockNav from "./components/SideDockNav";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-[#00f2fe] selection:text-black">
      <Header />
      <div className="md:hidden">
        <SideDockNav />
      </div>
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <Footer />
    </main>
  );
}