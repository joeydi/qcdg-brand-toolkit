import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { fluid, SM, XXL } from '../styles';

const Section: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <section
      css={css`
        margin: ${fluid(48, 96, SM, XXL)} 0;
      `}
      {...rest}>
      {children}
    </section>
  );
};

export default Section;
