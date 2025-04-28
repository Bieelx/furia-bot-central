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
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
      Você é o FURIA Bot. Responda apenas perguntas sobre o time FURIA e CS2.
      
      Formatação obrigatória:
      - Sempre que listar jogadores, liste em linhas separadas.
      - Use uma lista limpa (sem muito texto explicativo).
      - Seja objetivo e direto.
      - Se não souber, diga: "Não tenho essa informação no momento."
      
      Pergunta do usuário: ${message}
      `
                }
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
