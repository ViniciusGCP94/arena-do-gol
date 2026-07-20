import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function JogoCard({ jogo }) {
  const isAoVivo = jogo.status === "AO VIVO";

  return (
    <Card className="flex flex-col justify-between">
      {/* Cabeçalho do Card: Status e Rodada */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 pb-2 mb-4">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {jogo.rodada}
        </span>
        <Badge 
          variant={isAoVivo ? "destructive" : "secondary"}
          className={isAoVivo ? "animate-pulse" : ""}
        >
          {jogo.status}
        </Badge>
      </CardHeader>

      {/* Placar / Times */}
      <CardContent className="flex items-center justify-between my-2 px-4">
        {/* Time A */}
        <div className="flex flex-col items-center w-1/3 text-center">
          <span className="text-2xl mb-1">🚩</span>
          <span className="font-bold text-lg">{jogo.timeA.nome}</span>
        </div>

        {/* Placar ou VS */}
        <div className="flex items-center justify-center gap-3 w-1/3">
          {isAoVivo ? (
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
          <span className="text-2xl mb-1">🏳️</span>
          <span className="font-bold text-lg">{jogo.timeB.nome}</span>
        </div>
      </CardContent>

      {/* Rodapé do Card: Info de transmissão e promo associada */}
      <CardFooter className="flex flex-col items-stretch pt-4 border-t border-border/50 text-sm space-y-2">
        <p className="text-muted-foreground">
          📅 <strong className="text-foreground">{jogo.data}</strong> às <strong className="text-foreground">{jogo.horario}</strong> — {jogo.local}
        </p>
        {jogo.promocao && (
          <p className="text-primary font-medium bg-primary/5 p-2 rounded-md border border-primary/10 text-center md:text-left">
            🔥 {jogo.promocao}
          </p>
        )}
      </CardFooter>
    </Card>
  );
}

export default JogoCard;