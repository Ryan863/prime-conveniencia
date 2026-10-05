import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getCurrentStoreStatus } from '../utils/status';
import { Clock, CheckCircle, Zap, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const HoursPanel: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const status = getCurrentStoreStatus();

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
        '.hours-badge',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, clearProps: 'all' }
      );
      tl.fromTo(
        '.hours-title',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, clearProps: 'all' },
        '-=0.2'
      );
      tl.fromTo(
        '.schedule-row',
        { x: -15, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, clearProps: 'all' },
        '-=0.2'
      );
      tl.fromTo(
        '.hours-highlight-card',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, clearProps: 'all' },
        '-=0.3'
      );
    },
    { scope: containerRef }
  );

  // Grouped schedule representation matching the prompt
  const displaySchedule = [
    { label: 'Segunda-feira', hours: '09:00 - 23:00', note: 'Atendimento contínuo', dayIndices: [1] },
    { label: 'Terça a Quinta-feira', hours: '09:00 - 23:00', note: 'Bebidas trincando', dayIndices: [2, 3, 4] },
    { label: 'Sexta-feira', hours: '02:00 - 02:00', note: 'Plantão fim de semana', isSpecial: true, dayIndices: [5] },
    { label: 'Sábado', hours: '01:00 - 03:00', note: 'Madrugada Prime', isSpecial: true, dayIndices: [6] },
    { label: 'Domingo', hours: '10:00 - 23:00', note: 'Churrasco garantido', dayIndices: [0] },
  ];

  const now = new Date();
  const currentDayIndex = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })).getDay();

  return (
    <section id="horarios" ref={containerRef} className="py-14 md:py-20 relative bg-[#0A0C0F] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#FF2E93]/8 to-[#00E5FF]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="hours-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] mb-2.5">
            <Clock className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Painel LED em Tempo Real</span>
          </div>
          <h2 className="hours-title font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Horário de <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#FF2E93] bg-clip-text text-transparent">Funcionamento</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Sempre a postos quando a sede aperta ou o estoque do churrasco acaba.
          </p>
        </div>

        {/* LED Digital Schedule Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center max-w-5xl mx-auto">
          {/* Main LED List (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#161922]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient cyber border line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-[#FF2E93] opacity-60" />

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                  Quadro Oficial de Horários
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Chapecó - SC (UTC-3)
              </div>
            </div>

            <div className="space-y-2">
              {displaySchedule.map((item, idx) => {
                const isToday = item.dayIndices.includes(currentDayIndex);

                return (
                  <div
                    key={idx}
                    className={`schedule-row p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      isToday
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF]/50 shadow-[0_0_20px_rgba(0,229,255,0.15)] ring-1 ring-[#00E5FF]/30'
                        : 'bg-[#0E1117]/80 border-white/[0.06] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isToday ? (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#00E5FF] text-black">
                          Hoje
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-600" />
                      )}
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{item.label}</span>
                          {item.isSpecial && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF2E93]/20 text-[#FF2E93] border border-[#FF2E93]/30 font-semibold">
                              Estendido
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400">{item.note}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-[#00E5FF] tracking-wider bg-black/40 px-2.5 py-1 rounded-xl border border-white/10">
                        {item.hours}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Highlight / Live Status Terminal Card (5 cols) */}
          <div className="hours-highlight-card lg:col-span-5 flex flex-col gap-4">
            {/* Live Terminal Widget */}
            <div className="rounded-3xl bg-gradient-to-b from-[#1A1E29] to-[#12151E] border border-white/15 p-5 sm:p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                  Status da Conveniência
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono">
                  LIVE
                </span>
              </div>

              {/* Big status beacon */}
              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg ${
                    status.isOpen
                      ? 'bg-[#22C55E]/15 border-[#22C55E]/40 text-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.3)]'
                      : 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                  }`}
                >
                  <Zap className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-display">
                    {status.statusText}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {status.isOpen
                      ? `Pronto atendimento no balcão e WhatsApp`
                      : `Consulte nossos horários ao lado`}
                  </div>
                </div>
              </div>

              {/* Feature pills */}
              <div className="space-y-2 pt-3.5 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00E5FF] flex-shrink-0" />
                  <span>Sexta e Sábado com atendimento até de madrugada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF2E93] flex-shrink-0" />
                  <span>Domingo aberto direto para garantir seu almoço</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                  <span>Pedidos aceitos até o fechamento com resposta rápida</span>
                </div>
              </div>
            </div>

            {/* Quick delivery notice */}
            <div className="rounded-2xl bg-[#161922]/80 border border-white/10 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF2E93]/15 border border-[#FF2E93]/30 flex items-center justify-center text-[#FF2E93] flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-white block">Está no meio de uma festa ou evento?</span>
                Chame nossa equipe pelo WhatsApp para reservar fardos e barris com antecedência.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
