"use client";

import { useState } from "react";
import { Users, Flag, Globe, Utensils, Beer, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menuItens = [
  { id: "fase-de-grupos", label: "Fase de Grupos", icon: Users },
  { id: "selecao-brasileira", label: "Seleção Brasileira", icon: Flag },
  { id: "sedes", label: "Sedes (USA/CAN/MEX)", icon: Globe },
  { id: "menu-especial", label: "Menu Especial", icon: Utensils },
  { id: "bebe-stadium", label: "Bebe Stadium", icon: Beer },
];

function NavContent({ filtroAtivo, setFiltroAtivo, onItemClick }) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-xl font-black uppercase text-ouro tracking-tight">
          Copa 2026
        </h2>
        <p className="text-xs text-on-surface-muted font-medium">
          Rumo ao Hexa campeonato
        </p>
      </div>

      <nav aria-label="Navegação por categorias da Home">
        <ul className="space-y-1">
          {menuItens.map((item) => {
            const Icone = item.icon;
            const isSelected = filtroAtivo === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (setFiltroAtivo) setFiltroAtivo(item.id);
                    if (onItemClick) onItemClick();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors text-left ${
                    isSelected
                      ? "aside-link-active"
                      : "text-on-surface-muted hover:text-on-primary hover:bg-verde-aside-bg"
                  }`}
                >
                  <Icone className={`w-4 h-4 shrink-0 ${isSelected ? "text-verde" : ""}`} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default function HomeAside({ filtroAtivo = "fase-de-grupos", setFiltroAtivo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: Botão Hambúrguer + Drawer */}
      <div className="md:hidden p-4 border-b border-outline-dim bg-tunnel flex items-center justify-between">
        <span className="text-xs font-bold uppercase text-ouro">Categorias</span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="border-outline-dim bg-transparent text-on-primary hover:bg-verde-aside-bg">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Abrir menu de categorias</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-tunnel border-r border-outline-dim text-on-primary w-72 p-6">
            <SheetHeader className="sr-only">
              <SheetTitle>Categorias da Home</SheetTitle>
            </SheetHeader>
            <NavContent 
              filtroAtivo={filtroAtivo} 
              setFiltroAtivo={setFiltroAtivo} 
              onItemClick={() => setOpen(false)} 
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop/Tablet: Sidebar Fixo */}
      <aside className="hidden md:block w-64 shrink-0 bg-tunnel p-6 border-r border-outline-dim sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <NavContent filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
      </aside>
    </>
  );
}