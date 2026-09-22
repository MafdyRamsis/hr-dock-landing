import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Products from "./components/Products";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import ManagedCta from "./components/ManagedCta";
import { getSiteContent } from "./lib/site-content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero content={content.hero} />
      <Stats />
      <Products />
      <About />
      <Clients content={content.clients} />
      <Pricing content={content.pricing} />
      <ManagedCta content={content.cta} />
      <Contact />
      <Footer />
    </main>
  );
}
