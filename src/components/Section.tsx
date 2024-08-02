import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  exit: { y: '10%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const Section: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <motion.section
      variants={variants}
      css={css`
        margin: ${fluid(96, 192, SM, XXL)} 0;
      `}
      {...rest}>
      {children}
    </motion.section>
  );
};

export default Section;
