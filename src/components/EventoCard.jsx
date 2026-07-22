import Link from "next/link";

function EventoCard({ evento }) {
  const { tipo, titulo, descricao, horario, local } = evento;

  return (
    <article className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
      {/* Esquerda: Informações do Evento */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
            {tipo}
          </span>
        </div>
        <h3 className="font-extrabold text-xl mb-2">{titulo}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          {descricao}
        </p>
      </div>

      {/* Direita: Datas e Ação */}
      <div className="flex flex-col justify-center min-w-[200px] border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6 text-sm">
        <div className="space-y-1 mb-4">
          <p className="text-muted-foreground">🕒 {horario}</p>
          <p className="text-muted-foreground">📍 {local}</p>
        </div>

        <Link
          href="/jogos"
          className="text-center font-bold text-xs uppercase bg-secondary text-secondary-foreground py-2.5 px-4 rounded hover:bg-accent transition-colors"
        >
          Garantir meu Lugar
        </Link>
      </div>
    </article>
  );
}

export default EventoCard;