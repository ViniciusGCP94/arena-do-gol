import Link from "next/link";

function EventoCard({ evento }) {
  const { titulo, categoria, data, horario, local, descricao, vagas, imagemIcone, destaque } = evento;

  const dataFormatada = data ? data.split("-").reverse().join("/") : "";

  return (
    <article className={`border p-6 rounded-lg bg-pitch text-card-foreground shadow-sm flex flex-col justify-between relative overflow-hidden transition-all ${
      destaque ? "border-ouro/60 hover:border-ouro" : "border-border/80 hover:border-verde/50"
    }`}>
      {destaque && (
        <div className="absolute top-0 right-0 bg-ouro text-navbar font-black text-[10px] uppercase px-3 py-1 rounded-bl">
          Destaque
        </div>
      )}

      <div>
        {/* ÍCONE E CATEGORIA COM ALTO CONTRASTE */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl leading-none flex items-center justify-center shrink-0">
            {imagemIcone || "⚽"}
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-wider bg-dugout text-ouro border border-ouro/30 px-3 py-1 rounded-md shadow-sm">
            {categoria}
          </span>
        </div>

        <h3 className="font-extrabold text-xl mb-2 text-white">{titulo}</h3>
        
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          {descricao || "Descrição não disponível"}
        </p>

        {/* CONTAINER DE INFORMAÇÕES */}
        <div className="space-y-2 text-xs bg-dugout p-3.5 rounded-md border border-border/60 mb-4">
          <p className="flex items-center gap-2 font-medium text-foreground">
            <span>📅</span> {dataFormatada ? `${dataFormatada} às ${horario}` : horario}
          </p>
          <p className="flex items-center gap-2 font-medium text-foreground">
            <span>📍</span> {local}
          </p>
          {vagas && (
            <p className="flex items-center gap-2 font-semibold text-ouro">
              <span>🎟️</span> {vagas}
            </p>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-border/40 flex justify-between items-center gap-4">
        <span className="text-xs font-semibold text-muted-foreground">
          {horario} h
        </span>
        <Link 
          href={`/eventos#${evento.id}`} 
          className="text-xs font-bold uppercase tracking-wider text-verde-fixed hover:text-ouro bg-dugout border border-verde/30 hover:border-ouro/50 py-2 px-4 rounded-md transition-all duration-200 whitespace-nowrap"
        >
          Garantir Lugar →
        </Link>
      </div>
    </article>
  );
}

export default EventoCard;