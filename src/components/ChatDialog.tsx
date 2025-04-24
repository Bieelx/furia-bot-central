
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChatBubble from "./ChatBubble";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatDialog = ({ open, onOpenChange }: ChatDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0 bg-[#1A1F2C]/95 border-primary/20">
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <h2 className="text-lg font-semibold text-[#f3f3f3]">FURIA Bot Chat</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-[#f3f3f3] hover:text-primary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-4 min-h-[300px] max-h-[500px] overflow-y-auto">
          <ChatBubble message="Hi! I'm FURIA Bot. How can I help you today?" isBot={true} />
          <ChatBubble message="When is the next game?" isBot={false} />
          <ChatBubble message="Our next match is against G2, this Saturday at 6PM!" isBot={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatDialog;

