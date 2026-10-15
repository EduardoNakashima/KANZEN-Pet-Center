import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS_DATA, KANZEN_CONTACT } from '../data/kanzenData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E51921]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
            Perguntas Comuns
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#E51921] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm">{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#E51921]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-red-50/20">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Fast WhatsApp Help CTA with entrance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs"
        >
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              Tem alguma outra pergunta?
            </h4>
            <p className="text-[11px] text-slate-500">
              Fale diretamente com nossa equipe no WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre a Kanzen Pet.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs font-bold whitespace-nowrap shrink-0 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
