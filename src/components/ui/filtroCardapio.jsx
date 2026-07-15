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
    { id: "contem_gluten", label: "Contém Glúten" } // Dica: mudei "contém_gluten" para "contem_gluten" sem acento para facilitar a URL!
  ];

  function handleFiltro(tagId) {
    const params = new URLSearchParams(searchParams);
    
    if (tagId === "todos") {
      params.delete("tag"); // Limpa a URL se clicar em "Todos"
    } else {
      params.set("tag", tagId); // Define a tag selecionada (ex: ?tag=vegetariano)
    }

    // Empurra a nova URL de forma suave
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tagsDisponiveis.map((tag) => (
        <button
          key={tag.id}
          onClick={() => handleFiltro(tag.id)}
          className={`px-4 py-2 rounded-md transition-colors ${
            tagAtiva === tag.id
              ? "bg-primary text-primary-foreground font-bold" // Aplique as classes do seu tema ou do shadcn aqui!
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}

export default FiltroCardapio;