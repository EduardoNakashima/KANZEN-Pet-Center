import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Truck, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, KANZEN_CONTACT, STORE_HIGHLIGHTS } from '../data/kanzenData';

export const DeliveryAndStoreSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-[#990d13] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FFE600] text-xs font-bold mb-3 border border-white/10">
                <Truck className="w-3.5 h-3.5" />
                <span>Pet Shop & Farmácia Delivery</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Receba em horas ou retire na loja com desconto
              </h2>

              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Catálogo completo de medicamentos, antipulgas, rações e petiscos. Peça direto no WhatsApp ou pelo site oficial.
              </p>

              {/* Verified Store Highlights from real website */}
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-slate-300">
                {STORE_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                    <span className="font-semibold text-white">{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${KANZEN_CONTACT.primaryWhatsAppRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Kanzen Pet e gostaria de pedir produtos para entrega/retirada.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Pedir no WhatsApp</span>
                </a>

                <a
                  href={KANZEN_CONTACT.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-colors"
                >
                  <span>Ver Loja Online</span>
                  <ExternalLink className="w-4 h-4 text-[#FFE600]" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Real Categories with Direct Links to kanzenpetcenter.com.br */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PRODUCT_CATEGORIES.map((cat, idx) => (
                <motion.a
                  key={cat.id}
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.06 }}
                  whileHover={{ y: -2 }}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left block group"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                    <span>{cat.name}</span>
                    <ShoppingBag className="w-3.5 h-3.5 text-[#FFE600] group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-snug">{cat.desc}</p>
                  <span className="text-[10px] text-[#FFE600] font-semibold mt-1.5 flex items-center gap-1 group-hover:underline">
                    Ver produtos <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </motion.a>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
