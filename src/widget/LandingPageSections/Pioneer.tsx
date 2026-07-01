import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature_card";
import { HandHeart, Rocket, Tag } from "lucide-react";

export default function Pioneer() {
  return (
    <section className="relative overflow-hidden bg-secondary">
  <div className="mx-auto mt-20 max-w-[1200px] px-4 pb-20">
    <div>
      <h1 className="text-center text-5xl font-extrabold leading-tight tracking-tight text-white">
        Seja um Professor Pioneiro.
      </h1>

      <p className="pb-10 text-center text-md font-medium text-white">
        Estamos refinando o EducAssist com um grupo seleto de educadores. Ao
        fazer seu pré-registro hoje, você garante:
      </p>
    </div>

    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        variant="glass"
        icon={<Rocket size={25} />}
        title="Acesso Antecipado"
        description="Teste a versão Beta antes de todo mundo."
      />

      <FeatureCard
        variant="glass"
        icon={<Tag size={25} />}
        title="Condições Especiais"
        description="Descontos exclusivos nos planos pagos quando a plataforma for lançada."
      />

      <FeatureCard
        variant="glass"
        icon={<HandHeart size={25} />}
        title="Sua voz no produto"
        description="Sugira funcionalidades que atendam diretamente à sua realidade escolar."
      />
    </div>

    <div className="mt-12 flex justify-center">
      <Button variant="secondary" size="lg">
        Fazer meu pré-registro agora
      </Button>
    </div>
  </div>
</section>
  );
}
