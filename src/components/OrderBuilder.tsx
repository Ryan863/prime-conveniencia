import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppUrl, FORMATTED_PHONE } from '../utils/status';
import { Plus, Minus, ShoppingBag, MessageCircle, Send, Sparkles, Trash2, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProductOption {
  id: string;
  name: string;
  category: string;
  unit: string;
  emoji: string;
}

const POPULAR_PRODUCTS: ProductOption[] = [
  { id: 'heineken-ln', name: 'Heineken Long Neck 330ml', category: 'Cervejas', unit: 'garrafa', emoji: '🍺' },
  { id: 'spaten-lata', name: 'Spaten Puro Malte 350ml', category: 'Cervejas', unit: 'lata', emoji: '🍺' },
  { id: 'corona-ln', name: 'Corona Extra Long Neck', category: 'Cervejas', unit: 'garrafa', emoji: '🍺' },
  { id: 'fardo-amstel', name: 'Fardo Amstel / Brahma 12 un.', category: 'Cervejas', unit: 'fardo', emoji: '📦' },
  { id: 'combo-red-label', name: 'Combo Red Label + 4 Red Bulls + Gelo Coco', category: 'Combos', unit: 'kit', emoji: '🥃' },
  { id: 'combo-tanqueray', name: 'Combo Gin Tanqueray + 4 Tônicas + Frutas', category: 'Combos', unit: 'kit', emoji: '🍸' },
  { id: 'absolut-vodka', name: 'Vodka Absolut 1L Original', category: 'Destilados', unit: 'garrafa', emoji: '🍸' },
  { id: 'gelo-cubo-5kg', name: 'Saco de Gelo Filtrado em Cubo 5kg', category: 'Gelo & Carvão', unit: 'saco', emoji: '🧊' },
  { id: 'gelo-escama-10kg', name: 'Gelo em Escama 10kg', category: 'Gelo & Carvão', unit: 'saco', emoji: '🧊' },
  { id: 'carvao-3kg', name: 'Carvão Vegetal Selecionado Especial', category: 'Gelo & Carvão', unit: 'saco', emoji: '🔥' },
  { id: 'snacks-chips', name: 'Batata Crocante / Petiscos Selecionados', category: 'Snacks', unit: 'un', emoji: '🍿' },
  { id: 'tabacaria-kit', name: 'Kit Sedas Importadas + Filtros', category: 'Tabacaria', unit: 'kit', emoji: '✨' },
];

export const OrderBuilder: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [deliveryType, setDeliveryType] = useState<'entrega' | 'retirada'>('entrega');
  const [addressInput, setAddressInput] = useState('');
  const [observations, setObservations] = useState('');
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.order-builder-box', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const clearAll = () => {
    setQuantities({});
  };

  const selectedItems = Object.entries(quantities)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const prod = POPULAR_PRODUCTS.find((p) => p.id === id);
      return { ...prod, qty, id };
    });

  const totalCount = selectedItems.reduce((acc, curr) => acc + curr.qty, 0);

  // Generate WhatsApp message with formatted order list
  const handleSendOrder = () => {
    let msg = `*NOVO PEDIDO - PRIME BEER CONVENIÊNCIA*\n`;
    msg += `--------------------------------------\n`;

    if (selectedItems.length === 0) {
      msg += `Olá! Gostaria de consultar o catálogo e fazer um pedido personalizado.\n`;
    } else {
      selectedItems.forEach((item) => {
        msg += `• ${item.qty}x ${item.name}\n`;
      });
      msg += `--------------------------------------\n`;
      msg += `📦 *Modalidade:* ${deliveryType === 'entrega' ? 'Tele-entrega em Chapecó' : 'Retirada no Balcão (Alvorada)'}\n`;
      if (deliveryType === 'entrega' && addressInput.trim()) {
        msg += `📍 *Endereço:* ${addressInput.trim()}\n`;
      }
      if (observations.trim()) {
        msg += `📝 *Observação:* ${observations.trim()}\n`;
      }
      msg += `--------------------------------------\n`;
      msg += `Por favor, confirme a disponibilidade e o valor final com a entrega! Obrigado!`;
    }

    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
  };

  return (
    <section id="montar-pedido" ref={containerRef} className="py-24 relative bg-[#0E1117] overflow-hidden">
      {/* Background neon ambient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FF2E93]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#00E5FF]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#FF2E93]/30 text-xs font-semibold text-[#FF2E93] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2E93]" />
            <span>Simulador Interativo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Monte seu Pedido <span className="bg-gradient-to-r from-[#FF2E93] to-[#00E5FF] bg-clip-text text-transparent">em Segundos</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Selecione as bebidas, combos e itens essenciais para sua noite e envie o pedido estruturado diretamente no WhatsApp.
          </p>
        </div>

        {/* Builder Container */}
        <div className="order-builder-box grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Products Selector Grid (8 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Itens Mais Pedidos
              </span>
              {totalCount > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Limpar seleção</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {POPULAR_PRODUCTS.map((prod) => {
                const count = quantities[prod.id] || 0;
                const isSelected = count > 0;

                return (
                  <div
                    key={prod.id}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#1E232F] border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.15)]'
                        : 'bg-[#161922]/80 border-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl flex-shrink-0">{prod.emoji}</span>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white truncate">{prod.name}</div>
                        <div className="text-[11px] text-slate-400">{prod.category}</div>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isSelected ? (
                        <div className="flex items-center gap-2 bg-[#0A0C0F] p-1 rounded-xl border border-white/10">
                          <button
                            onClick={() => updateQuantity(prod.id, -1)}
                            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-200 transition-colors"
                            aria-label="Diminuir"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-5 text-center font-mono font-bold text-xs text-[#00E5FF]">
                            {count}
                          </span>
                          <button
                            onClick={() => updateQuantity(prod.id, 1)}
                            className="w-7 h-7 rounded-lg bg-[#00E5FF]/20 hover:bg-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] transition-colors"
                            aria-label="Aumentar"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => updateQuantity(prod.id, 1)}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-[#00E5FF]/20 hover:text-[#00E5FF] border border-white/10 hover:border-[#00E5FF]/30 transition-all flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Adicionar</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary & WhatsApp Dispatcher (5 cols) */}
          <div className="lg:col-span-5 bg-[#161922] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF2E93]/15 border border-[#FF2E93]/30 flex items-center justify-center text-[#FF2E93]">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Resumo do Pedido</h3>
                  <p className="text-xs text-slate-400">
                    {totalCount > 0 ? `${totalCount} item(ns) selecionado(s)` : 'Nenhum item selecionado ainda'}
                  </p>
                </div>
              </div>
            </div>

            {/* Selected items list */}
            <div className="py-4 space-y-2.5 max-h-52 overflow-y-auto pr-1">
              {selectedItems.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-xs">
                  Clique nos botões de adicionar ao lado para compor sua lista rápida.
                </div>
              ) : (
                selectedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-slate-200 font-medium truncate mr-2">
                      {item.name}
                    </span>
                    <span className="font-mono font-bold text-[#00E5FF] flex-shrink-0">
                      {item.qty}x
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Delivery mode */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-semibold text-slate-300">Como prefere receber?</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('entrega')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    deliveryType === 'entrega'
                      ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF]'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  🚀 Entrega em Casa
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('retirada')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    deliveryType === 'retirada'
                      ? 'bg-[#FF2E93]/15 border-[#FF2E93] text-[#FF2E93]'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  🏪 Retirar no Balcão
                </button>
              </div>

              {deliveryType === 'entrega' && (
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">
                    Seu Bairro / Endereço em Chapecó:
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Ex: Rua Fernando Machado, Centro..."
                      value={addressInput}
                      onChange={(e) => setAddressInput(e.target.value)}
                      className="w-full bg-[#0A0C0F] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">
                  Observações adicionais (opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ex: Copos descartáveis, troco para 50..."
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  className="w-full bg-[#0A0C0F] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF2E93] transition-colors"
                />
              </div>
            </div>

            {/* Send WhatsApp Button */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={handleSendOrder}
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#22C55E] to-[#10B981] hover:from-[#16a34a] hover:to-[#059669] shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_35px_rgba(34,197,94,0.55)] transition-all flex items-center justify-center gap-2.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>
                  {totalCount > 0
                    ? `Enviar Pedido (${totalCount} itens) no WhatsApp`
                    : 'Chamar no WhatsApp'}
                </span>
                <Send className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-[11px] text-center text-slate-400 mt-2">
                Atendimento rápido pelo <span className="text-white font-mono">{FORMATTED_PHONE}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
