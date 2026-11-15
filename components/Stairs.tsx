import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
  exit: {
    y: ['100%', '0%'],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps: number = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white will-change-transform"
        />
      ))}
    </>
  );
};

export default Stairs;
