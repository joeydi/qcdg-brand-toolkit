import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { EASE_IN, EASE_OUT } from '../styles';

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease: EASE_IN,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 20,
    transition: {
      duration: 0.25,
      ease: EASE_IN,
    },
  },
};

const AnimatedLayout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} {...rest}>
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
