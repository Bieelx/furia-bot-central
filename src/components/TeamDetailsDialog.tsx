// TeamDetailsDialog.tsx
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import "../css/teamDetailsDialog.css";

interface Player {
  name: string;
  role: string;
  photo: string;
}

interface TeamDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  players: Player[];
  teamName: string;
}

export default function TeamDetailsDialog({
  open,
  onOpenChange,
  players,
  teamName,
}: TeamDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="team-details-dialog">
        {/* Header com título e botão de fechar */}
        <div className="team-details-header">
          <h2 className="team-details-title">{teamName}</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="team-details-close-btn"
          >
            <X className="team-details-close-icon" />
          </button>
        </div>

        {/* Grid de jogadores */}
        <div className="team-players-grid">
          {players.map((player, idx) => (
            <div key={idx} className="player-card">
              <img
                src={player.photo}
                alt={player.name}
                className="player-photo"
              />
              <h4 className="player-name">{player.name}</h4>
              <p className="player-role">{player.role}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
