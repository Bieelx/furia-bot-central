
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 hover:bg-[#D4AF37]/5 transition-colors duration-300 rounded-xl border border-[#D4AF37]/20">
      <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4">
        <Icon className="text-[#D4AF37]" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#f3f3f3]">{title}</h3>
      <p className="text-[#f3f3f3]/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
