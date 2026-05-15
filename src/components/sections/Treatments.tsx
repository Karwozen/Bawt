import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Treatments() {
  const CardContent = ({ title, desc, img, isLarge = false }: { title: string, desc: string, img?: string, isLarge?: boolean }) => (
    <div className="relative w-full h-full flex flex-col justify-end p-8 md:p-10 group overflow-hidden rounded-[24px]">
      {/* Background Image & Overlay */}
      {img && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-base/60 backdrop-blur-[4px] group-hover:bg-base/40 transition-colors duration-500"></div>
        </div>
      )}
      {!img && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-surface to-base opacity-80" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className={`font-serif text-text-primary leading-tight mb-4 ${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
          {title}
        </h3>
        <p className="text-sm md:text-base text-text-secondary font-light max-w-sm mb-6 leading-relaxed">
          {desc}
        </p>
        <div className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-white transition-colors duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-surface py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 flex flex-col items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary tracking-tighter">
            Protocolos <span className="text-gold-gradient italic">Exclusivos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[250px] md:auto-rows-[300px]">
          
          <motion.div 
            className="md:col-span-2 md:row-span-2 bento-card group hover:gold-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <CardContent 
              title="Harmonização Facial"
              desc="O equilíbrio perfeito. Preenchimentos precisos que devolvem contorno, sustentação e juventude ao seu rosto sem perder a naturalidade."
              img="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop"
              isLarge
            />
          </motion.div>

          <motion.div 
            className="md:col-span-1 md:row-span-1 bento-card group hover:gold-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <CardContent 
              title="Harmonização de Glúteos"
              desc="Volume, contorno e firmeza. Protocolos avançados para esculpir e projetar, garantindo resultados duradouros e harmoniosos."
              img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
            />
          </motion.div>

          <motion.div 
            className="md:col-span-1 md:row-span-1 glass-card rounded-[24px] overflow-hidden group hover:gold-glow transition-shadow duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardContent 
              title="Toxina Botulínica"
              desc="Prevenção e suavização de linhas de expressão com naturalidade. O fim do aspecto cansado."
            />
          </motion.div>

          <motion.div 
            className="md:col-span-1 md:row-span-1 glass-card rounded-[24px] overflow-hidden group hover:gold-glow transition-shadow duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CardContent 
              title="Jato de Plasma & RF"
              desc="Retração de pele, estímulo massivo de colágeno e combate à flacidez."
            />
          </motion.div>

          <motion.div 
            className="md:col-span-3 md:row-span-1 bento-card group hover:gold-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <CardContent 
              title="Limpeza de Pele Profunda"
              desc="Renovação celular absoluta. Uma pele iluminada, livre de impurezas e pronta para brilhar."
              img="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
