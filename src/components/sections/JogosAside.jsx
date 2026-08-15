import { Users, Flag, Globe, Utensils, Beer } from "lucide-react";

function JogosAside({ filtroAtivo, setFiltroAtivo }) {
  const menuItens = [
    { id: "fase-de-grupos", label: "Fase de Grupos", icon: Users },
    { id: "selecao-brasileira", label: "Seleção Brasileira", icon: Flag },
    { id: "sedes", label: "Sedes (USA/CAN/MEX)", icon: Globe },
    { id: "menu-especial", label: "Menu Especial", icon: Utensils },
    { id: "bebo-stadium", label: "Bebe Stadium", icon: Beer },
  ];

  return (
    <aside className="w-full lg:w-64 bg-card border border-border rounded-lg p-4 shrink-0">
      <div className="mb-6">
        <h3 className="text-xl font-black uppercase text-ouro tracking-tight">
          Copa 2026
        </h3>
        <p className="text-xs text-muted-foreground">Rumo ao Hexa campeonato</p>
      </div>

      <nav aria-label="Navegação por categorias de jogos">
        <ul className="flex flex-col gap-1">
          {menuItens.map((item) => {
            const Icone = item.icon;
            const isSelected = filtroAtivo === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setFiltroAtivo && setFiltroAtivo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs font-bold uppercase transition-colors text-left ${
                    isSelected
                      ? "bg-verde text-on-primary border-l-4 border-ouro"
                      : "text-on-surface-muted hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <Icone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default JogosAside;