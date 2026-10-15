import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { UNITS_DATA, KANZEN_CONTACT } from '../data/kanzenData';

export const UnitsSection: React.FC = () => {
  const mainUnit = UNITS_DATA[0];

  return (
    <section id="unidades" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#E51921]">
            Localização & Atendimento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Venha nos visitar no Butantã
          </h2>
          <p className="mt-1.5 text-slate-600 text-sm">
            Estrutura completa com pet shop, farmácia veterinária, banho & tosa e estacionamento.
          </p>
        </motion.div>

        {/* Verified Store Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 max-w-3xl mx-auto shadow-xs"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            
            {/* Info */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-[#E51921] uppercase tracking-wider">
                  {mainUnit.neighborhood} · {mainUnit.city}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  {mainUnit.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#E51921] shrink-0 mt-0.5" />
                  <span>{mainUnit.address}</span>
                </p>
              </div>

              {/* Operating Hours */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#E51921]" />
                  <span>Horários de Funcionamento</span>
                </div>
                <div>{mainUnit.hoursWeekday}</div>
                <div>{mainUnit.hoursSaturday}</div>
                <div className="text-slate-400">{mainUnit.hoursSunday}</div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {mainUnit.servicesAvailable.map((srv, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#E51921]" />
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${mainUnit.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Kanzen Pet e gostaria de atendimento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp: {mainUnit.whatsapp}</span>
              </a>

              <a
                href={`tel:${mainUnit.phone.replace(/\D/g, '')}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E51921]" />
                <span>Ligar: {mainUnit.phone}</span>
              </a>

              <a
                href={mainUnit.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
