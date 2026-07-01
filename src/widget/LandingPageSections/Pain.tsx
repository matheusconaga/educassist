import { TeacherPainCard } from "@/components/ui/teacher_pain_card";
import { BatteryLow, CalendarX2, UsersRound } from "lucide-react";

export default function Pain() {
  return (
    <section className="relative overflow-hidden bg-light">
      <div className="mx-auto mt-20 max-w-[1200px] px-4">
        <div>
          <h1 className=" mt-20 text-5xl font-extrabold leading-tight tracking-tight text-primary text-center">
            Menos burocracia, mais tempo para ensinar.
          </h1>
          <p className="text-base text-muted-foreground text-center font-[500] pb-10">
            Sabemos que a sua rotina vai muito além da sala de aula.
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-[1200px] grid-cols-1 gap-2 pb-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <TeacherPainCard
            icon={<CalendarX2 size={30}  />}
            title="O Domingo à noite sagrado"
            description="Horas perdidas preenchendo papeladas, alinhando conteúdos à BNCC e criando provas do zero."
          />

          <TeacherPainCard
            icon={<BatteryLow size={30} />}
            title='A exaustão do "trabalho invisível"'
            description="Planejar e corrigir consome o tempo que você deveria usar para descansar ou dar atenção individual aos alunos."
          />

          <TeacherPainCard
            icon={<UsersRound size={30} />}
            title="O desafio da personalização"
            description="Uma sala, 30 realidades diferentes. Como adaptar a mesma matéria para quem está avançado e para quem está com dificuldades?"
          />
        </div>
      </div>
    </section>
  );
}
