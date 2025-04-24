
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 hover:bg-white/10 transition-colors duration-300 rounded-xl">
      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#f3f3f3]">{title}</h3>
      <p className="text-[#f3f3f3]/80">{description}</p>
    </div>
  );
};

export default FeatureCard;

