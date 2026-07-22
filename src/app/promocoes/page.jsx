import { jogosMock } from "@/data/jogos";
import PromocaoCard from "@/components/PromocaoCard";

async function PromocoesPage() {
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
        {/* Promoção Fixa */}
        <PromocaoCard
          icone="🔥"
          badge="FIXA"
          titulo="Happy Hour da Copa"
          descricao="De segunda a sexta-feira, das 17h às 19h, todos os drinks do cardápio saem com 20% de desconto!"
          rodapeTexto="Segunda a Sexta"
          rodapeLink="/cardapio"
          rodapeLinkTexto="Ver Drinks"
        />

        {/* Promoções Atreladas aos Jogos Dinâmicos */}
        {jogosComPromo.map((jogo) => (
          <PromocaoCard
            key={jogo.id}
            icone="⚽"
            titulo="Promoção Especial de Jogo"
            destaque={jogo.promocao}
            descricao={`Válida exclusivamente durante a transmissão ao vivo do confronto: ${jogo.timeA.nome} x ${jogo.timeB.nome}.`}
            rodapeTexto={`📅 ${jogo.data} às ${jogo.horario}`}
            rodapeLink="/jogos"
            rodapeLinkTexto="Ver Partida"
          />
        ))}
      </div>
    </main>
  );
}

export default PromocoesPage;