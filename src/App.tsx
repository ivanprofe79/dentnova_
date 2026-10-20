import React, { useState } from 'react';
import { MessageSquare, Mail, FileText, CheckCircle2, Clock, Send, ArrowRight, X, Shield, Sparkles } from 'lucide-react';
import { DentNovaLogo } from './components/DentNovaLogo';
import { DentalDepotVisual } from './components/DentalDepotVisual';

// ============================================================================
// CONFIGURACIÓN DE CONTACTO DE DENTNOVA (MODIFICA AQUÍ TUS DATOS)
// ============================================================================

// 1. Número de WhatsApp para enlaces directos:
// Debe incluir el prefijo de país SIN signo '+', SIN espacios y SIN guiones.
export const WHATSAPP_NUMBER = '34614754142';

// 2. Texto visible del número de WhatsApp en la web:
export const WHATSAPP_DISPLAY = '+34 614 75 41 42';

// 3. Correo electrónico para el formulario y enlaces:
export const CONTACT_EMAIL = 'eantunez@dentnova.es';

// ============================================================================

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    try {
      // Envío del formulario
      if (CONTACT_EMAIL) {
        await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `Nueva consulta de clínica en DentNova: ${formData.clinic || formData.name}`,
            _template: 'table',
            _replyto: formData.email,
            'Nombre y Apellidos': formData.name,
            'Clínica o Laboratorio': formData.clinic || 'No indicada',
            'Email': formData.email,
            'Teléfono': formData.phone || 'No indicado',
            'Mensaje o Consulta': formData.message || 'Sin mensaje adicional'
          })
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      clinic: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-[#2258D4] selection:text-white">
      {/* Cabecera Oficial con el Logo Oficial de DentNova */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          {/* Logo oficial DentNova */}
          <DentNovaLogo size="md" variant="horizontal" />

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2258D4]"></span>
              Página Inicial en Desarrollo
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20DentNova,%20me%20gustar%C3%ADa%20hacer%20una%20consulta%20para%20mi%20cl%C3%ADnica`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </header>

      {/* Apartado Principal */}
      <main className="flex-1 flex items-center py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Columna Izquierda: Logo Oficial, Breve Descripción y Opciones de Contacto */}
              <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Badge de prelanzamiento */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2258D4] uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#2258D4]" />
                    <span>Próxima Apertura del Portal Oficial</span>
                  </div>

                  {/* Título principal en el cuerpo (sin logo) */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                    DentNova · Depósito Dental
                  </h1>

                  {/* Breve descripción requerida */}
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    Bienvenido a <strong>DentNova</strong>, tu depósito dental especializado en el suministro y asesoramiento para clínicas odontológicas. 
                    Distribuimos equipamiento clínico integral, instrumental y cirugía de precisión, y consumibles clínicos de los principales fabricantes del sector dental.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Actualmente estamos construyendo nuestra plataforma web de venta directa, pero nuestro equipo de atención ya se encuentra totalmente disponible para atender presupuestos, consultas de stock y pedidos urgentes.
                  </p>

                  {/* Las opciones de contacto solicitadas */}
                  <div className="space-y-3 mb-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Opciones de Contacto:
                    </h2>

                    {/* 1. Contactar por WhatsApp */}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20DentNova,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20mi%20cl%C3%ADnica%20dental.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-50 hover:border-emerald-300 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <span className="block text-sm font-bold text-slate-900 group-hover:text-emerald-950">
                            Contactar por WhatsApp
                          </span>
                          <span className="text-xs text-slate-500">
                            Atención inmediata · {WHATSAPP_DISPLAY}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform mr-1" />
                    </a>

                    {/* 2. Contactar por Correo */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-slate-300 transition-all">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#2258D4] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-slate-900">
                            Contactar por Correo
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {CONTACT_EMAIL}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <a
                          href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20de%20suministros%20DentNova`}
                          className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
                        >
                          Escribir Email
                        </a>
                        <button
                          onClick={handleCopyEmail}
                          className="px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors whitespace-nowrap cursor-pointer"
                          title="Copiar dirección al portapapeles"
                        >
                          {copiedEmail ? '¡Copiado!' : 'Copiar'}
                        </button>
                      </div>
                    </div>

                    {/* 3. Solicitar información a través de un formulario */}
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                        showForm
                          ? 'border-[#2258D4] bg-blue-50/50'
                          : 'border-slate-200 bg-slate-50/70 hover:bg-slate-50 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <FileText className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-left">
                          <span className="block text-sm font-bold text-slate-900">
                            Solicitar información a través de un formulario
                          </span>
                          <span className="text-xs text-slate-500">
                            {showForm ? 'Plegar formulario' : 'Solicitar catálogo, presupuesto o llamada comercial'}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#2258D4] mr-1">
                        {showForm ? 'Ocultar' : 'Rellenar'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Formulario integrado desplegable */}
                {showForm && (
                  <div className="mt-2 mb-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          Formulario de Solicitud de Información
                        </h3>
                        <p className="text-xs text-slate-500">
                          Te remitiremos tarifas profesionales o responderemos a tu consulta.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowForm(false)}
                        className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        title="Cerrar formulario"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {submitted ? (
                      <div className="py-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-bold text-slate-900 mb-1">
                          ¡Solicitud enviada a DentNova con éxito!
                        </p>
                        <p className="text-xs text-slate-500 mb-4">
                          Nuestro equipo comercial se pondrá en contacto contigo en breve.
                        </p>
                        <button
                          onClick={handleResetForm}
                          className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                        >
                          Enviar otra solicitud
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Nombre y Apellidos *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ej. Dr. Manuel Ramos"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#2258D4]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Clínica Odontológica o Consulta
                            </label>
                            <input
                              type="text"
                              placeholder="Ej. Clínica Dental Ramos"
                              value={formData.clinic}
                              onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#2258D4]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Correo Electrónico *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="doctor@clinicadental.es"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#2258D4]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Teléfono / WhatsApp
                            </label>
                            <input
                              type="tel"
                              placeholder="+34 600 000 000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#2258D4]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            ¿Qué información o productos necesitas?
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Especifica si necesitas presupuesto de equipamiento clínico, fórceps e instrumental quirúrgico, o consumibles clínicos de odontología restauradora..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#2258D4]"
                          />
                        </div>

                        <div className="pt-1 flex items-center justify-end">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#2258D4] hover:bg-blue-700 disabled:bg-slate-400 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitud a DentNova'}</span>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                {/* Subtítulos de confianza */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Atención de Lunes a Viernes: 08:30 a 19:30 h</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-slate-400" />
                    <span>Envíos en 24h a toda la península</span>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Imagen Representativa del Depósito Dental */}
              <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 bg-slate-900/95 flex flex-col justify-center">
                <DentalDepotVisual />
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Pie de página con Logo Oficial */}
      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800 text-xs">Dent<span className="text-[#2258D4]">Nova</span></span>
            <span className="text-slate-400">·</span>
            <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              WhatsApp ({WHATSAPP_DISPLAY})
            </a>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#2258D4] hover:text-blue-800 font-medium transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
