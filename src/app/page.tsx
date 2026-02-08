import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LokAdalatHighlight from "@/components/LokAdalatHighlight";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen min-w-0 bg-white text-slate-900">
      <Header />
      <Marquee />
      <main>
        <Hero />
        <LokAdalatHighlight />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
