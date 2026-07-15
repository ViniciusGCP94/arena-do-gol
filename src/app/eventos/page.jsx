import Link from "next/link";

async function EventosPage() {
  // Criamos um array local rápido de eventos que, futuramente na Fase 3, poderá vir de um mock separado ou do banco de dados!
  const eventosEspeciais = [
    {
      id: 1,
      titulo: "Chute a Gol Premiado",
      descricao: "No intervalo dos jogos do Brasil, tente acertar o ângulo no nosso minicampo e ganhe baldes de cerveja ou petiscos na hora!",
      horario: "Durante os intervalos dos jogos do Brasil",
      local: "Arena de Experiências Stadium Pulse",
      tipo: "Sorteio & Prêmios"
    },
    {
      id: 2,
      titulo: "Trivia de Copas do Mundo",
      descricao: "Mostre que você é um verdadeiro historiador do futebol! Responda às perguntas do nosso Quiz no telão e concorra a uma camisa oficial autografada.",
      horario: "Quintas-feiras, a partir das 20h",
      local: "Salão Principal",
      tipo: "Interativo"
    },
    {
      id: 3,
      titulo: "Resenha & DJ Set",
      descricao: "O apito final não encerra a nossa festa. DJs locais comandam o som logo após os grandes clássicos para comemorarmos a vitória.",
      horario: "Sábados e domingos após a última transmissão",
      local: "Palco Principal",
      tipo: "Música ao Vivo"
    }
  ];

  return (
    <main className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Cabeçalho */}
      <header className="text-center mb-12 w-full">
        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">
          Além das Quatro Linhas
        </span>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Atividades Especiais
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-[576px] mx-auto leading-relaxed">
          Trivias interativas, música ao vivo e sorteios exclusivos. Venha viver a experiência completa de uma arquibancada vibrante!
        </p>
      </header>

      {/* Listagem de Eventos */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {eventosEspeciais.map((evento) => (
          <article 
            key={evento.id} 
            className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors"
          >
            {/* Esquerda: Informações do Evento */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                  {evento.tipo}
                </span>
              </div>
              <h3 className="font-extrabold text-xl mb-2">{evento.titulo}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                {evento.descricao}
              </p>
            </div>

            {/* Direita: Datas e Ação */}
            <div className="flex flex-col justify-center min-w-[200px] border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6 text-sm">
              <div className="space-y-1 mb-4">
                <p className="text-muted-foreground">🕒 {evento.horario}</p>
                <p className="text-muted-foreground">📍 {evento.local}</p>
              </div>
              
              <Link 
                href="/jogos" 
                className="text-center font-bold text-xs uppercase bg-secondary text-secondary-foreground py-2.5 px-4 rounded hover:bg-accent transition-colors"
              >
                Garantir meu Lugar
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default EventosPage; // Regra de ouro! 😉