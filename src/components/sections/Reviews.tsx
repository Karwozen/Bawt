import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      text: "Atendimento impecável! Fiz minha harmonização e o resultado ficou super natural, exatamente como eu queria.",
      author: "Cliente Verificada"
    },
    {
      text: "O espaço é maravilhoso e transmite muita paz. Profissionais extremamente qualificados. Recomendo de olhos fechados!",
      author: "Cliente Verificada"
    },
    // Duplicate to ensure infinite loop works smoothly
    {
      text: "Atendimento impecável! Fiz minha harmonização e o resultado ficou super natural, exatamente como eu queria.",
      author: "Cliente Verificada"
    },
    {
      text: "O espaço é maravilhoso e transmite muita paz. Profissionais extremamente qualificados. Recomendo de olhos fechados!",
      author: "Cliente Verificada"
    }
  ];

  return (
    <section className="w-full bg-surface py-24 md:py-32 overflow-hidden border-y border-gold-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-serif text-text-primary tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          O que dizem sobre a experiência <span className="text-gold-gradient italic">Bawt.</span>
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bento-card p-8 md:p-10 hover:gold-glow"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                ))}
              </div>
              <p className="text-text-primary font-serif text-xl leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <p className="text-sm uppercase tracking-[0.1em] text-text-secondary font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
