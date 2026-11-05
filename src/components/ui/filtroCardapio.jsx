"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
// Você pode importar os botões do seu shadcn/ui aqui!

function FiltroCardapio() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Lê qual a tag atual da URL, caindo em "todos" se não houver nenhuma ativa
  const tagAtiva = searchParams.get("tag") || "todos";

  const tagsDisponiveis = [
    { id: "todos", label: "Todos" },
    { id: "vegetariano", label: "Vegetariano" },
    { id: "sem_gluten", label: "Sem Glúten" },
    { id: "contem_gluten", label: "Contém Glúten" } 
  ];

  function handleFiltro(tagId) {
    const params = new URLSearchParams(searchParams);
    
    if (tagId === "todos") {
      params.delete("tag");
    } else {
      params.set("tag", tagId);
    }

    // Empurra a nova URL de forma suave
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tagsDisponiveis.map((tag) => {
        const isSelected = tag.id === tagAtiva;
        return (
        <button
            key={tag.id}
            onClick={() => handleFiltro(tag.id)}
            className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-ouro text-black shadow-md scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
          {tag.label}
        </button>
        );
      })}
    </div>
  );
}

export default FiltroCardapio;