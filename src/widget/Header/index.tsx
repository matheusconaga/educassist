import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        {/* Navegação */}
        <nav className="flex items-center gap-10">
          <Link href="#beneficios">Benefícios</Link>

          <Link href="#como-funciona">Como funciona?</Link>

          <Link href="#planos">Planos</Link>
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3">
          <Button variant="primary">Entrar</Button>
          <Button variant="outline">Registrar</Button>
        </div>
      </div>
    </header>
  );
}
