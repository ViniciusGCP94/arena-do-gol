import Link from "next/link";
import { jogosMock } from "@/data/jogos";

async function PromocoesPage() {
  // Filtramos apenas os jogos que possuem alguma promoção ativa cadastrada
  const jogosComPromo = jogosMock.filter((jogo) => jogo.promocao);

  return (
    <main className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Cabeçalho */}
      <header className="text-center mb-12 w-full">
        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
          Ofertas Exclusivas
        </span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Combos e Promoções
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-[576px] mx-auto leading-relaxed">
          Torcer pelo Brasil é bom, mas com chopp em dobro e descontos especiais é ainda melhor. Confira as vantagens de assistir aos jogos na nossa Arena!
        </p>
      </header>

      {/* Grid de Promoções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Promoção Fixa / Geral do Pub */}
        <article className="border-2 border-primary/30 p-6 rounded-lg bg-card text-card-foreground shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-black text-[10px] uppercase px-3 py-1 rounded-bl">
            FIXA
          </div>
          <div>
            <span className="text-2xl">🔥</span>
            <h3 className="font-extrabold text-xl mt-3 mb-2">Happy Hour da Copa</h3>
            <p className="text-sm text-muted-foreground mb-4">
              De segunda a sexta-feira, das 17h às 19h, todos os drinks do cardápio saem com 20% de desconto!
            </p>
          </div>
          <div className="pt-4 border-t border-border/50 flex justify-between items-center">
            <span className="text-xs font-bold text-primary uppercase">Segunda a Sexta</span>
            <Link href="/cardapio" className="text-xs font-bold text-foreground hover:underline">
              Ver Drinks →
            </Link>
          </div>
        </article>

        {/* Promoções Atreladas aos Jogos Dinâmicos */}
        {jogosComPromo.map((jogo) => (
          <article 
            key={jogo.id} 
            className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl">⚽</span>
              <h3 className="font-extrabold text-xl mt-3 mb-2">Promoção Especial de Jogo</h3>
              <p className="text-sm text-primary font-semibold bg-primary/5 p-3 rounded-md border border-primary/10 mb-4">
                {jogo.promocao}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Válida exclusivamente durante a transmissão ao vivo do confronto: <strong className="text-foreground">{jogo.timeA.nome} x {jogo.timeB.nome}</strong>.
              </p>
            </div>
            <div className="pt-4 border-t border-border/50 flex justify-between items-center">
              <span className="text-xs font-bold text-muted-foreground">📅 {jogo.data} às {jogo.horario}</span>
              <Link href="/jogos" className="text-xs font-bold text-foreground hover:underline">
                Ver Partida →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default PromocoesPage; // Regra de ouro! 😉