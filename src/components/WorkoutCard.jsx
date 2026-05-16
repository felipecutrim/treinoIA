import { Flame, Clock, Info } from 'lucide-react';

export default function WorkoutCard({ day }) {
  return (
    <div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
      <div className="border-b border-white/10 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-primary mb-1">{day.dia}</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-white/5 px-3 py-1 rounded-full text-gray-300">
            {day.dias_semana}
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            Foco: {day.foco}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-white mb-2">
          <Flame className="w-5 h-5 text-orange-500" />
          Aquecimento
        </h3>
        <p className="text-gray-400 bg-white/5 p-3 rounded-lg text-sm">
          {day.aquecimento}
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <h3 className="text-lg font-semibold text-white mb-3">Exercícios</h3>
        {day.exercicios.map((ex, index) => (
          <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
              <h4 className="font-semibold text-lg text-gray-100">{index + 1}. {ex.nome}</h4>
              <div className="flex flex-wrap gap-2 shrink-0">
                <span className="text-sm bg-black/40 px-2 py-1 rounded border border-white/10">
                  {ex.series}x {ex.repeticoes}
                </span>
                <span className="text-sm flex items-center gap-1 bg-black/40 px-2 py-1 rounded border border-white/10 text-gray-300">
                  <Clock className="w-3 h-3" /> {ex.descanso}
                </span>
              </div>
            </div>
            {ex.dica && (
              <p className="text-sm text-gray-400 flex items-start gap-1 mt-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary/70" />
                <span>{ex.dica}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Alongamento</h3>
        <p className="text-gray-400 bg-white/5 p-3 rounded-lg text-sm">
          {day.alongamento}
        </p>
      </div>
    </div>
  );
}
