# TreinoIA 🏋️‍♂️🤖

O **TreinoIA** é uma aplicação web de portfólio que utiliza Inteligência Artificial para gerar planos de treinos semanais personalizados com base nos objetivos, nível de experiência e restrições físicas do usuário.

## 🚀 Tecnologias Utilizadas
- **React** (Vite)
- **Tailwind CSS** (Estilização e Animações)
- **Lucide React** (Ícones)
- **API da Anthropic (Claude 3.5 Sonnet)** para geração de treinos estruturados.

## ⚠️ Aviso Importante de Segurança (Para Avaliadores)

Esta aplicação foi desenvolvida focada no **frontend (React + Vite)**. Por ser um projeto de portfólio, as chamadas à API da Anthropic são feitas diretamente do navegador, utilizando a variável de ambiente `VITE_ANTHROPIC_API_KEY`.

**Em um ambiente de Produção Real**, essa arquitetura seria considerada insegura, pois qualquer variável prefixada com `VITE_` é injetada no bundle final e exposta no navegador, permitindo que usuários mal-intencionados roubem a chave da API. 

Para resolver isso em produção, a aplicação deveria conter um **Backend Intermediário** (como um servidor Node.js, Next.js API Routes ou AWS Lambda), que guardaria a API Key com segurança e faria as requisições à IA, retornando apenas os dados ao frontend.

## ⚙️ Como rodar localmente

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Insira a sua chave da Anthropic no arquivo `.env`.
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Desenvolvido por Felipe.
