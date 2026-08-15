import { cardapioMock } from "@/data/cardapio";
import FiltroCardapio from "@/components/ui/filtroCardapio";
import CardapioItem from "@/components/CardapioItem";

async function CardapioPage({ searchParams }) {
  const params = await searchParams;
  const tagAtiva = params?.tag || "todos";

  const cardapioFiltrado = tagAtiva === "todos"
    ? cardapioMock
    : cardapioMock.filter((item) => {
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
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Pratos e bebidas artesanais inspirados nas seleções da Copa do Mundo. 
          Use os filtros abaixo para encontrar opções para sua dieta.
        </p>

        <div className="flex justify-center">
            <FiltroCardapio />
        </div>
      </header>

      {/* Grid de Pratos e Bebidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardapioFiltrado.map((item) => (
          <CardapioItem key={item.id} item={item} />
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

export default CardapioPage;