import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: -10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 10 },
};

const AnimatedLayout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, type: 'easeInOut' }}
      className="relative"
      {...rest}>
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
