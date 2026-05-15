import { motion } from "motion/react";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

export function Location() {
  return (
    <section className="relative w-full bg-surface py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Map Placeholder with Filters */}
        <motion.div 
          className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-[20px] overflow-hidden bento-card p-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7649553748286!2d-46.5451!3d-23.578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzQwLjgiUyA0NsKwMzInNDIuNCJX!5e0!3m2!1spt-BR!2sbr!4v1630000000000!5m2!1spt-BR!2sbr" 
            className="w-full h-full rounded-xl opacity-60 mix-blend-luminosity grayscale contrast-125"
            loading="lazy"
            title="Localização Bawt Estética"
          ></iframe>
          <div className="absolute inset-0 bg-gold-primary/10 mix-blend-color pointer-events-none"></div>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div 
          className="bento-card p-10 md:p-14"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-10">
            Visite nosso <span className="text-gold-gradient italic">Espaço</span>
          </h2>

          <div className="space-y-8 text-text-secondary font-light">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-text-primary mb-1">Endereço</p>
                <p>Av. Morais Costa, 58 - Vila Industrial,<br/>São Paulo - SP, 03253-000.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-text-primary mb-1">Horários de Atendimento</p>
                <p>Terça a Sexta: 09:00–20:00</p>
                <p>Sábado: 09:00–17:00</p>
                <p>Domingo e Segunda: Fechado.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-text-primary mb-1">Contato</p>
                <p>WhatsApp: (11) 94002-5146</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold-primary/20 flex gap-6">
            <a href="https://www.instagram.com/bawtestetica/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-gold-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@bawtestetica</span>
            </a>
            <a href="https://www.facebook.com/bawtestetica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-gold-primary transition-colors">
              <Facebook className="w-5 h-5" />
              <span>@bawtestetica</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div 
        className="mt-32 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-serif text-text-primary leading-[1.1] mb-12">
          Desperte sua melhor <br/><span className="text-gold-gradient italic">versão hoje.</span>
        </h2>
        <a
          href="https://wa.me/5511940025146"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-full bg-text-primary text-white font-bold text-sm md:text-base tracking-widest uppercase overflow-hidden transition-transform hover:scale-105 shadow-xl glow-gold"
        >
          <span className="relative z-10">Fale com nossa equipe</span>
          <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </motion.div>
    </section>
  );
}
