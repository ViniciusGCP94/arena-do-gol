import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CardapioItem({ item }) {
  return (
    <Card className="p-6 flex flex-col justify-between">
      <div>
        {/* Header do Card integrado no topo do conteúdo */}
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="font-bold text-lg leading-snug">{item.nome}</h3>
          <span className="text-primary font-extrabold whitespace-nowrap">
            R$ {item.preco.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {item.descricao}
        </p>
      </div>

      {/* Tags e Origem no Rodapé */}
      <CardFooter className="p-0 mt-4 pt-4 border-t border-border/50 flex flex-wrap justify-between items-center gap-2">
        <Badge variant="secondary" className="font-semibold px-2.5 py-1 rounded-md">
          📍 {item.selecao}
        </Badge>
        <div className="flex gap-1.5 flex-wrap">
          {item.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
              className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground px-2 py-0.5 rounded"
            >
              {tag.replace("_", " ")}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardapioItem; 