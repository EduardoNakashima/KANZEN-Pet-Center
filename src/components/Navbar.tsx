import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { KANZEN_CONTACT } from '../data/kanzenData';
import { KanzenLogo } from './KanzenLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Unidades', href: '#unidades' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs w-full max-w-full">
      {/* Top red & yellow accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E51921] via-[#FFE600] to-[#E51921]" />
      
      {/* Top notification strip (desktop only) */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1 px-4 hidden sm:block w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#FFE600] font-semibold">
              ★ Toalhas 100% esterilizadas e lacradas
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 text-[11px]">Av. Comendador Alberto Bonfiglioli, 587 · Butantã — SP</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${KANZEN_CONTACT.primaryPhone.replace(/\D/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1 text-slate-300 text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#FFE600]" />
              <span>{KANZEN_CONTACT.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 h-16 sm:h-20">
          
          {/* Zone 1: Authentic Kanzen Logo (Responsive) */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group shrink-0"
            aria-label="Kanzen Pet Center - Início"
          >
            <KanzenLogo size="sm" className="sm:hidden" />
            <KanzenLogo size="md" className="hidden sm:flex" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E51921] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#E51921] decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Compact, Non-breaking WhatsApp Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Kanzen Pet e gostaria de agendar um horário.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow whitespace-nowrap shrink-0 hover:scale-[1.02]"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white/20 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-red-50 hover:text-[#E51921] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Kanzen Pet.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
