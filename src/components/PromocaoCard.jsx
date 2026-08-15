import Link from "next/link";

function PromocaoCard({ titulo, descricao, destaque, badge, rodapeTexto, rodapeLink, rodapeLinkTexto, icone = "🔥" }) {
  return (
    <article className="border border-border p-6 rounded-lg bg-card text-card-foreground shadow-sm flex flex-col justify-between relative overflow-hidden hover:border-primary/50 transition-colors">
      {badge && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-black text-[10px] uppercase px-3 py-1 rounded-bl">
          {badge}
        </div>
      )}
      <div>
        <span className="text-2xl">{icone}</span>
        <h3 className="font-extrabold text-xl mt-3 mb-2">{titulo}</h3>
        
        {destaque ? (
          <p className="text-sm text-primary font-semibold bg-primary/5 p-3 rounded-md border border-primary/10 mb-4">
            {destaque}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground mb-4">
            {descricao}
          </p>
        )}

        {destaque && descricao && (
          <p className="text-xs text-muted-foreground mb-4">
            {descricao}
          </p>
        )}
      </div>

      <div className="pt-4 border-t border-border/50 flex justify-between items-center gap-4">
        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
          {rodapeTexto}
        </span>
        <Link 
          href={rodapeLink} 
          className="text-xs font-bold uppercase tracking-wide bg-bright text-secondary-foreground hover:bg-primary hover:text-primary-foreground py-2 px-3.5 rounded transition-colors whitespace-nowrap"
        >
          {rodapeLinkTexto} →
        </Link>
      </div>
    </article>
  );
}

export default PromocaoCard;