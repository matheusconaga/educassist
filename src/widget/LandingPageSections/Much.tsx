import { PriceCard } from "@/components/ui/price_card";
import { Download, File, GraduationCap, Layers, Mail, PlusCircle, Sparkle, Sparkles } from "lucide-react";

export default function Much() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[1200px] px-4">
        <div>
          <h1 className=" mt-10 text-5xl font-extrabold leading-tight tracking-tight text-primary text-center">
            Planos
          </h1>
          <p className="text-base text-muted-foreground text-center font-[500] pb-10">
            Com valores que cabem no seu bolso e de acordo com sua necessidade
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-[1200px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            title="Plano"
            highlight="Gratuito"
            subtitle="Para conhecer a plataforma."
            price="R$ 0"
            currentPlan={true}
            benefits={[
              {
                icon: <Sparkles size={18} />,
                label: "5 créditos inteligentes/mês",
              },
              {
                icon: <File size={18} />,
                label: "Até 2 documentos",
              },
              {
                icon: <GraduationCap size={18} />,
                label: "1 turma",
              },
              {
                icon: <Layers size={18} />,
                label: "Banco de documentos limitado",
              },
              {
                icon: <Mail size={18} />,
                label: "Suporte por e-mail",
              },
            
            ]}
          />
          <PriceCard
            title="Plano"
            variant="featured"
            highlight="Essencial"
            badge="Mais popular"
            subtitle="Para professores que utilizam a plataforma semanalmente."
            price="R$ 14,90"
            benefits={[
              {
                icon: <PlusCircle size={18} />,
                label: "Tudo do Basico, mais:",
              },
              {
                icon: <Sparkles size={18} />,
                label: "35 créditos inteligentes/mês",
              },
               {
                icon: <File size={18} />,
                label: "Até 30 documentos",
              },
              {
                icon: <Download size={18} />,
                label: "Exportação em Word/PDF",
              },
               {
                icon: <GraduationCap size={18} />,
                label: "Até 5 turmas",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Geração de atividades",
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
                icon: <PlusCircle size={18} />,
                label: "Tudo do Essencial, mais:",
              },
              {
                icon: <Sparkle size={18} />,
                label: "100 créditos inteligentes/mês",
              },
              {
                icon: <File size={18} />,
                label: "Até 150 documentos",
              },
              {
                icon: <GraduationCap size={18} />,
                label: "Turmas ilimitadas",
              },
              {
                icon: <Sparkles size={18} />,
                label: "IA mais avançada",
              },
              {
                icon: <Sparkles size={18} />,
                label: "Novos recursos em primeira mão",
              }, 
              
            ]}
          />
        </div>
      </div>
    </section>
  );
}
