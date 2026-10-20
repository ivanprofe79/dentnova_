import React, { useState } from 'react';
import { Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const DentalDepotVisual: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'equipamiento' | 'instrumental' | 'consumibles'>('equipamiento');

  const photos = {
    equipamiento: {
      src: 'https://miglionico.net/wp-content/uploads/2025/03/P19T-miglionico-riuniti-odontoiatrici-1.jpg',
      alt: 'Gabinete y equipamiento clínico dental moderno en DentNova',
      tag: 'Aparatología y Gabinetes Odontológicos',
      title: 'Equipamiento Clínico Integral',
      desc: 'Sillones ergonómicos de última generación, lámparas quirúrgicas LED de alta fidelidad cromática y consolas de entrega de instrumental.',
      specs: 'Garantía oficial multimarca · Demostración y montaje en clínica'
    },
    instrumental: {
      src: 'https://catalogo.bader.es/wp-content/uploads/sites/7/2024/08/6472-Turbina-con-luz-Forcesilence-6000-con-acoplamiento-Multiflex%C2%AE-LED-KV460.webp',
      alt: 'Turbinas y piezas de mano rotatorias de precisión en acero quirúrgico y titanio',
      tag: 'Instrumental Rotatorio y Cirugía',
      title: 'Instrumental y Cirugía',
      desc: 'Turbinas ergonómicas de alta velocidad, piezas de mano y micromotores en titanio y acero quirúrgico para intervenciones conservadoras y cirugía oral.',
      specs: 'Tecnología de precisión CE · Despacho urgente en 24h'
    },
    consumibles: {
      src: 'https://kavokerr.widen.net/content/p3on8twzkz/web/78956_NX3_REFILL_BOX_wSYRINGE_GLOBAL_FRONT%20VIEW.jpg?v=373ba40b-3451-4e02-94d1-a36488fa5085',
      alt: 'Materiales consumibles clínicos, sistemas adhesivos y restauración dental en DentNova',
      tag: 'Consumibles y Odontología Restauradora',
      title: 'Consumibles Clínicos',
      desc: 'Sistemas adhesivos de última generación, composites de resina estética, siliconas de impresión, anestésicos y material fungible de uso diario.',
      specs: 'Suministro continuo garantizado · Tarifas especiales por volumen'
    }
  };

  const current = photos[activePhoto];

  return (
    <div className="w-full flex flex-col justify-between h-full space-y-4">
      {/* Selector de categorías fotográficas reales y limpias */}
      <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-800/80 rounded-2xl border border-slate-700/60 backdrop-blur-xs">
        <button
          onClick={() => setActivePhoto('equipamiento')}
          className={`flex-1 py-2 px-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer text-center ${
            activePhoto === 'equipamiento'
              ? 'bg-[#2258D4] text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
          }`}
        >
          Equipamiento Clínico
        </button>
        <button
          onClick={() => setActivePhoto('instrumental')}
          className={`flex-1 py-2 px-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer text-center ${
            activePhoto === 'instrumental'
              ? 'bg-[#2258D4] text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
          }`}
        >
          Instrumental y Cirugía
        </button>
        <button
          onClick={() => setActivePhoto('consumibles')}
          className={`flex-1 py-2 px-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer text-center ${
            activePhoto === 'consumibles'
              ? 'bg-[#2258D4] text-white shadow-sm'
              : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
          }`}
        >
          Consumibles Clínicos
        </button>
      </div>

      {/* Contenedor Fotográfico Real con Marco Clínico y Scrim de Contraste */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Gradiente scrim para legibilidad impecable */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Badge superior sobre la fotografía sin logo */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/70 shadow-sm flex items-center gap-2">
            <span className="text-xs font-semibold text-white tracking-wide">Catálogo Dental DentNova</span>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-lg backdrop-blur-md shadow-xs">
            <Truck className="w-3.5 h-3.5" />
            <span>Envíos 24h</span>
          </span>
        </div>

        {/* Información contextual sobre la imagen fotográfica */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase font-semibold block mb-1">
            {current.tag}
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1 drop-shadow-sm">
            {current.title}
          </h3>
          <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed mb-3 drop-shadow-xs">
            {current.desc}
          </p>

          <div className="flex items-center justify-between pt-2.5 border-t border-white/20 text-xs">
            <span className="text-blue-200 text-[11px] font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{current.specs}</span>
            </span>
            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-mono">
              DentNova Depósito
            </span>
          </div>
        </div>
      </div>

      {/* Tira inferior de confianza del depósito dental */}
      <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Distribución Oficial</span>
            <span className="text-[11px] text-slate-400">Material homologado CE y AEMPS</span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-start gap-2.5">
          <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white block">Stock Permanente</span>
            <span className="text-[11px] text-slate-400">Entrega rápida en península</span>
          </div>
        </div>
      </div>
    </div>
  );
};
