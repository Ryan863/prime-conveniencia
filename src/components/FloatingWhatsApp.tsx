import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getWhatsAppUrl } from '../utils/status';
import { MessageCircle, X, Sparkles } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const FloatingWhatsApp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useGSAP(
    () => {
      // Entrance animation
      gsap.from(containerRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)',
      });

      // Continuous luminous pulse on outer ring
      gsap.to(ringRef.current, {
        scale: 1.45,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: 'power2.out',
      });

      // Subtle heartbeat on button
      gsap.to(btnRef.current, {
        scale: 1.04,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  // Magnetic hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btnRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Interactive Tooltip Callout */}
      {!tooltipDismissed && (
        <div className="relative group bg-[#161922]/95 backdrop-blur-xl border border-white/15 px-4 py-2.5 rounded-2xl shadow-2xl text-xs text-white max-w-xs animate-in slide-in-from-bottom-2 fade-in duration-300 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
          <div>
            <div className="font-bold flex items-center gap-1 text-white">
              <span>Peça pelo WhatsApp</span>
              <Sparkles className="w-3 h-3 text-[#22C55E]" />
            </div>
            <div className="text-[11px] text-slate-400">Atendimento rápido em Chapecó</div>
          </div>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button Container with Pulse Ring */}
      <div className="relative flex items-center justify-center">
        {/* Continuous Pulse Glow Ring */}
        <div
          ref={ringRef}
          className="absolute inset-0 rounded-full bg-[#22C55E]/40 pointer-events-none"
        />

        {/* WhatsApp Link Button with Magnetic Effect */}
        <a
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#22C55E] via-[#10B981] to-[#34D399] flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] transition-shadow border-2 border-white/30 group"
          aria-label="Chamar Prime Beer no WhatsApp"
        >
          {/* Glass sheen */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
          
          <MessageCircle className="w-8 h-8 fill-white/20 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Notification count dot */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FF2E93] text-[10px] font-black text-white flex items-center justify-center border-2 border-[#0A0C0F] shadow-md">
            1
          </span>
        </a>
      </div>
    </div>
  );
};
