import React from 'react';
import { siteConfig } from '../config/siteData';
import { Heart, MessageCircle } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenDonate: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenDonate }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'नमस्कार, मैं सत्य सनातन धाम की सेवा के संबंध में जानकारी लेना चाहता/चाहती हूँ।'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E7D7C4] p-2.5 px-4 sm:hidden flex items-center space-x-3 shadow-lg">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-[#265B33] hover:bg-[#194023] text-white text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
      >
        <MessageCircle className="w-4 h-4 fill-current text-[#A3E635]" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenDonate}
        className="flex-1 py-2.5 px-3 bg-[#5B2A1B] hover:bg-[#3E1B10] text-[#FAF7F2] text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 transition-colors shadow-md"
      >
        <Heart className="w-4 h-4 text-[#DFB25A] fill-current" />
        <span>🌱 सेवा करें</span>
      </button>
    </div>
  );
};
