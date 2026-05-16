import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
      <Loader2 className="w-12 h-12 text-primary animate-spin" />
      <h3 className="text-xl font-semibold text-white">Criando seu treino ideal...</h3>
      <p className="text-gray-400 text-sm text-center max-w-sm">
        Nossa IA está analisando seus dados e montando a melhor rotina para o seu objetivo. Isso pode levar alguns segundos.
      </p>
    </div>
  );
}
