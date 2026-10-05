import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { OrderBuilder } from './components/OrderBuilder';
import { HoursPanel } from './components/HoursPanel';
import { LocationSection } from './components/LocationSection';
import { FeaturesBento } from './components/FeaturesBento';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0C0F] text-slate-100 flex flex-col relative selection:bg-[#FF2E93] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Categories / Catálogo Rápido Bento */}
        <Categories />

        {/* Interactive Order Builder / Simulador de Pedidos */}
        <OrderBuilder />

        {/* Operating Hours LED Dashboard */}
        <HoursPanel />

        {/* Differentials & Bento Grid Features */}
        <FeaturesBento />

        {/* Location & GPS Navigation */}
        <LocationSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp with GSAP Pulse */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
