import { motion } from 'framer-motion';

export const IntroAnimation = ({ onComplete: any }) => {
  return (
    <motion.div
      initial={{ opacity: '100%' }}
      animate={{ opacity: 0 }}
      transition={{ duration: 6 }}
      className="absolute z-50 flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-black"
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.h3
          className="-mb-4 -ml-[400px] text-sm dark:text-slate-500"
          initial={{ x: '-250px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <span className="dark:text-slate-50">Thiago</span> Rodrigues
        </motion.h3>
        <motion.h1
          className="text-9xl font-bold"
          initial={{ x: '-250px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 5 }}
        >
          Portfolio
        </motion.h1>
      </div>
    </motion.div>
  );
};
