import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Clock, ShieldCheck, Check, Dog, Cat, MapPin } from 'lucide-react';
import { UNITS_DATA } from '../data/kanzenData';

export const BookingSimulator: React.FC = () => {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [petSize, setPetSize] = useState<'small' | 'medium' | 'large'>('small');
  const [serviceType, setServiceType] = useState<string>('banho');
  const [selectedUnit, setSelectedUnit] = useState<string>('butanta');
  const [petName, setPetName] = useState<string>('');

  const services = [
    {
      id: 'banho',
      label: 'Banho Completo',
      desc: 'Toalha esterilizada, ouvidos e unhas',
      time: '~50 min',
    },
    {
      id: 'banho-tosa-higienica',
      label: 'Banho + Tosa Higiênica',
      desc: 'Banho + patinhas e região sanitária',
      time: '~70 min',
    },
    {
      id: 'tosa-completa',
      label: 'Tosa Geral / da Raça',
      desc: 'Estética completa da pelagem',
      time: '~90 min',
    },
    {
      id: 'consulta-vet',
      label: 'Consulta Veterinária',
      desc: 'Clínica geral ou vacinas',
      time: '~40 min',
    },
  ];

  const currentService = services.find(s => s.id === serviceType) || services[0];
  const currentUnit = UNITS_DATA.find(u => u.id === selectedUnit) || UNITS_DATA[0];

  const sizeLabels = {
    small: petType === 'dog' ? 'Pequeno (até 10kg)' : 'Pequeno / Filhote',
    medium: petType === 'dog' ? 'Médio (10kg a 25kg)' : 'Médio (Adulto)',
    large: petType === 'dog' ? 'Grande (+25kg)' : 'Porte Grande',
  };

  const generateWhatsAppMessage = () => {
    const pType = petType === 'dog' ? 'Cão' : 'Gato';
    const pSize = sizeLabels[petSize];
    const sName = currentService.label;
    const uName = currentUnit.name;
    const pNameText = petName.trim() ? `Nome do pet: *${petName.trim()}*\n` : '';

    const text = `Olá, Kanzen Pet! Vim pelo site e gostaria de agendar um horário:\n\n` +
      `Pet: *${pType}*\n` +
      pNameText +
      `Porte: *${pSize}*\n` +
      `Serviço: *${sName}*\n` +
      `Unidade: *${uName}*\n\n` +
      `Vocês têm horário disponível para os próximos dias?`;

    return `https://wa.me/${currentUnit.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulador" className="py-16 lg:py-24 bg-gradient-to-b from-white via-red-50/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 text-[#E51921] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador Rápido</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Monte o atendimento do seu pet
          </h2>
          <p className="mt-1.5 text-slate-600 text-sm">
            Escolha o porte e serviço para enviar direto para a nossa equipe no WhatsApp.
          </p>
        </motion.div>

        {/* Simulator Grid with entrance animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-5"
          >
            {/* Step 1: Pet Type */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                1. Espécie
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPetType('dog')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                    petType === 'dog'
                      ? 'border-[#E51921] bg-red-50 text-[#E51921] shadow-2xs'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Dog className="w-4 h-4 text-[#E51921]" />
                  <span>Cachorro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPetType('cat')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                    petType === 'cat'
                      ? 'border-[#E51921] bg-red-50 text-[#E51921] shadow-2xs'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Cat className="w-4 h-4 text-[#E51921]" />
                  <span>Gato</span>
                </button>
              </div>
            </div>

            {/* Step 2: Name & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Nome do Pet (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Bento, Pipoca..."
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#E51921] focus:ring-1 focus:ring-[#E51921] outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  2. Porte
                </label>
                <select
                  value={petSize}
                  onChange={(e) => setPetSize(e.target.value as 'small' | 'medium' | 'large')}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#E51921] outline-none text-sm bg-white font-semibold text-slate-800"
                >
                  <option value="small">Porte Pequeno (até 10kg)</option>
                  <option value="medium">Porte Médio (10kg a 25kg)</option>
                  <option value="large">Porte Grande (+25kg)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Service */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                3. Serviço
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceType(srv.id)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      serviceType === srv.id
                        ? 'border-[#E51921] bg-red-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{srv.label}</span>
                      {serviceType === srv.id && <Check className="w-4 h-4 text-[#E51921]" />}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{srv.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Unit / Atendimento */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                4. Local de Atendimento
              </label>
              <div className="p-3 rounded-xl border border-[#E51921] bg-red-50/70 text-slate-900 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E51921] shrink-0" />
                  <div>
                    <span>{currentUnit.name}</span>
                    <span className="block text-[11px] font-normal text-slate-600">{currentUnit.address}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#E51921] bg-white border border-red-200 px-2 py-0.5 rounded shrink-0">
                  Loja Física
                </span>
              </div>
            </div>

          </motion.div>

          {/* Result Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between border border-slate-800"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider text-[#FFE600] font-bold">
                  Resumo
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded-md">
                  <Clock className="w-3 h-3 text-[#FFE600]" />
                  {currentService.time}
                </span>
              </div>

              <div className="py-4 space-y-3">
                <div>
                  <span className="text-xs text-slate-400">Serviço:</span>
                  <div className="text-xl font-black text-white">
                    {currentService.label}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs space-y-1">
                  <div>
                    <span className="text-slate-400">Pet: </span>
                    <strong className="text-white">
                      {petName.trim() ? `${petName.trim()} · ` : ''}
                      {petType === 'dog' ? 'Cachorro' : 'Gato'} ({petSize === 'small' ? 'Pequeno' : petSize === 'medium' ? 'Médio' : 'Grande'})
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Unidade: </span>
                    <strong className="text-white">{currentUnit.name}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Toalha 100% esterilizada lacrada inclusa</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 mt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white font-black text-sm text-center transition-all shadow-md flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Enviar pelo WhatsApp</span>
              </a>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Mensagem pronta com seus dados
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
