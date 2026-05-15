import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative w-full bg-base py-24 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Texts */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            A prova está <span className="text-gold-gradient italic">nos detalhes.</span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-text-secondary font-light max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Explore nossa galeria de resultados reais. Transformações sutis que geram impactos gigantescos na autoestima.
          </motion.p>
        </div>

        {/* Images */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[700px] w-full flex items-center justify-center">
          {/* Back Image */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute right-0 top-0 w-3/4 h-3/4 rounded-2xl overflow-hidden z-0 shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop" 
              alt="Textura de pele brilhante" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>

          {/* Front Image */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute left-0 bottom-0 w-2/3 h-2/3 rounded-2xl overflow-hidden z-10 bento-card shadow-lg p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop" 
              alt="Detalhe de rosto feminino" 
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
