import { PriceCard } from "@/components/ui/price_card";
import { Sparkle, Sparkles } from "lucide-react";

export default function Much() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto mt-20 max-w-[1200px] px-4">
        <div>
          <h1 className=" mt-20 text-5xl font-extrabold leading-tight tracking-tight text-primary text-center">
            Planos
          </h1>
          <p className="text-base text-muted-foreground text-center font-[500] pb-10">
            Com valores que cabem no seu bolso e de acordo com sua necessidade
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-[1200px] grid-cols-1 gap-2 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Plano"
            highlight="Gratuito"
            subtitle="Para conhecer a plataforma."
            price="R$ 0"
            currentPlan={true}
            benefits={[
              {
                icon: <Sparkle size={18} />,
                label: "Geração de 5 planos por mês",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Exportação em PDF",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Correção de atividades",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Suporte por e-mail",
              },
            
            ]}
          />
          <PriceCard
            title="Plano"
            highlight="Essencial"
            subtitle="Para professores que utilizam a plataforma semanalmente."
            price="R$ 14,90"
            benefits={[
              {
                icon: <Sparkle size={18} />,
                label: "Geração de 5 planos por mês",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Exportação em PDF",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Correção de atividades",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Suporte por e-mail",
              },
            ]}
          />
          <PriceCard
            title="Plano"
            highlight="Pro"
            subtitle="Para quem utiliza a plataforma praticamente todos os dias."
            price="R$ 39,90"
            benefits={[
              {
                icon: <Sparkle size={18} />,
                label: "Geração de 5 planos por mês",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Exportação em PDF",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Correção de atividades",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Suporte por e-mail",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
