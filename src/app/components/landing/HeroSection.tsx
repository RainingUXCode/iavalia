import { Shield, Award, TrendingUp } from "lucide-react";
import { AuthCard } from "./AuthCard";

interface HeroSectionProps {
  onLogin: () => void;
}

export function HeroSection({ onLogin }: HeroSectionProps) {
  return (
    <section className="bg-linear-to-br from-white to-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Parceria SEE-PB</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl text-foreground mb-4 leading-tight">
                Inovação na{" "}
                <span className="text-primary">Avaliação Escolar</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O IAvalia é a plataforma oficial da Secretaria de Educação da
                Paraíba que revoluciona o processo de correção de provas com
                inteligência artificial, proporcionando eficiência e precisão
                para a educação pública estadual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Confiável</h3>
                  <p className="text-sm text-muted-foreground">
                    Tecnologia validada pela SEE-PB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Eficiente</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduza até 95% do tempo de correção
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all shadow-sm">
                Saiba Mais
              </button>
              <button className="border border-border hover:bg-secondary text-foreground px-8 py-3 rounded-lg transition-all">
                Documentação
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <AuthCard onLogin={onLogin} />
          </div>
        </div>
      </div>
    </section>
  );
}
