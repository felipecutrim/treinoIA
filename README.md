<div align="center">
  <img src="https://img.icons8.com/color/96/000000/dumbbell.png" alt="Logo TreinoIA" />
  <h1>🏋️‍♂️ TreinoIA</h1>
  <p><strong>Gerador de Planos de Treino com Inteligência Artificial</strong></p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Gemini API](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
</div>

<br />

## 📖 Sobre o Projeto

O **TreinoIA** é uma aplicação web moderna projetada para criar planos de treinamento de academia 100% personalizados. Utilizando a API de Inteligência Artificial do Google Gemini, o app analisa o perfil do usuário (idade, objetivos, disponibilidade e restrições) para gerar uma rotina semanal detalhada.

Este projeto foi desenvolvido como peça de **portfólio**, demonstrando habilidades avançadas em desenvolvimento Frontend com React, consumo de APIs RESTful e estilização moderna.

## ✨ Funcionalidades

- 📝 **Formulário Dinâmico:** Coleta de dados como Nível de Experiência, Tempo de Treino (meses), Foco Muscular e Restrições Físicas.
- 🤖 **Integração com IA:** Consumo direto da API do **Google Gemini (1.5 / 2.5 Flash)** para gerar os treinos.
- 🎨 **Design Premium:** UI/UX focada no nicho fitness, utilizando **Dark Mode**, Glassmorphism e detalhes em Neon Green (`#39FF14`).
- 📱 **Totalmente Responsivo:** A interface se adapta perfeitamente a computadores, tablets e smartphones (Mobile First).
- 📋 **Exportação Fácil:** Botão integrado para copiar o treino gerado para a área de transferência em formato de texto limpo.

## ⚠️ Arquitetura e Segurança (Nota Técnica)

Como este é um projeto focado exclusivamente no ecossistema Frontend (para portfólio), a chamada para a API da IA é feita diretamente pelo React (`App.jsx`), utilizando a variável `VITE_GEMINI_API_KEY`.

> **Visão de Produção:** Em um ambiente empresarial real, essa arquitetura seria ajustada. A API Key não deve ser exposta no *bundle* do navegador. A abordagem correta seria criar um **Backend Intermediário** (Node.js, AWS Lambda, ou Next.js API Routes) para proteger a chave e atuar como ponte entre o cliente e o serviço do Google.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar o projeto em sua própria máquina:

1. Clone este repositório:
   ```bash
   git clone https://github.com/felipecutrim/treinoIA.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd treinoIA
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure a sua chave da API:
   - Copie o arquivo `.env.example` e renomeie a cópia para `.env`
   - Abra o `.env` e adicione sua chave gratuita do Google Gemini:
     `VITE_GEMINI_API_KEY=sua_chave_aqui`

5. Inicie o servidor local:
   ```bash
   npm run dev
   ```

---

<div align="center">
  Desenvolvido com 💻 e ☕ por <strong>Felipe Cutrim</strong>.
</div>
