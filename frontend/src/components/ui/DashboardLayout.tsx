import { useState } from "react";
import {
  Home,
  Users,
  FileText,
  ClipboardList,
  BarChart3,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import styled from "styled-components";

export default function DashboardLayout() {
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", label: "Início", icon: Home },
    { id: "turmas", label: "Criar Turmas", icon: Users },
    { id: "planos", label: "Gerar Plano de Aula", icon: FileText },
    { id: "questoes", label: "Criar Questões", icon: ClipboardList },
    { id: "feedback", label: "Feedback dos Alunos", icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside className="w-64 bg-background  border-r p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center pb-5">
            <ImageLogo src="/logo.jpg" alt="logo do sistema" />
            <h2 className="text-primary font-extrabold">EducaAssist</h2>
          </div>

          <nav className="space-y-2">
            {menu.map((item) => {
              const isActive = active === item.id;

              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => setActive(item.id)}
                  className={`
        w-full justify-start gap-2
        ${
          isActive
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "hover:bg-muted"
        }
      `}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Perfil do professor */}
        <div className="flex items-center gap-3 border-t pt-4">
          <Avatar>
            <AvatarImage src="/professor.png" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">Professor Matheus</p>
            <button className="text-xs text-muted-foreground hover:underline flex items-center gap-1">
              <LogOut className="w-3 h-3" /> Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        {active === "home" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Turmas Criadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">6</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Planos Gerados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">24</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feedbacks Emitidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">18</p>
              </CardContent>
            </Card>
          </div>
        )}

        {active !== "home" && (
          <Card>
            <CardHeader>
              <CardTitle>{menu.find((m) => m.id === active)?.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Aqui ficará a funcionalidade de{" "}
                <strong>{menu.find((m) => m.id === active)?.label}</strong>.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

const ImageLogo = styled.img`
  width: 60px;
  height: auto;
`;
