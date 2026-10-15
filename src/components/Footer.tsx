import React from 'react';
import { Phone, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { KANZEN_CONTACT, UNITS_DATA } from '../data/kanzenData';
import { KanzenLogo } from './KanzenLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white/5 p-2 rounded-2xl inline-block border border-white/10">
              <KanzenLogo size="sm" showSubtitle={false} />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-white">KANZEN</span>
              <span className="text-xs font-bold text-[#E51921] bg-white/10 px-1.5 py-0.5 rounded">完全</span>
              <span className="text-xs text-slate-400 font-semibold uppercase">Pet Center</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Cuidado completo, carinho de verdade e biossegurança para cães e gatos. Toalhas 100% esterilizadas e lacradas, banho e tosa, veterinária e delivery.
            </p>

            <div className="text-[11px] text-slate-400">
              CNPJ: {KANZEN_CONTACT.cnpj} · {KANZEN_CONTACT.legalName}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={KANZEN_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#E51921] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={KANZEN_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#E51921] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Loja Física & Online */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">
              Loja Física & Retirada
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {UNITS_DATA.map((u) => (
                <div key={u.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="font-bold text-white block">{u.name}</span>
                  <span className="text-[11px] text-slate-400">{u.address}</span>
                  <div className="mt-1 text-[10px] text-emerald-400 font-semibold">
                    Retirada na loja com desconto · Delivery na região
                  </div>
                </div>
              ))}
              <a
                href={KANZEN_CONTACT.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FFE600] hover:underline pt-1 font-semibold"
              >
                <span>Acessar kanzenpetcenter.com.br</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Central Contact */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">
              Atendimento
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href={`tel:${KANZEN_CONTACT.primaryPhone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E51921]" />
                <span>{KANZEN_CONTACT.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{KANZEN_CONTACT.primaryWhatsApp} (WhatsApp)</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{KANZEN_CONTACT.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {KANZEN_CONTACT.legalName}. Todos os direitos reservados.</p>
          <p className="text-slate-400">Kanzen Pet Center · 完全</p>
        </div>

      </div>
    </footer>
  );
};
