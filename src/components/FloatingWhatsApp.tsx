import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { KANZEN_CONTACT } from '../data/kanzenData';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Tooltip bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-2xl shadow-xl border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#E51921] animate-pulse" />
          <span>Agende no WhatsApp</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded"
            aria-label="Fechar balão"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Kanzen Pet Center.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative"
        aria-label="Conversar no WhatsApp da Kanzen Pet"
      >
        <MessageCircle className="w-6 h-6 fill-white/20 transition-transform group-hover:scale-110" />
        <span className="sr-only">WhatsApp Kanzen</span>
      </a>
    </div>
  );
};
