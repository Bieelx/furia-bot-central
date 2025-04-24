
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
            ? 'bg-purple-500/20 text-white rounded-tl-none border border-purple-500/20'
            : 'bg-purple-500 text-white rounded-tr-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
