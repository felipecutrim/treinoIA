import { Dumbbell } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-surface border-b border-white/10 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center sm:justify-start gap-3">
        <div className="p-2 bg-primary/10 rounded-xl">
          <Dumbbell className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Treino<span className="text-primary">IA</span>
        </h1>
      </div>
    </header>
  );
}
