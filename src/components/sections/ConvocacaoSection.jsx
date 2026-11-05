"use client";

function ConvocacaoSection() {
  return (
    <section className="w-full bg-secondary/50 border-y border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Bloco de Texto */}
        <div className="w-full lg:max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-3xl">
            Convocação <span className="text-ouro">Stadium</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed px-8 sm:px-18 lg:px-0 ">
            Receba a tabela completa, convites para as &quot;Fan Fests&quot; privadas e promoções de balde de cerveja para os jogos do Brasil.
          </p>
        </div>

        {/* Formulário Profissional */}
        <form 
          onSubmit={(e) => e.preventDefault()}
          className="w-full lg:w-auto flex flex-col items-center gap-3 shrink-0 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            placeholder="Seu e-mail aqui"
            required
            className="w-full sm:w-80 h-12 bg-background border border-border rounded px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ouro focus:ring-1 focus:ring-ouro transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-12 bg-ouro hover:bg-ouro/90 text-navbar font-bold px-8 rounded text-sm uppercase tracking-wider transition-all whitespace-nowrap shrink-0"
          >
            Cadastrar
          </button>
        </form>

      </div>
    </section>
  );
}

export default ConvocacaoSection;