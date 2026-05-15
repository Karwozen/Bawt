import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511940025146"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-text-primary text-gold-primary rounded-full shadow-2xl border border-gold-primary/20 hover:scale-110 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ y: -5 }}
    >
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border border-gold-primary"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
    </motion.a>
  );
}
