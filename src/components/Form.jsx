import { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Form({ onSubmit, isLoading }) {
  const [step, setStep] = useState(1);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    peso: '',
    altura: '',
    sexo: 'Masculino',
    nivel: 'Iniciante',
    percentualGordura: 'Não sei informar',
    mesesTreino: '',
    objetivo: 'Hipertrofia',
    dias: '3',
    tempo: '1h',
    horario: 'Manhã',
    divisaoTreino: 'Treino A, B e C',
    focoMuscular: ['Todas'],
    outroEsporte: '',
    restricoes: ''
  });

  const musculosOpcoes = ['Todas', 'Peito', 'Costas', 'Bíceps', 'Tríceps', 'Ombros', 'Pernas', 'Abdômen'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleMusculo = (musculo) => {
    setFormData(prev => {
      let novaLista = [...prev.focoMuscular];
      
      if (musculo === 'Todas') {
        novaLista = ['Todas'];
      } else {
        novaLista = novaLista.filter(m => m !== 'Todas');
        if (novaLista.includes(musculo)) {
          novaLista = novaLista.filter(m => m !== musculo);
        } else {
          novaLista.push(musculo);
        }
        if (novaLista.length === 0) novaLista = ['Todas'];
      }
      
      return { ...prev, focoMuscular: novaLista };
    });
  };

  const handleNextStep = () => {
    if (formRef.current && formRef.current.reportValidity()) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      handleNextStep();
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 animate-fade-in space-y-6">
      
      {/* Indicador de Etapas */}
      <div className="flex items-center justify-between mb-8 relative max-w-xs mx-auto">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 rounded-full -z-10"></div>
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
        
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-primary text-black' : 'bg-surface text-gray-400 border border-white/20'}`}>1</div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-primary text-black' : 'bg-surface text-gray-400 border border-white/20'}`}>2</div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white">
          {step === 1 ? 'Etapa 1: Dados Pessoais' : 'Etapa 2: Preferências de Treino'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {step === 1 && (
          <>
            {/* Nome */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">👤 Nome completo</label>
              <input 
                type="text" name="nome" required value={formData.nome} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Ex: João Silva"
              />
            </div>

            {/* Idade */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">🎂 Idade</label>
              <input 
                type="number" name="idade" required min="14" max="100" value={formData.idade} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Sua idade"
              />
            </div>

            {/* Sexo */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">⚧️ Sexo</label>
              <select name="sexo" value={formData.sexo} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Prefiro não informar">Prefiro não informar</option>
              </select>
            </div>

            {/* Peso */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">⚖️ Peso (kg)</label>
              <input 
                type="number" name="peso" required min="30" max="300" step="0.1" value={formData.peso} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Ex: 75.5"
              />
            </div>

            {/* Altura */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">📏 Altura (cm)</label>
              <input 
                type="number" name="altura" required min="100" max="250" value={formData.altura} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Ex: 175"
              />
            </div>

            {/* Removidos da Etapa 1: Percentual, Nível, Meses */}
          </>
        )}

        {step === 2 && (
          <>
            {/* Nível */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">📈 Nível na Musculação</label>
              <select name="nivel" value={formData.nivel} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>

            {/* Percentual de Gordura */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">🍕 Percentual de Gordura (Aprox.)</label>
              <select name="percentualGordura" value={formData.percentualGordura} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Não sei informar">Não sei informar</option>
                <option value="Baixo (Avançado)">Baixo (Avançado/Definido)</option>
                <option value="Médio (Intermediário)">Médio (Intermediário/Normal)</option>
                <option value="Alto (Iniciante)">Alto (Iniciante/Acima do peso)</option>
              </select>
            </div>

            {/* Meses de Treino */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">⏳ Tempo que já treina (em meses)</label>
              <input 
                type="number" name="mesesTreino" required min="0" value={formData.mesesTreino} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Ex: 12 (digite 0 se for começar hoje)"
              />
            </div>

            {/* Objetivo */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">🎯 Objetivo Principal</label>
              <select name="objetivo" value={formData.objetivo} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Hipertrofia">Hipertrofia (ganho de massa)</option>
                <option value="Emagrecimento">Emagrecimento (perda de gordura)</option>
                <option value="Força">Ganho de Força</option>
                <option value="Condicionamento físico">Condicionamento físico</option>
                <option value="Definição muscular">Definição muscular</option>
              </select>
            </div>

            {/* Divisão de Treino */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">🔀 Divisão de Treino</label>
              <select name="divisaoTreino" value={formData.divisaoTreino} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Treino A e B">Treino A e B</option>
                <option value="Treino A, B e C">Treino A, B e C</option>
                <option value="Treino A, B, C e D">Treino A, B, C e D</option>
              </select>
            </div>

            {/* Dias */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">📅 Dias disponíveis por semana</label>
              <select name="dias" value={formData.dias} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="2">2 dias</option>
                <option value="3">3 dias</option>
                <option value="4">4 dias</option>
                <option value="5">5 dias</option>
                <option value="6">6 dias</option>
                <option value="7">7 dias (Todos os dias)</option>
              </select>
            </div>

            {/* Horário */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">⏰ Horário do Treino</label>
              <select name="horario" value={formData.horario} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
              </select>
            </div>

            {/* Tempo */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">⏱️ Tempo por treino</label>
              <select name="tempo" value={formData.tempo} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none transition-all">
                <option value="30min">30 minutos</option>
                <option value="45min">45 minutos</option>
                <option value="1h">1 hora</option>
                <option value="1h30">1 hora e 30 minutos</option>
              </select>
            </div>

            {/* Foco Muscular (Multi-select) */}
            <div className="space-y-3 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">💪 Grupo Muscular Prioritário (Selecione 1 ou mais)</label>
              <div className="flex flex-wrap gap-2">
                {musculosOpcoes.map(musculo => {
                  const isSelected = formData.focoMuscular.includes(musculo);
                  return (
                    <button
                      key={musculo}
                      type="button"
                      onClick={() => toggleMusculo(musculo)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                        isSelected 
                        ? 'bg-primary/20 border-primary text-primary' 
                        : 'bg-black/50 border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {musculo}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Outro Esporte */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">⚽ Pratica algum outro esporte? (Opcional)</label>
              <input 
                type="text" name="outroEsporte" value={formData.outroEsporte} onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Ex: Futebol aos finais de semana, Natação, etc..."
              />
            </div>

            {/* Restrições */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-300">⚠️ Restrições físicas? (Opcional)</label>
              <textarea 
                name="restricoes" value={formData.restricoes} onChange={handleChange} rows="2"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Ex: Dor no joelho, hérnia de disco, etc..."
              />
            </div>
          </>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="pt-4 flex gap-3">
        {step === 2 && (
          <button 
            type="button" 
            onClick={handlePrevStep}
            className="px-6 py-4 bg-surface border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        )}
        
        {step === 1 ? (
          <button 
            type="button" 
            onClick={handleNextStep}
            className="flex-1 py-4 px-6 bg-primary text-black font-bold text-lg rounded-xl hover:bg-[#32e011] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary flex justify-center items-center gap-2"
          >
            Próximo
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button 
            type="submit" 
            disabled={isLoading}
            className="flex-1 py-4 px-6 bg-primary text-black font-bold text-lg rounded-xl hover:bg-[#32e011] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isLoading ? 'Gerando Treino...' : 'Gerar meu Treino'}
          </button>
        )}
      </div>
    </form>
  );
}
