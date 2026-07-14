import "@/app/globals.css";

export const metadata = {
  title: "Stadium Pulse - Copa 2026 Brasil",
  description: "A casa oficial da torcida brasileira na Copa do Mundo 2026.",
};

function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
        {/* HEADER / CABEÇALHO */}
        <header className="border-b border-border bg-[#11160d]/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Logo temporária combinando o verde/amarelo neon */}
              <span className="text-primary font-black text-xl tracking-wider">
                STADIUM PULSE
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Início</a>
              <a href="#" className="hover:text-primary transition-colors">Jogos</a>
              <a href="#" className="hover:text-primary transition-colors">Reservar</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="bg-primary text-primary-foreground font-bold px-4 py-2 rounded text-xs tracking-wider uppercase transition-all hover:opacity-90">
                Entrar
              </button>
            </div>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL (ONDE VÃO FICAR AS PÁGINAS) */}
        <main className="flex-grow">
          {children}
        </main>

        {/* FOOTER / RODAPÉ */}
        <footer className="border-t border-border bg-[#11160d] py-8 text-xs text-muted-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2026 Stadium Pulse - O QG oficial da Seleção. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;