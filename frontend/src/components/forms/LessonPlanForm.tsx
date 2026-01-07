import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { lessonPlanSchema } from "@/schemas/lesson-plan.schema";
import type { LessonPlanFormData, PlanoAulaResponse } from "@/schemas/lesson-plan.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "../../services/axios.ts";
import styled from "styled-components";
import { toast } from "react-toastify";
import { gerarPlanoDeAulaDocx } from "@/utils/docx/planoDeAulaDocx";




export function LessonPlanForm() {
    const [plano, setPlano] = useState<PlanoAulaResponse | null>(null);
    const [loading, setLoading] = useState(false);

    const form = useForm<LessonPlanFormData>({
        resolver: zodResolver(lessonPlanSchema),
    });

    async function onSubmit(data: LessonPlanFormData) {
        try {
            setLoading(true);
            const response = await axios.post<PlanoAulaResponse>(
                "/generate/",
                data
            );

            setPlano(response.data);
            toast.success("Plano de aula gerado, clique para baixar no dispositivo!")
        } catch (error) {
            console.error("Erro ao gerar plano:", error);
            toast.error("Erro ao gerar plano de aula");
        } finally {
            setLoading(false);
        }
    }

    function handleClear() {
        form.reset();
        setPlano(null);
    }

    function downloadPlano() {
        if (!plano) return;

        gerarPlanoDeAulaDocx({
            plano,
            disciplina: form.getValues("disciplina"),
            nivelEscolaridade: form.getValues("nivel_escolaridade"),
        });
    }


    return (
        <>
            {loading && (
                <LoadingOverlay>
                    <Spinner />
                    <p>Gerando plano de aula automático...</p>
                </LoadingOverlay>
            )}
            <Wrapper>
                <Card className="w-full max-w-2xl">
                    <CardHeader>
                        <CardTitle>Gerar Plano de Aula</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                            <div>
                                <Label>Disciplina</Label>
                                <Input {...form.register("disciplina")} />
                            </div>

                            <div>
                                <Label>Nível de Escolaridade</Label>
                                <Input {...form.register("nivel_escolaridade")} />
                            </div>

                            <div>
                                <Label>Conteúdo</Label>
                                <Input {...form.register("conteudo")} />
                            </div>

                            <div>
                                <Label>Objetivo</Label>
                                <Textarea {...form.register("objetivo")} />
                            </div>

                            <div>
                                <Label>Recursos</Label>
                                <Textarea {...form.register("recursos")} />
                            </div>

                            <div className="flex justify-center gap-3 pt-4">
                                <Button type="button" variant="secondary" onClick={handleClear}>
                                    Limpar
                                </Button>

                                <Button type="submit" disabled={loading}>
                                    {loading ? "Gerando..." : "Gerar plano de aula"}
                                </Button>
                            </div>
                        </form>

                        {plano && (
                            <div className="pt-6 flex justify-center">
                                <Button onClick={downloadPlano}>
                                    Baixar plano de aula
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </Wrapper>
        </>
    );
}


const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 40%);
  backdrop-filter: blur(2px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  z-index: 9999;

  color: white;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #033bd5;
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;