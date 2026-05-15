/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/ui/Header";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Treatments } from "./components/sections/Treatments";
import { Gallery } from "./components/sections/Gallery";
import { Reviews } from "./components/sections/Reviews";
import { FAQ } from "./components/sections/FAQ";
import { Location } from "./components/sections/Location";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-base font-sans selection:bg-gold-light selection:text-text-primary text-text-secondary">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold-gradient z-[100] origin-left"
        style={{ scaleX }}
      />
      <Header />
      
      <main>
        <Hero />
        <About />
        <Treatments />
        <Gallery />
        <Reviews />
        <FAQ />
        <Location />
      </main>

      <WhatsAppButton />

      <footer className="w-full bg-text-primary py-8 text-center text-sm text-surface/60 font-light border-t border-gold-primary/10">
        <p>&copy; {new Date().getFullYear()} Bawt Estética. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">Desenvolvido com excelência.</p>
      </footer>
    </div>
  );
}
