import { X, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChatBubble from "./ChatBubble";
import { Button } from "@/components/ui/button";
import "../css/chatDialog.css";

type ChatMessage = 
  | { role: 'user'; content: string }
  | { role: 'assistant'; content: string };

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Olá! Sou o FURIA Bot, como posso ajudar você hoje?" }
  ]);

  const [isBotTyping, setIsBotTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newUserMsg = { role: 'user' as const, content: message };
    const updated = [...messages, newUserMsg];
    setMessages(updated);
    setMessage("");
    setIsBotTyping(true);

  const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: updated })
    })

    try {
      const resp = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: updated })
      });
      const { reply } = await resp.json();
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Desculpe, estou offline no momento." }]);
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="chatbot-dialog-content">
        {/* Header */}
        <div className="chatbot-header">
          <h2 className="chatbot-title">FURIA Bot</h2>
          <button onClick={() => onOpenChange(false)} className="chatbot-close-btn">
            <X className="chatbot-close-icon" />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg.content} isBot={msg.role === 'assistant'} />
          ))}
          {isBotTyping && <div className="chatbot-typing">FURIA Bot está digitando...</div>}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-container">
          <div className="chatbot-input-wrapper">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Pergunte algo..."
              className="chatbot-input"
            />
            <Button onClick={handleSendMessage} className="chatbot-send-button">
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
}
