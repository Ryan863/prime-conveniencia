import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Snowflake, Zap, CreditCard, Award, Flame, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const FeaturesBento: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.bento-feature-card');

      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="diferenciais" ref={containerRef} className="py-24 relative bg-[#0A0C0F] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FF2E93]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00E5FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 text-xs font-semibold text-[#00E5FF] mb-4">
            <Award className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Padrão Prime de Qualidade</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Por que a Prime Beer é a escolha certa <span className="bg-gradient-to-r from-[#FF2E93] to-[#00E5FF] bg-clip-text text-transparent">em Chapecó</span>?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Combinamos conveniência ágil, bebidas na temperatura ideal e atendimento de confiança para o seu momento de lazer.
          </p>
        </div>

        {/* Bento Grid layout echoing the reference style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 (Large - Spans 2 cols on MD) */}
          <div className="bento-feature-card md:col-span-2 rounded-3xl bg-[#161922]/90 border border-white/10 hover:border-[#00E5FF]/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Snowflake className="w-36 h-36 text-[#00E5FF]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6">
                <Snowflake className="w-6 h-6" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-xs font-mono font-bold mb-3">
                CONTROLE TÉRMICO RIGOROSO
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Cerveja Estupidamente Gelada a -4°C
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                Nossos freezers industriais operam em curvas térmicas controladas para que as latas e long necks cheguem na sua mão no limite exato de congelamento: trincando e prontas para beber.
              </p>

              {/* Metric bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#00E5FF]">-4.2°C</div>
                  <div className="text-xs text-slate-400">Ponto Ideal</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400">Originais Lacradas</div>
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-[#22C55E]">Zero</div>
                  <div className="text-xs text-slate-400">Tempo Perdido</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (1 col) - Rapid Delivery */}
          <div className="bento-feature-card rounded-3xl bg-[#161922]/90 border border-white/10 hover:border-[#FF2E93]/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#FF2E93]/15 border border-[#FF2E93]/30 flex items-center justify-center text-[#FF2E93] mb-6">
              <Zap className="w-6 h-6" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#FF2E93]/10 text-[#FF2E93] border border-[#FF2E93]/20 text-xs font-mono font-bold mb-3">
              AGILIDADE TOTAL
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-3">
              Entrega Rápida em Chapecó
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Sua bebida chega sem esquentar. Despacho ágil com entregadores experientes na rota de Chapecó.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#0A0C0F] border border-white/10 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white block">Atendimento Imediato</span>
                Envie a lista no WhatsApp e receba a rota
              </div>
            </div>
          </div>

          {/* Card 3 (1 col) - Combos & Mix Completo */}
          <div className="bento-feature-card rounded-3xl bg-[#161922]/90 border border-white/10 hover:border-amber-400/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6">
              <Flame className="w-6 h-6" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-mono font-bold mb-3">
              CHURRASCO & ROLE
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mb-3">
              Tudo no Mesmo Ponto
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Bebida, gelo filtrado, carvão de alta combustão, petiscos e tabacaria. Economize tempo e resolva tudo em uma única parada.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Carvão ecológico sem cheiro forte</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Gelos de sabor para destilados</span>
              </div>
            </div>
          </div>

          {/* Card 4 (Spans 2 cols on MD) - Pagamentos & Facilidade */}
          <div className="bento-feature-card md:col-span-2 rounded-3xl bg-[#161922]/90 border border-white/10 hover:border-[#22C55E]/50 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 text-xs font-mono font-bold mb-3">
                  SEM BUROCRACIA
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white mb-3">
                  Formas de Pagamento Facilitadas
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                  Aceitamos Pix instantâneo, cartões de crédito e débito das principais bandeiras na maquininha sem fio ou no balcão, e dinheiro com troco facilitado.
                </p>
              </div>

              {/* Payment badges */}
              <div className="grid grid-cols-2 gap-3 sm:min-w-[220px]">
                <div className="p-3 rounded-2xl bg-[#0A0C0F] border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">PIX</div>
                  <div className="text-[10px] text-[#22C55E]">Chave Instantânea</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0C0F] border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Cartões</div>
                  <div className="text-[10px] text-slate-400">Crédito & Débito</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0C0F] border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Aproximação</div>
                  <div className="text-[10px] text-[#00E5FF]">NFC Apple / Google</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#0A0C0F] border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Dinheiro</div>
                  <div className="text-[10px] text-slate-400">Troco na Entrega</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
