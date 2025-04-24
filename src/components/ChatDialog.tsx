
import { X, Send } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChatBubble from "./ChatBubble";
import { Button } from "@/components/ui/button";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatDialog = ({ open, onOpenChange }: ChatDialogProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I'm FURIA Bot. How can I help you today?", isBot: true },
    { text: "When is the next game?", isBot: false },
    { text: "Our next match is against G2, this Saturday at 6PM!", isBot: true },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages([...messages, { text: message, isBot: false }]);
    
    // Clear input
    setMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let response = "I don't have an answer for that yet.";
      
      // Simple pattern matching
      if (message.toLowerCase().includes("match") || message.toLowerCase().includes("game") || message.toLowerCase().includes("play")) {
        response = "Our next match is against G2 on April 28th at 18:00 in the ESL Pro League.";
      } else if (message.toLowerCase().includes("team") || message.toLowerCase().includes("player")) {
        response = "Our CS2 team consists of KSCERATO, yuurih, FalleN, chelo, and VINI.";
      } else if (message.toLowerCase().includes("win") || message.toLowerCase().includes("champion")) {
        response = "FURIA won the ESL Pro League Season 16 Championship in 2022!";
      } else if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you with FURIA Esports information today?";
      }
      
      setMessages(msgs => [...msgs, { text: response, isBot: true }]);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[400px] p-0 gap-0 bg-[#1A1F2C]/95 border-[#D4AF37]/20 animate-scale-in fixed bottom-8 right-8 sm:bottom-auto sm:right-auto"
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/8592197a-d9fc-4b86-8aa0-63492ccb0f54.png"
              alt="FURIA Bot"
              className="h-8 w-8 rounded-full"
            />
            <h2 className="text-lg font-semibold text-[#f3f3f3]">FURIA Bot</h2>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-[#f3f3f3] hover:text-[#D4AF37] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[380px]">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg.text} isBot={msg.isBot} />
          ))}
        </div>
        
        <div className="p-4 border-t border-[#D4AF37]/20">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about matches, teams, or trivia..."
              className="flex-1 bg-[#2D243A] border border-[#D4AF37]/20 rounded-md px-3 py-2 text-[#f3f3f3] placeholder:text-[#f3f3f3]/50 focus:outline-none focus:border-[#D4AF37]/50"
            />
            <Button 
              onClick={handleSendMessage} 
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-[#1A1F2C]"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-2 text-xs text-center text-[#f3f3f3]/50">
            Ask about match schedules, team rosters, or trivia
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;
