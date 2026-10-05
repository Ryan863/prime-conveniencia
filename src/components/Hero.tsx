import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChromeStar } from './ChromeStar';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/status';
import { MessageCircle, Navigation, ShieldCheck, Flame, Snowflake, Clock, Sparkles } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badge entrance
      tl.from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
      });

      // Headline and Subtitle cascade reveal (stagger 0.15s)
      tl.from(
        ['.hero-title', '.hero-subtitle'],
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        '-=0.4'
      );

      // CTAs slide smoothly from bottom up
      tl.from(
        '.hero-cta-group',
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        '-=0.3'
      );

      // Hero visual card & badges
      tl.from(
        visualCardRef.current,
        {
          scale: 0.94,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.6'
      );

      tl.from(
        '.hero-floating-chip',
        {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'back.out(1.5)',
        },
        '-=0.5'
      );

      // 2. Continuous luminous pulse & floating animations
      gsap.to('.hero-glow-pulse', {
        opacity: 0.85,
        scale: 1.05,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.star-float-1', {
        y: -10,
        rotation: 12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.star-float-2', {
        y: 12,
        rotation: -15,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.star-float-3', {
        y: -8,
        rotation: 8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  // Magnetic hover effect on primary button
  const handlePrimaryMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!primaryBtnRef.current) return;
    const rect = primaryBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(primaryBtnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handlePrimaryMouseLeave = () => {
    if (!primaryBtnRef.current) return;
    gsap.to(primaryBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  // Magnetic hover on secondary button
  const handleSecondaryMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!secondaryBtnRef.current) return;
    const rect = secondaryBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(secondaryBtnRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleSecondaryMouseLeave = () => {
    if (!secondaryBtnRef.current) return;
    gsap.to(secondaryBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-cyber bg-radial-ambient"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF2E93]/15 via-transparent to-[#00E5FF]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="hero-glow-pulse absolute top-20 right-10 w-96 h-96 bg-[#00E5FF]/10 blur-[100px] pointer-events-none rounded-full opacity-40" />

      {/* Floating Chrome Stars (from reference design) */}
      <div className="star-float-1 absolute top-28 right-[12%] hidden lg:block">
        <ChromeStar size={46} glow="cyan" rotation={15} />
      </div>
      <div className="star-float-2 absolute top-56 left-[8%] hidden lg:block">
        <ChromeStar size={34} glow="pink" rotation={-25} />
      </div>
      <div className="star-float-3 absolute bottom-24 right-[25%] hidden lg:block">
        <ChromeStar size={28} glow="silver" rotation={45} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Pill Badge (Ref. style) */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161922]/90 border border-white/10 shadow-[0_0_20px_rgba(255,46,147,0.15)] mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2E93] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2E93]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              ⚡ Chapecó - SC • Cerveja no Ponto Mais Gelado (-4°C)
            </span>
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30">
              Entrega Rápida
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white max-w-3xl">
            Cerveja <span className="bg-gradient-to-r from-[#00E5FF] via-white to-[#00E5FF] bg-clip-text text-transparent text-glow-cyan">trincando</span>, destilados e conveniência completa na{' '}
            <span className="bg-gradient-to-r from-[#FF2E93] via-[#ff68b0] to-[#00E5FF] bg-clip-text text-transparent text-glow-pink">
              sua mão
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            A conveniência favorita do bairro Alvorada em Chapecó. Cervejas no grau ideal, chopp artesanal, whiskies, combos para a noite toda, gelo e carvão para o seu churrasco.
          </p>

          {/* CTAs Group */}
          <div className="hero-cta-group mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary WhatsApp CTA with Magnetic & Glow */}
            <a
              ref={primaryBtnRef}
              onMouseMove={handlePrimaryMouseMove}
              onMouseLeave={handlePrimaryMouseLeave}
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#FF2E93] to-[#E11D74] shadow-[0_0_30px_rgba(255,46,147,0.45)] hover:shadow-[0_0_40px_rgba(255,46,147,0.7)] transition-all flex items-center justify-center gap-3 overflow-hidden border border-white/20"
            >
              {/* Animated Sheen */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Pedir pelo WhatsApp</span>
              <span className="text-xs bg-black/30 px-2 py-0.5 rounded-lg border border-white/10 font-mono">
                {FORMATTED_PHONE}
              </span>
            </a>

            {/* Secondary CTA: Como Chegar (Maps & Waze) */}
            <a
              ref={secondaryBtnRef}
              onMouseMove={handleSecondaryMouseMove}
              onMouseLeave={handleSecondaryMouseLeave}
              href="#localizacao"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-base text-slate-200 bg-[#161922]/80 hover:bg-[#1E232F] border border-white/10 hover:border-[#00E5FF]/50 hover:text-white transition-all backdrop-blur-md flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <Navigation className="w-4 h-4 text-[#00E5FF] group-hover:rotate-45 transition-transform duration-300" />
              <span>Como Chegar (Maps & Waze)</span>
            </a>
          </div>

          {/* Trust badges row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-xs text-slate-400 font-medium w-full max-w-3xl pt-8 border-t border-white/[0.06]">
            <div className="flex items-center justify-center gap-2">
              <Snowflake className="w-4 h-4 text-[#00E5FF]" />
              <span>Freezers a -4°C</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#22C55E]" />
              <span>Plantão Fim de Semana</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF2E93]" />
              <span>Bebidas 100% Originais</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Carvão & Gelo Imediato</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Bento Preview */}
        <div
          ref={visualCardRef}
          className="mt-16 relative max-w-5xl mx-auto rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/[0.03] to-transparent border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Card inner canvas */}
          <div className="relative rounded-[22px] overflow-hidden bg-[#0F1218] border border-white/5">
            {/* Hero Main Image with Ambient Vignette */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full max-h-[460px] overflow-hidden">
              <img
                src="/images/hero-beer.jpg"
                alt="Prime Beer Conveniência bebidas geladas e destilados em Chapecó"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C0F]/60 via-transparent to-[#0A0C0F]/60" />
            </div>

            {/* Floating Glass Bento Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 hero-floating-chip bg-[#161922]/85 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                <Snowflake className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Temperatura</div>
                <div className="text-xs font-bold text-white font-mono">-4.2°C TRINCANDO</div>
              </div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hero-floating-chip bg-[#161922]/85 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Avaliação</div>
                <div className="text-xs font-bold text-white font-mono">⭐ 4.9 • CHAPECÓ</div>
              </div>
            </div>

            {/* Bottom Info Bar inside Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 hero-floating-chip bg-[#161922]/90 backdrop-blur-xl border border-white/15 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse" />
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Pronto para retirar ou receber em casa</div>
                  <div className="text-xs text-slate-400">Rua Alfredo Wagner, Alvorada - Chapecó / SC</div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de consultar os produtos disponíveis para agora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#00E5FF] to-[#0099FF] hover:from-[#00D2D3] hover:to-[#0088EE] transition-all shadow-[0_0_20px_rgba(0,229,255,0.35)] flex items-center justify-center gap-2"
              >
                <span>Fazer Pedido Imediato</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
