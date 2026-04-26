interface HeaderProps {
  onLoginClick?: () => void;
}

import logoImg from "../../../assets/logo-iavalia.png";

export function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="bg-[#003366] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src={logoImg}
              alt="IAvalia"
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <h1 className="text-xl font-bold">IAvalia</h1>
            <p className="text-xs text-blue-100">
              Sistema de Correção Inteligente
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="hover:text-blue-200 transition-colors text-sm font-medium"
          >
            Início
          </a>
          <a
            href="#recursos"
            className="hover:text-blue-200 transition-colors text-sm font-medium"
          >
            Recursos
          </a>
          <a
            href="#como-funciona"
            className="hover:text-blue-200 transition-colors text-sm font-medium"
          >
            Como Funciona
          </a>
          <a
            href="#sobre"
            className="hover:text-blue-200 transition-colors text-sm font-medium"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="hover:text-blue-200 transition-colors text-sm font-medium"
          >
            Contato
          </a>
        </nav>

        <button
          onClick={onLoginClick}
          className="bg-white text-[#003366] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm flex-shrink-0"
        >
          Entrar
        </button>
      </div>
    </header>
  );
}
