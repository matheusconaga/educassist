import { FeatureItem } from "@/components/ui/feature_item";
import { TeacherTestimonialsCarousel } from "@/components/ui/teacher_testimonials_carousel";
import { BadgeCheck } from "lucide-react";

export default function Barrier() {
  return (
    <section className="py-32">
      <div
        className="
        mx-auto

        grid

        max-w-[1200px]

        items-center

        justify-between

        lg:grid-cols-2
    "
      >
        {/* Esquerda */}

        <div>
          <h2 className="max-w-lg text-4xl font-extrabold text-primary">
            Inteligência Artificial com sensibilidade pedagógica.
          </h2>

          <div className="mt-8 space-y-10">
            <FeatureItem
              icon={<BadgeCheck size={24} />}
              iconClassName="text-secondary"
              title="100% Alinhado à BNCC"
              description="O EducAssist não inventa conteúdos do nada. Ele cruza o seu
plano anual e as diretrizes da BNCC para garantir um
aprendizado técnico e oficial."
            />
            <FeatureItem
              icon={<BadgeCheck size={24} />}
              iconClassName="text-secondary"
              title="O copiloto, não o piloto:"
              description="A IA faz o trabalho pesado de estrutura e digitação, mas o toque humano, a empatia e a palavra final são sempre seus. Você refina e valida tudo."
            />
          </div>
        </div>

        {/* Direita */}

        <TeacherTestimonialsCarousel />
      </div>
    </section>
  );
}
