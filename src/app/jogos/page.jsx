"use client";

import React, { useState } from "react";
import JogosAside from "@/components/sections/JogosAside";
import JogoCard from "@/components/JogoCard";
import { jogosMock } from "@/data/jogos";

function JogosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("fase-de-grupos");

  const jogosFiltrados = jogosMock?.filter((jogo) => {
    if (filtroAtivo === "fase-de-grupos") return true;
    if (filtroAtivo === "selecao-brasileira") {
      return jogo.timeA.nome === "Brasil" || jogo.timeB.nome === "Brasil";
    }
    if (filtroAtivo === "bebo-stadium" || filtroAtivo === "menu-especial") {
      return Boolean(jogo.promocao);
    }
    return jogo.categoria === filtroAtivo;
});

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-8 md:px-0">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* ASIDE LATERAL */}
        <JogosAside 
          filtroAtivo={filtroAtivo} 
          setFiltroAtivo={setFiltroAtivo} 
        />

        {/* CONTEÚDO PRINCIPAL DE JOGOS */}
        <main className="flex-1 w-full">
          <div className="mb-6">
            <h1 className="text-3xl font-black uppercase text-foreground sm:text-4xl">
              O Mundial é Nosso
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Sinta a vibração da torcida brasileira. Em 2026, transformamos nossa casa na maior arquibancada do mundo.
            </p>
          </div>

          {/* GRID DE JOGOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jogosFiltrados?.map((jogo) => (
              <JogoCard key={jogo.id} jogo={jogo} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default JogosPage;