import { useState } from "react";
import {
  Upload,
  FileImage,
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { Header } from "../components/institutional/Header";

interface ScanPageProps {
  onBack: () => void;
}

type ProcessingStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "completed"
  | "error";

export function ScanPage({ onBack }: ScanPageProps) {
  const [status, setStatus] = useState<ProcessingStatus>("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      setSelectedFile(file);
      setStatus("idle");
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    setStatus("uploading");
    setProgress(0);

    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setStatus("processing");
          setTimeout(() => {
            setStatus("completed");
          }, 3000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleReset = () => {
    setStatus("idle");
    setSelectedFile(null);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:underline mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Painel
          </button>
          <h1 className="text-3xl text-foreground mb-1">
            Interface de Digitalização
          </h1>
          <p className="text-muted-foreground">
            Envie as provas em formato PNG para correção automática
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          {status === "idle" && !selectedFile && (
            <div className="text-center">
              <div className="border-2 border-dashed border-border rounded-lg p-12 mb-6 hover:border-primary transition-colors">
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg text-foreground mb-2">
                  Selecione o arquivo PNG
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Arraste e solte ou clique para selecionar
                </p>
                <label className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg cursor-pointer transition-all">
                  Escolher Arquivo
                  <input
                    type="file"
                    accept="image/png"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="text-xs text-muted-foreground">
                Apenas arquivos PNG são aceitos. Tamanho máximo: 10MB
              </div>
            </div>
          )}

          {selectedFile && status === "idle" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <FileImage className="w-10 h-10 text-primary" />
                <div className="flex-1">
                  <div className="text-foreground">{selectedFile.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleUpload}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-all"
                >
                  Processar com IA
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 border border-border hover:bg-secondary text-foreground py-3 rounded-lg transition-all"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {(status === "uploading" || status === "processing") && (
            <div className="text-center py-8">
              <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
              <h3 className="text-lg text-foreground mb-2">
                {status === "uploading"
                  ? "Enviando arquivo..."
                  : "Processando com IA..."}
              </h3>
              {status === "uploading" && (
                <div className="max-w-md mx-auto mt-4">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {progress}%
                  </div>
                </div>
              )}
              {status === "processing" && (
                <p className="text-sm text-muted-foreground">
                  Analisando gabarito e comparando respostas...
                </p>
              )}
            </div>
          )}

          {status === "completed" && (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-chart-3 mx-auto mb-4" />
              <h3 className="text-lg text-foreground mb-2">
                Processamento Concluído!
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                As correções foram finalizadas e os e-mails foram enviados aos
                alunos
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={onBack}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all"
                >
                  Voltar ao Painel
                </button>
                <button
                  onClick={handleReset}
                  className="border border-border hover:bg-secondary text-foreground px-6 py-3 rounded-lg transition-all"
                >
                  Processar Outra Prova
                </button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="text-center py-8">
              <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
              <h3 className="text-lg text-foreground mb-2">
                Erro no Processamento
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ocorreu um erro ao processar o arquivo. Tente novamente.
              </p>
              <button
                onClick={handleReset}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all"
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 bg-card border border-border rounded-lg p-6">
          <h3 className="text-foreground mb-3">Instruções de Uso</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Certifique-se de que o arquivo PNG está em alta resolução
                (mínimo 300 DPI)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                O gabarito deve estar claramente visível na digitalização
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                O processamento pode levar alguns minutos dependendo do tamanho
                do arquivo
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Os alunos receberão os resultados automaticamente por e-mail
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
