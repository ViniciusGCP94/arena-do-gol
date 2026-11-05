import Link from "next/link";
import "@/app/globals.css";
import { Anton, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Stadium Pulse - Copa 2026 Brasil",
  description: "A casa oficial da torcida brasileira na Copa do Mundo 2026.",
};

function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={cn(anton.variable, plusJakartaSans.variable, spaceGrotesk.variable)}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
        {/* HEADER / CABEÇALHO */}
        <header className="border-b border-border px-4 bg-[#11160d]/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* O Logo agora também é um link para voltar à Home */}
              <Link href="/" className="text-ouro font-black text-lg tracking-wider hover:opacity-90 transition-opacity">
                <Zap size={24} className="bg-ouro text-navbar border-2 border-ouro rounded-xl inline-block mr-1 -translate-y-px" aria-hidden="true" />
                ARENA DO GOL
              </Link>
            </div>
            
            {/* LINKS DE NAVEGAÇÃO COM <Link> */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-primary-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/jogos" className="text-primary-foreground hover:text-primary transition-colors">
                Jogos
              </Link>
              <Link href="/cardapio" className="text-primary-foreground hover:text-primary transition-colors">
                Cardápio
              </Link>
              <Link href="/promocoes" className="text-primary-foreground hover:text-primary transition-colors">
                Promoções
              </Link>
              <Link href="/eventos" className="text-primary-foreground hover:text-primary transition-colors">
                Eventos
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="bg-ouro text-navbar font-bold px-4 py-2 rounded text-xs tracking-wider uppercase transition-all hover:opacity-90">
                Entrar
              </button>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="grow w-full overflow-x-hidden">
          {children}
        </main>

        {/* FOOTER / RODAPÉ */}
        <footer className="border-t border-border bg-[#11160d] py-8 text-xs text-muted-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2026 Stadium Pulse - O QG oficial da Seleção. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
              <Link href="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout; // No final! 😉