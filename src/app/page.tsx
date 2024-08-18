'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroAnimation } from '@/components/intro';
import { motion } from 'framer-motion';
import Image from 'next/image';
import developer from '../../public/developer.svg';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <section className="flex h-screen w-full items-center justify-around">
            <div className="flex flex-col gap-1">
              <p className="flex flex-col text-2xl sm:text-5xl">
                Dev. Full-Stack <p>&</p> Designer UX/UI
              </p>
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-xs italic">"Construindo experiências digitais que conectam e inspiram."</span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Image
              src={developer}
              alt="Imagem 2D representando o trabalho"
              className="w-60"
            />
          </section>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
