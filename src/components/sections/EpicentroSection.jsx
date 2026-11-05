import Link from "next/link";
import { ChevronRight } from "lucide-react";

function EpicentroSection() {
  const experiencias = [
    {
      id: "arena-gastronomica",
      titulo: "Arena Gastronômica",
      descricao: "Sabores brasileiros e das nações sedes: Feijoada Gourmet, Tex-Mex e Poutines especiais.",
      linkTexto: "Menu da Copa",
      href: "/cardapio",
      imagem: "/images/arena-gastronomica.jpg",
      cols: "md:col-span-2 lg:col-span-1 lg:row-span-2", // Card em destaque
    },
    {
      id: "mural-imersivo",
      titulo: "Mural Imersivo",
      descricao: "Transmissão em multi-telas para você não perder nenhum lance das 48 seleções.",
      href: "/eventos",
      imagem: "/images/mural-imersivo.jpg",
      cols: "md:col-span-2",
    },
    {
      id: "camarote-vip",
      titulo: "Camarote VIP Hexa",
      href: "/reservas",
      imagem: "/images/camarote.jpg",
      cols: "md:col-span-1",
    },
    {
      id: "chopp-hexa",
      titulo: "Chopp do Hexa",
      href: "/cardapio",
      imagem: "/images/chopp.jpg",
      cols: "md:col-span-1",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
          O Epicentro do <span className="text-ouro">Mundial</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mt-2">
          Toda a energia da torcida brasileira concentrada em um só lugar. Gastronomia internacional e tecnologia imersiva.
        </p>
      </div>

      {/* Grid Bento / Layout de Experiências */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
        {experiencias.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-lg border border-border bg-card p-6 flex flex-col justify-end ${item.cols}`}
          >
            {/* Overlay com Gradiente para Leitura */}
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent z-10" />
            
            {/* Conteúdo do Card */}
            <div className="relative z-20">
              <h3 className="text-xl font-black uppercase text-foreground group-hover:text-ouro transition-colors">
                {item.titulo}
              </h3>
              
              {item.descricao && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {item.descricao}
                </p>
              )}

              {item.linkTexto && (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-bold text-ouro uppercase mt-3 hover:underline"
                >
                  {item.linkTexto}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default EpicentroSection;