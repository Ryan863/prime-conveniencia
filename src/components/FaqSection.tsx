import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/status';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'A cerveja e o chopp já saem gelados de verdade?',
    answer:
      'Sim! Nossos freezers industriais são configurados a -4°C. Garantimos que sua cerveja chegue ou saia do balcão trincando, no ponto exato para abertura imediata, sem necessidade de esperar gelar na geladeira de casa.',
  },
  {
    question: 'Vocês realizam tele-entrega para quais bairros de Chapecó?',
    answer:
      'Atendemos o bairro Alvorada, Centro, Efapi, Bela Vista, Passo dos Fortes, São Cristóvão, Santa Maria e demais regiões de Chapecó. Consulte a taxa e tempo estimado para sua localização diretamente pelo nosso WhatsApp.',
  },
  {
    question: 'Como funciona o pedido pelo WhatsApp?',
    answer:
      'É muito simples: você pode utilizar o simulador de pedidos aqui no site ou mandar uma mensagem direta no WhatsApp (+55 49 9834-3314). Nossa equipe confirma os itens, informa o valor e despacha seu pedido rapidamente.',
  },
  {
    question: 'Como encomendar barril de Chopp para festas ou finais de semana?',
    answer:
      'Temos opções de chopp artesanal e pilsen. Recomendamos entrar em contato com antecedência para garantir o barril na litragem desejada com a chopeira pronta para uso.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Aceitamos Pix instantâneo com envio de comprovante facilitado, cartões de crédito e débito das principais bandeiras na maquininha sem fio (tanto no balcão quanto na entrega) e dinheiro em espécie com troco garantido.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-[#0E1117] overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-white/10 text-xs font-semibold text-[#00E5FF] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Perguntas <span className="bg-gradient-to-r from-[#FF2E93] to-[#00E5FF] bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Tudo o que você precisa saber sobre nossos produtos, entregas e atendimento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#161922] border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.1)]'
                    : 'bg-[#161922]/60 border-white/[0.07] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#161922]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-sm text-slate-300">
            <span className="font-bold text-white block">Ainda tem alguma pergunta específica?</span>
            Fale diretamente com nosso atendente no WhatsApp agora mesmo.
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre a Prime Beer.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#22C55E] to-[#10B981] shadow-lg flex items-center gap-2 hover:scale-105 transition-transform flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
