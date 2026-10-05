import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { getCurrentStoreStatus, getWhatsAppUrl, FORMATTED_PHONE } from '../utils/status';
import { MessageCircle, Clock, MapPin, Sparkles, Menu, X, ShoppingBag } from 'lucide-react';
import gsap from 'gsap';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getCurrentStoreStatus());
  const navRef = useRef<HTMLElement>(null);
  const waBtnRef = useRef<HTMLAnchorElement>(null);

  // Update status every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getCurrentStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Magnetic hover effect on desktop WhatsApp button
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!waBtnRef.current) return;
    const rect = waBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(waBtnRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!waBtnRef.current) return;
    gsap.to(waBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#0A0C0F]/80 border-b border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="group flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#catalogo"
            className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 group"
          >
            <span>Catálogo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#montar-pedido"
            className="text-sm font-medium text-slate-300 hover:text-[#FF2E93] transition-colors flex items-center gap-1.5 group"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#FF2E93]" />
            <span>Montar Pedido</span>
          </a>
          <a
            href="#horarios"
            className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 group"
          >
            <Clock className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00E5FF]" />
            <span>Horários</span>
          </a>
          <a
            href="#localizacao"
            className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors flex items-center gap-1.5 group"
          >
            <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00E5FF]" />
            <span>Localização</span>
          </a>
          <a
            href="#diferenciais"
            className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors"
          >
            Diferenciais
          </a>
        </nav>

        {/* Right Actions: Status Badge & WhatsApp Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Status Badge */}
          <div
            className={`px-3 py-1.5 rounded-full border text-xs font-semibold flex items-center gap-2 transition-all ${
              status.isOpen
                ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            <span className="relative flex h-2 w-2">
              {status.isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  status.isOpen ? 'bg-[#22C55E]' : 'bg-amber-400'
                }`}
              ></span>
            </span>
            <span>{status.statusText}</span>
          </div>

          {/* Quick WhatsApp CTA Button */}
          <a
            ref={waBtnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-4 py-2 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#22C55E] to-[#10B981] hover:from-[#16a34a] hover:to-[#059669] transition-all shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_25px_rgba(34,197,94,0.45)] flex items-center gap-2 overflow-hidden"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Chamar WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile status dot */}
          <div
            className={`px-2.5 py-1 rounded-full border text-[11px] font-semibold flex items-center gap-1.5 ${
              status.isOpen
                ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Aberto</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#161922] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C0F]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#00E5FF] p-2 rounded-lg hover:bg-white/5"
            >
              Catálogo de Bebidas
            </a>
            <a
              href="#montar-pedido"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#FF2E93] hover:text-[#ff5ea8] p-2 rounded-lg hover:bg-white/5 flex items-center justify-between"
            >
              <span>Montar Pedido Rápido</span>
              <Sparkles className="w-4 h-4" />
            </a>
            <a
              href="#horarios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#00E5FF] p-2 rounded-lg hover:bg-white/5 flex items-center justify-between"
            >
              <span>Horário de Funcionamento</span>
              <span className="text-xs text-[#22C55E]">{status.statusText}</span>
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#00E5FF] p-2 rounded-lg hover:bg-white/5"
            >
              Localização & GPS
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#00E5FF] p-2 rounded-lg hover:bg-white/5"
            >
              Diferenciais Prime
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl font-bold text-sm text-center text-white bg-gradient-to-r from-[#22C55E] to-[#10B981] shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Pedir no WhatsApp ({FORMATTED_PHONE})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
