import { jogosMock } from "@/data/jogos";

async function JogosPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      {/* Cabeçalho da Página */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Calendário de Transmissões
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-[576px] mx-auto leading-relaxed">
          Não perca nenhum lance! Confira a tabela das partidas que transmitiremos ao vivo na Arena com som de estádio.
        </p>
      </header>

      {/* Grid de Partidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {jogosMock.map((jogo) => (
          <article 
            key={jogo.id} 
            className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col justify-between"
          >
            {/* Cabeçalho do Card: Status e Rodada */}
            <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-2">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {jogo.rodada}
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                jogo.status === "AO VIVO" 
                  ? "bg-destructive/10 text-destructive animate-pulse" 
                  : "bg-secondary text-secondary-foreground"
              }`}>
                {jogo.status}
              </span>
            </div>

            {/* Placar / Times */}
            <div className="flex items-center justify-between my-6 px-4">
              {/* Time A */}
              <div className="flex flex-col items-center w-1/3 text-center">
                <span className="text-2xl mb-1">🚩</span> {/* Placeholder de bandeira */}
                <span className="font-bold text-lg">{jogo.timeA.nome}</span>
              </div>

              {/* Placar ou VS */}
              <div className="flex items-center justify-center gap-3 w-1/3">
                {jogo.status === "AO VIVO" ? (
                  <div className="flex items-center gap-2 text-2xl font-extrabold">
                    <span>{jogo.timeA.gols}</span>
                    <span className="text-muted-foreground text-sm">x</span>
                    <span>{jogo.timeB.gols}</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground font-semibold text-sm">VS</span>
                )}
              </div>

              {/* Time B */}
              <div className="flex flex-col items-center w-1/3 text-center">
                <span className="text-2xl mb-1">🏳️</span> {/* Placeholder de bandeira */}
                <span className="font-bold text-lg">{jogo.timeB.nome}</span>
              </div>
            </div>

            {/* Rodapé do Card: Info de transmissão e promo associada */}
            <div className="mt-4 pt-4 border-t border-border/50 text-sm space-y-2">
              <p className="text-muted-foreground">
                📅 <strong className="text-foreground">{jogo.data}</strong> às <strong className="text-foreground">{jogo.horario}</strong> — {jogo.local}
              </p>
              {jogo.promocao && (
                <p className="text-primary font-medium bg-primary/5 p-2 rounded-md border border-primary/10">
                  🔥 {jogo.promocao}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default JogosPage; // Sempre no final! 😉