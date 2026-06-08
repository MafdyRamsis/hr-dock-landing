import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Products from "./components/Products";
import AICallout from "./components/AICallout";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <AICallout />
      <Features />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
