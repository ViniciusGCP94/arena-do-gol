import EventoCard from "@/components/EventoCard";
import { eventosMock } from "@/data/dataEventos";

async function EventosPage() {
  const eventosEspeciais = eventosMock;

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
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
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