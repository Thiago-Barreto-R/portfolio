import React from 'react';
import { motion } from 'framer-motion';
import { RiCodeSLine } from 'react-icons/ri';
import { RiCodeSSlashFill } from 'react-icons/ri';

export default function Technologies() {
  const phrases = [
    'JavaScript',
    'Python3',
    'Typescript',
    'React',
    'JSX&TSX',
    'Docker',
    'Electron',
    'Mysql',
    'Node',
    'NVM',
    'Tailwind CSS',
    'WSL2',
    'Shadcn UI',
    'Figma',
    'Bash',
    'Shell',
  ];

  return (
    <section className="mt-5 flex w-full flex-col items-center justify-center gap-1">
      <h4>Atuando no mercado a mais de +3 anos</h4>
      <p className="text-xs text-stone-400">
        Tecnologias que uso no dia a dia para as atividade
      </p>
      <section className="container mx-auto">
        <div className="relative flex overflow-hidden">
          <div className="absolute z-10 h-full w-20 bg-gradient-to-r from-white dark:from-stone-950"></div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 240,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex flex-shrink-0"
          >
            {phrases.concat(phrases).map((phrase, index) => (
              <p
                className="flex items-center gap-0.5 pr-20 text-stone-950 dark:text-stone-50"
                key={index}
              >
                <RiCodeSLine />
                {phrase}
                <RiCodeSSlashFill />
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 240,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex flex-shrink-0"
          >
            {phrases.concat(phrases).map((phrase, index) => (
              <p
                className="flex items-center gap-0.5 pr-20 text-stone-950 dark:text-stone-50"
                key={index}
              >
                <RiCodeSLine />
                {phrase}
                <RiCodeSSlashFill />
              </p>
            ))}
          </motion.div>
          <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-stone-950"></div>
        </div>
      </section>
    </section>
  );
}
