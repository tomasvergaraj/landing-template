import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Trust from './components/Trust';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <Trust />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
