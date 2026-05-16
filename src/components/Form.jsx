import { useState } from 'react';

export default function Form({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    sexo: 'Masculino',
    nivel: 'Iniciante',
    percentualGordura: 'Não sei informar',
    objetivo: 'Hipertrofia',
    dias: '3',
    tempo: '1h',
    horario: 'Manhã',
    mesesTreino: '0',
    focoMuscular: 'Todas',
    outroEsporte: '',
    restricoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 animate-fade-in space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Nome */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Nome completo</label>
          <input 
            type="text" 
            name="nome" 
            required
            value={formData.nome}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ex: João Silva"
          />
        </div>

        {/* Idade */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Idade</label>
          <input 
            type="number" 
            name="idade" 
            required
            min="14" max="100"
            value={formData.idade}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Sua idade"
          />
        </div>

        {/* Peso */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Peso (kg)</label>
          <input 
            type="number" 
            name="peso" 
            required
            min="30" max="300" step="0.1"
            value={formData.peso}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ex: 75.5"
          />
        </div>

        {/* Altura */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Altura (cm)</label>
          <input 
            type="number" 
            name="altura" 
            required
            min="100" max="250"
            value={formData.altura}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ex: 175"
          />
        </div>

        {/* Sexo */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Sexo</label>
          <select 
            name="sexo" 
            value={formData.sexo}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Prefiro não informar">Prefiro não informar</option>
          </select>
        </div>

        {/* Nível */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Nível de Experiência na Musculação</label>
          <select 
            name="nivel" 
            value={formData.nivel}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        {/* Percentual de Gordura */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Percentual de Gordura (Aproximado)</label>
          <select 
            name="percentualGordura" 
            value={formData.percentualGordura}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Não sei informar">Não sei informar</option>
            <option value="Baixo (Avançado)">Baixo (Avançado/Definido)</option>
            <option value="Médio (Intermediário)">Médio (Intermediário/Normal)</option>
            <option value="Alto (Iniciante)">Alto (Iniciante/Acima do peso)</option>
          </select>
        </div>

        {/* Meses de Treino */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Tempo que já treina (em meses)</label>
          <input 
            type="number" 
            name="mesesTreino" 
            required
            min="0"
            value={formData.mesesTreino}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ex: 12 (para 1 ano)"
          />
        </div>

        {/* Objetivo */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-300">Objetivo Principal</label>
          <select 
            name="objetivo" 
            value={formData.objetivo}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Hipertrofia">Hipertrofia (ganho de massa)</option>
            <option value="Emagrecimento">Emagrecimento (perda de gordura)</option>
            <option value="Força">Ganho de Força</option>
            <option value="Condicionamento físico">Condicionamento físico</option>
            <option value="Definição muscular">Definição muscular</option>
          </select>
        </div>

        {/* Foco Muscular */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Grupo Muscular Prioritário</label>
          <select 
            name="focoMuscular" 
            value={formData.focoMuscular}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Todas">Todas (Treino Balanceado)</option>
            <option value="Peito">Peito</option>
            <option value="Costas">Costas</option>
            <option value="Bíceps">Bíceps</option>
            <option value="Tríceps">Tríceps</option>
            <option value="Pernas">Pernas</option>
          </select>
        </div>

        {/* Horário */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Horário do Treino</label>
          <select 
            name="horario" 
            value={formData.horario}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>

        {/* Dias */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Dias disponíveis na semana</label>
          <select 
            name="dias" 
            value={formData.dias}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="2">2 dias</option>
            <option value="3">3 dias</option>
            <option value="4">4 dias</option>
            <option value="5">5 dias</option>
            <option value="6">6 dias</option>
            <option value="7">7 dias (Todos os dias)</option>
          </select>
        </div>

        {/* Tempo */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Tempo por treino</label>
          <select 
            name="tempo" 
            value={formData.tempo}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all"
          >
            <option value="30min">30 minutos</option>
            <option value="45min">45 minutos</option>
            <option value="1h">1 hora</option>
            <option value="1h30">1 hora e 30 minutos</option>
          </select>
        </div>

        {/* Outro Esporte */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-300">Pratica algum outro esporte? (Opcional)</label>
          <input 
            type="text" 
            name="outroEsporte" 
            value={formData.outroEsporte}
            onChange={handleChange}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Ex: Futebol aos finais de semana, Natação, etc..."
          />
        </div>

        {/* Restrições */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-300">Restrições físicas? (Opcional)</label>
          <textarea 
            name="restricoes" 
            value={formData.restricoes}
            onChange={handleChange}
            rows="2"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Ex: Dor no joelho, hérnia de disco, etc..."
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full py-4 px-6 mt-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-[#32e011] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {isLoading ? 'Gerando Treino...' : 'Gerar meu Treino'}
      </button>
    </form>
  );
}
