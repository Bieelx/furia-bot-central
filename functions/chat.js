const axios = require("axios");

exports.handler = async function (event) {
  try {
    const { history } = JSON.parse(event.body);

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        contents: [
          {
            role: "user",
            parts: history.map(m => ({ text: m.content })),
          },
        ],
      },
      {
        params: {
          key: process.env.GEMINI_API_KEY,
        },
      }
    );

    const reply = response.data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Erro ao consultar a API Gemini:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao consultar a API Gemini" }),
    };
  }
};
