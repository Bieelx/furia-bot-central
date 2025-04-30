import { X, Send } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChatBubble from "./ChatBubble";
import { Button } from "@/components/ui/button";
import "../css/chatDialog.css";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatDialog = ({ open, onOpenChange }: ChatDialogProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Olá! Sou o FURIA Bot, como posso ajudar você hoje?", isBot: true },

  ]);

// novo estado
const [isBotTyping, setIsBotTyping] = useState(false);

const handleSendMessage = async () => {
  if (!message.trim()) return;

  setMessages([...messages, { text: message, isBot: false }]);
  setMessage("");

  setIsBotTyping(true);

  try {
    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    setMessages(msgs => [...msgs, { text: data.reply, isBot: true }]);
  } catch (error) {
    console.error('Erro ao acessar Gemini API:', error);
    setMessages(msgs => [...msgs, { text: "Desculpe, estou offline no momento.", isBot: true }]);
  } finally {
    setIsBotTyping(false);
  }
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="chatbot-dialog-content">
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <h2 className="chatbot-title">FURIA Bot</h2>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="chatbot-close-btn"
          >
            <X className="chatbot-close-icon" />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg.text} isBot={msg.isBot} />
          ))}

          {isBotTyping && (
            <div className="chatbot-typing">FURIA Bot está digitando...</div>
         )}
        </div>


        <div className="chatbot-input-container">
          <div className="chatbot-input-wrapper">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Pergunte algo..."
              className="chatbot-input"
            />
            <Button
              onClick={handleSendMessage}
              className="chatbot-send-button"
            >
              <Send className="chatbot-send-icon" />
            </Button>
          </div>
          <div className="chatbot-hint">
          Pergunte sobre as próximas partidas, times ou títulos...
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
