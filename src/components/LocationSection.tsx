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
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.location-badge', {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      });

      tl.from(
        '.location-title',
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      tl.from(
        '.location-card-left',
        {
          x: -30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      tl.from(
        '.location-card-right',
        {
          x: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.5'
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
    <section id="localizacao" ref={containerRef} className="py-20 md:py-24 relative bg-[#0E1117] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#00E5FF]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FF2E93]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <div className="location-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Fácil Acesso em Chapecó</span>
          </div>
          <h2 className="location-title font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Localização & <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF2E93] bg-clip-text text-transparent">Navegação GPS</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Venha nos visitar no bairro Alvorada para retirar bebidas no grau exato ou trace sua rota no Waze ou Google Maps.
          </p>
        </div>

        {/* Bento Grid: Info Box + Cyber Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Info & Actions (5 cols) */}
          <div className="location-card-left lg:col-span-5 rounded-3xl bg-[#161922]/90 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-[11px] uppercase font-mono tracking-widest text-[#00E5FF] font-bold">
                    Ponto Físico
                  </div>
                  <div className="text-xl font-display font-extrabold text-white">
                    Bairro Alvorada
                  </div>
                </div>
              </div>

              {/* Formatted Address Box */}
              <div className="p-4 rounded-2xl bg-[#0A0C0F] border border-white/10 mb-5">
                <div className="text-xs text-slate-400 mb-1">Endereço completo:</div>
                <div className="text-sm font-semibold text-white leading-relaxed">
                  {ADDRESS}
                </div>
                <div className="text-xs text-[#00E5FF] mt-2 font-mono flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>Estacionamento rápido e fácil na frente</span>
                </div>
              </div>

              {/* Action Buttons: Google Maps, Waze, Copiar */}
              <div className="space-y-2.5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1E232F] hover:bg-[#252c3b] border border-white/10 hover:border-[#00E5FF]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Navigation className="w-3.5 h-3.5" />
                    </div>
                    <span>Abrir no Google Maps</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1E232F] hover:bg-[#252c3b] border border-white/10 hover:border-[#FF2E93]/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FF2E93]/20 text-[#FF2E93] flex items-center justify-center">
                      <Navigation className="w-3.5 h-3.5 rotate-45" />
                    </div>
                    <span>Traçar Rota no Waze</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Copiar Endereço Button */}
                <button
                  onClick={handleCopy}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 border ${
                    copied
                      ? 'bg-[#22C55E]/20 border-[#22C55E] text-[#22C55E]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#22C55E]" />
                      <span>Endereço Copiado para a Área de Transferência!</span>
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
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
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
          <div className="location-card-right lg:col-span-7 rounded-3xl bg-[#161922]/90 border border-white/10 p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl relative flex flex-col">
            <div className="relative w-full h-[360px] sm:h-full min-h-[350px] rounded-[22px] overflow-hidden border border-white/10 bg-[#0A0C0F]">
              {/* Google Maps Embed iframe with dark styling filter */}
              <iframe
                title="Mapa Prime Beer Conveniência Chapecó"
                src="https://maps.google.com/maps?q=Rua%20Alfredo%20Wagner,%20Alvorada,%20Chapeco%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 invert-[0.9] hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />

              {/* Ambient radar pulse marker overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-[#FF2E93] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FF2E93] border-2 border-white shadow-[0_0_20px_#FF2E93]"></span>
                </div>
                <div className="mt-2 px-3 py-0.5 rounded-lg bg-[#0A0C0F]/90 border border-[#00E5FF]/40 text-[10px] font-bold text-white shadow-xl backdrop-blur-md">
                  Prime Beer Conveniência
                </div>
              </div>

              {/* Bottom Quick Controls in Map */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0A0C0F]/90 backdrop-blur-md border border-white/15 p-2.5 rounded-xl flex items-center justify-between text-xs text-slate-300 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                  <span className="font-semibold text-white">Alvorada, Chapecó - SC</span>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00E5FF] hover:text-white flex items-center gap-1"
                >
                  <span>Iniciar Rota</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
