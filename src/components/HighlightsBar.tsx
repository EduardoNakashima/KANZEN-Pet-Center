import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Pill, Store } from 'lucide-react';

export const HighlightsBar: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      iconBg: 'bg-red-50 text-[#E51921] border-red-200/80',
      title: 'Toalhas 100% Esterilizadas',
      description: 'Lacradas individualmente para banho e tosa seguro',
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
      title: 'Receba em Horas*',
      description: 'Entrega ágil de rações e medicamentos no mesmo dia',
    },
    {
      icon: Pill,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      title: 'Farmácia Veterinária',
      description: 'Antipulgas, antibióticos e cuidados dermatológicos',
    },
    {
      icon: Store,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      title: 'Retire na Loja com Desconto',
      description: 'Compre online ou no WhatsApp e retire no Butantã',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6" aria-label="Destaques Oficiais Kanzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-red-200 transition-all group shadow-2xs hover:shadow-xs"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#E51921] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
