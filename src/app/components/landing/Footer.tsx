import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  HelpCircle,
} from "lucide-react";

import logoImg from "../assets/logo-iavalia.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary-foreground rounded flex items-center justify-center overflow-hidden">
                <img
                  src={logoImg}
                  alt="IAvalia"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-xl">IAvalia</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Plataforma oficial de correção inteligente da Secretaria de
              Educação da Paraíba
            </p>
          </div>

          <div>
            <h4 className="mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@iavalia.see.pb.gov.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(83) 3218-4000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>João Pessoa, PB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Suporte
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Parceiros</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div>Secretaria de Estado da Educação da Paraíba</div>
              <div>Governo do Estado da Paraíba</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2026 IAvalia - SEE-PB. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
