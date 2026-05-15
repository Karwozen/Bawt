import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 4px 20px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.05)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 md:py-6 transition-colors duration-300 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-semibold text-text-primary tracking-widest uppercase">
          Bawt<span className="text-gold-primary">.</span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 text-sm font-medium tracking-[0.1em] uppercase text-text-secondary">
            {["Sobre", "Tratamentos", "Resultados", "FAQ", "Contato"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="hover:text-gold-primary transition-colors">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="https://wa.me/5511940025146" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block text-xs font-semibold uppercase tracking-widest border border-gold-primary/30 py-3 px-6 rounded-full hover:bg-gold-primary hover:text-white transition-colors duration-300"
        >
          Agendar
        </a>
      </div>
    </motion.header>
  );
}
