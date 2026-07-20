import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuHighlights } from './components/MenuHighlights';
import { Offers } from './components/Offers';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-800 font-sans selection:bg-coffee-200 selection:text-coffee-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Offers />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

