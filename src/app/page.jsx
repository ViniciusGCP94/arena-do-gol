

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
      <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
        Rumo ao Hexa 2026
      </span>
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight max-w-3xl leading-none mb-6">
        A Copa do Mundo é no <span className="text-primary">Stadium Pulse</span>.
      </h1>
      <p className="text-muted-foreground text-base md:text-lg mb-8">
        Junte-se à nossa torcida, sinta a emoção de cada lance em 4K e garanta o seu lugar no melhor clima de arquibancada da cidade.
      </p>
      <div className="flex gap-4">
        <button className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded text-sm tracking-wider uppercase hover:opacity-90 transition-all">
          Reservar para o Brasil 🇧🇷
        </button>
        <button className="border border-border bg-secondary hover:bg-accent text-white font-bold px-6 py-3 rounded text-sm tracking-wider uppercase transition-all">
          Tabela de Jogos
        </button>
      </div>
    </div>
  );
}

export default HomePage;