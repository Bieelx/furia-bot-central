

interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
}

const ChatBubble = ({ message, isBot = false }: ChatBubbleProps) => {
  return (
    <div className={`chat-bubble-wrapper ${isBot ? 'bot' : 'user'}`}>
      <div className={`chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;