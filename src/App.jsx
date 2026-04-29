import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  // Lógica del Contador
  useEffect(() => {
    const targetDate = new Date("2026-08-08T16:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-[#F9F6EE] overflow-x-hidden">
      
      {/* 1. SECCIÓN HERO (PORTADA) */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#020617]">
        
        {/* Adornos Dorados en Esquinas */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#E2C275] m-6 md:m-12 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#E2C275] m-6 md:m-12 opacity-60"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center z-10 px-4"
        >
          <span className="uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block text-[#E2C275] font-medium">
            ¡Nos Casamos!
          </span>
          <h1 className="text-7xl md:text-9xl font-caligrafica mb-6 text-[#F9F6EE] leading-tight">
            Diana Carolina & Sebastián
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#E2C275] to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl font-serif italic text-[#E2C275]/90">
            8 de agosto de 2026
          </p>
        </motion.div>

        {/* Flecha Animada */}
        <div className="absolute bottom-10 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-[#E2C275]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* 2. SECCIÓN CUENTA REGRESIVA */}
      <section className="py-24 bg-[#0f172a] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-serif mb-12 text-[#E2C275]"
        >
          Faltan tan solo...
        </motion.h2>
        
        <div className="flex justify-center gap-4 md:gap-12 relative z-10">
          {[
            { label: 'Días', value: timeLeft.dias },
            { label: 'Horas', value: timeLeft.horas },
            { label: 'Minutos', value: timeLeft.minutos },
            { label: 'Segundos', value: timeLeft.segundos },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-[60px] md:min-w-[90px]">
              <div className="text-4xl md:text-6xl font-serif text-[#F9F6EE] mb-2">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#E2C275]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GALERÍA DE FOTOS */}
      <section className="py-24 bg-[#020617] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#F9F6EE] mb-4">Nuestra Historia</h2>
            <div className="w-12 h-1 bg-[#E2C275] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Novios" />
            </div>
            <div className="col-span-2 overflow-hidden rounded-sm h-64 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.pexels.com/photos/1415139/pexels-photo-1415139.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Boda" />
            </div>
            <div className="overflow-hidden rounded-sm h-64 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.pexels.com/photos/2060239/pexels-photo-2060239.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Novios" />
            </div>
            <div className="overflow-hidden rounded-sm h-64 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Anillos" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN RSVP (CONFIRMACIÓN) */}
      <section className="py-24 bg-[#0f172a] px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto border border-[#E2C275]/40 p-10 md:p-16 text-center bg-[#020617] shadow-2xl relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#020617] px-6 py-1 border border-[#E2C275]/40 text-[#E2C275] font-serif tracking-widest italic">
            RSVP
          </div>

          <h2 className="text-3xl font-serif mb-8 text-[#F9F6EE]">¿Contamos contigo?</h2>
          <p className="text-sm text-[#F9F6EE]/70 mb-10 leading-loose tracking-wide">
            Sería un honor para nosotros que formes parte de este nuevo comienzo. 
            Agradecemos confirmar tu asistencia antes del 30 de octubre.
          </p>

          <a 
            href="https://wa.me/573000000000?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20la%20boda%20de%20Lina%20y%20Juan" 
            target="_blank"
            className="inline-block bg-transparent border border-[#E2C275] text-[#E2C275] px-12 py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#E2C275] hover:text-[#020617] transition-all duration-500"
          >
            Confirmar Asistencia
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#020617] text-center border-t border-[#E2C275]/10">
        <p className="font-serif italic text-[#E2C275]/60 text-lg">Diana Carolina y Sebastián</p>
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#F9F6EE]/30 mt-4">Hecho con amor • 2026</p>
      </footer>

    </div>
  );
}

export default App;
