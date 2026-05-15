import { easeOut, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center p-3">
      {/* Background Image with Parallax & Overlay */}
      <motion.div 
        style={{ y }}
        className="absolute inset-3 rounded-3xl overflow-hidden z-0 bento-card"
      >
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2000&auto=format&fit=crop" 
          alt="Clínica luxuosa Bawt Estética" 
          className="w-full h-[120%] object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center pt-20 px-6">
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-serif text-[#bebebe] max-w-5xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          A Arte de Esculpir a Sua <br />
          <span className="text-gold-gradient font-style-italic italic pr-4">Melhor Versão.</span>
        </motion.h1>
        
        <motion.p 
          className="mt-8 md:mt-12 text-lg md:text-xl md:text-2xl text-black max-w-2xl font-light leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Bem-vindo à Bawt Estética. Especialistas em harmonização facial e corporal. 
          Resultados naturais, tecnologia de ponta e um cuidado exclusivo que redefine o seu padrão de beleza.
        </motion.p>

        <motion.a
          href="https://wa.me/5511940025146"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 mt-12 px-8 py-5 rounded-full bg-gold-gradient text-white font-bold tracking-widest uppercase text-sm overflow-hidden transition-all hover:scale-105 hover:gold-glow"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 text-base md:text-lg">Agendar Minha Avaliação</span>
          <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-[#AA771C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-text-secondary text-xs uppercase tracking-[0.2em] font-medium hidden md:flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="writing-vertical-rl rotate-180 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-gold-primary/50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gold-primary"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
