import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppUrl } from '../utils/status';
import { Beer, Wine, Flame, Sparkles, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CategoryItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  neonColor: 'pink' | 'cyan' | 'green' | 'amber';
  icon: React.ReactNode;
  popularItems: string[];
  whatsAppMessage: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'cervejas',
    title: 'Cervejas & Chopp',
    badge: 'Trincando a -4°C',
    tagline: 'Latas, garrafas, fardos e chopp artesanal fresco',
    description: 'Trabalhamos com marcas consagradas e artesanais sempre no grau mais baixo. Fardos fechados ou unidades avulsas prontas para consumo imediato.',
    image: '/images/cat-beers.jpg',
    neonColor: 'cyan',
    icon: <Beer className="w-5 h-5 text-[#00E5FF]" />,
    popularItems: ['Heineken (Long Neck & Lata)', 'Spaten Puro Malte', 'Corona Extra & Stella Artois', 'Amstel & Brahma Duplo Malte', 'Chopp Pilsen & IPA'],
    whatsAppMessage: 'Olá! Vim pelo site da Prime Beer e gostaria de pedir Cervejas e Chopp gelados.',
  },
  {
    id: 'destilados',
    title: 'Destilados & Combos',
    badge: 'Kits Prontos para a Noite',
    tagline: 'Whiskies, Gin, Vodka, Energéticos e Gelos de Sabor',
    description: 'Monte seu combo ou peça sua garrafa original com dosadores, energéticos (Red Bull, Monster) e gelos saborizados de coco, maracujá e melancia.',
    image: '/images/cat-spirits.jpg',
    neonColor: 'pink',
    icon: <Wine className="w-5 h-5 text-[#FF2E93]" />,
    popularItems: ['Whisky Black & Red Label, Jack Daniel’s', 'Gin Tanqueray & Gordon’s', 'Vodka Absolut & Smirnoff', 'Red Bull & Monster Energy', 'Gelos de Coco & Frutas'],
    whatsAppMessage: 'Olá! Vim pelo site da Prime Beer e quero pedir Destilados / Combos.',
  },
  {
    id: 'gelo-carvao',
    title: 'Gelo & Carvão',
    badge: 'Salva o Churrasco',
    tagline: 'Gelo filtrado cristal e carvão vegetal selecionado',
    description: 'Não deixe o churrasco morrer nem a bebida esquentar! Pacotes de gelo em cubo ou escama com água purificada, carvão de alta durabilidade e acendedores.',
    image: '/images/cat-ice-charcoal.jpg',
    neonColor: 'amber',
    icon: <Flame className="w-5 h-5 text-amber-400" />,
    popularItems: ['Gelo em Cubo Filtrado (5kg)', 'Gelo em Escama (10kg)', 'Carvão Vegetal Especial (3kg e 5kg)', 'Acendedores Automáticos & Fósforos'],
    whatsAppMessage: 'Olá! Vim pelo site da Prime Beer e preciso de Gelo e Carvão com urgência.',
  },
  {
    id: 'snacks-tabacaria',
    title: 'Snacks & Tabacaria',
    badge: 'Conveniência Completa',
    tagline: 'Petiscos, aperitivos crocantes e tabacaria completa',
    description: 'Variedade em snacks, amendoins, batatas artesanais, chocolates, além de sedas finas, filtros, isqueiros e essências selecionadas.',
    image: '/images/cat-snacks.jpg',
    neonColor: 'green',
    icon: <Sparkles className="w-5 h-5 text-[#22C55E]" />,
    popularItems: ['Amendoins & Castanhas Selecionadas', 'Batatas Chips & Petiscos Variados', 'Sedas Importadas & Filtros', 'Isqueiros Clipper & Acessórios'],
    whatsAppMessage: 'Olá! Vim pelo site da Prime Beer e gostaria de pedir Snacks e itens de Tabacaria.',
  },
];

export const Categories: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered progressive reveal triggered by ScrollTrigger (start: "top 85%")
      const cards = gsap.utils.toArray<HTMLElement>('.category-card');

      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 45,
        opacity: 0,
        scale: 0.95,
        rotationZ: (index: number) => (index % 2 === 0 ? -1.5 : 1.5),
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="catalogo" ref={sectionRef} className="py-20 md:py-24 relative bg-[#0A0C0F] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF2E93]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E5FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 text-xs font-semibold text-[#00E5FF] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Catálogo Rápido e Completo</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tudo o que você precisa para o seu <span className="bg-gradient-to-r from-[#FF2E93] to-[#00E5FF] bg-clip-text text-transparent">rolê</span> ou churrasco.
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Escolha uma categoria abaixo e peça diretamente pelo WhatsApp com atendimento ágil em Chapecó.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de ver o cardápio completo de bebidas da Prime Beer.')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors group"
          >
            <span>Ver Cardápio Completo no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Bento Grid of 4 Categories */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {CATEGORIES.map((cat) => {
            const isPink = cat.neonColor === 'pink';
            const isCyan = cat.neonColor === 'cyan';
            const isAmber = cat.neonColor === 'amber';

            const borderColor = isPink
              ? 'hover:border-[#FF2E93]/60 group-hover:shadow-[0_0_35px_rgba(255,46,147,0.25)]'
              : isCyan
              ? 'hover:border-[#00E5FF]/60 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]'
              : isAmber
              ? 'hover:border-amber-400/60 group-hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]'
              : 'hover:border-[#22C55E]/60 group-hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]';

            const badgeBg = isPink
              ? 'bg-[#FF2E93]/15 text-[#FF2E93] border-[#FF2E93]/30'
              : isCyan
              ? 'bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF]/30'
              : isAmber
              ? 'bg-amber-400/15 text-amber-300 border-amber-400/30'
              : 'bg-[#22C55E]/15 text-[#22C55E] border-[#22C55E]/30';

            return (
              <div
                key={cat.id}
                className={`category-card group relative rounded-3xl bg-[#161922]/90 border border-white/[0.08] ${borderColor} transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-md`}
              >
                {/* Image Showcase with Zoom and Gradient Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161922] via-[#161922]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#161922]/40 via-transparent to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${badgeBg}`}>
                      {cat.badge}
                    </span>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-[#0A0C0F]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                    {cat.icon}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-1 mb-2.5">
                      {cat.tagline}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {cat.description}
                    </p>

                    {/* Popular items list */}
                    <div className="space-y-2 mb-5 pt-3.5 border-t border-white/[0.06]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Mais pedidos na Prime Beer:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                        {cat.popularItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Direct WhatsApp Action for this Category */}
                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <a
                      href={getWhatsAppUrl(cat.whatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#22C55E] to-[#10B981] hover:from-[#16a34a] hover:to-[#059669] shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_30px_rgba(34,197,94,0.45)] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20 group-hover/btn:scale-110 transition-transform" />
                      <span>Pedir {cat.title.split('&')[0].trim()} no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
