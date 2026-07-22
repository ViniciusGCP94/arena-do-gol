# ⚽ Arena do Gol — Stadium Pulse (World Code Cup 2026)

> Aplicação web desenvolvida em Next.js para gerenciamento e apresentação da programação, cardápio temático, promoções e eventos de um pub/bar esportivo durante a Copa do Mundo de 2026.

> 🔗 **Acesse a aplicação rodando ao vivo:** [arena-do-gol.vercel.app](https://arena-do-gol.vercel.app)

---

## 📌 Visão Geral do Projeto

O **Arena do Gol** (Stadium Pulse) é um projeto fullstack em desenvolvimento contínuo, focado em alta performance, acessibilidade e experiência do usuário (UX). Construído sobre a arquitetura do **Next.js App Router**, o projeto simula a operação completa de uma arena de transmissão de jogos com cardápio dinâmico, ofertas atreladas às partidas e gestão de eventos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Framework Principal:** [Next.js 14+](https://nextjs.org/) (App Router, Server Components)
- **Linguagem:** JavaScript (ES6+)
- **Estilização & UI:** 
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
  - CSS Variables & Tema Customizado (`globals.css` com suporte ao tema verde escuro temático)
- **Estrutura de Alias:** `@/` configurado em `jsconfig.json`
- **Deploy & Hospedagem:** Vercel

---

## 🚀 O Que Foi Desenvolvido Até Agora (Fase 0 & Fase 1)

### 🔹 Fase 0 — Fundação & Arquitetura do Projeto
- Configuração do projeto Next.js com Tailwind CSS v4 e alias `@/`.
- Setup do `shadcn/ui` sem TypeScript via `jsconfig.json`.
- Definição da paleta de cores temática (Verde Copa do Mundo / Stadium) com suporte ao Dark Mode nativo.
- Estruturação de pastas do projeto (`src/app`, `src/components`, `src/data`, `src/lib`).
- Implementação do `RootLayout` (`layout.jsx`) contendo `Header` e `Footer` responsivos.

### 🔹 Fase 1 — Apresentação da Programação (Fase 1.1 à 1.4)
1. **Dados Mockados (`src/data/`):**
   - `jogos.js`: Calendário com partidas da Copa, horários, times e placares mockados.
   - `cardapio.js`: Itens do cardápio com suporte a tags restritivas (vegano, vegetariano, sem glúten, sem álcool).
   - `promocoes.js`: Ofertas fixas do bar e promoções dinâmicas vinculadas aos jogos.
   - `eventos.js`: Atividades especiais (Trivia, Chute a Gol, DJ Set).

2. **Páginas do App (`src/app/`):**
   - **Home (`/`):** Hero section atrativa com chamada para reserva e destaques.
   - **Jogos (`/jogos`):** Calendário e grade de transmissões ao vivo e próximas partidas.
   - **Cardápio (`/cardapio`):** Listagem com filtragem dinâmica por tag alimentares via Query Params de forma assíncrona.
   - **Promoções (`/promocoes`):** Grid de ofertas divididas entre fixas do pub e específicas por partida.
   - **Eventos (`/eventos`):** Programação de atrações extras do bar.

3. **Componentização & Abstração (`src/components/`):**
   - `JogoCard.jsx`: Card reutilizável para exibição das partidas.
   - `CardapioItem.jsx`: Exibição de pratos e bebidas acompanhados de badges sanitárias/alimentares.
   - `PromocaoCard.jsx`: Card versátil para promoções fixas e dinâmicas com destaque de descontos.
   - `EventoCard.jsx`: Card de eventos com horário, local e botão direto de chamada para ação.
   - `FiltroCardapio.jsx`: Componente UI para alternar filtros de dieta.

4. **Deploy Checkpoint (Fase 1.4):**
   - Versionamento de código estruturado com **Conventional Commits** em português (pt-BR).
   - Integração contínua e deploy realizado na plataforma **Vercel**.

---

## 📂 Estrutura do Projeto (`src/`)

```
src/
├── app/
│   ├── layout.jsx         # Layout Raiz com Header e Footer
│   ├── page.jsx           # Home (Hero Section)
│   ├── jogos/page.jsx     # Calendário de Jogos
│   ├── cardapio/page.jsx  # Cardápio com Filtro
│   ├── promocoes/page.jsx # Promoções do Pub/Jogos
│   └── eventos/page.jsx   # Eventos Especiais
├── components/
│   ├── ui/                # Componentes shadcn/ui & FiltroCardapio
│   ├── CardapioItem.jsx   # Card individual do Cardápio
│   ├── EventoCard.jsx     # Card individual de Eventos
│   ├── JogoCard.jsx       # Card individual de Jogos
│   └── PromocaoCard.jsx   # Card individual de Promoções
└── data/
    ├── cardapio.js        # Mock data do Cardápio
    ├── eventos.js         # Mock data de Eventos
    ├── jogos.js           # Mock data dos Jogos
    └── promocoes.js       # Mock data de Promoções
```

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (já vem com o Node.js)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/ViniciusGCP94/arena-do-gol.git

# 2. Acesse a pasta do projeto
cd arena-do-gol

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

### Acesso

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

> Não é necessário configurar variáveis de ambiente para rodar localmente — a Fase 1 utiliza apenas dados mockados.

---

## 🔮 Próximos Passos (Fases Seguintes)

- **Fase 2:** Responsividade Avançada, Semântica e Acessibilidade (WCAG AA).
- **Fase 3:** Backend & Reservas de Mesa via Route Handlers e PostgreSQL (Neon).
- **Fase 4:** Placar ao Vivo via Polling de API Externa.
- **Fase 5 & 6:** Internacionalização (i18n PT/EN/ES) e Pedidos Interativos pelo App.
- **Fase 7:** Painel Administrativo Protegido (NextAuth).