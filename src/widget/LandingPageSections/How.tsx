import { Step } from "@/components/ui/step";
import { VideoPresentation } from "@/components/ui/video_presentation";

export default function How() {
  return (
    <section className="relative overflow-hidden bg-background2">
      <div className="mx-auto mt-20 pb-20 max-w-[1200px] px-4">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-primary text-center">
            Como Funciona?
          </h1>
          <p className="text-base text-muted-foreground text-center font-[500] pb-10">
            Um fluxo linear projetado para facilitar a maneira que você ensina
          </p>
        </div>
        <div className="flex gap-4 justify-between items-center flex-col lg:flex-row">
          <VideoPresentation 
          videoUrl=""
          />
          <div className="space-y-8">
            <Step
              number={1}
              title="Crie sua turma"
              description="Insira a disciplina e os alunos referentes, para melhor geração de conteúdos."
            />

            <Step
              number={2}
              title="Envie os materiais"
              description="Envie arquivos PDFs, PNGs referentes aquela disciplina, como o plano anual."
            />

            <Step
              number={3}
              title="Gere e Refine"
              description="A IA vai elaborar seus planos de aula, atividades, provas. E você ajusta eles para aperfeiçoar."
            />

            <Step
              number={4}
              title="Revise e Ensine"
              description="Envie os conteúdos diretamente para o sistema escolar; ou baixe em PDF ou Docx seus conteúdos gerados."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
