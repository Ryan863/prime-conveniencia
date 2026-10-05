import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ADDRESS, MAPS_URL, WAZE_URL, getWhatsAppUrl } from '../utils/status';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass, Car } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 92%',
          once: true,
        },
      });

      tl.fromTo(
        '.location-badge',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, clearProps: 'all' }
      );
      tl.fromTo(
        '.location-title',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, clearProps: 'all' },
        '-=0.2'
      );
      tl.fromTo(
        '.location-card-left',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, clearProps: 'all' },
        '-=0.2'
      );
      tl.fromTo(
        '.location-card-right',
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, clearProps: 'all' },
        '-=0.4'
      );
    },
    { scope: containerRef }
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" ref={containerRef} className="py-14 md:py-20 relative bg-[#0E1117] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF2E93]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="location-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] mb-2.5">
            <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Fácil Acesso em Chapecó</span>
          </div>
          <h2 className="location-title font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Localização & <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF2E93] bg-clip-text text-transparent">Navegação GPS</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Venha nos visitar no bairro Alvorada para retirar bebidas no grau exato ou trace sua rota no Waze ou Google Maps.
          </p>
        </div>

        {/* Bento Grid: Info Box + Cyber Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch max-w-6xl mx-auto">
          {/* Left Info & Actions (5 cols) */}
          <div className="location-card-left lg:col-span-5 rounded-3xl bg-[#161922]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#00E5FF] font-bold">
                    Ponto Físico
                  </div>
                  <div className="text-lg font-display font-extrabold text-white">
                    Bairro Alvorada
                  </div>
                </div>
              </div>

              {/* Formatted Address Box */}
              <div className="p-3.5 rounded-2xl bg-[#0A0C0F] border border-white/10 mb-4">
                <div className="text-[11px] text-slate-400 mb-0.5">Endereço completo:</div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {ADDRESS}
                </div>
                <div className="text-[11px] text-[#00E5FF] mt-1.5 font-mono flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>Estacionamento rápido e fácil na frente</span>
                </div>
              </div>

              {/* Action Buttons: Google Maps, Waze, Copiar */}
              <div className="space-y-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-[#1E232F] hover:bg-[#252c3b] border border-white/10 hover:border-[#00E5FF]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Navigation className="w-3 h-3" />
                    </div>
                    <span>Abrir no Google Maps</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-[#1E232F] hover:bg-[#252c3b] border border-white/10 hover:border-[#FF2E93]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#FF2E93]/20 text-[#FF2E93] flex items-center justify-center">
                      <Navigation className="w-3 h-3 rotate-45" />
                    </div>
                    <span>Traçar Rota no Waze</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Copiar Endereço Button */}
                <button
                  onClick={handleCopy}
                  className={`w-full py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border ${
                    copied
                      ? 'bg-[#22C55E]/20 border-[#22C55E] text-[#22C55E]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span>Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copiar Endereço para GPS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Contact Footer inside card */}
            <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span>Precisa de referências para chegar?</span>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de ajuda para encontrar a conveniência no bairro Alvorada.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E5FF] hover:underline font-semibold"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          {/* Right Styled Cyber Map (7 cols) */}
          <div className="location-card-right lg:col-span-7 rounded-3xl bg-[#161922]/90 border border-white/10 p-2 backdrop-blur-xl shadow-2xl relative flex flex-col">
            <div className="relative w-full h-[320px] sm:h-full min-h-[300px] rounded-[22px] overflow-hidden border border-white/10 bg-[#0A0C0F]">
              <iframe
                title="Mapa Prime Beer Conveniência Chapecó"
                src="https://maps.google.com/maps?q=Rua%20Alfredo%20Wagner,%20Alvorada,%20Chapeco%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 invert-[0.9] hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#FF2E93] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF2E93] border-2 border-white shadow-[0_0_20px_#FF2E93]"></span>
                </div>
                <div className="mt-2 px-2.5 py-0.5 rounded-lg bg-[#0A0C0F]/90 border border-[#00E5FF]/40 text-[10px] font-bold text-white shadow-xl backdrop-blur-md">
                  Prime Beer Conveniência
                </div>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0A0C0F]/90 backdrop-blur-md border border-white/15 p-2 rounded-xl flex items-center justify-between text-xs text-slate-300 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  <span className="font-semibold text-xs text-white">Alvorada, Chapecó - SC</span>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00E5FF] hover:text-white flex items-center gap-1"
                >
                  <span>Iniciar Rota</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
