
interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
}

const ChatBubble = ({ message, isBot = false }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4 animate-fade-in`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[80%] ${
          isBot
            ? 'bg-[#2D243A] text-[#f3f3f3] rounded-tl-none border border-[#D4AF37]/20'
            : 'bg-[#D4AF37] text-[#1A1F2C] rounded-tr-none font-medium'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
