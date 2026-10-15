import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/kanzenData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E51921]">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Quem confia na Kanzen
          </h2>
        </motion.div>

        {/* 3 Testimonials with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#E51921] font-bold flex items-center justify-center text-xs shrink-0">
                  {t.tutorName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {t.tutorName}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {t.petInfo} · {t.unit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
