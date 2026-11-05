"use client";

import { useState } from "react";
import { Users, Swords, Trophy, UtensilsCrossed, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menuItens = [
  { id: "fase-de-grupos", label: "Fase de Grupos", icon: Users },
  { id: "mata-mata", label: "Mata-Mata", icon: Swords },
  { id: "grande-final", label: "Grande Final", icon: Trophy },
  { id: "menu-especial", label: "Menu Brasil 2026", icon: UtensilsCrossed, href: "/cardapio" },
];

function NavContent({ filtroAtivo, setFiltroAtivo, onItemClick }) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-xl font-black uppercase text-ouro tracking-tight">
          Mundial 2026
        </h2>
        <p className="text-xs text-on-surface-muted font-medium">
          Rumo ao Hexa, Brasil!
        </p>
      </div>

      <nav aria-label="Navegação por fases do Mundial">
        <ul className="space-y-1">
          {menuItens.map((item) => {
            const Icone = item.icon;
            const isSelected = filtroAtivo === item.id;

            if (item.href) {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onItemClick}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-on-surface-muted hover:text-on-primary hover:bg-verde-aside-bg text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <Icone className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            }

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

export default function JogosAside({ filtroAtivo = "fase-de-grupos", setFiltroAtivo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: Botão Hambúrguer + Drawer */}
      <div className="md:hidden p-4 border-b border-outline-dim bg-tunnel flex items-center justify-between">
        <span className="text-xs font-bold uppercase text-ouro">Fases do Mundial</span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="border-outline-dim bg-transparent text-on-primary hover:bg-verde-aside-bg">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Abrir navegação dos jogos</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-tunnel border-r border-outline-dim text-on-primary w-72 p-6">
            <SheetHeader className="sr-only">
              <SheetTitle>Fases do Mundial</SheetTitle>
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