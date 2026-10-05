# 🍻 Prime Beer Conveniência - Landing Page & Web App

Landing Page / Web App de alta performance da **Prime Beer Conveniência**, localizada em **Chapecó - SC (Bairro Alvorada)**. Interface moderna com estética **Dark Neon Cyber-Bar**, animações avançadas com **GSAP (GreenSock) + ScrollTrigger**, espaçamentos consistentes e navegação GPS integrada.

---

## 🎨 Design & Identidade Visual (Dark Neon Cyber-Bar)

- **Fundo Principal:** `#0A0C0F` a `#12151B` com iluminação radial ambiente e grid cyber sutil.
- **Superfícies & Cards:** `#161922` com bordas translúcidas (`rgba(255, 255, 255, 0.08)`), reflexos metálicos cromados (*4-point chrome stars*) e efeito glassmorphic.
- **Neon Primário (Pink / Magenta):** `#FF2E93` e `#E11D74` para destaques de foco, bordas ativas e text glow.
- **Neon Secundário (Cyan / Turquesa):** `#00E5FF` e `#00D2D3` para acentos gráficos, reflexos e badges técnicos.
- **Status Ativo / WhatsApp (Neon Green):** `#22C55E` / `#10B981` com indicador em tempo real "Aberto Agora" e botões diretos de ação.
- **Tipografia:** `Syne` (títulos de impacto) e `Plus Jakarta Sans` (leitura e interface).

---

## ⚡ Estrutura & Funcionalidades

1. **Header / Navbar:**
   - Logotipo exclusivo em vetor neon com gradiente pink/cyan.
   - Indicador de status em tempo real com beacon luminoso (🟢 *Aberto Agora*).
   - Atalho rápido magnético para o WhatsApp.

2. **Hero Section de Alto Impacto:**
   - Chamada direta: *"Cerveja trincando, destilados e conveniência completa na sua mão."*
   - Badges flutuantes de temperatura (-4.2°C) e tempo de entrega.
   - Botão magnético com brilho contínuo para pedir pelo WhatsApp.
   - Botão direto para traçar rotas via Waze e Google Maps.

3. **Catálogo Rápido / Bento Grid (Cards Interativos):**
   - 🍺 **Cervejas & Chopp:** Latas, long necks, fardos e chopp artesanal fresco.
   - 🥃 **Destilados & Combos:** Whiskies, Gin, Vodka, energéticos e gelos de sabor.
   - 🧊 **Gelo & Carvão:** Saco de gelo filtrado (cubo/escama) e carvão vegetal selecionado.
   - 🍿 **Snacks & Tabacaria:** Petiscos, aperitivos crocantes e tabacaria completa.
   - Cada categoria possui botão com mensagem pré-formatada para o WhatsApp.

4. **Diferenciais Prime em Bento Grid:**
   - Controle térmico rigoroso com freezers calibrados a -4°C.
   - Despacho ágil para entrega rápida em Chapecó.
   - Variedade completa no mesmo local (bebidas, carvão sem cheiro forte, gelos saborizados).
   - Pagamento facilitado (Pix, crédito, débito e dinheiro).

5. **Painel LED de Horário de Funcionamento:**
   - Visual digital estilo cyber com destaque automático para o dia da semana atual:
     - **Segunda-feira:** 09:00 - 23:00
     - **Terça a Quinta:** 09:00 - 23:00
     - **Sexta-feira:** 02:00 - 02:00 (Plantão fim de semana)
     - **Sábado:** 01:00 - 03:00
     - **Domingo:** 10:00 - 23:00

6. **Localização & Navegação GPS:**
   - Endereço físico: **Rua Alfredo Wagner, Alvorada, Chapecó - SC, 89804-430, Brasil**.
   - Botões de rota direta no **Google Maps** e **Waze**.
   - Botão para copiar endereço com feedback instantâneo.
   - Mapa interativo estilizado em tema dark com marcador radar pulsante.

7. **FAQ (Perguntas Frequentes):**
   - Sanfona com perguntas e respostas sobre entrega, formas de pagamento, barril de chopp e temperatura.

8. **Botão Flutuante Persistente:**
   - Fixado no canto inferior direito com pulsos luminosos contínuos do GSAP e efeito magnético ao passar o mouse.

---

## 🛠️ Stack Tecnológica

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS v4** (Design System com tokens personalizados)
- **GSAP (GreenSock)** + **ScrollTrigger** + `@gsap/react` com escopo em `useGSAP()` para limpeza segura do ciclo de vida
- **Lucide Icons**

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## 📍 Informações de Contato

- **WhatsApp Oficial:** [+55 49 9834-3314](https://wa.me/554998343314)
- **Endereço:** Rua Alfredo Wagner, Alvorada, Chapecó - SC, 89804-430, Brasil
