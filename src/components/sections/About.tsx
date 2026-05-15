import { motion } from "motion/react";

export function About() {
  return (
    <section className="relative w-full bg-base py-24 md:py-48 px-6 md:px-12 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Image bleeding up */}
        <motion.div 
          className="lg:col-span-5 relative w-full aspect-[3/4] -mt-12 md:-mt-32 lg:-mt-48 z-20 bento-card p-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
            alt="Dra. da Bawt Estética" 
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </motion.div>

        {/* Text Editorial Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-[1.1] mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Excelência não é um detalhe, é a nossa assinatura.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-light leading-relaxed text-text-secondary">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Na Bawt Estética, unimos ciência, arte e precisão milimétrica para entregar resultados 
              que não apenas transformam aparências, mas restauram a autoconfiança. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Cada rosto e corpo é uma tela única. Nossa filosofia foge do padrão genérico: 
              estudamos sua anatomia para realçar o que você tem de mais belo, com segurança e maestria.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
