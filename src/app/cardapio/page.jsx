import { cardapioMock } from "@/data/cardapio";
import FiltroCardapio from "@/components/ui/filtroCardapio";

async function CardapioPage({ searchParams }) {
  // O Next.js injeta o searchParams automaticamente nas páginas
  const params = await searchParams;
  const tagAtiva = params?.tag || "todos";

  // Filtra os itens do cardápio diretamente no servidor
  // Ajustado para bater com o "contem_gluten" sem acento do seu filtro!
  const cardapioFiltrado = tagAtiva === "todos"
    ? cardapioMock
    : cardapioMock.filter((item) => {
        // Normaliza a tag do banco/mock para bater com o id sem acento do filtro
        const tagsNormalizadas = item.tags.map(t => 
          t === "contém_gluten" ? "contem_gluten" : t
        );
        return tagsNormalizadas.includes(tagAtiva);
      });

  return (
    <main className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Cabeçalho da Página */}
      <header className="text-center mb-10 w-full">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Nosso Cardápio Temático
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-[576px] mx-auto leading-relaxed mb-8">
          Pratos e bebidas artesanais inspirados nas seleções da Copa do Mundo. 
          Use os filtros abaixo para encontrar opções para sua dieta.
        </p>

        {/* Componente Client de Filtros */}
        <div className="flex justify-center">
          <FiltroCardapio />
        </div>
      </header>

      {/* Grid de Pratos e Bebidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardapioFiltrado.map((item) => (
          <article 
            key={item.id} 
            className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header do Card */}
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="font-bold text-lg leading-snug">{item.nome}</h3>
                <span className="text-primary font-extrabold whitespace-nowrap">
                  R$ {item.preco.toFixed(2)}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {item.descricao}
              </p>
            </div>

            {/* Tags e Origem */}
            <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap justify-between items-center gap-2">
              <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                📍 {item.selecao}
              </span>
              <div className="flex gap-1.5 flex-wrap">
                {item.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded"
                  >
                    {tag.replace("_", " ")}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Fallback caso não haja nenhum prato na tag selecionada */}
      {cardapioFiltrado.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          Nenhum item encontrado para este filtro.
        </p>
      )}
    </main>
  );
}

export default CardapioPage; // Regra de ouro: sempre no final! 😉