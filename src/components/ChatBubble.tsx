
interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
}

const ChatBubble = ({ message, isBot = false }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[80%] ${
          isBot
            ? 'bg-[#2D243A] text-[#f3f3f3] rounded-tl-none border border-primary/20'
            : 'bg-primary text-[#f3f3f3] rounded-tr-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;

