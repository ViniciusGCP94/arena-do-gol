import EventoCard from "@/components/EventoCard";

async function EventosPage() {
  const eventosEspeciais = [
    {
      id: 1,
      titulo: "Chute a Gol Premiado",
      descricao:
        "No intervalo dos jogos do Brasil, tente acertar o ângulo no nosso minicampo e ganhe baldes de cerveja ou petiscos na hora!",
      horario: "Durante os intervalos dos jogos do Brasil",
      local: "Arena de Experiências Stadium Pulse",
      tipo: "Sorteio & Prêmios",
    },
    {
      id: 2,
      titulo: "Trivia de Copas do Mundo",
      descricao:
        "Mostre que você é um verdadeiro historiador do futebol! Responda às perguntas do nosso Quiz no telão e concorra a uma camisa oficial autografada.",
      horario: "Quintas-feiras, a partir das 20h",
      local: "Salão Principal",
      tipo: "Interativo",
    },
    {
      id: 3,
      titulo: "Resenha & DJ Set",
      descricao:
        "O apito final não encerra a nossa festa. DJs locais comandam o som logo após os grandes clássicos para comemorarmos a vitória.",
      horario: "Sábados e domingos após a última transmissão",
      local: "Palco Principal",
      tipo: "Música ao Vivo",
    },
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
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </div>
    </main>
  );
}

export default EventosPage;