import { motion } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

const faqs = [
  {
    q: "Dói fazer Harmonização?",
    a: "Utilizamos anestésicos de alta performance e técnicas minimamente invasivas para garantir total conforto durante o procedimento."
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Varia de acordo com o organismo e o procedimento (de 6 a 18 meses para preenchedores)."
  },
  {
    q: "Posso voltar à rotina no mesmo dia?",
    a: "A maioria dos nossos tratamentos permite retorno imediato às atividades, com orientações específicas de cuidados."
  }
];

export function FAQ() {
  return (
    <section className="w-full bg-base py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary tracking-tighter text-center">
            Perguntas <span className="text-gold-gradient italic">Frequentes</span>
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item 
                value={`item-${index}`} 
                className={cn(
                  "bento-card overflow-hidden transition-all duration-300",
                  "data-[state=open]:border-gold-primary data-[state=open]:gold-glow"
                )}
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="group flex flex-1 items-center justify-between py-6 px-8 text-left text-xl md:text-2xl font-serif text-text-primary outline-none">
                    {faq.q}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-primary/30 transition-transform duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-gold-primary group-data-[state=open]:text-white">
                      <Plus className="h-5 w-5 text-gold-primary group-data-[state=open]:text-white transition-colors" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-lg text-text-secondary font-light data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-8 pb-8 pt-0">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
