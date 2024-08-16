import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: any;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: '100%' }}
      animate={{ opacity: 0 }}
      transition={{ duration: 6 }}
      className="absolute z-50 flex h-screen w-screen items-center justify-center bg-slate-50 dark:bg-black"
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.p
          className="text-xl dark:text-slate-500"
          initial={{ x: '-100px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <span className="dark:text-slate-50">Thiago B.</span> Rodrigues
        </motion.p>
        <motion.h1
          className="absolute text-5xl font-bold transition-all sm:text-9xl"
          initial={{ x: '-100px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5 }}
        >
          Portfolio
        </motion.h1>
      </div>
    </motion.div>
  );
};
