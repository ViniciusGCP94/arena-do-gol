# Resumo Executivo Técnico – Arena do Gol

## 1) Arquitetura geral

O projeto é um monólito front-end em Next.js, estruturado como uma aplicação de páginas e componentes reutilizáveis. A arquitetura é orientada a módulos com separação clara entre:

- Rotas e páginas em `src/app/`
- Componentes de interface em `src/components/`
- Dados mockados em `src/data/`
- Utilitários e helpers em `src/lib/`
- Estilos globais em `src/app/globals.css`

Essa organização é compatível com uma arquitetura de front-end componentizado, mais próxima de uma estrutura de produto web orientada a UI do que de uma arquitetura empresarial completa como MVC tradicional ou Clean Architecture. A aplicação funciona como um protótipo de e-commerce/landing page temática de copa do mundo, com foco em experiência visual, navegação e apresentação de conteúdo.

### Características da arquitetura

- Frontend em React + Next.js
- Estrutura baseada em App Router do Next.js
- Componentização forte e reutilização de blocos visuais
- Dados estáticos em arquivos JavaScript para simular um backend real
- Estilo responsivo com layout adaptativo para mobile e desktop
- Sem backend real, banco de dados, autenticação ou persistência de dados

## 2) Principais funcionalidades implementadas no código

### Navegação e estrutura de páginas
- Página inicial com apresentação geral do evento e marca
- Páginas de jogos, eventos, promoções e cardápio
- Layout compartilhado em `src/app/layout.jsx`
- Navegação entre seções e rotas do projeto

### Cards e apresentação de conteúdo
- `JogoCard.jsx`: mostra jogos, seleções, horários e status
- `EventoCard.jsx`: apresenta programação e atividades do evento
- `PromocaoCard.jsx`: exibe campanhas promocionais
- `CardapioItem.jsx`: mostra itens do menu com preço e categoria

### Filtros e interações visuais
- Filtro de cardápio por categoria e tags alimentares
- Filtro por tipo de jogo e por seleção
- Navegação lateral para seções de conteúdo
- UI com seletor de opções, checkboxes, botões e drawers

### Dados mockados e regras de negócio simuladas
- Itens do cardápio com tags como `vegetariano`, `sem_gluten`, `contem_gluten`
- Jogos com status, seleções, datas, horário e promoção
- Promoções ligadas a partidas e eventos do estádio
- Estrutura de dados inspirada em um cenário real de experiência esportiva / gastronomia

### Design system e UX
- Componentes base reutilizáveis em `src/components/ui/`
- Botões, cards, badges, inputs, selects, dialogs, sheet, table, separator, labels e sonner
- Consistência visual e padronização da interface
- Melhor experiência para desktop e mobile

## 3) Principais tecnologias, frameworks e bibliotecas encontradas

### Frontend e framework
- Next.js
- React
- JavaScript

### Estilização e design system
- Tailwind CSS
- PostCSS
- CSS global em `src/app/globals.css`
- `class-variance-authority` para variantes de estilos
- `clsx` e `tailwind-merge`

### Componentes e UI
- Radix UI
  - Dialog
  - Sheet
  - Checkbox
  - Select
  - Separator
  - Label
- `lucide-react` para ícones
- `sonner` para notificações/toasts
- `next-themes` para temas visuais

### Dados e utilidades
- `react-country-flag` para exibir bandeiras
- `@tailwindcss/postcss`
- `tw-animate-css`

### Qualidade e tooling
- ESLint
- `eslint-config-next`
- `jsconfig.json` para aliases de importação

## 4) Os 3 trechos de código ou desafios de lógica mais complexos solucionados

### 1. Filtro dinâmico do cardápio com sincronização via query string
Arquivo relevante: `src/components/ui/filtroCardapio.jsx` e `src/app/cardapio/page.jsx`

```jsx
const router = useRouter();
const pathname = usePathname();
const searchParams = useSearchParams();

const tagAtiva = searchParams.get("tag") || "todos";

function handleFiltro(tagId) {
  const params = new URLSearchParams(searchParams);

  if (tagId === "todos") {
    params.delete("tag");
  } else {
    params.set("tag", tagId);
  }

  router.push(`${pathname}?${params.toString()}`);
}
```

Por que é importante:
- Resolve a persistência do filtro no estado da URL
- Permite navegação, compartilhamento e restauração do estado
- Demonstra conhecimento em React hooks, routing e estado reativo

### 2. Filtro de jogos com múltiplas regras de negócio
Arquivo relevante: `src/app/jogos/page.jsx`

```jsx
const [filtroAtivo, setFiltroAtivo] = useState("fase-de-grupos");

const jogosFiltrados = jogosMock?.filter((jogo) => {
  if (filtroAtivo === "fase-de-grupos") return true;
  if (filtroAtivo === "selecao-brasileira") {
    return jogo.timeA.nome === "Brasil" || jogo.timeB.nome === "Brasil";
  }
  if (filtroAtivo === "bebo-stadium" || filtroAtivo === "menu-especial") {
    return Boolean(jogo.promocao);
  }
  return jogo.categoria === filtroAtivo;
});
```

Por que é importante:
- Lógica condicional complexa para diferentes cenários de filtragem
- Mostra capacidade de transformar dados estruturados em experiências de usuário
- É um bom exemplo de “business logic light” aplicada em UI

### 3. Relacionamento entre promoções e partidas para montar conteúdo contextualizado
Arquivo relevante: `src/app/promocoes/page.jsx`

```jsx
{promocoesMock.map((promo) => {
  const jogoRelacionado = jogosMock.find((j) => j.id === promo.jogoId);

  const dataFormatada = jogoRelacionado?.data
    ? `${jogoRelacionado.data.split('-').reverse().join('/')} às ${jogoRelacionado.horario}`
    : "Durante o jogo";

  return (
    <PromocaoCard
      key={promo.id}
      titulo={promo.titulo}
      destaque={promo.descricao}
      descricao={promo.regras}
      rodapeTexto={`📅 ${dataFormatada}`}
      rodapeLink="/jogos"
      rodapeLinkTexto="Ver Partida"
    />
  );
})}
```

Por que é importante:
- Demonstra junção de dados entre coleções diferentes
- Resolve apresentação contextualizada de informações relacionadas
- Exibe preocupação com legibilidade, modelagem e UX

## Conclusão

O projeto evidencia bom domínio em desenvolvimento front-end moderno com Next.js e React, além de capacidade para construir interfaces de alto impacto visual, componentização e experiência responsiva. Ele demonstra maturidade em organização de código, design system e lógica de filtragem e apresentação de dados.

Em termos de recrutamento, o maior diferencial do projeto é a combinação de:
- UX e design bem pensados
- estrutura clara de páginas e componentes
- dados modelados para simular um produto real
- lógica de filtros e relacionamento entre conteúdos

O principal limite do projeto, para um cenário de backend ou produto completo, é a ausência de:
- autenticação/autorização
- banco de dados
- API real
- validação de esquemas
- pagamento
- persistência
- testes automatizados

Mesmo assim, como portfolio, ele é um projeto forte para demonstrar capacidade de desenvolver interfaces modernas e experiências digitais de marca em um contexto de produto realista.
