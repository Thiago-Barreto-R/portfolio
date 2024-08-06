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
            <p className="absolute left-[330px] top-44 text-xl">
              Thiago Rodrigues
            </p>
            <div className="flex flex-col text-5xl">
              <p>Desenvolvedor Full-Stack</p> <p>&</p> <p>UX/UI designer</p>
            </div>
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
