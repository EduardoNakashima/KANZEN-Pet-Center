import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Sparkles, ChevronRight, Star } from 'lucide-react';
import { KANZEN_CONTACT } from '../data/kanzenData';
import { KanzenLogo } from './KanzenLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center overflow-hidden py-12 sm:py-16 lg:py-20 w-full max-w-full"
      aria-label="Apresentação Kanzen Pet Center"
    >
      {/* ===== LAYER 0: Rich Background Image (Blurred) - No red overlay as requested ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter blur-md sm:blur-lg scale-110"
          aria-hidden="true"
        />
        {/* Soft, clean neutral contrast layer to ensure text readability without strange red tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Subtle warm ambient highlight */}
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none z-0" />

      {/* ===== LAYER 1: Content Grid (z-10) ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs with entrance animations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left text-white"
          >
            {/* Frosted Glass Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-white text-xs font-bold mb-4 sm:mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" aria-hidden="true" />
              <span>📍 Av. Comendador Alberto Bonfiglioli, 587 · Butantã — SP</span>
            </motion.div>

            {/* Headline with Solar Yellow Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.14] mb-4 sm:mb-5 text-white"
              style={{ textWrap: 'balance' }}
            >
              Cuidado completo e carinho de verdade para o{' '}
              <span className="text-[#FFE600] underline decoration-[#FFE600]/60 decoration-wavy decoration-2">
                seu pet
              </span>
            </motion.h1>

            {/* Concise Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-xl mb-6 sm:mb-8"
            >
              Banho e tosa com <strong className="text-white font-bold">toalhas 100% esterilizadas e lacradas</strong>, produtos dermatológicos suaves, atendimento veterinário preventivo e farmácia completa.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10"
            >
              <a
                href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar um horário na Kanzen Pet Center.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
                <span>Agendar no WhatsApp</span>
              </a>

              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/30 text-white border border-white/30 backdrop-blur-md font-bold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Simular Atendimento</span>
                <ChevronRight className="w-4 h-4 text-white/80" />
              </a>
            </motion.div>

            {/* Quick Proof Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-5 border-t border-white/20 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-white/90"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFE600]" />
                <span>Toalhas esterilizadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFE600]" />
                <span>Cosméticos suaves</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#FFE600] fill-[#FFE600]" />
                <span>4.9 no Google (+12 mil pets)</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ===== LAYER 2: High Z-Index Hero Visual (Layered Circular Dog Image) ===== */}
          <div className="lg:col-span-5 relative z-20 flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-full"
            >
              {/* Outer Decorative Rings (only on larger screens to avoid mobile overflow) */}
              <div className="hidden sm:block absolute -inset-3 sm:-inset-4 rounded-full border-2 border-white/20 pointer-events-none animate-pulse duration-1000" />
              <div className="hidden md:block absolute -inset-6 sm:-inset-8 rounded-full border border-white/10 pointer-events-none" />

              {/* The Hero Circle (contained responsively) */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-[4px] sm:border-[6px] border-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative z-20 bg-slate-800 group mx-auto">
                <img
                  src="/images/hero-dog-circle.jpg"
                  alt="Pet bem cuidado e feliz na Kanzen Pet Center"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Floating Badge: Kanzen Official Logo Mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute -bottom-2 right-0 sm:-bottom-3 sm:-right-2 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-xl border-2 border-white flex items-center gap-2 hover:scale-105 transition-transform"
                title="Padrão Kanzen de Qualidade"
              >
                <KanzenLogo size="sm" showSubtitle={false} />
                <div className="pr-1 text-left">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold text-[#E51921] block leading-none">
                    Padrão Kanzen
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                    Biossegurança
                  </span>
                </div>
              </motion.div>

              {/* Floating Tag 1 (Top Left): 4.9 Stars */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute -top-2 left-0 sm:-top-3 sm:-left-4 z-30 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-1.5"
              >
                <div className="flex text-amber-400 text-xs">
                  ★ 4.9
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-200">
                  +12 mil pets
                </span>
              </motion.div>

              {/* Floating Tag 2 (Bottom Left): Toalhas Esterilizadas */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute bottom-8 left-0 sm:-left-6 z-30 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white text-slate-900 shadow-xl hidden sm:flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E51921]" />
                <span className="text-[11px] sm:text-xs font-bold">
                  Toalhas 100% Lacradas
                </span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
