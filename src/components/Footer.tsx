import React from 'react';
import { Logo } from './Logo';
import { ADDRESS, FORMATTED_PHONE, getWhatsAppUrl, MAPS_URL } from '../utils/status';
import { MessageCircle, MapPin, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090C] border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden text-slate-400">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[#FF2E93]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-white/[0.08]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-3.5">
            <Logo size="md" />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-3">
              A conveniência e distribuidora de bebidas mais completa de Chapecó. Cervejas estupidamente geladas, combos exclusivos, chopp artesanal, gelo e carvão para o seu churrasco e fim de semana.
            </p>
            <div className="flex items-center gap-2.5 pt-1 text-xs font-semibold text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Bairro Alvorada • Chapecó - SC</span>
            </div>
          </div>

          {/* Col 2: Atalhos Rápidos */}
          <div className="space-y-3">
            <h4 className="font-display text-white text-sm font-bold uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#catalogo" className="hover:text-[#00E5FF] transition-colors">
                  Catálogo de Bebidas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#00E5FF] transition-colors">
                  Diferenciais Prime
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-[#00E5FF] transition-colors">
                  Horário de Funcionamento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#00E5FF] transition-colors">
                  Localização & GPS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Endereço */}
          <div className="space-y-3">
            <h4 className="font-display text-white text-sm font-bold uppercase tracking-wider">
              Atendimento
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-[#22C55E] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white group-hover:text-[#22C55E]">
                    {FORMATTED_PHONE}
                  </span>
                  <span className="text-xs text-slate-400">Atendimento WhatsApp</span>
                </div>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-slate-300 hover:text-[#00E5FF] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-200">
                  {ADDRESS}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer (+18) */}
        <div className="py-5 border-b border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-amber-500/80">
            <ShieldAlert className="w-4 h-4 flex-shrink-0" />
            <span>
              <strong>Atenção:</strong> Venda e consumo proibidos para menores de 18 anos. Beba com responsabilidade. Se beber, não dirija.
            </span>
          </div>
          <div className="font-mono text-[11px]">
            Chapecó / Santa Catarina
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Prime Beer Conveniência. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com alta performance & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
