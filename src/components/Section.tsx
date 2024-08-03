import { PropsWithChildren } from 'react';
import { fluid, SM, XXL } from '../styles';

const Section: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <section
      css={{
        position: 'relative',
        margin: `${fluid(48, 96, SM, XXL)} 0`,
      }}
      {...rest}>
      {children}
    </section>
  );
};

export default Section;
