'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroAnimation } from '@/components/intro';
import { motion } from 'framer-motion';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <section className="relative flex h-screen w-full flex-col items-center justify-center">
            <div>
              <p className="text-sm">
                Thiago <span className="text-stone-300">Rodrigues</span>
              </p>
              <div className="flex flex-col text-2xl sm:text-5xl">
                <p>Desenvolvedor Full-Stack</p> <p>&</p> <p>UX/UI designer</p>
              </div>
            </div>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
