import {
  Users,
  FileText,
  CheckCircle2,
  Clock,
  Plus,
  ScanLine,
} from "lucide-react";
import { Header } from "../components/institutional/Header";

interface DashboardPageProps {
  onNavigateToScan: () => void;
  onLogout: () => void;
}

export function DashboardPage({
  onNavigateToScan,
  onLogout,
}: DashboardPageProps) {
  const classes = [
    { id: 1, name: "9º Ano A", students: 32, pending: 5, corrected: 27 },
    { id: 2, name: "9º Ano B", students: 28, pending: 12, corrected: 16 },
    { id: 3, name: "8º Ano A", students: 30, pending: 0, corrected: 30 },
    { id: 4, name: "8º Ano B", students: 25, pending: 8, corrected: 17 },
  ];

  const stats = [
    {
      label: "Total de Turmas",
      value: "4",
      icon: Users,
      color: "text-primary",
    },
    {
      label: "Provas Corrigidas",
      value: "90",
      icon: CheckCircle2,
      color: "text-chart-3",
    },
    {
      label: "Aguardando Correção",
      value: "25",
      icon: Clock,
      color: "text-chart-4",
    },
    {
      label: "Total de Alunos",
      value: "115",
      icon: FileText,
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-foreground mb-1">Painel Pedagógico</h1>
            <p className="text-muted-foreground">
              Gerencie suas turmas e correções
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onNavigateToScan}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Nova Correção com IA
            </button>
            <button
              onClick={onLogout}
              className="border border-border hover:bg-secondary text-foreground px-6 py-3 rounded-lg transition-all duration-200"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl text-foreground">Minhas Turmas</h2>
          </div>

          <div className="divide-y divide-border">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className="p-6 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground mb-2">
                      {classItem.name}
                    </h3>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{classItem.students} alunos</span>
                      </div>
                      <div className="flex items-center gap-2 text-chart-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{classItem.corrected} corrigidas</span>
                      </div>
                      <div className="flex items-center gap-2 text-chart-4">
                        <Clock className="w-4 h-4" />
                        <span>{classItem.pending} pendentes</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="border border-border hover:bg-secondary text-foreground px-4 py-2 rounded-lg transition-all text-sm">
                      Ver Detalhes
                    </button>
                    <button
                      onClick={onNavigateToScan}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-all text-sm flex items-center gap-2"
                    >
                      <ScanLine className="w-4 h-4" />
                      Corrigir Provas
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
