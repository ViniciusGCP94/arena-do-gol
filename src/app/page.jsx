import { jogosMock } from "@/data/jogos";
import JogosSection  from "@/components/sections/JogosSection";
import EpicentroSection  from "@/components/sections/EpicentroSection";
import ConvocacaoSection from "@/components/sections/ConvocacaoSection";
import { CalendarDays, Clock5 } from "lucide-react";

function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <section className="max-w-7xl w-full mx-auto py-20 flex flex-col items-start text-left sm:px-10 sm:min-h-[calc(100dvh-4rem)] sm:justify-center">
        <span className="bg-verde border-l-4 border-ouro px-4 text-on-primary font-bold tracking-widest text-sm uppercase mb-4 sm:mb-8">
          Rumo ao Hexa 2026
        </span>

        <h1 className="text-5xl font-black uppercase tracking-tight max-w-3xl leading-none mb-6 sm:text-6xl sm:w-4/5 sm:mb-10">
          A Copa do Mundo é no <span className="text-ouro">Stadium Pulse.</span>
        </h1>

        <p className="text-muted-foreground text-lg mb-8 sm:w-2/3 sm:text-xl sm:mb-10">
          Junte-se à nossa torcida, sinta a emoção de cada lance em 4K e garanta o seu lugar no melhor clima de arquibancada da cidade.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="w-fit inline-flex gap-x-4 items-center bg-ouro text-navbar font-bold px-6 py-3 rounded text-sm tracking-wider uppercase hover:opacity-90 transition-all sm:px-8 sm:py-4 sm:text-md">
            Reservar para o Brasil 
            <CalendarDays size={16} className="shrink-0 -translate-y-px" aria-hidden="true" />
          </button>

          <button className="w-fit inline-flex gap-x-4 items-center border-2 border-verde bg-secondary hover:bg-accent text-verde font-bold px-6 py-3 rounded text-sm tracking-wider uppercase transition-all">
            Tabela de Jogos
            <Clock5 size={16} className="shrink-0 -translate-y-px" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* SEÇÕES ADICIONAIS */}
      <JogosSection jogos={jogosMock} />
      <EpicentroSection />
      <ConvocacaoSection />
    </div>
  );
}
export default HomePage;