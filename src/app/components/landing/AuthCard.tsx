import { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Building2,
  IdCard,
  LogIn,
  UserPlus,
} from "lucide-react";

interface AuthCardProps {
  onLogin: () => void;
}

type Tab = "login" | "register";

export function AuthCard({ onLogin }: AuthCardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    fullName: "",
    registration: "",
    email: "",
    school: "",
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2");
    }
    return cpf;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", registerData);
  };

  return (
    <div className="bg-white rounded-lg border border-border p-8 w-full max-w-md shadow-lg">
      <div className="flex border-b border-border mb-6">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 pb-3 text-center transition-all ${
            activeTab === "login"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Entrar
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`flex-1 pb-3 text-center transition-all ${
            activeTab === "register"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Cadastrar Professor
        </button>
      </div>

      {activeTab === "login" && (
        <form onSubmit={handleLoginSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="login-cpf"
              className="block mb-2 text-foreground text-sm"
            >
              CPF
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="login-cpf"
                type="text"
                value={cpf}
                onChange={(e) => setCpf(formatCPF(e.target.value))}
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                placeholder="000.000.000-00"
                maxLength={14}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block mb-2 text-foreground text-sm"
            >
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <LogIn className="w-5 h-5" />
            Acessar Sistema
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              Esqueci minha senha
            </a>
          </div>
        </form>
      )}

      {activeTab === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-foreground text-sm"
            >
              Nome Completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="fullName"
                type="text"
                value={registerData.fullName}
                onChange={(e) =>
                  setRegisterData({ ...registerData, fullName: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                placeholder="Seu nome completo"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="registration"
              className="block mb-2 text-foreground text-sm"
            >
              Matrícula Institucional
            </label>
            <div className="relative">
              <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="registration"
                type="text"
                value={registerData.registration}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    registration: e.target.value,
                  })
                }
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                placeholder="Número da matrícula"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-foreground text-sm"
            >
              E-mail (SEE-PB)
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                id="email"
                type="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                placeholder="seu.email@see.pb.gov.br"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="school"
              className="block mb-2 text-foreground text-sm"
            >
              Unidade Escolar
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <select
                id="school"
                value={registerData.school}
                onChange={(e) =>
                  setRegisterData({ ...registerData, school: e.target.value })
                }
                className="w-full pl-11 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground appearance-none"
                required
              >
                <option value="">Selecione a escola</option>
                <option value="escola1">Escola Estadual João Pessoa</option>
                <option value="escola2">Escola Estadual Epitácio Pessoa</option>
                <option value="escola3">Escola Estadual Anísio Teixeira</option>
                <option value="escola4">Escola Estadual Paulo Freire</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <UserPlus className="w-5 h-5" />
            Criar Conta
          </button>

          <div className="text-xs text-muted-foreground text-center">
            Ao criar uma conta, você concorda com os termos de uso
          </div>
        </form>
      )}
    </div>
  );
}
