# FURIA Chat Experience

Uma landing page interativa para fãs da FURIA Esports, com chatbot inteligente integrado à API Gemini da Google.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação & Configuração](#instalação--configuração)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Como Executar](#como-executar)  
- [Uso](#uso)  
- [Responsividade](#responsividade)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

---

## 🔥 Visão Geral

Este projeto é uma landing page da FURIA Esports que reúne:

- Um **chatbot inteligente**, construído em React, para responder perguntas sobre equipes, jogadores e competições.  
- Seções dinâmicas para “Nossos Times”, “Próximos Jogos” e “Media Gallery”.  
- Um design com **glassmorphism**, paleta de cores oficial e total responsividade.

---

## 🚀 Funcionalidades

- **Banner Hero** com imagem de fundo, texto animado e CTA.  
- **Nossos Times**  
  - Abas para CS2, VALORANT e LoL.  
  - Modal de detalhes com foto e função de cada jogador.  
- **Próximos Jogos**  
  - Cards interativos exibindo data, adversário e competição.  
  - Botão “Set Reminder” (pode integrar com calendário).  
- **Media Gallery**  
  - Grid responsivo de fotos e vídeos.  
- **Chatbot Flutuante**  
  - Integração com Google Gemini (Generative Language API).  
  - Contexto de sistema para tom animado (“Fala, FURIÃO!”) e uso controlado de emojis.  
  - Histórico completo de conversa para evitar repetições.  
  - Scroll automático até a última mensagem.  

---

## 🛠️ Tecnologias

**Front-end**  
- React + TypeScript  
- Vite  
- Tailwind CSS  
- Radix UI (Dialog)  
- lucide-react (ícones)

**Back-end**  
- Node.js + Express  
- node-fetch  
- dotenv  

**API**  
- Google Gemini (Generative Language API v1beta)

---

## 📋 Pré-requisitos

- Node.js ≥16.x  
- npm ou yarn  
- Chave de API Google Gemini ativa  

---

## ⚙️ Instalação & Configuração

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/bieelx/furia-chat-experience.git
   cd furia-chat-experience
2. **Back-end**
    ````bash
    cd backend
    npm install         # ou yarn install
    cp gemini.env.example gemini.env
    # Edite gemini.env e adicione sua API key:
    # GEMINI_API_KEY=SEU_TOKEN_AQUI
    npm run dev         # inicia na porta 3001
3. Front-end
    ````bash
    cd ../frontend
    npm install         # ou yarn install
    npm run dev         # inicia na porta 5173
---
## 📁 Estrutura do Projeto
    /furia-chat-experience
    ├── backend/
    │   ├── server.js         # API Express + integração Gemini
    │   ├── gemini.env        
    │   └── package.json
    │
    ├── frontend/
    │   ├── public/           # index.html, favicon e assets estáticos
    │   ├── src/
    │   │   ├── components/    
    │   │   ├── assets/        # imagens e banners
    │   │   ├── css/           # estilos globais e módulos CSS
    │   │   ├── App.tsx
    │   │   └── main.tsx
    │   └── vite.config.ts
    │
    └── README.md

---
## ▶️ Como Executar

1. **Inicie o back-end**
    ````bash
    cd backend
    npm run dev
2. **Inicie o front-end**
    ```bash
    cd ../frontend
    npm run dev
  3. Abra no navegador http://localhost:5173.
---
## 🎬 Uso

  <li>Clique no botão de chat no canto inferior direito para abrir o ChatDialog.

  <li>Pergunte sobre partidas, times ou conquistas da FURIA.

  <li>Navegue na seção “Nossos Times” e clique em Mais detalhes para ver o modal de jogadores.

  <li>Explore a galeria e configure lembretes de partidas.

---

## 📱 Responsividade

  <h3> Mobile (≤640px):</h3>
  <li>Chat full-screen.
  <li>Banner compacto.
  <li>Grids de 1–2 colunas.

  <h3>Tablet (641–1024px):</h3>

   <li>Modais com largura de 80vw.

  <li>Ajuste de fontes e espaçamentos intermediários.

  <h3>Desktop (>1024px):</h3>

  <li>Layout completo com grid de até 4 colunas.

  <li>Banner de 90vh.

---

## 🤝 Contribuição

  1. **Fork e clone este repositório.**

  2. **Crie uma branch para sua feature:**

    git checkout -b feature/nome-da-feature

  3. **Commit com mensagem clara:**

    git commit -m "Adiciona funcionalidade X"

  4. **Envie para sua branch e abra um Pull Request.**

  ---

## 📜 **Licença**

Este projeto está licenciado sob a MIT License. Veja LICENSE para mais detalhes.
