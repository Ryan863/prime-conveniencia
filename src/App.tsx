import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturesBento } from './components/FeaturesBento';
import { HoursPanel } from './components/HoursPanel';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0C0F] text-slate-100 flex flex-col relative selection:bg-[#FF2E93] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections with Organized Vertical Rhythm */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Catálogo Rápido Bento */}
        <Categories />

        {/* 3. Diferenciais Prime em Bento Grid */}
        <FeaturesBento />

        {/* 4. Painel LED de Horários & Live Status */}
        <HoursPanel />

        {/* 5. Localização & Navegação GPS */}
        <LocationSection />

        {/* 6. FAQ Section */}
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
