import heroImage from "@/assets/hero.webp";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1200px]">
        {/* Conteúdo */}
        <div className="z-10 flex w-1/2 flex-col justify-center pr-20">
          <span className="mb-4 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            ✨ Inteligência Artificial para Professores
          </span>

          <h1 className="max-w-xl text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            O assistente que todo{" "}
            <span className="text-primary">professor</span> precisava.
          </h1>

          <p className="mt-2 max-w-lg text-xl leading-9 text-muted-foreground">
            Economize tempo e foque no que importa: o aprendizado de seus alunos. Planejamentos, atividades e correções em segundos. 
          </p>

          <div className="mt-8 flex gap-2">
            <Button variant="primary" size="lg">
              Começar agora
            </Button>

            <Button variant="outline" size="lg">
              Como funciona?
            </Button>
          </div>

          <p className="mt-10 text-base text-muted-foreground">
            A IA é um assistente e não substitui o trabalho do professor.
          </p>
        </div>

        {/* Imagem */}
        <div className="relative w-1/2">
          <img
            src={heroImage}
            alt="Professor utilizando Inteligência Artificial"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-light via-primary/30 to-primary/70" />

          {/* Glow */}
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
        </div>
      </div>
    </section>
  );
}