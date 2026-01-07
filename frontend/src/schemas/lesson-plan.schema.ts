import { z } from "zod";

export const lessonPlanSchema = z.object({
  disciplina: z.string().min(1, "Informe a disciplina"),
  nivel_escolaridade: z.string().min(1, "Informe o nível de escolaridade"),
  conteudo: z.string().min(1, "Informe o conteúdo"),
  objetivo: z.string().min(1, "Informe o objetivo"),
  recursos: z.string().min(1, "Informe os recursos"),
});

export type PlanoAulaResponse = {
  unidade_tematica: string;
  habilidade_meta: string;
  objeto_de_conhecimento: string;
  orientacoes_metodologicas: string;
  criterios_de_avaliacao: string;
};


export type LessonPlanFormData = z.infer<typeof lessonPlanSchema>;
