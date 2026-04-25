import { FileEdit, ClipboardList, Upload, BarChart3 } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

function Step({ number, icon, title, description, isLast }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center flex-1">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-sm text-primary">
          {number}
        </div>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 -z-10"></div>
      )}

      <h3 className="text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e intuitivo em apenas 4 passos
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            <Step
              number={1}
              icon={<FileEdit className="w-7 h-7" />}
              title="Cadastre o Gabarito"
              description="Registre o gabarito da prova no sistema com as respostas corretas de cada questão"
            />
            <Step
              number={2}
              icon={<ClipboardList className="w-7 h-7" />}
              title="Aplique a Prova"
              description="Seus alunos realizam a avaliação normalmente em sala de aula"
            />
            <Step
              number={3}
              icon={<Upload className="w-7 h-7" />}
              title="Faça o Upload"
              description="Digitalize e envie as provas em formato PNG para o processamento"
            />
            <Step
              number={4}
              icon={<BarChart3 className="w-7 h-7" />}
              title="Analise os Resultados"
              description="Receba relatórios completos com estatísticas e envio automático para os alunos"
              isLast
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8 border border-border inline-block max-w-2xl">
            <h3 className="text-xl text-foreground mb-3">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Cadastre-se agora e experimente a forma mais moderna de corrigir
              provas
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all shadow-sm">
              Criar Minha Conta Gratuitamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
