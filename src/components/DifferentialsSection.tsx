import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/kanzenData';

export const DifferentialsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#E51921]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-blue-600" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#E51921]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E51921]">
            Por que a Kanzen?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-1">
            O Padrão Kanzen de Biossegurança
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Eliminamos riscos com padrões hospitalares de higiene e manejo calmo.
          </p>
        </motion.div>

        {/* 4 Cards with staggered entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {DIFFERENTIALS_DATA.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    {getIcon(diff.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-[#E51921] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-md">
                    {diff.badge}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {diff.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Short Comparison Banner with entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto shadow-2xs"
        >
          <div className="text-center mb-5">
            <h3 className="text-lg font-bold text-slate-900">
              Garantia de proteção para o seu melhor amigo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-500 block mb-2">Comum no mercado:</span>
              <ul className="space-y-1.5 text-slate-600">
                <li>✕ Toalhas reutilizadas ou lavagem comum</li>
                <li>✕ Banho fechado sem visão do tutor</li>
                <li>✕ Espera prolongada em gaiolas</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 text-slate-800">
              <span className="font-bold text-[#E51921] block mb-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E51921]" />
                Padrão Kanzen:
              </span>
              <ul className="space-y-1.5 font-medium">
                <li>✓ Toalhas 100% esterilizadas e lacradas</li>
                <li>✓ Vidro panorâmico para você acompanhar</li>
                <li>✓ Atendimento com horário pontual marcado</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
