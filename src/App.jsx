import { useState } from 'react';
import { Copy, RefreshCw, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Loader from './components/Loader';
import WorkoutCard from './components/WorkoutCard';

export default function App() {
  const [workoutData, setWorkoutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');

  const generateWorkout = async (formData) => {
    setIsLoading(true);
    setError(null);
    setWorkoutData(null);
    setCopySuccess('');

    const prompt = `Você é um personal trainer experiente e certificado. 
Com base nas informações abaixo, monte um plano de treino semanal 
completo para academia. Retorne APENAS um JSON válido, 
sem texto adicional, sem markdown, sem explicações fora do JSON.

Dados do usuário:
- Nome: ${formData.nome}
- Idade: ${formData.idade} anos
- Peso: ${formData.peso} kg
- Altura: ${formData.altura} cm
- Percentual de gordura: ${formData.percentualGordura}
- Sexo: ${formData.sexo}
- Nível na musculação: ${formData.nivel}
- Tempo de treino (experiência): ${formData.mesesTreino} meses
- Objetivo principal: ${formData.objetivo}
- Grupo muscular prioritário: ${formData.focoMuscular.join(', ')}
- Dias por semana: ${formData.dias} dias
- Horário do treino: ${formData.horario}
- Tempo por treino: ${formData.tempo}
- Pratica outro esporte: ${formData.outroEsporte || "Não"}
- Restrições: ${formData.restricoes || "Nenhuma"}

O JSON deve seguir exatamente este modelo:
{
  "nome_usuario": "Felipe",
  "objetivo": "Hipertrofia",
  "nivel": "Intermediário",
  "dias_treino": [
    {
      "dia": "Treino A",
      "dias_semana": "Segunda e Quinta",
      "foco": "Peito e Tríceps",
      "aquecimento": "5 min esteira leve + mobilidade de ombros",
      "exercicios": [
        {
          "nome": "Supino Reto com Barra",
          "series": 4,
          "repeticoes": "8-12",
          "descanso": "90s",
          "dica": "Mantenha os cotovelos a 45° do corpo"
        }
      ],
      "alongamento": "Alongamento de peitoral na parede por 30s cada lado"
    }
  ],
  "observacoes_gerais": "Beba água entre as séries e priorize a técnica."
}

Regras:
- Exercícios adequados ao nível informado
- Respeitar restrições físicas obrigatoriamente
- Progressão lógica de volume e intensidade
- Incluir aquecimento e alongamento em cada dia
- Observações gerais personalizadas ao objetivo`;

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("A chave da API do Gemini não foi configurada. Verifique o arquivo .env.");
      }

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Erro na comunicação com a API do Gemini.");
      }

      const data = await response.json();
      const content = data.candidates[0].content.parts[0].text;
      
      try {
        const parsedData = JSON.parse(content);
        setWorkoutData(parsedData);
      } catch (e) {
        console.error("Erro ao parsear JSON:", content);
        throw new Error("A IA não retornou um formato válido. Tente novamente.");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!workoutData) return;
    
    let text = `Treino de ${workoutData.nome_usuario} - ${workoutData.objetivo}\n`;
    text += `Nível: ${workoutData.nivel}\n\n`;

    workoutData.dias_treino.forEach(day => {
      text += `--- ${day.dia} (${day.dias_semana}) ---\n`;
      text += `Foco: ${day.foco}\n`;
      text += `Aquecimento: ${day.aquecimento}\n\n`;
      day.exercicios.forEach((ex, i) => {
        text += `${i + 1}. ${ex.nome}\n   ${ex.series}x ${ex.repeticoes} | Descanso: ${ex.descanso}\n   Dica: ${ex.dica}\n`;
      });
      text += `\nAlongamento: ${day.alongamento}\n\n`;
    });

    text += `Observações: ${workoutData.observacoes_gerais}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess('Copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6 lg:py-8">
        {!workoutData && !isLoading && (
          <>
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Configure seu Treino</h2>
              <p className="text-gray-400">Preencha seus dados para receber um plano personalizado com Inteligência Artificial.</p>
            </div>
            <Form onSubmit={generateWorkout} isLoading={isLoading} />
          </>
        )}

        {isLoading && <Loader />}

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 flex items-start gap-3 text-red-200 mb-6">
            <AlertCircle className="w-6 h-6 shrink-0 text-red-500" />
            <div>
              <h4 className="font-semibold text-red-400">Ops! Ocorreu um erro</h4>
              <p className="text-sm mt-1">{error}</p>
              <button 
                onClick={() => setError(null)}
                className="mt-3 text-sm text-red-400 hover:text-red-300 underline"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        )}

        {workoutData && !isLoading && (
          <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Plano de Treino</h2>
                <p className="text-gray-400">
                  Criado para <span className="text-primary font-medium">{workoutData.nome_usuario}</span> • {workoutData.objetivo}
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-surface hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-xl transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copySuccess || 'Copiar'}
                </button>
                <button 
                  onClick={() => setWorkoutData(null)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary text-black hover:bg-[#32e011] px-4 py-2 rounded-xl font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Novo Treino
                </button>
              </div>
            </div>

            {workoutData.dias_treino.map((day, index) => (
              <WorkoutCard key={index} day={day} />
            ))}

            <div className="glass rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-primary mb-2">Observações Gerais</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {workoutData.observacoes_gerais}
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
