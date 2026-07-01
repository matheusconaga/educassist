import { WhyCard } from "@/components/ui/why_card";
import { Clock3, Palette, ChartSpline } from "lucide-react";

export default function Why() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-primary text-center">
          Por que o EducAssist?
        </h1>
        <p className="text-base text-muted-foreground  text-center font-[500]">
          Economize seu tempo e aumente o engajamento de suas aulas de forma
          inteligente.
        </p>
        <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-4 pb-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <WhyCard
            icon={<Clock3 size={70} strokeWidth={2.5} />}
            title="Economia de Tempo"
            subtitle="Economize até 40% de tempo ao preparar planos de aula, provas e correções de atividades, levando apenas minutos ao invés de horas."
          />
          <WhyCard
            icon={<Palette size={70} strokeWidth={2.5} />}
            title="Personalização"
            subtitle="Adapte automaticamente os níveis de leitura e atividades para as necessidades específicas de cada aluno."
          />
          <WhyCard
            icon={<ChartSpline size={70} strokeWidth={2.5} />}
            title="Informações de Desempenho"
            subtitle="Veja os dados referentes a cada aluno, para identificar áreas para intervenção ou aprendizagem acelerada."
          />
        </div>
      </div>
    </section>
  );
}
