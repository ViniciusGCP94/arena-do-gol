import { jogosMock } from "@/data/jogos";
import JogoCard  from "@/components/JogoCard";

async function JogosPage() {
  return (
    <main className="container mx-auto py-12 px-4">
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
          <JogoCard key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </main>
  );
}

export default JogosPage; 