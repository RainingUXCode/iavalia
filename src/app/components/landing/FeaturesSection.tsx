import { ScanLine, Brain, Mail } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-all">
      <div
        className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-5`}
      >
        {icon}
      </div>
      <h3 className="text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Funcionalidades Principais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas poderosas que transformam a forma como você avalia seus
            alunos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ScanLine className="w-7 h-7 text-white" />}
            title="Envio em Lote"
            description="Digitalize múltiplos gabaritos de uma vez em formato PNG. Economize tempo processando dezenas de provas simultaneamente com nossa tecnologia de processamento em lote."
            color="bg-primary"
          />
          <FeatureCard
            icon={<Brain className="w-7 h-7 text-white" />}
            title="Correção Inteligente"
            description="Algoritmos de visão computacional que eliminam o erro humano. Nossa IA detecta padrões com precisão superior a 99%, garantindo resultados confiáveis."
            color="bg-chart-3"
          />
          <FeatureCard
            icon={<Mail className="w-7 h-7 text-white" />}
            title="Feedback Automático"
            description="O sistema envia a nota e o desempenho direto para o e-mail do aluno. Relatórios completos gerados instantaneamente com análise detalhada de acertos."
            color="bg-chart-2"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-white rounded-lg p-6 border border-border shadow-sm">
            <div className="text-center">
              <div className="text-3xl text-primary mb-1">10.000+</div>
              <div className="text-sm text-muted-foreground">
                Provas Processadas
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Precisão</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">
                Redução de Tempo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
