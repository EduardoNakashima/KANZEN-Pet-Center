import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Stethoscope, Pill, ShoppingBag, Truck, Check, MessageCircle } from 'lucide-react';
import { SERVICES_DATA, KANZEN_CONTACT } from '../data/kanzenData';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'banho-tosa':
        return <Scissors className="w-5 h-5 text-[#E51921]" />;
      case 'veterinaria':
        return <Stethoscope className="w-5 h-5 text-[#E51921]" />;
      case 'farmacia-pet':
        return <Pill className="w-5 h-5 text-[#E51921]" />;
      case 'nutricao-petshop':
        return <ShoppingBag className="w-5 h-5 text-[#E51921]" />;
      case 'taxi-dog':
        return <Truck className="w-5 h-5 text-[#E51921]" />;
      default:
        return <Scissors className="w-5 h-5 text-[#E51921]" />;
    }
  };

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E51921]">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Tudo o que seu melhor amigo precisa
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Higienização de alta performance, atendimento veterinário e produtos selecionados.
          </p>
        </motion.div>

        {/* Tab Buttons with hover & entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8"
        >
          {SERVICES_DATA.map((srv) => {
            const isActive = srv.id === activeServiceId;
            return (
              <button
                key={srv.id}
                type="button"
                onClick={() => setActiveServiceId(srv.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#E51921] text-white border-[#E51921] shadow-sm scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{srv.title.split(' ')[0]} {srv.title.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Service Showcase Card with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info Side */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-red-100/80 flex items-center justify-center">
                    {getServiceIcon(activeService.id)}
                  </div>
                  <span className="text-xs font-bold text-[#E51921] bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-md">
                    {activeService.tag}
                  </span>
                  {activeService.badge && (
                    <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md">
                      {activeService.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeService.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {activeService.shortDesc}
                </p>

                {/* Highlights */}
                <div className="mt-5 pt-5 border-t border-slate-200/80">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent(`Olá! Gostaria de agendar ou tirar dúvidas sobre ${activeService.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Agendar no WhatsApp</span>
                  </a>

                  <a
                    href="#simulador"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-200 transition-colors"
                  >
                    <span>Simular atendimento</span>
                  </a>
                </div>
              </div>

              {/* Quick Box of Included Items */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Itens inclusos no protocolo:
                </h4>

                <div className="space-y-2">
                  {activeService.included.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#E51921]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs text-slate-700">
                  <span className="font-bold text-[#E51921] block mb-0.5">Diferencial Kanzen:</span>
                  Toalha hospitalar esterilizada aberta exclusivamente na hora do atendimento.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
