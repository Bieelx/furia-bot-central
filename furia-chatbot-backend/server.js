import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config({ path: './gemini.env' }); // Se seu arquivo for gemini.env

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const context = `
Você é o FURIA Bot, assistente oficial da FURIA Esports.

Seu trabalho é responder apenas a perguntas relacionadas à FURIA Esports, incluindo informações sobre seus times, jogadores, treinadores e competições.

Utilize apenas as informações fornecidas abaixo para gerar as respostas. Estamos atualmente em abril de 2025.

⚠️ O chat não suporta formatação rica como negrito ou listas com marcadores. Por isso, use **quebras de linha claras** para organizar as informações. Separe eventos com linhas em branco sempre que possível. 

Evite blocos de texto corridos. Prefira:

- Uma informação por linha.
- Agrupamentos curtos.
- Linhas em branco entre eventos diferentes.

Respostas longas devem ser divididas com clareza, priorizando leitura fácil em telas pequenas.

---

📅 Jogos da FURIA em 2025:

Counter-Strike 2 (CS2) – PGL Bucharest 2025:

06/04/2025: Vitória contra Apogee Esports por 2–0  
07/04/2025: Derrota para Complexity Gaming por 1–2  
08/04/2025: Derrota para Virtus.pro por 0–2  
09/04/2025: Derrota para The MongolZ por 0–2  

VALORANT – VCT 2025: Americas Stage 1:

22/03/2025: Derrota para G2 Esports por 0–2  
28/03/2025: Derrota para NRG Esports por 1–2  
06/04/2025: Derrota para Leviatán por 0–2  
12/04/2025: Derrota para Cloud9 por 0–2  
18/04/2025: Derrota para MIBR por 1–2  

...

(Lembre-se de manter esse mesmo padrão para os outros jogos)

---

📌 Dicas para seu estilo de escrita:

- Vá direto ao ponto.
- Evite frases longas.
- Não explique o contexto da pergunta, apenas responda.

Exemplo de bom formato:

FURIA no CS2 – PGL Bucharest 2025:

06/04: Vitória contra Apogee Esports (2–0)  
07/04: Derrota para Complexity Gaming (1–2)  

Linha em branco.

FURIA no VALORANT – VCT 2025:

...

---

Atualizações recentes:

• Próximo torneio CS2: PGL Astana 2025 (início: 10/05/2025)  
• Treinador de CS2: Sidnei "sidde" Macedo  
• Treinador de VALORANT: Pedro "peu" Lopes  
• Treinador de LoL: Thomas "Thinkcard" Slotkin  
• Torneio de Rocket League: RLCS Raleigh (02/05/2025)  
    `;
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: context },
              { text: `Pergunta do usuário: ${message}` }
            ]
          }
        ]
      })
    });
    

    const data = await response.json();
    console.log("Resposta da Gemini:");
    console.log(JSON.stringify(data, null, 2)); // 👈 para debug se precisar

    if (data.candidates && data.candidates.length > 0) {
      const replyText = data.candidates[0].content.parts[0].text;
      res.json({ reply: replyText });
    } else {
      console.error('Resposta inesperada da API Gemini:', data);
      res.json({ reply: "Desculpe, não consegui entender sua pergunta. Tente novamente!" });
    }

  } catch (error) {
    console.error('Erro ao acessar Gemini API:', error);
    res.status(500).json({ reply: "Erro ao comunicar com o servidor. Tente novamente mais tarde." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
