import JogoCard  from "@/components/JogoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function JogosSection({ jogos }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-8">
      {/* Cabeçalho da Seção */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
            Jogos do Mundial
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">
            Acompanhe as principais seleções em campo. Reserve sua mesa antecipadamente.
          </p>
        </div>

        {/* Botões de Navegação (Carrossel) */}
        <div className="hidden sm:flex items-center gap-2">
          <button 
            aria-label="Jogos anteriores"
            className="p-2 border border-border rounded hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            aria-label="Próximos jogos"
            className="p-2 border border-border rounded hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid / Carrossel de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jogos?.map((jogo) => (
          <JogoCard key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </section>
  );
}
export default JogosSection;